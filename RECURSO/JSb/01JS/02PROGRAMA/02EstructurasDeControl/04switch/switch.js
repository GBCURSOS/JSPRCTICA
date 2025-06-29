
'use strict'
console.log('\n Instrucción switch')
let algunaExpresion = 0
let descripcion = ''
switch (algunaExpresion) {
  case 0:
    descripcion = 'cero'
    break
  case false:
  case true:
    descripcion = 'booleano'
    break
  case '':
    descripcion = 'cadena vacía'
  default:
    descripcion = 'cualquier cosa'
}
console.log('descripción:', descripcion)
