//Metodos mas utilizados con cadenas de caracteres
//Como obtener la longitud de un string



let str = "Hola soy un string";
let array = ["netflix", "amazon prime", "youtube", "disney plus"]

//propiedad length
console.log(str.length);
console.log(array.length);

//obtener partes de cadenas de caracteres
//slice() 
//substring()
//substr() //deprecated, obsoleto


//con slice() 
let slice_str = str.slice(4, 10); /* la posicion 4 si la toma, pero la posicion 10 no se toma,
se toma una antes de la que se especifica */
console.log(slice_str);

let slice_arr = array.slice(1, 3);/*la posicion 1 si la toma , pero la posicion 3 no se toma,
se toma una antes de la que se especifica */
console.log(slice_arr);

//con substring()

let substring_str = str.substring(0, 4); //la posiscion 0 si la toma, en cambio aca la posicion 4 si se toma
console.log(substring_str);


//con substr()

let substr_str = str.substr(0, 5);/*la posicion 0 si la toma , pero la posicion 5 no se toma,
se toma una antes de la que se especifica */
console.log(substr_str);

//Remplazar parte del contenido de una cadena de texto
let cadena =  "Hola mi nombre es Fernando";
console.log(cadena);

//Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace('Fernando', 'Luis'));

let textoLargo = `Java es un lenguaje de programación y una plataforma informática que fue 
comercializada por primera vez en 1995 por Sun Microsystems.`

//Al utilizar strings solo reemplaza la primera instancia
console.log(textoLargo.replace('por', 'tambien'));

//Al utilizar la expresion regular /g (global), reemplaza todas las instancias.
console.log(textoLargo.replace(/por/g, 'tambien'));

