
'use strict'
console.log('\n números desde cadenas')
console.log('parseFloat(\'3.14\'):', parseFloat('3.14')) //  3.14
console.log('parseInt(\'3\'):', parseInt('3')) // 3

console.log('\n otros números')
console.log('parseInt(\' 3A\'):', parseInt(' 3A')) // tres espacios en blanco y caracter ignorados

console.log('\n NaN si la cadena numérica NO empizar con un dígito')
console.log('parseInt(\' A3\'):', parseInt(' A3')) // NaN

/* RegEx, Regular Expression
   Cadena de texto genérica, que se usa a modo de patrón, y que sirve para localizar trozos de texto dentro de otro texto mayor.
   https://regexr.com/
   https://www.w3schools.com/jsref/jsref_obj_regexp.asp
*/

console.log('\n Regex Enteros Hex')
let str = '1729'
let value = undefined
const intRegex = /^[+-]?[0-9]+$/
if (intRegex.test(str)) value = parseInt(str)
console.log('value:', value) // 1729
str = '1729th'
value = undefined
console.log('value:', value) // undefined

console.log('\n Regex para punto flotante')
str = '1.729e3'
value = undefined
const floatRegex = /^[+-]?((0|[1-9][0-9]*)(\.[0-9]*)?|\.[0-9]+)([eE][+-]?[0-9]+)?$/
if (floatRegex.test(str)) value = parseFloat(str)
console.log('value:', value) // 1729
console.log('\n Transformando un número en otra base')
console.log('parseInt(\'deadbeef\', 16):', parseInt('deadbeef', 16)) // 3735928559
