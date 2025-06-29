
export const nombresDia = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export const diasHabiles = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes"
];

const diaNombre = (numero) => {
  console.log("modulo nombre: ", numero);
  console.log("modulo nombresDia:", nombresDia);
  return nombresDia[numero];
};

export default diaNombre;
