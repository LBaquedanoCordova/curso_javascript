//Casos muy especificos -break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }
    var j = 50;
    console.log(lista[i]);
    
    if (lista[i] > 5) {
        break;
    }
}
/* 

let array = [2, 4, 6, 8, 10, 12];
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
    if (array[index] > 8) {
        break
    }
};


const arreglo = [1, 3, 5, 7, 9];

for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);


    if (arreglo[index] > 4) {
        break
    }
}
 */
//Cual es el ambito de un bucle

console.log(j);
console.log(i);