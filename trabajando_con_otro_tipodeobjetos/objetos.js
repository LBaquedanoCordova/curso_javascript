//trabajando con objetos

const obj = {
    id: 2544,
    nombre: 'Julio',
    apellido: 'Pasapera',
    isDeveloper: false,
    libroFavoritos:  ['El campeon del mundo', 'El sufrimiento del aguila', 'Matalache'],
    '4-juegos':  [1, 2, 3, 4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = 'apellido';
console.log(obj[prop]);


/*
Referencias en JavaScript: Los objetos en JavaScript se manejan por referencia.
La asignación no crea una copia nueva del objeto, sino que ambas variables apuntan
al mismo lugar en la memoria.
*/
const obj2 = obj;

console.log(obj2);

obj2.nombre = 'Francisco';
console.log(obj2.nombre);

console.log(obj.nombre);


/*
Primitivas vs. Objetos: Los tipos primitivos (números, strings, booleanos, etc.)
se copian por valor, no por referencia. Así que num y num2 son independientes.
*/
let num = 5;
num2 = num;

num2 = 6;

console.log(num);
console.log(num2);

const obj3 = {...obj};

console.log(obj3);


console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = 'Teodoro';
console.log(obj3.nombre);
console.log(obj.nombre);

/* obj3.libroFavoritos = ['Mi mundo magico', 'Las 7 maravillas del mundo'];

console.log(obj3.libroFavoritos);
console.log(obj.libroFavoritos); */

obj3.libroFavoritos.push('Aprendiendo programacion');

console.log(obj3.libroFavoritos);
console.log(obj.libroFavoritos);

//Como ordenar listas de objetos en funcion de una propiedad

//ordenado por anyo
const listaPeliculas = [
    {titulo: 'Titanic', anyo: 1945},
    {titulo: 'Pulgarcito', anyo: 2004},
    {titulo: 'Belen, la ciudad perdida', anyo: 1992},
    {titulo: 'amor en invierno', anyo: 2002}
]

listaPeliculas.sort((a, b) => a.anyo - b.anyo);

console.log(listaPeliculas);


//ordenado por titulo
listaPeliculas.sort((a, b) => {
    const tituloA = a.titulo.toLowerCase();
    const tituloB = b.titulo.toLowerCase();

    if (tituloA < tituloB) {
        return -1;

    } else if(tituloA > tituloB) {
        return +1;
    } else{
        return 0;
    }
});

console.log(listaPeliculas);