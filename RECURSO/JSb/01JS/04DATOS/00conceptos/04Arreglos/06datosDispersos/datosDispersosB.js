
'use strict'

console.log('\n Array.from sustituye los elementos que faltan por indefinidos')
console.log('Array.from([ , 2, , 9]):', Array.from([ , 2, , 9])) // [undefined, 2, undefined, 9]

console.log('\n join convierte los elementos omitidos e indefinidos en cadenas vacías')
console.log('[ , 2, undefined, 9].join(\' and \'):', [ , 2, undefined, 9].join(' and ')) // ' and 2 and  and 9'

console.log('\n La mayoría de los métodos dejan en su sitio los elementos que faltan')
console.log('[ , 2, , 9].map(x => x * x):', [ , 2, , 9].map(x => x * x)) // [ , 4, , 81]

console.log('\n Sin embargo, sort los mueve al final')
let someNumbers = [ , 2, , 9]
someNumbers.sort((x, y) => y - x) // someNumbers es ahora [9, 2, , , ]
console.log('someNumbers:', someNumbers) 

console.log('\n Para eliminar los elementos que faltan, utilice un filtro')
console.log('[ , 2, , 9].filter(x => true):', [ , 2, , 9].filter(x => true)) // [2, 9]
