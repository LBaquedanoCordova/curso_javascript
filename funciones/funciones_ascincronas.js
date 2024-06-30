//funciones asincronas

function miAsinc(params) {
    //hace una llamada a una base de datos externa
    //puede darnos algun error
}

const promesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    //si esta todo correcto
    if (i !== 0) {
        resolve();
    } else {
        reject();
    }
})

promesa
    .then(() => console.log('Se ha ejecutado de forma correcta'))
    .catch(() => console.log('Error'))
    .finally(() => console.log('Yo me ejecuto siempre'))


/*
console.log(Math.floor(1.8));
console.log(Math.random());
*/


