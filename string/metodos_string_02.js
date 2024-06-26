//metodos de cadenas de texto parte 02

let input = "libra";
let db = "Libra";

console.log(input === db);

//to upper case -- to lower case

console.log(input.toLowerCase === db.toLowerCase);
console.log(input.toUpperCase());
console.log(db.toUpperCase());

//formas de concatenar dos cadenas de caracteres

let str1 = "hola mundo."
let str2 = "Chau mundo"

console.log(str1.concat(" ", str2));
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}`);

let num1 = 15;
let num2 = 10;

console.log(num1 + " " + num2);
//console.log(num1.concat(num2)); eso no se puede por que concat se utiliza solo para cadenas, no para numeros

//Eliminar espacios al inicio y al final

let str3 = " Hola mundo, soy un programador "
console.log(str3.length);

//trim
//para eliminar los espacios en blanco al inicio y al final de la cadena. 
console.log(str3.trim().length);
console.log(str3.trimStart().length);
console.log(str3.trimEnd().length);

//obtener el caracter que hay en cierta posicion
let str4 = "Hola soy el string numero 4"; //"H", "o", "l", "a", ....
console.log(str4.charAt(1));
console.log(str4[1]);

//Obtener la posicion de una palabra dentro de una cadena de caracteres

let str5 = "Hola soy Fernando y me gusta el gym. Mi nombre es Fernando y estoy preparandome para ser un fullstack";
//para obtener la primera instancia de caracter en un string
console.log(str5.indexOf("Fernando"));
console.log(str5.indexOf("Ferndo"));//si te equivocas siempre devolvera la posicion -1
console.log(str5.charAt(9));

//para obtener la ultima instancia de caracter en un string
console.log(str5.lastIndexOf("Fernando"));
