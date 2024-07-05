const boton = document.querySelector('#btn');

console.log(boton);

/*
confirm()
La función confirm() es una función integrada en JavaScript que
muestra un cuadro de diálogo modal al usuario con un mensaje y
botones de confirmación ("Aceptar" y "Cancelar").

alert()
La función alert() es una función integrada en JavaScript que muestra
un cuadro de diálogo modal al usuario con un mensaje y un botón de "Aceptar". 
*/
boton.addEventListener('click', () => {
    //alert('Se ha hecho click en el boton')
    //confirm('¿estas de acuerdo?') && console.log('ok');
    /*
    Sintaxis del Operador Ternario
    condicion ? expresion_verdadera : expresion_falsa
    */
    //confirm('¿Estas de acuerdo?') ? console.log('ok') :console.log('No');

    const respuesta = confirm('¿Estas de acuerdo?')
    if (respuesta) {
        console.log('Estas de acuerdo');
    } else {
        console.log('No estas de acuerdo');
    }
})
/*
querySelector()
La función querySelector() es un método en JavaScript que permite seleccionar
un solo elemento del DOM (Documento Object Model) utilizando un selector CSS.

prompt()
La función prompt() en JavaScript se utiliza para mostrar un cuadro de
diálogo modal al usuario que solicita entrada de datos.
*/

const botonInfo = document.querySelector('#info')
botonInfo.addEventListener('click', () => {
    const nombre = prompt('¿cual es tu nombre?')
    //console.log(`Tu nombre es: ${nombre}`);

    if (nombre) {
        console.log(`Tu nombre es: ${nombre}`);
    } else {
        console.log(`No has ingresado nada`);
    }
})

const array = [
    {nombre: 'Gorka', edad: 45},
    {nombre: 'Julian', edad: 27},
    {nombre: 'Sara', edad: 11}
];

// console.log(array);
console.table(array);