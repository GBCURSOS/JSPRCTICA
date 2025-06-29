
'use strict'
console.log('\n Cuando se compara con números, las cadenas se convierten a números')
console.log('\'42\' < 5:', '42' < 5) 
console.log('\'\' < 5:', '' < 5) 
console.log('\'Hello\' <= 5:', 'Hello' <= 5) 
console.log('5 <= \'Hello\':', 5 <= 'Hello') 

console.log('// Cuando se compara con números, los arreglos se convierten a números')
console.log('[4] < 5:', [4] < 5) 
console.log('[] < 5:', [] < 5) 
console.log('[3, 4] < 5:', [3, 4] < 5) 

console.log('// Si ningún operando es número, se convierte en cadena')
console.log('[1, 2, 3] < {}:', [1, 2, 3] < {}) 

console.log('// Las reglas pueden perder objetividad y se convierten inútiles')
console.log('\'\' == 0:', '' == 0) 
console.log('\'0\' == 0:', '0' == 0) 
console.log('\'0\' == false:', '0' == false) 
undefined == false 
