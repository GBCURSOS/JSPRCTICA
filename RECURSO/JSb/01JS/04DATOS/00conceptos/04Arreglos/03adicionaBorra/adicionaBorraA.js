
'use strict'

let arr = [9]
arr.push(16, 25) // arr es ahora [9, 16, 25]
console.log('arr:', arr) 

arr.unshift(0, 1, 4) // arr es ahora [0, 1, 4, 9, 16, 25]
console.log('arr:', arr) 

arr = [0, 1, 4, 9, 16, 25]
let start = 3
let deleteCount = 2
let x1 = 36
let x2 = 49
let x3 = 64
let deletedElements = arr.splice(start, deleteCount, x1, x2, x3)
console.log('arr:', arr) // [0, 1, 4, 36, 49, 64, 25]
console.log('deletedElements:', deletedElements) // [9, 16]

arr = [0, 1, 12, 24, 36]
start = 2
// Sustituye arr[inicio] y arr[inicio + 1]
arr.splice(start, 2, 16, 25) // arr es ahora [0, 1, 16, 25, 36]
console.log('arr:', arr) 
// Añadir elementos al inicio del índice
arr.splice(start, 0, 4, 9) // arr es ahora [0, 1, 4, 9, 16, 25, 36]
console.log('arr:', arr) 
// Delete the elements in the indexes start and start + 1
arr.splice(start, 2) // arr es ahora [0, 1, 16, 25, 36]
console.log('arr:', arr) 
// Borrar todos los elementos a partir del inicio del índice
arr.splice(start) // arr es ahora [0, 1]
console.log('arr:', arr) 

console.log('\n Los valores de índice negativos se cuentan desde el final de la matriz')
arr = [0, 1, 4, 16]
arr.splice(-1, 1, 9) // arr es ahora [0, 1, 4, 9]
console.log('arr:', arr) 
console.log('\n splice devuelve un array con los elementos eliminados')
arr = [1, 4, 9, 16]
deletedElements = arr.splice(1, 2) // arr es ahora [1, 16], deletedElements es [4, 9]
console.log('arr:', arr) 
console.log('deletedElements:', deletedElements) 
