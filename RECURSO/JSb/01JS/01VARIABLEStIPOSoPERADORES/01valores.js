// node numbers.js

'use strict'
console.log('\n Rango seguro para enteros')
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log('10 * Number.MAX_SAFE_INTEGER:', 10 * Number.MAX_SAFE_INTEGER) // 90071992547409900

console.log('\n Convertir cadenas a números')
const notQuitePi = parseFloat('3.14') // número: 3.14
const evenLessPi = parseInt('3') // entero: 3
console.log('notQuitePi:', notQuitePi) // 3.14
console.log('evenLessPi:', evenLessPi) 

console.log('\n Convertir números a cadenas')
const notQuitePiString = notQuitePi.toString() // cadena: '3.14'
const evenLessPiString = (3).toString() // cadena '3'
console.log('notQuitePiString:', notQuitePiString) // 3.14
console.log('evenLessPiString:', evenLessPiString) 

console.log('\n Punto flotante es truncado a un entero')
console.log('\'Hola\'.substring(0, 2.5):', 'Hola'.substring(0, 2.5)) // cadena:  'He'

console.log('\n Esto no')
console.log('\'Hola\'[2.5]:', 'Hola'[2.5]) // undefined
