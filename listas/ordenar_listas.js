//sort() -> modifica el array

const array = [1, 15, 3, 25, 21, 30];

console.log(array);

array.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return +1;
    } else{
        //a === b
        return 0;
    }
})

//orden ascendente
console.log(array);

//orden descendente

const array1 = [1, 15, 3, 25, 21, 30];
array1.sort((a, b) => {
    if (a < b) {
        return +1;
    } else if (a > b) {
        return -1;
    } else{
        //a === b
        return 0;
    }
})

console.log(array1);


//ordenar unicamente arrays numericos

const arrNumerico = [1, 15, 3, 25, 21, 30];

const arrModificado = arrNumerico.sort((a, b) => b - a)
console.log(arrModificado);
////////////////////////

const arrayObjetos = [
    {nombre: "Juan", edad: 22},
    {nombre: "Marzial", edad: 45},
    {nombre: "William", edad: 18},
    {nombre: "Emma", edad: 15}
]

/*
arrayObjetos.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    } else if (a.edad > b.edad) {
        return +1;
    } else{
        return 0;
    }
})
 */
console.log(arrayObjetos);

arrayObjetos.sort((a, b) => a.edad - b.edad)
console.log(arrayObjetos);