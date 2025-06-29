
'use strict'

const arr = [1, 3, 3, -7, 11, -20, 3, 0]
console.log('\n Verificar un valor en el arreglo')

let target = 3
let start = 4
let found = arr.includes(target, start) // true or false

let firstIndex = arr.indexOf(target, start) // first index or -1

let lastIndex = arr.lastIndexOf(target, start) // last index or -1

console.log('found:', found) // true
console.log('firstIndex:', firstIndex) // 6
console.log('lastIndex:', lastIndex) // 2

let firstElement = arr.find(x => x < 0) 
firstIndex = arr.findIndex(x => x < 0) 
console.log('firstElement:', firstElement) // -7
console.log('firstIndex:', firstIndex) // 3

const allNegative = arr.every(x => x < 0)
const atLeastOneNegative = arr.some(x => x < 0)
console.log('allNegative:', allNegative) // false
console.log('atLeastOneNegative:', atLeastOneNegative) // true

console.log('\n Encuentra todos los elementos que cumplen una condición')
let filtro = [-1, 7, 2, -9].filter((x) => x < 0);
console.log(typeof filtro)
console.log('[-1, 7, 2, -9].filter(x => x < 0):',filtro ) // [-1, -9]
