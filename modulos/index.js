//formas de importar/exportar modulos
/*
1. commonJS - require
2. import ES6 - import
*/

//require => es una función incorporada en Node.js que se utiliza para importar módulos.

// const moduloMatematicas = require('./modulos/matematicas.js');
// const factorial = moduloMatematicas.factorial;
// const {factorial, suma} = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas);



/* const fac2 = factorial(4);
console.log(fac2);

const sum2 = suma(4, 6);
console.log(sum2); */



/* const fact = moduloMatematicas.factorial(5);
console.log(fact);

const sum = moduloMatematicas.suma(12, 90);
console.log(sum); */
/* console.log(`el factorial de 3 es:` + 3 * 2 * 1);
console.log(factorial(5)); */

/* console.log(module); */

//Forma mas facil y entendible de hacerlo
//importando las funciones que fueron exportadas desde el archivo matematicas.js
const {factorial, suma, eleva} = require('./modulos/matematicas.js');

const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);


const ele = eleva(4, 2);
console.log(ele);