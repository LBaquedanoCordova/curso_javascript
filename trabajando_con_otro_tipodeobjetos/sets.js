//sets o conjuntos en castellano

/*
Los Sets en JavaScript son una colección de valores únicos.
*/

const array = [1, 2, 3, 4, 2, {id: 25}];


const miSets = new Set(array);

console.log(array);
console.log(miSets);

/*
Métodos principales
add(valor): Agrega un elemento al set.
delete(valor): Elimina un elemento.
has(valor): Verifica si un elemento existe.
size: Retorna el número de elementos.
clear(): Elimina todos los elementos.
*/

//add()
miSets.add('perro');
console.log(miSets);

//delete()
miSets.delete('perro');
console.log(miSets);


//clear()
/*
miSets.clear();
console.log(miSets);
*/


//has()
const existe = miSets.has(2);
console.log(existe);

//size()
const tamanhio = miSets.size;
console.log(tamanhio);

//para iterar sobre cada elemento de miSets
miSets.forEach(element => {
    console.log(element);
    
});


const it_miSet = miSets.values();
console.log(it_miSet);

const arr_miSet = [...miSets];
console.log(arr_miSet);

