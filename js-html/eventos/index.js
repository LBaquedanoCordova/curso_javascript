const hTexto = document.getElementById("h-texto");
console.log(hTexto);

hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail );
    /*
    innerText es una propiedad en JavaScript que se utiliza para obtener
    o establecer el contenido de texto de un elemento HTML.
    */
    hTexto.innerText = evento.detail.texto;
    /*
    La propiedad style en JavaScript te permite acceder y modificar directamente
    los estilos CSS en línea de un elemento HTML.
    */
    hTexto.style.color = evento.detail.color
})

/*
CustomEvent es una interfaz de JavaScript que permite crear eventos personalizados.

sintaxis basica para la creacion de un CustomEvent

const evento = new CustomEvent('nombreDelEvento', {
    detail: {
        Detalles personalizados del evento
    }
});

*/

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        /*
        La propiedad detail es una característica de los eventos personalizados
        creados con CustomEvent
        */
        detail: {
            texto: nuevoTexto,
            color: color
        }
    })
    /*
    dispatchEvent()
    es un método en JavaScript que se utiliza para disparar (o despachar)
    un evento en un nodo del DOM.

    sintaxis

    element.dispatchEvent(event);

    */
    hTexto.dispatchEvent(evento)
}