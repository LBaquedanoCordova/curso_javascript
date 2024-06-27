//Como unir dos listas .concat(listas2)

const lista1 = ['hola', 2, false, null];
const lista2 = [1, 3, 5, undefined];
console.log(lista1.concat(lista2));
console.log(lista1);
console.log(lista2);

const lista3 = lista1.concat(lista2);
console.log(lista3);

//como unir dos listas con el factor de propagacion

console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);
console.log(undefined, ...lista1);
console.log(...lista1, undefined);

//lo de arriba no es lo mismo que esto
const lista5 = [lista1, lista2]
console.log(lista5); /*aca no esta mal, pero en este caso no se 
esta concatenando los elementos del array*/