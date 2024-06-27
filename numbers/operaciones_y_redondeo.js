//Principales operaciones aritmeticas

let a = 3.5;
let b = 4.8;

//suma(+)
console.log(a + b);

//resta(-)
console.log(a - b);

//multiplicacion(*)
console.log(a * b);

//division(/)
console.log(a / b);

//Representacion de los numeros en cadenas de texto
console.log(typeof(a));

let  a_s = a.toString()

console.log(a_s);
console.log(typeof(a_s));


//redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);

//toFixed
/*
se utiliza para formatear un número utilizando notación de punto fijo.
Este método convierte un número en una cadena de texto, con un número específico de decimales.
*/

console.log(d.toFixed(2));
console.log(typeof(d));

let f = 1205454

console.log(f.toFixed(2));

//let e = d.toFixed(1);
//console.log(typeof(e));

console.log(typeof d.toFixed(1));

//toPrecision
/*
formatea un número a una longitud específica en términos de dígitos totales.
Puede devolver el número en notación decimal o exponencial.
*/

let g = 1839.123245;
console.log(g.toPrecision(7));

let h = 2045.06511;
console.log(h.toPrecision(2));