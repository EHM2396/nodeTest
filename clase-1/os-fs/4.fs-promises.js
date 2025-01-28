// Esto solo en los modulos Nativos
// que no tienen promesas nativas

// const {promisify} = require('node:util');
// const readFile = promisify(fs.readFile);//readFile convertido en una promesa

const fs = require('node:fs/promises');  //Apartir de NODE16 se recomienda utilizar node:

console.log('Leyendo el primer archivo');
fs.readFile('archivo.txt', 'utf-8').then(text => {
    console.log('primer archivo', text);
}); //Forma asyncrona

console.log('--------------------------');

console.log('Leyendo el segundo archivo');
fs.readFile('archivo2.txt', 'utf-8').then(text2 => {
    console.log('segundo archivo', text2);
});

