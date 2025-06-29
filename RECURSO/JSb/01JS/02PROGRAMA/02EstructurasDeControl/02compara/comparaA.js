// node comparisons.js

'use strict'
console.log('\n operadores relacionales ')
console.log('3 < 4:', 3 < 4) // true
console.log('3 >= 4:', 3 >= 4) // false

console.log('\n cualquier comparación con NaN (Not a Number) produce falso')
console.log('NaN < 4:', NaN < 4) // false
console.log('NaN >= 4:', NaN >= 4) // false
console.log('NaN <= NaN:', NaN <= NaN) // false

console.log('\n Operadores relacionales que usan orden lexicográfuco con cadenas')
console.log('\'Hello\' < \'Goodbye\':', 'Hello' < 'Goodbye') // false—H comes after G
console.log('\'Hello\' < \'Hi\':', 'Hello' < 'Hi') // true—e comes before i

console.log('\n Operandos con tipos de datos diferentes')
console.log('\'42\' === 42:', '42' === 42) 
undefined === null // false
console.log('\'42\' === \'4\' + 2:', '42' === '4' + 2) 

console.log('\n Dos valores NaN no son iguales')
let x = NaN
x === NaN

console.log('\n Dos referencias a objetos son iguales si apuntan al mismo objeto')
let persona = { nombre: 'Dodo', edad: 42 }
let persona2 = persona
console.log('comparación referencias objetos iguales: ',persona === persona2) 
let persona3 = { nombre: 'Dodo', edad: 42 }
console.log('comparación referencias objetos diferentes: ',persona === persona3) 
