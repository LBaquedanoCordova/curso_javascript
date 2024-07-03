//Propiedades privadas

class Persona{
    //private -> #
    #nombre
    #edad
    #obtenerEdad//metodo privado

    //Protected -> _
    _isDeveloper = true
    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }

    obtenerNombre(){
        return this.#nombre;
    }

    /* #obtenerEdad(){
        return this.#edad;
    } */
}


const personaPrivada = new Persona('Humberto', 45)
// console.log(persona);
// console.log(persona.nombre);

//acceso a metodos
console.log(personaPrivada.saludo());
console.log(personaPrivada.obtenerNombre());
console.log(personaPrivada._isDeveloper);
//console.log(personaPrivada.#obtenerEdad());//no se puede accder a este metodo porque es privado

//acceso directo a las propiedades privadas
//en este caso no se podra acceder por que son privadas
// console.log(personaPrivada.#nombre);
// console.log(personaPrivada.#edad);

// Intento de modificación directa de las propiedades privadas
//en este caso no se podra acceder por que son privadas
// personaPrivada.#nombre = 'Juan';
personaPrivada.edad = 35;


//Propiedades publicas

class PersonaPu{

    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }

    obtenerNombre(){
        return this.nombre;
    }
}


const personaPublica = new PersonaPu('kevin', 15)
// console.log(persona);
// console.log(persona.nombre);

//acceso a metodos
console.log(personaPublica.saludo());
console.log(personaPublica.obtenerNombre());

//acceso directo a las propiedades publicas
// console.log(personaPrivada.nombre);
// console.log(personaPrivada.edad);

// Intento de modificación directa de las propiedades publicas
// personaPrivada.nombre = 'Juan';
personaPublica.edad = 35;
console.log(personaPublica.edad);