using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Rewrite;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<ITaskService>(new InMemoryTaskService());

var app = builder.Build();

//ESTO DEBERIA DE REEMPLAZAR LOS "TASK/ALGO" POR "TODOS/ALGO" A LA HORA DE HACER LOS GET PERO NO FUNCIONA POR ALGUNA RAZÓN
app.UseRewriter(new RewriteOptions().AddRedirect("tasks/(.*)", "todos/$1"));

//custom middleware
app.Use(async(context, next) => {
    Console.WriteLine($"[{context.Request.Method} {context.Request.Path} {DateTime.UtcNow}] Started.");
    await next(context);
    Console.WriteLine($"[{context.Request.Method} {context.Request.Path} {DateTime.UtcNow}] Finished.");
});

//definicion de una lista
var todos = new List<Todo>();
//aqui obtiene toda la lista sin ningun criterio en particular y devuelve la lista tal y como la recibe
app.MapGet("/todos", (ITaskService service) => service.GetTodos());
//metodo Get para leer registros
app.MapGet("/todos/{id}", Results<Ok<Todo>, NotFound> (int id, ITaskService service) => 
{
    //busca en la lista los t que correspondan a los id recibidos en el parametro
    var targetTodo = service.GetTodoById(id);
    //retorna un error 404 si no encuentra resultados o un OK si es que los encuentra siempre y cuando no sean nulos
    return targetTodo is null
        ? TypedResults.NotFound()
        : TypedResults.Ok(targetTodo); 
});


//este es un crear del CRUD
app.MapPost("/todos", (Todo task, ITaskService service) =>{

    //aqui se agrega proppiamente tal el registro
    service.AddTodo(task);
    //aqui se retorna un aviso diciendo que se agrego correctamente y con que ID se agregó
    return TypedResults.Created("/todo/{id}",task);
})

/*Este es un filtro para el metodo de agregar ya que te limita la fecha al presente 
y futuro y que el completed sea si o si falso, aparte de guardar dichos errores en un diccionario*/
.AddEndpointFilter(async(context, next) =>{
    var taskArgument = context.GetArgument<Todo>(0);
    var errors = new Dictionary<string, string[]>();
    if(taskArgument.DueDate < DateTime.UtcNow)
    {
        errors.Add(nameof(Todo.DueDate), ["Cannot have due date in the past."]);
    }
    if(taskArgument.IsCompleted)
    {
        errors.Add(nameof(Todo.IsCompleted), ["Cannot add completed todo."]);
    }
    if(errors.Count > 0)
    {
        return Results.ValidationProblem(errors);
    }

    return await next(context);
});

//Metodo delete en base a un id que recibe
app.MapDelete("/todos/{id}", (int id, ITaskService service) =>
{
    //aqui remueve el objetivo en base al id recibido
    service.DeleteTodoById(id);
    //aqui retorna el 204 avisando que no encontró el contenido por lo tanto lo elimino correctamente
    return TypedResults.NoContent();
});


app.Run();


//creacion del esqueleto de la lista
public record Todo(int Id, string Name, DateTime DueDate, bool IsCompleted){}

// se crea la interface para utilizar los metodos mencionados de forma mas eficiente.
interface ITaskService
{
    Todo? GetTodoById(int Id);

    List<Todo> GetTodos();

    void DeleteTodoById(int Id);

    Todo AddTodo(Todo task);
}

    //se crea una clase para luego poder implementarla en una interface y utilizar los metodos de forma mas eficiente
    class InMemoryTaskService : ITaskService
    {
        private readonly List<Todo> _todos = [];

        public Todo AddTodo(Todo task)
        {
            _todos.Add(task);
            return task;
        }

        public void DeleteTodoById(int id)
        {
            _todos.RemoveAll(task => id == task.Id);
        }

        public Todo? GetTodoById(int id)
        {
            return _todos.SingleOrDefault(t => id == t.Id);
        }

        public List<Todo> GetTodos()
        {
            return _todos;
        }
    }