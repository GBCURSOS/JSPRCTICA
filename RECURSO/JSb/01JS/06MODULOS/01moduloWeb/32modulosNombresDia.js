const nombresDia = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export function diaNombre(numero) {
  return nombresDia[numero];
}
export function diaNumero(nombre) {
  return nombresDia.indexOf(nombre);
}
