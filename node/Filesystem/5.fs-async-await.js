const fs =require('node:fs/promises');

const path = require('node:path'); // Módulo para manejar rutas
const filePath = path.resolve(__dirname, 'archivo.txt'); // Convierte a ruta absoluta
const filePath2 = path.resolve(__dirname, 'holamundo.txt'); // Convierte la 2da ruta absoluta

//lo mismo que más abajo pero menos confuso
async function init(){
    //leyendo el primer archivo y arreglando el path
    console.log('Leyendo el primer archivo ...')
    const text= await fs.readFile(filePath, 'utf-8') 
    //se imprime el archivo 1
    console.log('Primer texto:',text)    

    console.log('Hacer cosas mientras lee el archivo .....')

    //leyendo el 2do archivo y arreglando el path
    console.log('Leyendo el segundo archivo ...')
    fs.readFile(filePath2, 'utf-8')
    const texto= await fs.readFile(filePath2, 'utf-8') //se imprime el archivo 2
    console.log('Segundo texto:',texto)    
}

init()
/*
// IIFE - Inmediatly Invoked Function Expression
(
    async () =>{
        //leyendo el primer archivo y arreglando el path
        console.log('Leyendo el primer archivo ...')
        const text= await fs.readFile(filePath, 'utf-8') 
        //se imprime el archivo 1
        console.log('Primer texto:',text)    

        console.log('Hacer cosas mientras lee el archivo .....')

        //leyendo el 2do archivo y arreglando el path
        console.log('Leyendo el segundo archivo ...')
        fs.readFile(filePath2, 'utf-8')
        const texto= await fs.readFile(filePath2, 'utf-8') //se imprime el archivo 2
        console.log('Segundo texto:',texto)    
    }
)()
*/



  