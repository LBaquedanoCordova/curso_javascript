//bucles for
/* 
i = i + 1
i += 1
i++
 */

/* for (inicialización; condición; incremento) {
    
} */

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(array.length);

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}

//Estructura for ... of

/* 
Inicialización: let iterator
Colección: of array -> indica que el bucle debe iterar sobre cada elemento del array.
 */

for (let iterator of array) {
    console.log(iterator);
}


//Estructura forEach
//Método forEach  es un método de los arrays que ejecuta una función proporcionada una vez por cada elemento del array.
//element => { ... } es una función de flecha que se ejecutará para cada elemento del array.


array.forEach(element => {
    console.log(element);
});


//segundo array
let lista = ["perro", "gato", "liebre", "raton", 
    {animal : "omnivoro", clase : "segunda clase", tamanhio: 25}, undefined];

lista.forEach(element => {
    console.log(element);
});


for (const iterator of lista) {
    console.log(iterator);
}


//Estructura For ... in

let persona = {
    nombre: "Fernando",
    apellido: "Baquedano",
    edad: 27,
    isDeveloper: true,
};

console.log(persona.nombre);


let prop = "edad";
console.log(persona[prop]);

for (const key in persona) {
    console.log(key);
    console.log(persona[key]);
}