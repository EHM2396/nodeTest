// 1.os.info.js Info del sistema operativo de la maquina
import { platform, arch, release, totalmem, freemem, homedir, uptime } from 'node:os';

console.log('Info de la maquina: ');
console.log('_________________________');

console.log('Nombre del sistema: ', platform());
console.log('Nombre de la arquitectura: ', arch());
console.log('Version del sistema: ', release());
console.log('Memoria total: ', totalmem() / 1024 / 1024);
console.log('Memoria libre: ', freemem() / 1024 / 1024);
console.log('Carpeta del proyecto: ', homedir());
// console.log('CPUs: ', os.cpus());
console.log('uptime: ', uptime() / 60 / 60);
