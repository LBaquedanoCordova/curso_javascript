/* // Importar las exportaciones nombradas

import { suma, eleva, nombre, divsion, PI } from "./modulos/matematicas.js";

const sum = suma(5, 1);
console.log(sum);

const potencia = eleva(2, 21);
console.log(potencia);

console.log(nombre);

const div = divsion(4, 2);
console.log(div); */



// importando todo las funciones y la variable

import * as modulosMatematicas from "./modulos/matematicas.js";

const sum = modulosMatematicas.suma(5, 1);
console.log(sum);


const potencia = modulosMatematicas.eleva(2, 21);
console.log(potencia);

const factor = modulosMatematicas.factorial(5);
console.log(factor);


/* 
import getAutor, {libro} from "./modulos/literatura.js";

const autor = 'De Frank Kafka'

console.log(getAutor());
console.log(`${libro} ${autor}`); */

// Importar la exportación por defecto

import obtenerCadena from "./modulos/literatura.js";

console.log(obtenerCadena('Hola mundo'));