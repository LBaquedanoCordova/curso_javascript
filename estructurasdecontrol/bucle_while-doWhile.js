//Bucles while

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++;
}



i = 15;

//do ... while
//ejecuta un bloque de código al menos una vez, independientemente de si se cumple o no la condicion
do {
    console.log("estoy en el do while");
} while (i < max);

i = 8;

do {
    console.log("estoy en el do while");
    i++;
} while (i < max);