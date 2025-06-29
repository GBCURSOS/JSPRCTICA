
'use strict'
console.log('\n Un objeto')
const objetoEjemplo = { nombre: 'Pablo Cancerbero', edad: 42 }
console.log('Objeto Normal:', objetoEjemplo) 

console.log('\n Acceder a propiedades (atributos)')
let objetoEjemplosEdad = objetoEjemplo.edad
console.log('objetoEjemplosEdad:', objetoEjemplosEdad) 

console.log('\n Modificar propiedades Y adicionar')
objetoEjemplo.edad = 40
objetoEjemplo.salario = 90000
console.log('objetoEjemplo Aumentado:', objetoEjemplo) 
const otroObjeto = { nombre: 'Bruce Lee' }
otroObjeto.age = 28 

try {
  otroObjeto = { nombre: 'Eduardo Escobar' }
    // Error: no se puede asignar un valor diferente a la variable const
} catch (exception) {
  console.log('Error:', exception.message) 
}

console.log('Operador delete elimina una propiedad')
delete objetoEjemplo.salario
console.log('objetoEjemplo:', objetoEjemplo) // 

console.log('\nAccediendo una propiedad NO existente')
let objetoTres = objetoEjemplo.supervisor 
console.log('objetoTres:', objetoTres) 

console.log('\nUsar corchetes para operar con propiedades')
let campo = 'EDAD'
objetoEjemplosEdad = objetoEjemplo[campo.toLowerCase()]
console.log('objetoEjemplosEdad:', objetoEjemplosEdad) 
let objetoEjemplosNombre = objetoEjemplo['nombre']
console.log('objetoEjemplosNombre:', objetoEjemplosNombre) 
