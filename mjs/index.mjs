// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import {sum, multiply, divide} from "./sum.mjs";

console.log(sum(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2)); 