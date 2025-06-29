console.log("condición ? valorSiVerdadero : valorSiFalso");

let edad = 25;
let entrada = edad >= 18 ? "Adulto" : "Menor de edad";
console.log(entrada); // Output: "Adulto"

let miNumero = 7;
let mensaje = (miNumero % 2 === 0) ? "El número es par" : "El número es impar";
console.log(mensaje); // Output: "El número es impar"

let puntuacion = 85;
let calificacion = (puntuacion >= 90) ? "A" : (puntuacion >= 80) ? "B" : (puntuacion >= 70) ? "C" : "D";
console.log(calificacion); // Output: "B"

let dia = 3;
let nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  case 7:
    nombreDia = "Domingo";
    break;
  default:
    nombreDia = "Día inválido";
    break;
}

console.log(nombreDia); // Output: "Miércoles"

