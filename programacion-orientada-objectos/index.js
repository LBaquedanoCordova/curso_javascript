const persona = {
    nombre: 'Fernando',
    edad: 27,
    isDeveloper: true,
    saludo: function () {
        console.log('Hola');
    }
}

// console.log(persona);
// persona.saludo();

const otraPersona = {
    nombre: 'Juana',
    edad: 56,
    isDeveloper: false,
    saludo: function () {
        console.log('Hola');
    }
}

// console.log(otraPersona);
// otraPersona.saludo();


const createPersona = (nombre, edad, isDeveloper) => {
    return{
        //nombre: nombre,
        /*en este caso, como la propiedad es la misma
        que la variable, se simplifica poniendo solo una*/
        nombre,
        edad,
        isDeveloper,
        saludo: function () {
            console.log('Hola');
        }
    }
}
// Crear una instancia del objeto persona
const nuevaPersona = createPersona('Armando', 15, true);

// Acceder y llamar al método saludo
nuevaPersona.saludo();
