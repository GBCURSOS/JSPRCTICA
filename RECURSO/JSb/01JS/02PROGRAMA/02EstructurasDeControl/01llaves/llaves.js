
'use strict'

console.log('\nif ')
let ventas = 10000
let objetivo = 20000
let bono
let desempenno
if (ventas > objetivo) {
  desempenno = 'Bueno'
  bono = 100
} else {
  desempenno = 'Regular'
  bono = 0   
}

console.log('bono:', bono) // 0
console.log('desempenno:', desempenno) // Mediocre
console.log('\n if/else ')
ventas = 30000
if (ventas > 2 * objetivo) {
  desempenno = 'Excelente'
  bono = 1000
} else if (ventas > objetivo) {
  desempenno = 'Bueno'
  bono = 100
} else {
  desempenno = 'Regular'
  bono = 0   
}

console.log('bono:', bono) // 100
console.log('desempenno:', desempenno) // Good
console.log('\n Llaves NO necesarias')
if (ventas > objetivo) 
  bono = 100

console.log('\n Esto falla con consolas JS que leen una línea a la vez')
if (ventas > objetivo) 
  bono = 100
else
  bono = 0

console.log('// Se puede usar llaves ó colocar todo en una sola línea')
if (ventas > objetivo) bono = 100; else bono = 0

console.log('\n proceso que se puede simplificar...')
const x = 17
const y = 29
let max = undefined
if (x > y) max = x; else max = y
console.log('max:', max) // 29

console.log('\n ...usando un operador condicional:')
max = x > y ? x : y
console.log('max:', max) // 29
