
'use strict'

/*
console.log('\n método forEach llama una función por cada elemento del arreglo')
const arr = ['Peter', 'Paul',,,,,'Mary']
arr.forEach((element, index) => { console.log(`${index}: ${element}`) })

console.log('\n No es necesario el índice, pero siempre está como herramienta')
arr.forEach(element => { console.log(`${element}`) })
*/

/*
console.log('\n Ejemplo: Generación de HTML')

const items = ['uno dos','tres',,,,,,'cuatro cinco seis siete']
const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>` 
let listItems = items.map(i => enclose('li', i))
console.log('listItems li:', listItems) 
listItems = items.map(i => enclose('p', i))
console.log('listItems p:', listItems) 


let array = []
for(let i = 0; i < items.length; i++){
  if(items[i] !== undefined)
    array[i] = enclose('p',items[i])
}
console.log(array)
*/

const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500},
  { nombre: 'Televisión 50 Pulgadas', precio: 700},
  { nombre: 'Tablet ', precio: 300},
  { nombre: 'Audifonos', precio: 200},
  { nombre: 'Teclado', precio: 50},
  { nombre: 'Celular', precio: 500},
]

const nuevoArray1 = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: ${producto.precio} `)

const nuevoArray2 = carrito.forEach( producto =>  
  console.log(`Array2: Articulo: ${ producto.nombre } Precio: ${producto.precio} `))

console.log('array1',nuevoArray1);
console.log(typeof nuevoArray2)
console.log(carrito)
