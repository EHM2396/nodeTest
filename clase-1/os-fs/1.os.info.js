// 1.os.info.js Info del sistema operativo de la maquina
const os = require('node:os')

console.log('Info de la maquina: ');
console.log('_________________________');

console.log('Nombre del sistema: ', os.platform());
console.log('Nombre de la arquitectura: ', os.arch());
console.log('Version del sistema: ', os.release());
console.log('Memoria total: ', os.totalmem() / 1024 / 1024);
console.log('Memoria libre: ', os.freemem() / 1024 / 1024);
console.log('Carpeta del proyecto: ', os.homedir());
// console.log('CPUs: ', os.cpus());
console.log('uptime: ', os.uptime() / 60 / 60);
