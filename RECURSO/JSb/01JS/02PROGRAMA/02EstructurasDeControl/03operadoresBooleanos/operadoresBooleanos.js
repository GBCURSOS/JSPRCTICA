
'use strict'
/*
console.log('\n Operadores Booleanos')
const a = [1, 2, 3]
console.log(a[0],a[1],a[2],a[30])
let i = 3
if (i < a.length && a[i] > 0) 
  i++
console.log('i:', i) 

 
console.log('\n Otro ejemplo')
console.log('0 && \'Harry\':', 0 && 'Harry') 
console.log('0 || \'Harry\':', 0 || 'Harry') 

console.log('\n Otro ejemplo')
let arg = 'Fred'
let result = arg && arg.toString()
console.log('result:', result) 
arg = null
result = arg && arg.toString()
console.log('result:', result) 


console.log('\n Otro ejemplo')
let defaultValue = 'N/A'
arg = '{ "nombre": "Pedro" }'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) 
arg = 'null'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) 
arg = '0'
result = JSON.parse(arg) || defaultValue
console.log('result:', result) 

console.log('\n Usando el operador ?? ')
let arg = '{ "nombre": "Pablo" }'
let defaultValue = "El elemento NO fue encontrado"
console.log('JSON1:',JSON.parse(arg))
let result = JSON.parse(arg) ?? defaultValue
console.log('result1:', result) 
arg = 'null'
console.log("JSON2:", JSON.parse(arg));
result = JSON.parse(arg) ?? defaultValue
console.log('result2:', result) 
arg = '0'
console.log("JSON3:", JSON.parse(arg));
result = JSON.parse(arg) ?? defaultValue
console.log('result3:', result) 
*/

console.log('\n El operador ?. ')
let persona = undefined
let recipiente = persona?.name
console.log('recipiente:', recipiente) 

console.log('\n Encadenando operadores ?.')
persona = { name: 'Fred' }
let longitud = persona?.name?.length
console.log('longitud:', longitud) 
 