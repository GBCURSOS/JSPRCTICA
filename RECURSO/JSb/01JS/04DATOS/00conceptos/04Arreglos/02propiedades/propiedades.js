
'use strict'

const names = ['Peter', 'Paul', 'Mary']
console.log('names.length:', names.length)

const someNames = [ , 'Smith', , 'Jones'] 
console.log('someNames.length:', someNames.length) 

someNames[5] = 'Miller' 
console.log('someNames', someNames)
console.log('someNames.length:', someNames.length) 

someNames.length = 100
console.log('someNames:', someNames) 

someNames.length = 4 
console.log('someNames:', someNames) 

someNames.length = 6;
console.log("someNames:", someNames); 

console.log('\n Operador in')
console.log('\'2\' in someNames:', '2' in someNames) // false—no property '2'
console.log('3 in someNames:', 3 in someNames) // true—there is a property '3'

const squares = [0, 1, 4, 9]
squares[-1] = 1 // [ 0, 1, 4, 9, '-1': 1 ]
console.log('squares:', squares) // [0, 1, 4, 9, '-1': 1]
console.log('squares:', squares[4]) // [0, 1, 4, 9, '-1': 1]
console.log('squares:', squares[-1]) // [0, 1, 4, 9, '-1': 1]

