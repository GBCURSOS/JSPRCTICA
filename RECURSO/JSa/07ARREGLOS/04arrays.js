let numeros = [5, 2, 8, 1, 9];

let maximo = numeros.reduce((max, valor) => {
  return valor > max ? valor : max;
}, 0);

console.log(maximo); // Output: 9

numeros = [5, 2, 8, 1, 9];

let minimo = numeros.reduce((min, valor) => {
  return valor < min ? valor : min;
}, numeros[0]); // Usando el primer elemento del arreglo como valor inicial

console.log(minimo); // Output: 1

let colores = ['rojo', 'verde', 'azul', 'verde', 'amarillo', 'rojo'];

let coloresUnicos = colores.reduce((unicos, color) => {
  if (!unicos.includes(color)) {
    unicos.push(color);
  }
  return unicos;
}, []);

console.log(coloresUnicos); // Output: ['rojo', 'verde', 'azul', 'amarillo']

function encontrarUnicosValores(array) {
  return array.reduce((unicos, valor) => {
    if (array.indexOf(valor) === array.lastIndexOf(valor)) {
      unicos.push(valor);
    }
    return unicos;
  }, []);
}

numeros = [1, 2, 3, 2, 4, 1, 5, 6, 7, 6, 8];
let valoresUnicos = encontrarUnicosValores(numeros);
console.log(valoresUnicos); // Output: [3, 4, 5, 7, 8]
