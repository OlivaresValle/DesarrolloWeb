const path = require('node:path');

//barra separadora de carpetas segun SO
console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)
//retorna el nombre y extension del archivo
const base = path.basename('/tmp/bazzel-secret-files/password.txt')
console.log(base)
//retorna el nombre del archivo sin extension
const filename = path.basename('/tmp/bazzel-secret-files/password.txt', '.txt')
console.log(filename)
//retorna la extension del archivo
const extension = path.extname('image.jpg')
console.log(extension)