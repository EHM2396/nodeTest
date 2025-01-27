// obtener rutas, saber rutas, tipos de archivos etc

const path = require('node:path');

// Barra separadora de carpetas segun SO
console.log(path.sep);

// Manejo de barras en diferentes sistemas
//  --> unix /
//  --> windows \

// Unir rutas con path.file
const filePath = path.join('dir1', 'dir2', 'archivo.txt');
console.log(filePath);

// Obtener el nombre del archivo
const base = path.basename(filePath);
console.log(base);

// Obtener el nombre del archivo sin la extension
const filename = path.basename(filePath, '.txt');
console.log(filename);

// Obtener la extension del archivo
const ext = path.extname(filePath);
console.log(ext);
