//Modulos
/*
son piezas de código reutilizables y organizadas que permiten dividir
una aplicación en partes más pequeñas y manejables.
Cada módulo encapsula funcionalidad específica, como funciones, objetos,
y variables, y puede ser importado y utilizado en otros módulos o archivos.
*/

/*
La palabra clave export en JavaScript se utiliza en módulos ES6 (ECMAScript 2015)
y versiones posteriores para exportar funciones, objetos o valores primitivos desde
un archivo (módulo) de modo que puedan ser importados y utilizados en otros archivos (módulos).
*/

// tipos de exportacion

//1. exprataciones nombradas -> permiten exportar múltiples valores desde un módulo.
//2. exporatciones por defecto -> permite exportar un solo valor desde un módulo. 

//////////
//1. exprataciones nombradas
//Exportación en línea

export function suma(a, b) {
    return a + b;
}

export function multiplica(a, b) {
    return a * b;
}

export function eleva(a, b) {
    return a ** b;
}

export function factorial(a) {
    let factorial = 1;
    for (let index = 2; index <= a; index++) {
        factorial *= index;
        
    }
    return factorial;
}

export const nombre = 'expotando variables'


//Exportación después de la declaración

function divsion(a, b) {
    return a / b;
}

const PI = 3.14;

export{
    divsion,
    PI
}

//2. exporatciones por defecto
//este tema en el archivo literatura.js
