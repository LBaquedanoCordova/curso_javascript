//carga y sobrecarga de funciones

function saludar() {
    hola();
}

function hola() {
    console.log('soy la funcion hola()');
}

saludar();

//1. global
//2. saludar() global()
//3. hola() saludar() global()
//4. saludar() global()
//5. global()

function recursive() {
    recursive();
}

recursive();

function restar(num1, num2) {
    return num1 -num2;
}

console.log(restar(8));
