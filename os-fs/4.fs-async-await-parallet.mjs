// Esto solo en los modulos Nativos
// que no tienen promesas nativas

// const {promisify} = require('node:util');
// const readFile = promisify(fs.readFile);//readFile convertido en una promesa

import { readFile } from 'node:fs/promises';  //Apartir de NODE16 se recomienda utilizar node:

// Cuando se realiza de esta forma primero lee los 2 archivos y despues si hace el resto(se trabja en paralelo)
Promise.all([
    readFile('archivo.txt', 'utf-8'),
    readFile('archivo2.txt', 'utf-8'),
]).then(([text, text2]) => {
    console.log('primer archivo', text); 
    console.log('segundo archivo', text2);
})


