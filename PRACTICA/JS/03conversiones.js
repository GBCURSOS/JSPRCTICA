/* CONVERSIONES CON PARSE... */

/* 
parseInt() - Convierte cadena a número entero
parseFloat() - Convierte cadena a número decimal
JSON.parse() - Convierte cadena JSON a objeto/array
Date.parse() - Convierte cadena de fecha a timestamp
Number.parseInt() - Método estático para enteros (ES6+)
Number.parseFloat() - Método estático para decimales (ES6+)
*/

console.log("=== CONVERSIONES PARSE... EN JAVASCRIPT ===");

// 1. parseInt() - Convierte cadena a número entero
console.log("\n--- parseInt() ---");
console.log("parseInt('42'):", parseInt('42')); // 42
console.log("parseInt('42.5'):", parseInt('42.5')); // 42 (solo la parte entera)
console.log("parseInt('42px'):", parseInt('42px')); // 42 (ignora caracteres no numéricos al final)
console.log("parseInt('px42'):", parseInt('px42')); // NaN (no puede empezar con no-numérico)
console.log("parseInt('1010', 2):", parseInt('1010', 2)); // 10 (binario a decimal)
console.log("parseInt('FF', 16):", parseInt('FF', 16)); // 255 (hexadecimal a decimal)

// 2. parseFloat() - Convierte cadena a número decimal
console.log("\n--- parseFloat() ---");
console.log("parseFloat('42.5'):", parseFloat('42.5')); // 42.5
console.log("parseFloat('42.5px'):", parseFloat('42.5px')); // 42.5
console.log("parseFloat('3.14159'):", parseFloat('3.14159')); // 3.14159
console.log("parseFloat('px3.14'):", parseFloat('px3.14')); // NaN

// 3. Number.parseInt() - Método estático (ES6+)
console.log("\n--- Number.parseInt() ---");
console.log("Number.parseInt('42'):", Number.parseInt('42'));
console.log("Number.parseInt('1010', 2):", Number.parseInt('1010', 2));

// 4. Number.parseFloat() - Método estático (ES6+)
console.log("\n--- Number.parseFloat() ---");
console.log("Number.parseFloat('3.14'):", Number.parseFloat('3.14'));

// COMPARACIÓN CON OTROS MÉTODOS DE CONVERSIÓN
console.log("\n=== COMPARACIÓN CON OTROS MÉTODOS ===");

const cadena = "42.5";
console.log("Cadena original:", cadena);
console.log("parseInt(cadena):", parseInt(cadena)); // 42
console.log("parseFloat(cadena):", parseFloat(cadena)); // 42.5
console.log("Number(cadena):", Number(cadena)); // 42.5
console.log("+cadena:", +cadena); // 42.5 (conversión unaria)

// CASOS ESPECIALES Y DIFERENCIAS
console.log("\n=== CASOS ESPECIALES ===");

// Diferencias entre Number() y parseInt/parseFloat
const espacios = "  42.5  ";
console.log("Number('  42.5  '):", Number(espacios)); // 42.5 (ignora espacios)
console.log("parseInt('  42.5  '):", parseInt(espacios)); // 42 (ignora espacios)
console.log("parseFloat('  42.5  '):", parseFloat(espacios)); // 42.5 (ignora espacios)

const mixto = "42.5abc";
console.log("Number('42.5abc'):", Number(mixto)); // NaN
console.log("parseInt('42.5abc'):", parseInt(mixto)); // 42
console.log("parseFloat('42.5abc'):", parseFloat(mixto)); // 42.5

// RESUMEN DE MÉTODOS PARSE...
console.log("\n=== RESUMEN DE MÉTODOS PARSE... ===");
console.log("1. parseInt() - Cadena a entero");
console.log("2. parseFloat() - Cadena a decimal");
console.log("3. Number.parseInt() - Método estático para enteros");
console.log("4. Number.parseFloat() - Método estático para decimales");