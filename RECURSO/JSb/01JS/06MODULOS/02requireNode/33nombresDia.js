const nombresDia = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const diaNombre = (numero) => {
  console.log("modulo nombre: ", numero);
  console.log("modulo nombresDia:", nombresDia);
  return nombresDia[numero];
};

module.exports = diaNombre;
