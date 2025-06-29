
'use strict'
console.log('\nLos valores de un arreglo son encerrados con corchetes')
const numeros = [1, 2, 3, 'algunos', {}]
console.log('numeros:', numeros) // [1, 2, 3, 'algunos']

console.log('\nUn arreglo puede tener valores sin definir')
const otrosN = [ , 2, , 9] // Sin definición, índices: '0', '2'
console.log('otrosN:', otrosN) // [<item vacío>, 2, <item vacío>, 9]

console.log('\nSe puede adicionar ítems al final')
otrosN[6] = 11 // Ahora la longitud de otrosN es 7
console.log('otrosN:', otrosN) // [<item vacio>, 2, <item vacio>, 9, <items vacios>, 11]

console.log('\n una coma no indica elementos vacios')
const desarrollo = [
  'Nombre1 Apellido1',
  'Nombre2 Apellido2',
  // adiciona más elementos a continuación
]
console.log('desarrollo:', desarrollo) // ['Nombre1 Apellido1', 'Nombre2 Apellido2']

console.log('\nDado que los arreglos son objetos, se pueden adicionar ítems en forma arbitraria')
numeros.suerte = true
console.log('numeros:', numeros) // [1, 2, 3, 'algunos', suerte: true]

console.log('\n Convertir un arreglo en cadena')
const str = '' + [1, 2, 3]
console.log('str:', str) // 1,2,3

console.log('\n Un arreglo de dos dimensiones es un arreglo de arreglo')
const cuadradoMagico = [
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
]
console.log('cuadradoMagico:', cuadradoMagico) 
// [[16, 3, 2, 13], [5, 10, 11, 8], [9, 6, 7, 12], [4, 15, 14, 1]]

console.log('\n Se usas dos pares de corchete para acceder un elemento')
const elemento = cuadradoMagico[1][2] // 11
console.log('elemento:', elemento) 
