//Iterar los valores de una lista

const array = ["netflix", 1, 2, 3];


//Forma antigua (poco eficiente)

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}


//Forma ES6 (mas eficiente) forEach()
let suma = 0;
const arrayNum = [1, 2, 3, 4, 5];

arrayNum.forEach(element => {
    suma+=element
    console.log(element);
});

console.log(suma);

//ejemplo 2

let acumulacion = 0;
const lista = [5, 15, 20];

lista.forEach(element => {
    acumulacion+= element;
    console.log(element);
});

console.log(`acumulacion: ${acumulacion}`);

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});


let numbers = [3, 5, 7];
let multiplicador = 2;
let newArray = [];

numbers.forEach(element => {
    newArray.push(element * multiplicador)
    
});

console.log(newArray);

/*
Modificar objetos en un array
*/
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];

students.forEach(student => {
    if (student.score >= 90) {
        student.grade = 'A';
    } else if (student.score >= 80) {
        student.grade = 'B';
    } else {
        student.grade = 'C';
    }
});

console.log(students);

/*
modificar objetos de un array, practicando
*/

const person = [
    {nombre: "Luis", edad: 27},
    {nombre: "Maria", edad: 23},
    {nombre: "Julio", edad: 45}
];

person.forEach(element => {
    if (element.edad >= 45) {
        element.seccion = "A";
    } else if (element.edad >= 27){
        element.seccion = "B";
    }else{
        element.seccion = "C";
    }
});

console.log(person);


const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
const frequency = {};


/*
Imprimir elementos de un array anidado
*/
const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

nestedArray.forEach(subArray => {
    subArray.forEach(element => {
        console.log(element);
    });
});


//Busqueda de un valor dentro de una lista .find()
//encontrar el elemento 90 dentro de un array

const nuevoArr = [1, 15, 90, 6];

const newVar = nuevoArr.find(element => {
    if (element === 90) {
        return true;
    }    
});

console.log(newVar);

const arrayObjetos = [
    {nombre: "Juan", edad: 22},
    {nombre: "Marzial", edad: 45},
    {nombre: "William", edad: 64},
    {nombre: "Emma", edad: 15}
]
/* 
const objeto = arrayObjetos.find(element => {
    if (element.nombre === "Emma") {
        return true;
    }
});

console.log(objeto.edad);
 */

//Simplificacion
/*
Una sola expresión: Si el cuerpo de la función de flecha es una sola expresión,
puedes omitir las llaves y return.
Más de una expresión: Si el cuerpo de la función contiene más de una expresión o una declaración,
debes usar llaves {} y explícitamente usar return para devolver un valor.
*/

const objeto = arrayObjetos.find(element => element.nombre === "Emma");
console.log(objeto.edad);

const {edad} = arrayObjetos.find(element => element.nombre === "Emma");
console.log(edad);

////////

const newObject = arrayObjetos.find(element => element.nombre === "Ramon");
if (newObject) {
    console.log(`Edad: ${newObject.edad}`);
} else {
    console.log("Ingrese un nombre correcto");
}
