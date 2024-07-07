#pragma warning disable IDE0130 // Namespace does not match folder structure
using System;
namespace CSharpHolamundo
{
    class Prueba1
    {
        static void Main(string[] args)
        {
            //Este es un comentario
            /* Este
            es un comentario largo*/
            Console.WriteLine("Hola, C#!");

            string myString = "Esto es una cadena de texto";
            Console.WriteLine(myString);

            int myInt = 7;
            myInt = myInt+4;
            Console.WriteLine(myInt);

            double myDouble = 6.5;
            Console.WriteLine( "esto es un double " + myDouble);

            float myFloat = 6.5f;
            Console.WriteLine("esto es un float "+ myFloat);

            bool myBool = false;
            Console.WriteLine("Este es un booleano "+ myBool);

            //dato que puede cambiar de tipo pero CUIDADO CON EQUIVOCARSE, MEJOR NO USARLO 
            dynamic myDynamic = 6;
            myDynamic = "Mi dato dinamico";
            Console.WriteLine("esto es un dato variable "+ myDynamic);

            //automaticamente te determina que tipo es la variable
            var myVar = "Mi variable de tipo inferido";
            Console.WriteLine(myVar);

            //con el simbolo de $ puedes traer los datos de las variables sin tener que ponerle "+"
            Console.WriteLine($"El valor de mi entero es {myInt} y el de mi bool es {myBool}");

            //debes definirle el tipo de dato
            const string myConst = "Mi constante";
            Console.WriteLine(myConst);  

            // ------------------------------------------------------------------------------------------

            //Estructuras

            //ESTO ES UN ARRAY COMUN Y SILVESTRE
            var myArray = new string[] { "Tomás", "Olivares","Bazzel"};
            Console.WriteLine(myArray[0]);

            //ESTO ES UN DICCIONARIO QUE PUEDE ALMACENAR MAS DE UN TIPO EN EL MISMO
            var myDictionary = new Dictionary<string, int>{
                { "Bazzel", 29 },
                { "Geusse", 30 },
                { "Azzelb", 32 },
            };

            Console.WriteLine(myDictionary["Bazzel"]);

            //Coleccion de valores desordenados y si tiene repetidos los ignora
            var mySet = new HashSet<string>{
                "Bazzel", "Geusse", "Azzelb"
            };

            // Sin indice, se debe recorrer
            var myTuple= ("Bazzel", "Geusse", "Azzelb");
            Console.WriteLine(myTuple);


            //-----------------------------------------------------------------------------------------

            //Bucles


            //Clasico for
            for (int index = 0; index <10; index++){
                Console.WriteLine(index);
            }

            //Un for para recorrer arrays
            foreach(var myItem in myArray){
                Console.WriteLine(myItem);
            }

            //Un for para recorrer diccionarios
            foreach(var myItem in myDictionary){
                Console.WriteLine(myItem);
            }

            //Un for para recorrer sets
            foreach(var myItem in mySet){
                Console.WriteLine(myItem);
            }

            //---------------------------------------------------------------------------------------------

            //Flujos

            // myInt=12;

            //Un clasico If con else o un else if 
            if(myInt == 11 && myBool==true){
                Console.WriteLine("El valor es 11");
            }
            else if(myInt ==12 || myBool == false)
            {
                }else{
                Console.WriteLine("El valor no es 11");
            }

            myFunction();
            Console.WriteLine(myFunctionWithReturn(5));

            //Clases

            var myClass= new Myclass("Bazzel");
            Console.WriteLine(myClass.MyName);
        }

        // ---------------------------------------------------------------------------------------------------------

        // Funciones
        //Una funcion que no retorna, por eso el VOID.
        static void myFunction(){
            Console.WriteLine("Mi función");
        }

        //Una funcion que retorna un int, por eso retorna 15
        static int myFunctionWithReturn(int param){
            return 10+param ;
        }

        //Clase con constructor
        class Myclass{
             public string MyName {get; set; }
             //Constructor de la clase
             public Myclass(string myCurrentName)
             {
                MyName = myCurrentName;
             }
        }
    }
}


