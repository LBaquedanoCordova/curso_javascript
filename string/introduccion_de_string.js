//Sesion 04 - Strings(Cadenas de caracteres)

let strSng = 'Hola soy un texto con comillas simples'
let strDbl = 'Hola soy un texto con comillas dobles'

console.log(strSng);
console.log(strDbl);


let strComillas = "El otro dia me dijo literalmente \"ve a sacar la basura\""
let strComillasSimples = 'El otro dia me dijo literalmente "ve a sacar la basura"'

let strComillasDobles = "El otro dia me dijo literalmente 've a sacar la basura'"

let strComillasSimples2 = 'El otro dia me dijo literalmente \'ve a sacar la basura\''

console.log(strComillas);
console.log(strComillasSimples);
console.log(strComillasDobles);


//Comillas invertidas


let strBackticks = `Hola esto es un string con brackticks`;

console.log(strBackticks);

let nombre = "Iñigo";
let saludo = `Hola, ${nombre} bienvenido`
console.log(saludo);


//Plantillas HTML

let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>`;

console.log(plantilla);

//Introduccion de variables en html

let libro = ["Empieza por el porque", "El monje que vendio su ferrari","El poder del ahora"];