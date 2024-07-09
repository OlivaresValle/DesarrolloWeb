import { readFile } from 'node:fs/promises'

// ---------------------- No funciona porque no se usa el path por lo tanto no pesca los archivos

 //const path = require('node:path'); // Módulo para manejar rutas
//const filePath = path.resolve(__dirname, 'archivo.txt'); // Convierte a ruta absoluta
//const filePath2 = path.resolve(__dirname, 'holamundo.txt'); // Convierte la 2da ruta absoluta

Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./holamundo.txt','utf-8')
]).then(([text,texto]) =>{
    console.log('Primer texto:',text)
    console.log('Segundo texto:',texto)
})
