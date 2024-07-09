const fs = require('node:fs');
const path = require('node:path'); // Módulo para manejar rutas

const filePath = path.resolve(__dirname, 'archivo.txt'); // Convierte a ruta absoluta

if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);

    console.log(
        stats.isFile(),        // si es un fichero
        stats.isDirectory(),   // si es un directorio
        stats.isSymbolicLink(),// si es un enlace simbólico
        stats.size             // tamaño en bytes
    );
} else {
    console.log('El archivo o directorio no existe');
}
/* const fs = require('node:fs') //a partir de node 16.0 se recomienda poner el node:

const stats = fs.statSync('../os-info/archivo.txt')

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size //tamaño en bytes
) */

/* const fs = require('node:fs'); // a partir de node 16.0 se recomienda poner el node:

const filePath = './archivo.txt';

if (fs.existsSync(filePath)) {  // Verifica si el archivo o directorio existe
    const stats = fs.statSync(filePath);

    console.log(
        stats.isFile(),        // si es un fichero
        stats.isDirectory(),   // si es un directorio
        stats.isSymbolicLink(),// si es un enlace simbólico
        stats.size             // tamaño en bytes
    );
} else {
    console.log('El archivo o directorio no existe');
}*/