
'use strict'
console.log('\n while')
let balance = 0
let pago = 20000
let objetivo = 1000000
let porcentaje = 2
let annos = 0
while (balance < objetivo) {
  balance += pago
  let interes = balance * porcentaje / 100
  balance += interes
  annos++
}
console.log(`OBjetivo alcanzado en ${annos} años.`)

console.log('\n do')
let s = 'ESta es una Prueba'
let i = s.indexOf(' ')
console.log('i:', i)  
do {
  i++
} while (i < s.length && s[i] != ' ')
console.log('i:', i)  