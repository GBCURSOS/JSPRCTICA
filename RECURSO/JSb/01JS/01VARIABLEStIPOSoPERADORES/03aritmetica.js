// Operadores Aritméticos

'use strict'
console.log('\n Operaciones Aritméticas')
console.log('1 / 2:', 1 / 2) // 0.5
console.log('34 % 2:', 34 % 2) // 0
console.log('35 % 2:', 35 % 2) // 1
console.log('3.5 % 1.2:', 3.5 % 1.2) // 1.1
console.log('2 ** 10:', 2 ** 10) // 1024
console.log('2 ** -1:', 2 ** -1) // 0.5
console.log('2 ** 0.5:', 2 ** 0.5) // 1.4142135623730951
console.log('(-2) ** 0.5:', (-2) ** 0.5) // NaN
console.log('NaN * 0.5:', NaN * 0.5) // NaN

console.log('\n Asignaciones Aritméticas')
let counter = 0
counter += 10 // counter = counter + 10
console.log('contador:', counter) 

console.log('\n Incrementa')
counter++ 
console.log('contador:', counter) // 11

console.log('\n Dos formas de incremento')
counter = 4
let post = counter++
let pre = ++counter
console.log('counter:', counter) // 6
console.log('post:', post) // 4
console.log('pre:', pre) // 6

console.log('\n el operador + concatena strings')
counter = 7
let agent = '00' + counter // cadena: '007'
console.log('agente:', agent) 
