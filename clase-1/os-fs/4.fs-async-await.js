const { readFile } = require('node:fs/promises');  //Apartir de NODE16 se recomienda utilizar node:

// IIFE -> Immediately Invoked Function Expression
(
   async () => {

       console.log('Leyendo el primer archivo');
       const text = await readFile('archivo.txt', 'utf-8')
       console.log('primer archivo', text);
       
       console.log('--------------------------');
       
       console.log('Leyendo el segundo archivo');
       const text2 = await readFile('archivo2.txt', 'utf-8')
       console.log('segundo archivo', text2);
   }
)()



