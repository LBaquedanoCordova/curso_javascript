//que son las funciones, como se declaran y como se utilizan

const nom = 'Ricardo'

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar(nom);

//

let nombre2 = 'Harold'
console.log(nombre2);

despedir(nombre2);

function despedir(params) {
    params = 'Tamara'
    console.log(`Adios ${params}`);
}

let persona = {nombre: 'Luis', apellido: 'Gonzales'};
saludarPersona(persona);
console.log(persona.apellido);

function saludarPersona(objeto) {
    objeto.apellido = 'Villar'
    console.log(`Saludar ${objeto.nombre} ${objeto.apellido}`);
}

//
function imprimir(...params) {
    console.log(params);
}

imprimir(1, 'hola', 5, {id: 1544, dni: 14200165});

//

function suma(...numeros) {
    console.log(numeros.reduce((a, b) => a + b));
    return numeros.reduce((a, b) => a + b);
}

const sum = suma(1, 2, 3, 4);
console.log(sum);

function numPar(num) {
    return num % 2 === 0;
}

const par = numPar(4);

console.log(par);

//
let variable = 8;

function multiplicar(a = 0, b = 0) {

    console.log(variable);
    let varInterna = 5;
    console.log(varInterna);
    return a * b;
    
}

console.log(varInterna);

console.log(multiplicar(4, 5));