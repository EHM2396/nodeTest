// 8.ls advanced.js
// Sistema de modulos
const path = require('node:path');
const fs = require('node:fs/promises');

// process
const folder = process.argv[2] ?? '.'; // '.' -> current working directory

// Asyncronia secuencial
async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder);
    } catch (error) {
        console.error(`No se pudo leer el directorio ${folder} `);
        process.exit(1);
    }

    // Asyncronia paralela
    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file); // Unir rutas
        let stats
        try {
            stats = await fs.stat(filePath); // Devuelve informacion del fichero
        } catch (error) {
            console.error(`No se pudo obtener la informacion del fichero ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory(); //Muestra si es un directorio
        const fileType = isDirectory ? 'd' : 'f'; //Muestra si es un fichero
        const fileSize = stats.size; //Muestra el tamaño del fichero
        const fileModified = stats.mtime.toLocaleString(); //Muestra la fecha de modificacion del fichero

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`; //Muestra el tipo de fichero, tamaño, fecha de modificacion y nombre
    })

    const filesInfo = await Promise.all(filePromises);

    filesInfo.forEach(file => {
        console.log(file);
    })
}

ls(folder);


