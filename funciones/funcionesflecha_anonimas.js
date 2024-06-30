//funciones tipo flecha -- funciones anonimas

const array = [0, 2, 4, 8];

/* const newArr = array.map(function (params) {
    return params * 2;
})

console.log(newArr);
 */

//funcion tipo flecha
const newArr = array.map((params) => params * 2)
console.log(newArr);


//Funcion flecha anonima

/* 
const dobleValor = valor => {
    return valor * 2;
} */

const dobleValor = (valor => valor * 2)(4);

const dobleValor1 = valor => valor * 2;


console.log(dobleValor);


function doble(params) {
    return params * 2;
}

console.log(doble(5));
console.log(dobleValor1(15));