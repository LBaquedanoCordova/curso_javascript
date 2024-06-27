//Como trabajar con listas(arrays arreglos vectores)

let  var1 = {id: false}
let array = ["netflix", "amazon prime", "youtube", var1, true, undefined]

console.log(array);

//aceder a los valores del array a taraves e sus posicion
//array[indice] => 0, 1, 2, 3, .....

console.log(array[0]);
console.log(array[1]);


//metodos para introducir nuevos valores en un array
//mutan el valor de nuestro array
//Push()
//Unshift()

array.push('whatsapp', 'instagram', 1);
console.log(array);

array.unshift('disney', NaN)
console.log(array);

//Otras opciones para añadir elementos a un array


//Spread Operator (...):
/*Uso: El operador de propagación (...) permite copiar los elementos
de un array u objeto iterable en otro array u objeto literal.
*/
let array1 = ['perro', 'gato', 'conejo'];

//agregamos nuevos elementos al final del array y los guardamos en nuevo array
let agregarArray1 = [...array1, 'loro', 'canario'];
console.log(agregarArray1);
//pero si mostramos el array inicial array1 mantiene sus valores iniciales, y no es modificado
console.log(array1);

//agregamos nuevos elementos al inicio del array y los guardamos en nuevo array
let agregarArray2 = ['liebre', 'raton', ...array1];
console.log(agregarArray2);
//pero si mostramos el array inicial array1 mantiene sus valores iniciales, y no es modificado
console.log(array1);

//metodos para eliminar valores en nuestros arrays
//mutan el valor de nuestro array
//pop()
//shift()


const lista = [5, 10, 15, true];

//pop()
//valores al final
let  modifiedLista = lista.pop()

//elemento final eliminado
console.log(modifiedLista);

//lista inicial modificada com su elemento final eliminado
console.log(lista);

//shift()

let modifiedLista2 = lista.shift();

//elemento inicial eliminado
console.log(modifiedLista2);

//lista inicial modificada com su elemento inicial eliminado
console.log(lista);

//Splice()
//metodo para eliminar, modificar o añadir valores a un array
const array2 = [1, 3, 5, 7, 9];

//Elimnar valores .splice(indice, numerodevaloresaeliminar)
array2.splice(2, 1)
//se elimino el 5 porque se encontraba en el indice 2, y se elimino solo el 5 porque solo se eliminaba 1 elememnto
console.log(array2);


//añadir valores .splice(indice, 0, valoresañadidos)
array2.splice(1, 0, 11, 13);
console.log(array2);

//modificar valores .splice(indice, 1, valoresañadidos)
array2.splice(2, 1, 0, 'cadena');
console.log(array2);
