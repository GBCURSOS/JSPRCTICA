
'use strict'
console.log('\n Enteros Grandes')
// https://www.w3schools.com/js/js_bigint.asp
let result = 815915283247897734345611269596115894272000000000n * BigInt(41)
  // 33452526613163807108170062053440751665152000000000n
console.log('result:', result) 

console.log('\n NO se puede mezclar con números normales')
try {
  815915283247897734345611269596115894272000000000n * 41
} catch (exception) {
  console.log('Error:', exception.message) 
}

console.log('\n métodos BigInt')
let n = 123456789101112131415n
let bits = 16
console.log('BigInt.asIntN(bits, n):', BigInt.asIntN(bits, n)) // -169n
console.log('BigInt.asUintN(bits, n):', BigInt.asUintN(bits, n)) // 65367n
