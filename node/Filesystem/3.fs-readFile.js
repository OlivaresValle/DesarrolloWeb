const fs =require('node:fs')

const path = require('node:path'); // Módulo para manejar rutas
const filePath = path.resolve(__dirname, 'archivo.txt'); // Convierte a ruta absoluta
const filePath2 = path.resolve(__dirname, 'holamundo.txt'); // Convierte la 2da ruta absoluta

//leyendo el primer archivo y arreglando el path
console.log('Leyendo el primer archivo ...')
fs.readFile(filePath, 'utf-8', (err, text) => { //con callback
    //se imprime el archivo 1
    console.log('Primer texto:',text)
})

console.log('Hacer cosas mientras lee el archivo .....')

//leyendo el 2do archivo y arreglando el path
console.log('Leyendo el segundo archivo ...')
fs.readFile(filePath2, 'utf-8', (err, texto) => { //con callback
    //se imprime el archivo 2
    console.log('Segundo texto:',texto)
})


// ------------------------------------------ Sincrona y sin callback


//leyendo el primer archivo y arreglando el path
console.log('Leyendo el primer archivo ...')
fs.readFile(filePath, 'utf-8')
//se imprime el archivo 1
console.log('Primer texto:',text)


console.log('Hacer cosas mientras lee el archivo .....')

//leyendo el 2do archivo y arreglando el path
console.log('Leyendo el segundo archivo ...')
fs.readFile(filePath2, 'utf-8')
//se imprime el archivo 2
console.log('Segundo texto:',texto)

