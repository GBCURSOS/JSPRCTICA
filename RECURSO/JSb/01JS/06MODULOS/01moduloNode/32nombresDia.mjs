const nombresDia = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export const diaNombre = (numero) => {
  return nombresDia[numero];
};
export const diaNumero = (nombre) => {
  return nombresDia.indexOf(nombre);
};

/* 
console.log(diaNombre(4));
console.log(diaNumero('Martes'));
 */