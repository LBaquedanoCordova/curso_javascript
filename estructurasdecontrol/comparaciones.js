//COMPARACIONES

//IGUALDAD


if (5 == 5) {
    console.log("5 es igual 5");
}

if (5 === 5) {
    console.log("5 es muy igual 5");
}

let a = 5;
let b = "5";

console.log(typeof(a));
console.log(typeof(b));

//compara solo el valor
if (a == b) {
    console.log("a es igual b -debil");
}


//compara el valor y el tipo de datos
if (a === b) {
    console.log("a es igual b -fuerte");
}

let c = 8;
let d = "8";

if (c != d) {
    console.log("c es diferente de d -debil");
}

if (c !== d) {
    console.log("c es diferente de d-fuerte");
}

//Comparaciones mayor que y menor que

let max = 13;
let min = 12;

if (max > min) {
    console.log('max es mayor que min');
}

if (max >= min) {
    console.log('max es mayor igual que min');
}



if (max <= 13) {
    console.log('max es menor igual que min'); //no cumple
}

if (max < 14) {
    console.log('max es menor que min'); //no cumple
}
