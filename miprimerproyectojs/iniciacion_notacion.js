//NOTACION EN JAVASCRIPT

//Camel Case (camelCase) 
//comúnmente para nombrar variables y funciones.

let firstName = "John";

function calculateTotal() {
    // código
}

var precioTelevisor = 100;


//Pascal Case (PascalCase)
//comúnmente para nombrar clases y constructores

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
}

//Dot Notation
//para acceder a propiedades de objetos.

let person = {
    firstName: "John",
    lastName: "Doe"
};

const gym = {
    maquina1 : 100,
    maquina2: "Barra Smit",
    maquina3 : null,
};


console.log(gym.maquina3);

// Acceso mediante notación de punto
console.log(person.firstName);

//Bracket Notation
//para acceder a propiedades de objetos usando una cadena o una variable.

let persons = {
    firstName: "John",
    lastName: "Doe"
};


// Acceso mediante notación de corchetes
console.log(persons["firstName"]);

let key = "lastName";
// Acceso mediante notación de corchetes usando una variable
console.log(persons[key]);

var familia = {
    padre: "Fernando",
    madre: "Maria",
    hijo: "Jose",
    hijo2: null,
}

let llave = "padre"

console.log(familia[llave]);

console.log(familia["hijo2"]);

//Array Notation

//Utilizada para acceder a elementos de un array.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[2]);

//Template Literals

/* Utilizados para crear cadenas de texto dinámicas e incluir 
expresiones dentro de las cadenas. Usan comillas invertidas (backticks) 
y la sintaxis ${} para incluir expresiones. */

let primerNombre = "John";
let lastName = "Doe";
let fullName = `${primerNombre} ${lastName}`;
console.log(fullName);


const namePerro = "fido";
const lastNamePerro = "terco";

console.log(`${namePerro} ${lastNamePerro}` );


