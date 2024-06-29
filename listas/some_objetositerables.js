//some()
/* 
El método some() comprueba si al menos un elemento del array cumple con la condición
implementada por la función proporcionada.
*/
const array = [11, 15, 3, 25, 21, 30, -1];

const res = array.some(valor => valor < 0);

console.log(res);

const existe = array.some(valor => valor === 1)

console.log(existe);

const arrayObjetos = [
    {nombre: "Juan", edad: 22},
    {nombre: "Marzial", edad: 45},
    {nombre: "William", edad: 18},
    {nombre: "Emma", edad: 15}
]

const existePerNom = arrayObjetos.some(person => person.nombre === "Emma");

console.log(existePerNom);

//como obtenr una lista a partir de un objeto iterable
//from
/*
El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable.
*/

const str = "Hola mundo";

console.log(str[4]);

const arr_str = Array.from(str);
console.log(arr_str);

const set = new Set([2, 3, "hola", 45]);
console.log(set);

const arr_set = Array.from(set);
console.log(arr_set);


//.keys()
/*
El método keys() devuelve un nuevo objeto Array Iterator que contiene las claves
para cada indice en el arreglo.
*/
const nuevoArray = [1, 15, 11, 25];
console.log(typeof(nuevoArray));

const keys = nuevoArray.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);