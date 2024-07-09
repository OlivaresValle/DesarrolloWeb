const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('------------------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Uptime', os.uptime() /60 /60)