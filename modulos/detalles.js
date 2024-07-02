function factorial(a) {
    /* Un factorial de un número es el producto de todos los
    números enteros positivos desde 1 hasta ese número. */
    //factorial de 5: 5 * 4 * 3 * 2 *1
    let factorial = 1;
    for (let index = 2; index <= a; index++) {
        factorial *= index;
        
    }
    return factorial;
}

console.log(factorial(10));