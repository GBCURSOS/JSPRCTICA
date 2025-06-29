/* 
En JavaScript, una función se declara proporcionando:
1. El nombre de la función
2. Los nombres de los parámetros
3. El cuerpo de la función, que calcula y devuelve el resultado de la función
 */

'use strict'
/*
console.log('\n Declaración estándar de una función')

function average(x, y) {
  return (x + y) / 2  // '6' + '7' '67' => 67/2 = 33.5
}



console.log('\n llamada a una función')
let result = average(6,7) // result is set to 6.5
console.log('result: n', result) 

console.log('\n Parametros no necesitan estar con tipos.')
result = average('6', '7') // result is set to 33.5
console.log('result: c', result) 




console.log('\n se puede cerrar una función con una instrucción return')

function indexOf(arr, value) {

  for (let i in arr) {
    if (arr[i] === value) return i
  }

  return -1
}

const vector = [2, 3, 5, 7, 11, 13, 17]

let result = indexOf(vector, 13)
console.log('result: 13', result)
result = indexOf(vector, 22) 
console.log('result: 22', result) 
*/

console.log('\n Cuando se retorne un objeto ', 
  ' se debe colocar cómo mínimo la llave de apertura en la misma línea del return')

function stats(x, y) {
  return { 
    average: (x + y) / 2, 
    max: Math.max(x, y), 
    distance: Math.abs(x - y)
  } 
}

let result = stats(6, 7)
console.log('result:6,7:', result) // { average: 6.5, max: 7, distance: 1 }
result = stats(1, 7)
console.log('result:1,7:', result) 
console.log("result:1,7 max:", result.max); 
