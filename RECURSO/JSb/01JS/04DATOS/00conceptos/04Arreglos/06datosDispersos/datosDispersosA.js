
'use strict'

console.log('\n Sparse arrays situacion 1: elementos nulos ')
let someNumbers = [ , 2, , 9] // Sin valores en los indices  0 y 2
console.log('someNumbers:', someNumbers) // [<1 empty item>, 2, <1 empty item>, 9]

console.log('// Sparse arrays situacion 2: Adicionar un elemento mas allá del límite')
someNumbers[100] = 0 // Indices sin valor desde 4 al 99
console.log('someNumbers:', someNumbers) // [<1 empty item>, 2, <1 empty item>, 9, <96 empty items>, 0]

console.log('// Sparse arrays situacion 3: Incrementando la longitud')
const bigEmptyArray = []
bigEmptyArray.length = 10000 // sin valores
console.log('bigEmptyArray:', bigEmptyArray) // [<10000 empty items>]

console.log('// Sparse arrays situacion 4: Borrando un elemento')
delete someNumbers[1] // No longer an index property 1
console.log('someNumbers:', someNumbers) // [<3 empty items>, 9, <96 empty items>, 0]

