//$(selector).accion()

// ocultar el h1 con jquery
// $("h1").hide()

/* $(document).ready(() => {
    })
    La instrucción $(document).ready(() => {}) es una forma de usar
    jQuery para ejecutar código JavaScript cuando el DOM de la página ha terminado de cargarse. 
 */

/*
La instrucción $(() => {}) es una forma abreviada de escribir
$(document).ready(() => {}) en jQuery.
*/

$(() => {
/*     $('#ele1').hide();
    $('.show-btn').hide(); */

    /*
    click()
    El método .click() se usa para asociar un controlador de eventos
    de clic a los elementos seleccionados.

    dblclick()
    utiliza doble click.
    
    hide()
    El método .hide() se usa para ocultar los elementos seleccionados.

    show()
    El método .show() en jQuery se utiliza para mostrar elementos que
    estaban ocultos.

    fadeOut()
    Este método oculta los elementos seleccionados desvaneciéndolos gradualmente

    fadeIn()
    Este método muestra los elementos seleccionados desvaneciéndolos gradualmente.
    */
    $('.hide-btn').click(() =>{
        console.log('ocultando..');
        // $('h1').hide();
        $('h1').fadeOut();
    })

    $('.show-btn').click(() => {
        console.log('mostrando..');
        // $('h1').show();
        $('h1').fadeIn();
    })

    $('li').dblclick(() => {
        $('h1').css({color: 'red'})
    })
    
    /*
    append()
    El método .append() en jQuery se utiliza para insertar contenido
    al final de los elementos seleccionados en el DOM. 

    prepend()
    El método .prepend() en jQuery funciona de manera similar a .append(),
    pero en lugar de añadir contenido al final de los elementos seleccionados,
    lo añade al principio
    */

    $('.new-element').click(() => {
        //$('ul').append('<li>elemento nuevo</li>')
        $('ul').prepend('<li>elemento nuevo</li>')
    })

    /*
    mouseenter()
    El método .mouseenter() en jQuery se utiliza para adjuntar un controlador
    de eventos que se activa cuando el cursor del mouse entra en el área delimitada
    por el elemento seleccionado.

    mouseleave()
    El método .mouseleave() en jQuery se utiliza para adjuntar un controlador de
    eventos que se activa cuando el cursor del mouse sale del área delimitada por
    el elemento seleccionado.

    target
    En JavaScript y jQuery, target es una propiedad de los objetos de evento que se
    utiliza para referirse al elemento en el cual ocurrió el evento.
    */
    $('li').mouseenter((elem) => {
        elem.target.style.color = 'green'
    })

    $('li').mouseleave((elem) => {
        elem.target.style.color = 'black'
    })


})