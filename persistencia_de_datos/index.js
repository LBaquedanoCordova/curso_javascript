//--------------------Local storage

/*
localStorage
es un objeto que permite almacenar datos de manera
persistente en el navegador web del usuario

setitem()
es un método que se utiliza para almacenar datos en los objetos
localStorage y sessionStorage.

getItem()
Es un metodo que se utiliza en JavaScript para recuperar el valor asociado
a una clave específica almacenada en localStorage o sessionStorage.

*/

/* localStorage.setItem('nombre', 'Fernando')
localStorage.setItem('nombre', 'Juan') */

//console.log(localStorage.getItem('nombre'));


/*
JSON.stringify()
es un método en JavaScript que se utiliza
para convertir un objeto JavaScript en una cadena JSON.

JSON.parse()
es un método en JavaScript que se utiliza para analizar (parsear)
una cadena JSON y convertirla en un objeto JavaScript
*/
localStorage.setItem('persona', JSON.stringify({nombre: 'Fio', edad: 18}))

// console.log(JSON.parse(localStorage.getItem('persona')));

/*
removeItem()
es un metodo que se utiliza en JavaScript para eliminar un ítem almacenado
en localStorage o sessionStorage. 
*/
localStorage.removeItem('nombre')

//----------------------sessionStorage()

//sessionStorage.setItem('nombre', 'Leandro')

sessionStorage.setItem('animal', JSON.stringify({especie: 'perro', raza: 'pitbull'}))

// console.log(JSON.parse(sessionStorage.getItem('animal')));

//------------------------Cookies
/*
sintaxis
document.cookie = 'nombreDeLaCookie=valorDeLaCookie';

opciones adicionales:

expires
La opción expires en una cookie especifica la fecha y la hora en que la cookie debe caducar

path
*/

document.cookie = 'nombreDeLaCookie = valorDeLaCookie'
console.log(document.cookie);

/*
.toUTCString()
Es una función de los objetos Date en JavaScript que convierte
una fecha a una cadena en formato UTC (Coordinated Universal Time). 
*/

document.cookie = 'segundaCookie = cookiePrueba; expires =' + new Date(2025, 0, 5).toUTCString();
console.log(document.cookie);