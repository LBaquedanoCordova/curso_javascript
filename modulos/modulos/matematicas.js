//Modulos
/*
son piezas de código reutilizables y organizadas que permiten dividir
una aplicación en partes más pequeñas y manejables.
Cada módulo encapsula funcionalidad específica, como funciones, objetos,
y variables, y puede ser importado y utilizado en otros módulos o archivos.
*/

function suma(a, b) {
    return a + b;
}

function multiplica(a, b) {
    return a * b;
}

function eleva(a, b) {
    return a ** b;
}

function factorial(a) {
    /* Un factorial de un número es el producto de todos los
    números enteros positivos desde 1 hasta ese número. */
    //factorial de 5: 5 * 4 * 3 * 2 *1
    let factorial = 1;
    for (let index = 2; index <= a; index++) {
        factorial *= index;
        
    }
    return factorial;
}


/*
module.exports es un objeto especial en Node.js que se utiliza
para definir qué variables, funciones o clases deben estar disponibles
cuando otro archivo importe el módulo. 
*/

//Exportando las funciones, para que puedan ser utilizadas en otros archivos al ser importadas
module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}