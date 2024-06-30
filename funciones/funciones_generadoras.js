//Funciones generadoras

/*
El * después de la palabra function indica que es una función generadora en JavaScript.
Esto significa que la función puede pausar su ejecución y reanudarla posteriormente,
utilizando la palabra clave yield
*/


function* generaId() {
    let id = 0;
    while (true) {
        id++;
        if (id === 10) {
            return id;
        }
        /*
        yield es una palabra clave en JavaScript utilizada dentro de las
        funciones generadoras para pausar la ejecución de la función y
        devolver un valor al llamador. Cuando la función se reanuda, continúa desde donde se quedó.
        */
        yield id;
    }
}

const gen = generaId();

console.log(typeof gen);
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());

function* generadorId () {
    let index = 0;

    while (true) {
        index++;
        if (index === 5) {
            return index;
        }
        yield index;
    }

}

const gener = generadorId();

console.log(gener.next().value);
console.log(gener.next().value);
console.log(gener.next().value);
console.log(gener.next().value);
console.log(gener.next().value);
console.log(gener.next());

let num1 = 1, num2 = 5;

console.log(num1);
console.log(num2);