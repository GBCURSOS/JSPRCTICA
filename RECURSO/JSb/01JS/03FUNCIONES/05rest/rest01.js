
'use strict'

console.log('\n El parámetro Rest reúne todos los argumentos restantes en un arreglo')
const average = (first = 0, second, ...following) => {
  console.log('first',first)
  console.log("second",second);
  console.log("following: inicial", following);
  let sum = first 
  for (const value of following) { sum += value }
  let dato = sum / (1 + following.length); 
  following = [dato,...following,dato]
  console.log('following: final',following)
  return dato
}
console.log('average(1, 7, 2, 9):', average(1, 7, 2, 9, 4, 5, 10, 11, 12)) // 4.75

const daticos = [1,2,'tres',4,'cinco',6,'siete']
console.log(daticos)
const nuevoArray1 = [...daticos]
console.log('spread',nuevoArray1)
const nuevoArray2 = [daticos];
console.log('arreglo',nuevoArray2);

console.log('\n Math.max acepta un número variable de parámetros')
let result = Math.max(3, 1, 4, 1, 5, 9, 2, 6) 
console.log('result:', result) 

console.log('\nNO trabaja con un arreglo')
let numbers = [1, 7, 2, 9]
result = Math.max(numbers) 
console.log('result arreglo:', result) 

console.log('// pero si con el operador spead')
result = Math.max(...numbers) 
console.log('result: rest', result)

console.log("\n Funciones sin parametro 'rest' pueden ser llamadas con 'spread'")
{
  const average = (x, y) => (x + y) / 2
  result = average(...numbers)
  console.log('result:', result) // 4
}

console.log("\n 'spread' en la inicialización de un arreglo")
let moreNumbers = [1, 2, 3, ...numbers] 
console.log('moreNumbers:', moreNumbers) 

console.log("\n No es lo mismo una declaración 'rest' en extracción")
let [first, ...following] = numbers // declaración 'rest'
console.log('first:', first) 
console.log('following:', following) 

console.log("\n 'spread' también funciona dentro de una cadena como si fuera arreglo de caracteres")
let message = 'Esta es una prueba'
let characters = [...message]
console.log('characters:', characters) 
