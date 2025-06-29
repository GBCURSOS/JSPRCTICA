
'use strict'

let x = 36
let arr = [0, 1, 4, 9, 16, 25]
let deletedElement = arr.pop() 
console.log('arr:', arr) 

arr.push(x)
let newLength = arr.push(x) // arr es [0, 1, 4, 9, 16, x]
console.log('arr:', arr) 
console.log('deletedElement:', deletedElement) // 25
console.log('newLength:', newLength) 

console.log('\n Alternativas')
arr = [0, 1, 4, 9, 16, 25]
arr.length--
arr[arr.length] = x
console.log('arr:', arr) // [0, 1, 4, 9, 16, 36]

arr = [0, 1, 4, 9, 16, 25]
deletedElement = arr.shift() // arr is now [1, 4, 9, 16, 25]
console.log('arr:', arr) 
newLength = arr.unshift(x) // arr is now [x, 1, 4, 9, 16, 25]
console.log('arr:', arr) 
console.log('deletedElement:', deletedElement) // 0
console.log('newLength:', newLength) 
