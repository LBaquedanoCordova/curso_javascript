//sentencia switch

let nota = 6;

switch (nota) {
  case 5:
    console.log("En buena hora, has obtenido la nota maxima");
    break;
  case 4:
    console.log("Has obtenido, una buena nota pero puedes mejorar");
    break;
  case 3:
    console.log("Has aprobado con el suficiente");
    break;
  case 2:
    console.log("Has desaprobado por poco");
    break;
  case 1:
    console.log("No estudiaste nada, esfuerzate mas");
    break;
    
  //es buenas practicas siempre agregar un default en una sentencia switch
  default:
    console.log("Ingresaste una nota incorrecta");
    break;
}
