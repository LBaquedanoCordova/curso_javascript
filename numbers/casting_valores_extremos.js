//Operador .valueOf() -  obtener valores numericos a partir de literales

let numeroPrimitivo = 2;
let numeroObjeto = new Number(3);//crea un objeto Number.

console.log(numeroPrimitivo);
console.log(numeroObjeto);

console.log(numeroPrimitivo + numeroObjeto);
//valueOf() se utiliza para obtener el valor primitivo de un objeto
console.log(numeroPrimitivo.valueOf() + numeroObjeto.valueOf());

console.log(numeroObjeto.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());


//NaN(Not a Number) - Infinity
let n = Number('adios');
let n1  = Number(15);

console.log(n);
console.log(isNaN(n));
console.log(isNaN(n1));

let numerador = 45;
let denominador = 0;
console.log(numerador / denominador);

let denominador_2 = null;
console.log(numerador / denominador_2);


//como convertir los string a valores numericos con number, parseInt y parseFloat
let numero = '5.89';
let numero2 = 17.2;

console.log(typeof(numero));
console.log(typeof(numero2));

console.log(numero + numero2); //no los esta sumando, los esta concatenando

//Number() convierte un string a un numero
/*
Convierte un valor a un número.
Devuelve NaN si la conversión no es posible.
Puede convertir cadenas numéricas válidas, booleanos (true a 1 y false a 0), y null a 0.
undefined y valores no convertibles devuelven NaN.
*/
console.log(Number(numero) + numero2);

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

//ParseInt
/*
Analiza una cadena y devuelve un número entero. Puede especificar una base numérica (radix).
Se detiene en el primer carácter no numérico.
*/

//ParseFloat
/*
analizar una cadena y devolver un número de punto flotante. A diferencia de parseInt(),
que solo devuelve números enteros, parseFloat() puede interpretar y devolver números con decimales.
*/
console.log(parseInt(numero));
console.log(parseFloat(numero));
console.log(typeof(parseInt(numero)));
console.log(typeof(parseFloat(numero)));

let num3 = 4;


console.log(parseInt(num3));
console.log(parseFloat(num3));


//Numeros hexadecimales --- Base 16

let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));


//representacion de numeros hexadecimales

let hex1 = 0x1A;
let hex2 = 0xFF;
let hex3 = 0xA3;

//Conversión de Hexadecimal a Decimal
//convertir números hexadecimales a decimales utilizando la función parseInt()
let hexString = '1A';
console.log(parseInt(hexString, 16));

//Conversión de Decimal a Hexadecimal

let decimalNumber = 26;
console.log(decimalNumber.toString(16));
/*-------------*/

let hexString1 = '2D'
console.log(parseInt(hexString1, 16));

let decimalNumber1 = 45;
console.log(decimalNumber1.toString(16));

//Obtener los valores maximo y minimo en js

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);

console.log(2 ** 1023);