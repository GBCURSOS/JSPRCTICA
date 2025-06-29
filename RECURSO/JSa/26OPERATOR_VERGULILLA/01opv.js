// Operador ~ (Bitwise NOT)

// 1. ~ Integer
let num = 5;
console.log(~num); // Resultado: -6
// El operador ~ invierte todos los bits y suma 1 al resultado

// 2. ~~ Operator (Doble NOT)
let decimal = 5.7;
console.log(~~decimal); // Resultado: 5
// ~~ es una forma rápida de truncar números decimales

// 3. Convirtiendo valores no numéricos a números
let str = "42";
console.log(~~str); // Resultado: 42
// ~~ convierte strings numéricos a números enteros

let bool = true;
console.log(~~bool); // Resultado: 1
// true se convierte a 1, false se convertiría a 0

// 4. Atajos (shorthands)

// Comprobación de índice en array
let arr = [1, 2, 3];
if (~arr.indexOf(2)) {
  console.log("El elemento 2 está en el array");
}
// ~-1 es 0 (falsy), para cualquier otro número es truthy

// 5. ~Decimal
let decimal2 = 5.7;
console.log(~decimal2); // Resultado: -6
// ~ redondea hacia abajo y luego aplica la operación NOT

// Ejemplos adicionales y comparaciones

// Usando ~~ como alternativa a Math.floor() para números positivos
console.log(Math.floor(5.7)); // 5
console.log(~~5.7); // 5

// Nota: ~~ no funciona igual que Math.floor() para números negativos
console.log(Math.floor(-5.7)); // -6
console.log(~~-5.7); // -5

// Comparación de rendimiento (esto es solo ilustrativo, el rendimiento real puede variar)
let start = Date.now();
for (let i = 0; i < 1000000; i++) {
  Math.floor(3.14);
}
console.log("Math.floor tiempo:", Date.now() - start);

start = Date.now();
for (let i = 0; i < 1000000; i++) {
  ~~3.14;
}
console.log("~~ tiempo:", Date.now() - start);

// Uso práctico: extraer la parte entera de un número
function parteEntera(num) {
  return ~~num;
}
console.log(parteEntera(3.14)); // 3
console.log(parteEntera(-3.14)); // -3

// Advertencia: Cuidado con números grandes
console.log(~~(2147483647 + 1)); // -2147483648
// Los operadores bitwise en JavaScript trabajan con enteros de 32 bits
