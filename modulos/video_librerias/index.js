//AXIOS

/*
Axios es una popular biblioteca de JavaScript utilizada para
hacer solicitudes HTTP desde el navegador y Node.js.
para realizar peticiones a servidores web
manejar respuestas
gestionar errores.
*/

import axios from "axios";

axios
  .get("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(function (response) {
    // handle success
    console.log('Success');
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log('Error')
    console.log(error);
  });
