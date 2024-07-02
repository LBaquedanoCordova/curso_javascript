/* const getAutor = () => {
    return 'Miguel Grau'
}
export const libro = 'La metamorfosis'; */

// Exportar una función por defecto
//export default getAutor;

/*solo puede exportar un valor por defecto. Intentar
exportar más de un valor por defecto generará un error. */

export default function obtenerCadena (cadena) {
    let palabra = cadena.split(' ')
    return palabra
}

/* 
//exportando una constante por defecto

const string = 'Hola';
export default string;
 */
//console.log(obtenerCadena('hola mundo'));