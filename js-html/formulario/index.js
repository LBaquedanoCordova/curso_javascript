/*
El método getElementById en JavaScript se utiliza para obtener un
elemento del Document Object Model (DOM) de una página web mediante su
atributo id.
*/

const f = document.getElementById("formulario")

console.log(f);
/* 
El método addEventListener en JavaScript se utiliza para registrar un evento a un
objeto específico.
*/

//sinatxis
//element.addEventListener(event, function, useCapture);


f.addEventListener("submit", evento => {
    console.log(evento);
    evento.preventDefault()
})

//segundo ejemplo con getElementById

const miDiv = document.getElementById('midiv');
console.log(miDiv);

if (miDiv) {
    miDiv.textContent = 'Nuevo comtenido del div'
} else {
    console.log('Elemento no encontrado');
    
}

//segundo ejemplo con addEventListener

const miboton = document.getElementById('miboton');

miboton.addEventListener('click', function(){
    alert('Boton clicado')
})