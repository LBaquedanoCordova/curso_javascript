//Herencia
//Polimorfismo

class Persona{
    _nombre
    _edad
    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años`);
    }
}

// Utiliza extends para heredar de la clase Persona

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        /*
        La llamada a super debe hacerse antes de acceder a this en el constructor de la clase derivada.
        Esto se debe a que this no se inicializa hasta que el constructor de la clase base ha sido llamado.
        */
        super(nombre, edad)/* super se utiliza para llamar al constructor y métodos de la clase base desde
        la clase derivada. */
        this.lenguaje = lenguaje
    }

    saludo(){
        super.saludo()
        console.log(`Y soy desarrolador de ${this.lenguaje}`);
    }
}

/* const nuevoDesarrollador = new Desarrollador('Delfina', 56)
console.log(nuevoDesarrollador);
nuevoDesarrollador.saludo(); */

const nuevoDesarrollador1 = new Desarrollador('Harold', 45, 'C++')
console.log(nuevoDesarrollador1);
nuevoDesarrollador1.saludo();


//ejemplo numero 2

// Clase base
class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    describir() {
        return `${this.nombre} es un ${this.especie}.`;
    }
}

// Clase derivada
class Perro extends Animal {
    constructor(nombre, raza) {
        // Llamamos al constructor de la clase base
        super(nombre, 'perro');
        this.raza = raza;
    }

    ladrar() {
        return '¡Guau guau!';
    }
}

// Instanciación
const miPerro = new Perro('Firulais', 'perro', 'Labrador');

console.log(miPerro);
console.log(miPerro.describir());
console.log(miPerro.ladrar());