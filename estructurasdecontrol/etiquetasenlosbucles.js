//break y continue
//labels

let unidades = 0;
let decenas = 0;

//Este es un bucle while etiquetado con bucleDecenas 
bucleDecenas: while (true) {  // Bucle externo (decenas)
    //Este es un bucle while etiquetado con bucleUnidades 
    bucleUnidades: while (true) { // Bucle interno (unidades)
        console.log(`El numero actual es: ${decenas}${unidades}`);
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades;  // Salir del bucle interno cuando unidades alcanza 10
            
        }
        if (decenas === 2) {
            console.log(`El numero actual es: ${decenas}${unidades}`);
            break bucleDecenas; // Salir del bucle externo cuando decenas alcanza 2
        }
    }
    decenas++
}
console.log("Ya hemos terminado");


//let unidades = 0;
//let decenas = 0;

/*
while (true) {//decenas
    
    while (true) {//unidades
        console.log(`El numero actual es: ${decenas}${unidades}`);
        unidades++;
        if (unidades === 10) {
            unidades = 0
            break;
        }
    }

    decenas++;
    if (decenas === 2) {
        console.log(`El numero actual es: ${decenas}${unidades}`);
        break;
    }

}

*/

/*
let unidades = 0;
let decenas = 0;


while (true) {
    while (true) {
        console.log(`El numero actual es: ${decenas}${unidades}`);
        unidades++;

        if (unidades === 10) {
            unidades = 0;
            break;
        }

    }

    decenas++;
    if (decenas === 2) {
        console.log(`El ultimo numero es: ${decenas}${unidades}`);
        break;
    }
}
*/

/*
let unidades = 0;
let decenas = 0;
let centenas = 0;

bucleCentenas: while (true) {
    bucleDecenas: while (true) {
        bucleUnidades: while (true) {
            console.log(`El numero actual es: ${centenas}${decenas}${unidades}`);
            unidades++;
            if (unidades === 10) {
                unidades = 0;
                break;
            }
        }
        decenas++;
        if (decenas === 10) {
            decenas = 0;
            break;
        }


    }
    centenas++;
    if (centenas === 1) {
        console.log(`El ultimo numero es: ${centenas}${decenas}${unidades}`);
        break;
    }
}
*/