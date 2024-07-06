/*
drag and drop


El Drag and Drop (arrastrar y soltar) es una técnica de interacción en la
que los usuarios pueden arrastrar elementos de la interfaz de usuario y
soltarlos en diferentes ubicaciones. 
*/

const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.section')
// console.log(parrafos);


parrafos.forEach(parrafo => {
    /*
    dragstart
    Es un evento que se dispara cuando el usuario comienza
    a arrastrar un elemento. Este evento es crucial para implementar
    la funcionalidad de arrastrar y soltar.
    
    innerText
    es una propiedad en JavaScript que se utiliza para obtener
    o establecer el contenido textual de un elemento HTML, excluyendo
    cualquier HTML dentro de ese elemento.

    dragend
    El evento dragend se dispara cuando el usuario termina de arrastrar un elemento. 
    
    */
    parrafo.addEventListener('dragstart', event => {
        console.log('estoy arrastrando el parrafo: ' + parrafo.innerText);
        parrafo.classList.add('dragging');
        event.dataTransfer.setData('id', parrafo.id)
        const imagen_fantasma = document.querySelector('.imagen-fantasma');
        event.dataTransfer.setDragImage(imagen_fantasma, 0, 0)
        /*
        classList
        Es una propiedad de los elementos DOM que devuelve una
        colección activa de las clases del elemento.

        add
        El método add de classList se usa para agregar una o más clases al elemento.

        sintaxis de dataTransfer.setData()
        event.dataTransfer.setData(formato, datos);

        dataTransfer
        Es la propiedad del objeto evento que permite establecer y recuperar datos
        asociados con la operación de arrastrar y soltar.

        setData
        Es un método de dataTransfer que se utiliza durante el evento

        formato
        Es una cadena que especifica el tipo de datos que se está almacenando.
        Puede ser cualquier cadena que describa el tipo de datos que estás transfiriendo,
        como 'text/plain', 'text/html', 'id', etc.

        datos
        Es el valor de los datos que deseas transferir. Esto puede ser cualquier tipo
        de dato válido en JavaScript, como una cadena, número, objeto, etc.

        sintaxiis de setDragImage()
        event.dataTransfer.setDragImage(elemento, xOffset, yOffset);

        setDragImage()
        Metodo que se utiliza para establecer una imagen personalizada que se muestra
        durante la operación de arrastre.

        elemento
        Es el elemento HTML que se utilizará como imagen personalizada durante el arrastre.

        xOffset, yOffset
        Son valores opcionales que especifican el desplazamiento (offset) desde la posición
        del puntero del ratón hasta la esquina superior izquierda de la imagen personalizada.
        */
        
    })

    parrafo.addEventListener('dragend', () => {
        console.log('He terminado de arrastrar');
        parrafo.classList.remove('dragging')
    })
});

/*
Por defecto, muchos navegadores no permiten que un elemento arrastrado sea
soltado en otro elemento. Esto es porque el comportamiento predeterminado del
evento dragover es no permitir el "drop".

Para habilitar que un elemento pueda ser soltado, se debe prevenir esta acción
predeterminada usando event.preventDefault().

dragover
El evento dragover es parte de la API de arrastrar y soltar (drag and drop) en
HTML5. Se dispara cuando un elemento arrastrado está sobre una zona de destino
potencial. Este evento ocurre continuamente mientras el usuario arrastra un elemento
dentro del área de un elemento contenedor (drop zone).

drop
El evento drop se dispara cuando el usuario suelta el elemento arrastrado
dentro de una zona de destino específica.

preventDefault()
es un método de los eventos en JavaScript que se usa comúnmente
para evitar que el navegador realice la acción predeterminada asociada con el evento. 
*/
secciones.forEach(section => {
    section.addEventListener('dragover', event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
        /*
        dropEffect
        Propiedad que permite especificar el efecto visual o comportamiento deseado
        cuando un usuario suelta un elemento arrastrado sobre una zona de destino válida.
        Esto incluye indicar si se debe copiar, mover, vincular o ignorar el elemento arrastrado.
        */
        //console.log('drag over');
    })

    section.addEventListener('drop', event => {
        console.log('drop');
        const id_parrafo = event.dataTransfer.getData('id');
        //console.log('Parrafo id: ', id_parrafo);
        const parrafo = document.getElementById(id_parrafo);
        section.appendChild(parrafo)
        /*
        El método appendChild() es una función en JavaScript que se
        utiliza para agregar un nodo como hijo de otro nodo específico en
        el árbol DOM (Modelo de Objetos del Documento).
        */
    })

    /*
    sintaxis de dataTransfer.getData()
    event.dataTransfer.getData(formato);

    getData()
    es un método de dataTransfer que se utiliza para recuperar los datos
    almacenados previamente durante el evento dragstart.
    */
});
/* 
//ejemplo para entender innetText
const main = document.getElementById('mymain');
main.innerText = 'Nuevo Texto';
console.log(main.innerText); */

