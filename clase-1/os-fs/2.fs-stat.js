const fs = require('node:fs');  //Apartir de NODE16 se recomienda utilizar node:

const stats = fs.statSync('archivo.txt');//De forma sincrona muestra la informacion del fichero
console.log(
    stats.isFile(), //Muestra si es un fichero
    stats.isDirectory(), //Muestra si es un directorio
    stats.isFIFO(), //Muestra si es un pipe
    stats.isSocket(), //Muestra si es un socket
    stats.isSymbolicLink(), //Muestra si es un enlace simbolico
    stats.size //Muestra el tamaño del fichero
);