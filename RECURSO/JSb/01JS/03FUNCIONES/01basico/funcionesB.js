
'use strict'

console.log('\n Una función puede estar guardada en una variable')

function average(x, y) {
  return (x + y) / 2
}

let f = average
console.log('\n LLamar la función')
let result = f(6, 7)
console.log('result:', result) // 6.5

console.log('\n Se puede colocar otra función en la misma variable')
f = Math.max
result = f(6, 7)
console.log('result:', result) // 7

console.log('\n Pasar una función a otra función')
let arreglo = [0, 1, 2, 4]
f = Math.sqrt
result = arreglo.map(Math.sqrt)
console.log('result:n', result) // [0, 1, 1.4142135623730951, 2]
result = arreglo.map(f); 
console.log('result:f', result) 

function funcion (f, arreglo){
  return arreglo.map(f); 
}

let nuevo = funcion(Math.sqrt, arreglo)
console.log('arregloFuncion',nuevo)
nuevo = funcion(Math.log, arreglo);
console.log("arregloFuncion", nuevo);



