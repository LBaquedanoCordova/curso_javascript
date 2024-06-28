//trabajar con metodos mas avanzados

//map() filter() reduce()

const array = ["Lima", "Piura", "La Libertad", "Lambayeque"];

const val = array.forEach(ciudad =>{
    console.log(ciudad);
    return 4;
})

console.log(val);

const newArray = array.map((element, indice) => `${indice +1}-${element}`);
console.log(newArray);

const arrayObjetos = [
    {nombre: "Juan", edad: 22},
    {nombre: "Marzial", edad: 45},
    {nombre: "William", edad: 18},
    {nombre: "Emma", edad: 15}
]

console.log(arrayObjetos["nombre"]);


//Filter()
/* const newArrObj = arrayObjetos.filter(obj => {
    if (obj.edad >= 22) {
        return true;
    } else {
        return false;
    }
});

console.log(newArrObj); */

const newArrObj = arrayObjetos.filter(obj => obj.edad >= 22);
console.log(newArrObj);

const newArrObj1 = arrayObjetos.filter(obj1 => obj1.nombre !== "Juan")
console.log(newArrObj1);

//Reduce()
/* 
sintaxis
array.reduce(callback(accumulator, currentValue, [currentIndex, [array]]), [initialValue])
 */

const valores = [1, 2, 3, 4, 5];

const suma = valores.reduce((acumulado, cur, index, arrayOriginal) =>{
    console.log(acumulado);
    console.log(cur);
    console.log(index);
    console.log(arrayOriginal);
    return acumulado + cur;
})

console.log(suma);


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
