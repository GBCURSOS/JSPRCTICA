// archivo: utilidadesMath.js

// Función privada (no exportada)
function esPar(numero) {
  return numero % 2 === 0;
}

// Funciones que serán exportadas
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
}

function calcularPromedio(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}

function encontrarMaximo(numeros) {
  return Math.max(...numeros);
}

// Exportamos las funciones que queremos hacer públicas
module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  calcularPromedio,
  encontrarMaximo,
  esPrimo: function (numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  },
};
