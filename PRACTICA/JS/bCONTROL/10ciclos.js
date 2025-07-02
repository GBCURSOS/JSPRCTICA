// ===================================================================
// CICLOS EN JAVASCRIPT - EXPLICACIÓN COMPLETA
// ===================================================================

console.log("=== CICLOS EN JAVASCRIPT ===");

// ===================================================================
// 1. CICLO FOR - El más común y versátil
// ===================================================================
console.log("\n1. CICLO FOR:");
console.log("Sintaxis: for (inicialización; condición; incremento)");

// Ejemplo básico
console.log("\nContando del 1 al 5:");
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

// For con incremento diferente
console.log("\nContando de 2 en 2:");
for (let i = 0; i <= 10; i += 2) {
  console.log("Par:", i);
}

// For descendente
console.log("\nCuenta regresiva:");
for (let i = 5; i >= 1; i--) {
  console.log("Cuenta regresiva:", i);
}

// ===================================================================
// 2. CICLO WHILE - Se ejecuta mientras la condición sea verdadera
// ===================================================================
console.log("\n2. CICLO WHILE:");
console.log("Sintaxis: while (condición)");

let contador = 1;
console.log("\nUsando while para contar del 1 al 3:");
while (contador <= 3) {
  console.log("Contador while:", contador);
  contador++;
}

// Ejemplo práctico con while
let numero = 1024;
let divisiones = 0;
console.log("\n¿Cuántas veces se puede dividir 1024 entre 2?");
while (numero > 1) {
  numero = numero / 2;
  divisiones++;
  console.log(`División ${divisiones}: ${numero}`);
}

// ===================================================================
// 3. CICLO DO-WHILE - Se ejecuta al menos una vez
// ===================================================================
console.log("\n3. CICLO DO-WHILE:");
console.log("Sintaxis: do { } while (condición)");

let x = 1;
console.log("\nEjemplo do-while (se ejecuta al menos una vez):");
do {
  console.log("Valor de x:", x);
  x++;
} while (x <= 3);

// Ejemplo donde la condición es falsa desde el inicio
let y = 10;
console.log("\nDo-while con condición falsa (aún así se ejecuta una vez):");
do {
  console.log("Este mensaje se muestra aunque y sea 10");
  y++;
} while (y < 5);

// ===================================================================
// 4. CICLO FOR...IN - Para iterar sobre propiedades de objetos
// ===================================================================
console.log("\n4. CICLO FOR...IN:");
console.log("Sintaxis: for (variable in objeto)");

const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Desarrollador",
};

console.log("\nIterando sobre propiedades de un objeto:");
for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

// For...in con arrays (devuelve los índices)
const colores = ["rojo", "azul", "verde"];
console.log("\nFor...in con array (devuelve índices):");
for (let indice in colores) {
  console.log(`Índice ${indice}: ${colores[indice]}`);
}

// ===================================================================
// 5. CICLO FOR...OF - Para iterar sobre valores de objetos iterables
// ===================================================================

/* Un objeto iterable es cualquier objeto que implementa el protocolo de iteración, lo que significa que define cómo sus valores pueden ser recorridos o iterados. */

console.log("\n5. CICLO FOR...OF:");
console.log("Sintaxis: for (variable of iterable)");

console.log("\nIterando sobre valores de un array:");
const frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}

// For...of con strings
const texto = "Hola";
console.log("\nIterando sobre caracteres de un string:");
for (let caracter of texto) {
  console.log("Carácter:", caracter);
}

// ===================================================================
// CONTROL DE FLUJO EN CICLOS
// ===================================================================
console.log("\n=== CONTROL DE FLUJO ===");

// BREAK - Sale del ciclo
console.log("\nUsando BREAK:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Encontré el 5, salgo del ciclo");
    break;
  }
  console.log("Número:", i);
}

// CONTINUE - Salta a la siguiente iteración
console.log("\nUsando CONTINUE:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Saltando el número 3");
    continue;
  }
  console.log("Número:", i);
}

// ===================================================================
// CICLOS ANIDADOS
// ===================================================================
console.log("\n=== CICLOS ANIDADOS ===");

console.log("\nTabla de multiplicar del 1 al 3:");
for (let i = 1; i <= 3; i++) {
  console.log(`\nTabla del ${i}:`);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// ===================================================================
// EJEMPLOS PRÁCTICOS
// ===================================================================
console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// Sumar números del 1 al 10
let suma = 0;
for (let i = 1; i <= 10; i++) {
  suma += i;
}
console.log("\nSuma de números del 1 al 10:", suma);

// Encontrar números pares
console.log("\nNúmeros pares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Par:", i);
  }
}

// Factorial usando while
let num = 5;
let factorial = 1;
let temp = num;
while (temp > 0) {
  factorial *= temp;
  temp--;
}
console.log(`\nFactorial de ${num}:`, factorial);

// ===================================================================
// RESUMEN DE CUÁNDO USAR CADA CICLO
// ===================================================================
console.log("\n=== CUÁNDO USAR CADA CICLO ===");
console.log("FOR: Cuando se sabe cuántas iteraciones se necesitan");
console.log(
  "WHILE: Cuando no se sabe cuántas iteraciones, pero se tiene una condición"
);
console.log("DO-WHILE: Cuando necesitas ejecutar el código al menos una vez");
console.log("FOR...IN: Para iterar sobre propiedades de objetos");
console.log("FOR...OF: Para iterar sobre valores de arrays, strings, etc.");
