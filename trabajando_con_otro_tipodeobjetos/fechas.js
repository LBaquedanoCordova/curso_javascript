//trabajando con fechas

const fecha = new Date();
console.log(fecha);

//los mese nicializan en 0

const fecha2 = new Date(1987, 0, 20, 1, 23, 52, 45);
console.log(fecha2);

const fecha3 = new Date(1000000000); //formateadas a milisegundos
console.log(fecha3);

const fecha4 = new Date(1987, 0, 20, 1, 23, 52, 45);
console.log(fecha4);

//esto es un error no se pueden comparar fechas de esta manera
console.log(fecha2 === fecha4);


/*
getTime()
es un método de objetos Date en JavaScript que devuelve el tiempo
transcurrido en milisegundos desde el 1 de enero de 1970 00:00:00 UTC
hasta la fecha representada por el objeto Date.
*/

console.log(fecha2.getTime() === fecha4.getTime());//forma correcta de comparar fechas


const fechaHoy = new Date();
const tiempoMilisegundos = fechaHoy.getTime();
console.log(tiempoMilisegundos);

//Obtenr el dias, mes, año de una fecha
console.log(fecha2);

console.log(fecha2.getDate());

console.log(fecha2.getMonth() + 1);

console.log(fecha2.getFullYear());

//tolocaledatestring
/* 
El método toLocaleDateString() devuelve una cadena con una representación sensible al
idioma de la parte de la fecha especificada en la zona horaria del agente de usuario.
*/

console.log(fecha2.toLocaleDateString());
console.log(fecha2.toLocaleDateString('en-US'));
console.log(fecha2.toLocaleDateString('en-GB'));
console.log(fecha2.toLocaleDateString('ko-KR'));
console.log(fecha2.toLocaleDateString('fa-IR'));
//ETC