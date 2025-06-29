
'use strict'
// Funciones Aritméticas
// https://www.w3schools.com/jsref/jsref_obj_math.asp
// https://www.w3schools.com/js/js_math.asp
console.log('\n Evite usar las funciones globales isNaN e isFinite functions, debido a las conversines pueden dar malos resultados')
console.log('isNaN(\'Huella\'):', isNaN('Huella')) // true
console.log('isFinite([0]):', isFinite([0])) // true

console.log('\n max y min')
let x = 17
let y = 29
let values = [3, 1, 4, 1, 5, 9]
console.log('Math.max(x, y):', Math.max(x, y)) // el mayor entre x y y
console.log('Math.min(...values):', Math.min(...values)) // el elemento menor del arreglo

console.log('// redondeo & truncamiento')
console.log('Math.round(2.5):', Math.round(2.5)) // 3
console.log('Math.round(-2.5):', Math.round(-2.5)) // -2
console.log('Math.trunc(2.5):', Math.trunc(2.5)) // 2

console.log('// Números aleatorios')
let a = 1
let b = 7
for (let i = 0; i < 10; i++) {
  let randomDouble = a + (b - a) * Math.random()
  let randomInt = a + Math.trunc((b - a) * Math.random()) // where a, b are integers
  console.log({randomDouble, randomInt})
}
