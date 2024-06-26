//Metodos de cadenas de texto -- parte 03
//https://regerxr.com

let textoLargo = `Java es un lenguaje de programación y una plataforma informática que fue 
comercializada por primera vez en 1995 por Sun Microsystems.`

/*
MATCH
Utiliza expresiones regulares para buscar coincidencias.
Devuelve un array con las coincidencias encontradas o null si no hay coincidencias.
Es más flexible y potente para búsquedas complejas.
*/

console.log(textoLargo.match(/una/g));
console.log(textoLargo.match(/css/g));

/*
INCLUDES
Busca una subcadena específica dentro de una cadena.
Devuelve un booleano (true o false).
Es más simple y directo para búsquedas exactas y no requiere el uso de expresiones regulares.
*/

console.log(textoLargo.includes("1995"));

/*
STARTWISH
se utiliza para determinar si una cadena de texto comienza con una subcadena específica. 
Devuelve true si la cadena comienza con la subcadena dada, y false en caso contrario.
*/
console.log(textoLargo.startsWith("sun"));
console.log(textoLargo.startsWith("J"));


/*
ENDWISH
se utiliza para determinar si una cadena de texto termina con una subcadena específica.
Devuelve true si la cadena termina con la subcadena dada, y false en caso contrario.
*/
console.log(textoLargo.endsWith("arboles"));
console.log(textoLargo.endsWith("systems."));