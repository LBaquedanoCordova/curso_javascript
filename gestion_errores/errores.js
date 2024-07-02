const miFunction = val => {
    if (typeof val === 'number') {
        return 2 * val
    } /* else {
        return false
    } */

        /*
        throw es una palabra clave en JavaScript que se utiliza para lanzar
        excepciones. Cuando se ejecuta throw, se crea una excepción que interrumpe
        el flujo normal de ejecución del programa y transfiere el control al manejador
        de excepciones más cercano.
        */

        throw new Error('El valor debe ser de tipo numero');
}

const numero = 8;
const string = 'numero'

/*
Bloque try: Intenta ejecutar las funciones de división.
Bloque catch: Captura y maneja cualquier error lanzado en el bloque try.
Bloque finally: Siempre se ejecuta, independientemente de si ocurrió un error o no.
*/

try{
    //codigo que puede fallar
    // Código que puede lanzar una excepción
    console.log('esta ejecutandose de manera correcta');
    const doble = miFunction(string);
    console.log(doble);
} catch(e){
    //en caso de fallar, quiero que ejecutes
    // Código para manejar la excepción
    console.error('Error');
    console.log(`El valor de e es: ${e}`);
    /*
    El parámetro dentro de catch (como error o cualquier otro nombre) hace
    referencia al objeto de error capturado.
    Contiene información detallada sobre el error que ocurrió, como el
    mensaje de error (error.message) y otras propiedades relevantes.
    */
} finally{
    console.log('Esto se va ejecutar tanto si produce un error, y si no se produce un error');
}

//ERROES COMUNES EN JAVASCRIPT

/*
internalError
syntasError
typeError
rangeError
referenceError
*/

/* console.log(miFunction(4));
console.log(miFunction('string'));
console.log(typeof 5); */

//ejemplo de practica1

/* function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error('El numero no puede dividirse entre 0')
    } else {
        return num1 / num2;
    }
}

try {
    console.log(divide(4, 2));
    console.log(divide(9, 3));
    console.log(divide(8, 5));
    console.log(divide(7, 0));
    
} catch (error) {
    console.log(error.message);
}
*/

//ejemplo de practica2

/* function multiplicar(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') {
        throw new Error('ambos valores deben ser numeros')
    } if (a <= 0 && b <= 0) {
        throw new Error('ambos numeros tienen que ser mayores que 0')
    }
    else {
        return a * b;
    }
}

try {
    let result = (multiplicar(0, 5))
    console.log(`El resultado de la multiplicación es: ${result}`);
    
} catch (error) {
    console.error(`Error: ${error.message}`);
} */