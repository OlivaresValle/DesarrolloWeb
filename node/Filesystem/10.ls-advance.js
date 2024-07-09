const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'
/*
fs.readdir(folder)
    .then(files =>{
        files.forEach(file =>{
            console.log(file)
        })
    })
    .catch(err => {
        if(err){
            console.error('Error al leer el directorio:', err)
            return;
        }
    })
*/
    /*se puede con la terminal debes pasarle el directorio sin "" despues de visual studio code y separado el 
    directorio que quieres que mapee en este caso con esta estructura ./node/cjs */

    // OTRO EJEMPLO 

    async function ls (folder){
        let files
        try {
            //se espera hasta terminar de leer el directorio
            files = await fs.readdir(folder)
        } catch{
            console.error('No se pudo leer el directorio ${folder}')
            process.exit(1)
        }

        //recuperamos la informacion de todos archivos del directorio
        const filePromises = files.map(async file => {
            const filePath = path.join (folder,file)
            let stats
            try {
                stats = await fs.stat(filePath) // status - información del archivo
            }catch {
                console.error('No se pudo leer el archivo ${filePath}')
                process.exit(1)
            }

            const isDirectory = stats.isDirectory()
            const fileType = isDirectory ? 'd' : 'f'
            const fileSize = stats.size
            const fileModified = stats.mtime.toLocaleString()

            //ATENCION usar comillas invertidas para retornar valores con $ ``  
            return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
        })
       
        //info de todos los archivos
        const filesInfo = await Promise.all(filePromises)

        filesInfo.forEach(fileInfo => console.log(fileInfo))
    }
    ls(folder)