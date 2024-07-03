//getter y setter


class Persona{

    #nombre
    #edad

    _isDeveloper = true
    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }

    obtenerNombre(){//funcion getters -> nos permite acceder a un atributo protegido, de forma controlada
        return this.#nombre;
    }

    #obtenerEdad(){
        return this.#edad;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}


//getter-> metodo que nos permiten obtener atributos/metodos privados o protegidos
//setter-> metodo que nos permite cambiar atributos/metodos privados o protegidos


//get
const personaPrivada = new Persona('Humberto', 45)
const edad = personaPrivada.getEdad();
console.log(edad);

//set
personaPrivada.setEdad(66)
console.log(personaPrivada.getEdad());
