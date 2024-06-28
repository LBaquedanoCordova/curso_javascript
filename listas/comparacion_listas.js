//como podemos comparar listas
//every()

const array = [4, 8, 3, 11, 5, 66, 0];

console.log(typeof array);
/* 
const newArr = array.every(valor => {
    if (valor >= 0) {
        return true
    } else {
        return false
    }
}
) */

const newArr = array.every(valor => valor >= 0)

console.log(newArr);

//Comparacion de listas

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2);

const compararArrays = (array_1, array_2) => {
    if (array_1.lenght !== array_2.lenght) return false
    const res = array_1.every((valor, index) => valor === array_2[index])
    return res;
}

console.log(compararArrays(ar1, ar2));

const ar3 = [1, 2, 5, 8];

console.log(compararArrays(ar1, ar3));