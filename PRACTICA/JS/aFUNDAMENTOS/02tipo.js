/* TIPOS DE DATOS */
// Tipos de datos primitivos
let numero = 42; // Número  
let texto = "Esta es una Prueba"; // Cadena de texto
let booleano = true; // Booleano (true o false)
let nulo = null; // Nulo (sin valor)
let indefinido; // Indefinido (sin asignación)
let simbolo = Symbol("miSimbolo"); // Símbolo (valor único y no modificable)
let bigint = 1234567890123456789012345678901234567890n; // BigInt (número entero grande)

// Tipos de datos compuestos
let objeto = { clave: "valor" }; // Objeto (colección de propiedades)
let arreglo = [1, 2, 3]; // Arreglo (lista de valores)

// Mostrar valores y tipos de datos
console.log("=== TIPOS DE DATOS PRIMITIVOS ===");
console.log("numero:", numero, "- tipo:", typeof numero);
console.log("texto:", texto, "- tipo:", typeof texto);
console.log("booleano:", booleano, "- tipo:", typeof booleano);
console.log("nulo:", nulo, "- tipo:", typeof nulo);
console.log("indefinido:", indefinido, "- tipo:", typeof indefinido);
console.log("simbolo:", simbolo, "- tipo:", typeof simbolo);
console.log("bigint:", bigint, "- tipo:", typeof bigint);

console.log("\n=== TIPOS DE DATOS COMPUESTOS ===");
console.log("objeto:", objeto, "- tipo:", typeof objeto);
console.log("arreglo:", arreglo, "- tipo:", typeof arreglo);

console.log("\n=== NOTAS IMPORTANTES ===");
console.log("• null tiene tipo 'object' (es un bug histórico de JavaScript)");
console.log("• arrays tienen tipo 'object' (para verificar si es array: Array.isArray())");
console.log("• Para distinguir arrays: Array.isArray(arreglo) =", Array.isArray(arreglo));

