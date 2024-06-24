/* LISTAS, ARRAY O ARREGLO */

//listas

const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null)
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];


console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//objetos
const movil = {
    altura: 20,
    ancho: 35,
    marca: "samsumg",
    isWhite: false,
    apps : ["netflix", "amazon prime", "youtube"],
    tarjeta : {
        marca: "Sandisk",
        alamacenamiento: 64
    },
    "altura-tarjeta": 4
}

movil.anyo = 2022;
movil.marca = "xiaomi";


//nombrando una variable con el valor de "marca"  para luego llamarla a traves de bracket notation
let newVar = "marca"

//aca la estamos llamando con bracket notation
console.log(movil[newVar]);

//llamando a las propiedades del objeto con dot notation
console.log(movil.marca);
console.log(movil.anyo);
console.log(movil.tarjeta.marca);
console.log(movil.apps);

//llamando a los elementos del array, que es una propiedad del objeto llamado apps
console.log(movil.apps[0]);
console.log(movil.apps[2]);

//llamando a las propiedades del objeto usando bracket notation
console.log(movil["apps"]);
console.log(movil["altura-tarjeta"]);



//Fechas


//Fecha y Hora Actual
const ahora = new Date();

console.log(ahora);

//utilizando milisegundos
const fecha_milis = new Date(10);
console.log(fecha_milis);


const fechaCadena = new Date("june 24 2024");
console.log(fechaCadena);

//Nota: Los meses van de 0 a 11 (enero es 0 y diciembre es 11).
const fechaValores = new Date(2024, 0, 15);
console.log(fechaValores);


//Obtener Componentes de la Fecha
const minutos = ahora.getMinutes();
console.log(minutos);

const segundos = ahora.getSeconds();
console.log(segundos);

const dia = ahora.getDay();
console.log(dia);

const mes = ahora.getMonth();
console.log(mes);

const anyo = ahora.getFullYear();
console.log(anyo);

//Establecer Componentes de la Fecha

const year = ahora.setFullYear(2024);
console.log(year);

const month = ahora.setMonth(6);
console.log(month);






