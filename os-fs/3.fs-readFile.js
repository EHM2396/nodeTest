const fs = require('node:fs');  //Apartir de NODE16 se recomienda utilizar node:

console.log('Leyendo el primer archivo');
fs.readFile('archivo.txt', 'utf-8', (err, text) => {
    console.log('primer archivo', text);
}); //Forma asyncrona

console.log('--------------------------');

console.log('Leyendo el segundo archivo');
fs.readFile('archivo2.txt', 'utf-8', (err, text2) => {
    console.log('segundo archivo', text2);
});

