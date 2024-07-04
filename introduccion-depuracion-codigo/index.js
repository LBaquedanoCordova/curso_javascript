const persona = {
    nombre: 'Galla',
    edad: 35
}

console.log(persona);

function obtenDobleEdad(params) {
    return 2 * params
}

const dobleEdad = obtenDobleEdad(persona.edad)
console.log(dobleEdad);

function obtenArray(edad) {
    let arrayNum = []

    for (let index = 0; index < 10; index++) {
        const numero = edad + index;
        console.log(numero);
        arrayNum = [...arrayNum, numero];
        
    }
    return arrayNum
}

const array = obtenArray(persona.edad)
console.log(array);