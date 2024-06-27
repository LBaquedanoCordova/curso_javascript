//como obtener una lista a partir de otra .slice()

const array = [1, 3, 5, 7, 9];

//No modifica el valor del array original
//tener en cuenta que el ultimo valor que se le da slice no se toma, se toma uno antes.

console.log(array.slice(1));
console.log(array.slice(1, 3));

const array2 = array.slice(0, 2);
console.log(array2);

const array3 = array.slice(1, -1);
console.log(array3);