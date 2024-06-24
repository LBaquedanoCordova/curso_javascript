//TIPOS PRIMITIVOS

//number
4;

//string

"Hola mundo";
'Hola mundo';
`Hola mundo`;


//boolean

true;
false;

//nulo y undefined

null;
undefined;

console.log(null === undefined);

//null, undefined, false, 0, NaN, "" ==> todas son falsy

if ("") {
    console.log('Cumple');
}else{
    console.log('No cumple');
}

/* si la condición dentro del if evalúa a un valor "falsy",
el bloque de código dentro del else se ejecutará. */