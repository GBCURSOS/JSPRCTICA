
'use strict'
console.log('\n Adición de más propiedades a un objeto')
let uno = {
  nombre: 'uno ',
  edad: 42, // adiciona más propiedades, por la coma
}
console.log('uno:', uno) // { nombre: 'uno Smith', edad: 42 }

console.log('\nEs normal insertar propiedades con el mismo nombre')
let edad = 43
uno = { nombre: 'uno ', edad: edad }
  // La propiedad edad es inicializada con el valor de la variable edad
console.log('uno:', uno) // { nombre: 'uno ', edad: 43 }

console.log('\nSe puede usar ésto')
uno = { nombre: 'uno ', edad } // Toma el valor de la variable edad
console.log('uno:', uno) // { nombre: 'uno ', edad: 43 }

console.log('\nUso de corchetes para las propiedades')
let variable = 'edad'
uno = { nombre: 'uno Smith', [variable.toLowerCase()] : 42 }
console.log('uno:', uno) // { nombre: 'uno ', edad: 42 }

console.log('\nSi el nombre de una propiedad no se identifica')
uno = { nombre: 'uno ', 'nivel': 'intermedio' }
console.log('uno:', uno) // { nombre: 'uno ', 'nivel': 'intermedio' }

console.log('\nPara acceder una propiedad, usar corchetes')
uno['nivel'] = 'básico'
console.log('uno:', uno) // { nombre: 'uno ', 'nivel': 'básico' }
