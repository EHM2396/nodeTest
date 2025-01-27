// process -> informacion del proceso
// argumentos de entrada
// console.log(process.argv);

// controlar el proceso y su salida
// process.exit(1); //0->salida correcta | 1->salida incorrecta

// podemos controlar eventos del proceso
// process.on('exit', (code) => {
//     console.log(`El proceso ha finalizado con el codigo ${code}`);
// })

// current working directory -> desde donde estamos ejecutando
console.log(process.cwd());

// platform -> informacion sobre la plataforma
// console.log(process.platform);

// variables de entorno
console.log(process.env.usuario);