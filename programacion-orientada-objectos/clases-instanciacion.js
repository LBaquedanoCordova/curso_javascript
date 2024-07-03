class Persona{
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona_nueva = new Persona('Luis', 27, true);// Instanciación

console.log(persona_nueva);
persona_nueva.saludo();

//inicializando una variable
let numero = 60;
console.log(typeof numero);

//instanciando 
let persona_nueva2 = new Persona('Maria', 45, false);
console.log(typeof persona_nueva);
console.log(persona_nueva2 instanceof Persona);

// instanceof -> es similar a typeof pero 'instanceof' es para clases.