function encontrarNumero(arr, valorBuscado) {
  return arr.find((num) => num === valorBuscado);
}

// Ejemplo de uso
let numeros = [10, 20, 30, 40, 50];
let resultado = encontrarNumero(numeros, 30);
console.log(resultado); // Salida: 30

let resultadoNoEncontrado = encontrarNumero(numeros, 60);
console.log(resultadoNoEncontrado); // Salida: undefined

function encontrarNumero(arr, valorBuscado) {
    return arr.find(num => num === valorBuscado);
}

// Ejemplo de uso
numeros = [10, 20, 30, 40, 50];
resultado = encontrarNumero(numeros, 30);
console.log(resultado); // Salida: 30

resultadoNoEncontrado = encontrarNumero(numeros, 60);
console.log(resultadoNoEncontrado); // Salida: undefined