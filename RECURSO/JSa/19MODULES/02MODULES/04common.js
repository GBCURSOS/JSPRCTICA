const mathUtils = require("./04utilidadesMath");

console.log(mathUtils.sumar(5, 3)); // 8
console.log(mathUtils.multiplicar(4, 2)); // 8
console.log(mathUtils.calcularPromedio([1, 2, 3, 4, 5])); // 3
console.log(mathUtils.encontrarMaximo([10, 5, 8, 3])); // 10
console.log(mathUtils.esPrimo(17)); // true

// Esto dará un error porque esPar es una función privada
// console.log(mathUtils.esPar(4));  // Error: mathUtils.esPar is not a function
