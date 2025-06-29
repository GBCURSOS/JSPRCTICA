// 1. Clonar un arreglo
let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
console.log(clonedArray); // Output: [1, 2, 3]

// 2. Concatenar arreglos
let array1 = [1, 2];
let array2 = [3, 4];
let arrayConcat = [...array1, ...array2];
console.log(arrayConcat); // Output: [1, 2, 3, 4]

// 3. Pasar los elementos de un arreglo como argumentos de una función
function sumar(a, b, c) {
  return a + b + c;
}

let numeros = [1, 2, 3];
let resultado = sumar(...numeros);
console.log(resultado); // Output: 6

// 4. Combinar objetos
let persona1 = { nombre: "Juan", edad: 30 };
let persona2 = { apellido: "Pérez", ciudad: "Madrid" };
let personaCompleta = { ...persona1, ...persona2 };
console.log(personaCompleta); // Output: { nombre: 'Juan', edad: 30, apellido: 'Pérez', ciudad: 'Madrid' }

// 5. Pasar los elementos de un objeto como argumentos de una función
function presentarPersona({ nombre, edad }) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

let persona = { nombre: "María", edad: 25 };
presentarPersona({ ...persona }); // Output: Hola, mi nombre es María y tengo 25 años.

// 6. Crear una copia modificada de un objeto
let producto = { id: 1, nombre: "Camiseta", precio: 19.99 };
let productoModificado = { ...producto, precio: 24.99 };
console.log(producto)
console.log(productoModificado); // Output: { id: 1, nombre: 'Camiseta', precio: 24.99 }
