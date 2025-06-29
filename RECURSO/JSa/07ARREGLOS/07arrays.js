let arreglo = [1,2,3,4,5]

for (let i = 0, length= arreglo.length; i < length; i++)
    console.log(arreglo[i])
console.log('--')

for(let i = arreglo.length -1; i > -1; i--)
    console.log(arreglo[i])
console.log("--");

for(let key = 0, value = arreglo[key], length = arreglo.length; key < length; value  = arreglo[key++])
    console.log(value)
console.log("--");

let i = 0; 
length = arreglo.length
for (; i < length;){
    console.log(arreglo[i++])
    i++
}
console.log("--");
let key = 0
let value
for (; value = arreglo[key++];){
    console.log(value)
}
console.log("--");
for(i in arreglo){
    console.log(arreglo[i])
}
console.log("--");
for (let value of arreglo){
    let doble = value * 2
    console.log('2 * value es: %d',doble)
}
console.log("--");

arreglo.foo = "prueba";
for (let i in arreglo) {
  console.log(i); // logs 0, 1, 2, "foo"
}
console.log("--");
for (let i of arreglo) {
  console.log(i); // logs 3, 5, 7
}
console.log("--");


// 1. Array de frutas para imprimir
const frutas = ['manzana', 'banana', 'naranja', 'uva'];

// 2. Array de números para sumar
const numeros = [1, 2, 3, 4, 5];

// 3. Array de palabras para convertir a mayúsculas
const palabras = ['hola', 'mundo', 'javascript'];

// 4. Array de números para filtrar pares
const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5. Array de colores para demostrar el uso de índices
const colores = ['rojo', 'verde', 'azul'];

// Ejemplo 1: Imprimir elementos de un array
console.log("1. Imprimiendo frutas:");
frutas.forEach(fruta => console.log(fruta));

// Ejemplo 2: Sumar elementos de un array
let suma = 0;
numeros.forEach(numero => suma += numero);
console.log("\n2. Suma de números:", suma);

// Ejemplo 3: Modificar elementos de un array
const mayusculas = [];
palabras.forEach(palabra => mayusculas.push(palabra.toUpperCase()));
console.log("\n3. Palabras en mayúsculas:", mayusculas);

// Ejemplo 4: Filtrar elementos de un array
const pares = [];
numerosPares.forEach(numero => {
    if (numero % 2 === 0) {
        pares.push(numero);
    }
});
console.log("\n4. Números pares:", pares);

// Ejemplo 5: Trabajar con índices y el array original
console.log("\n5. Información de colores:");
colores.forEach((color, indice, array) => {
    console.log(`Color ${indice + 1} de ${array.length}: ${color}`);
});