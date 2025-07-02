/* EJEMPLOS DE HOISTING PROBLEMÁTICO */

console.log("=== PROBLEMA CON VAR Y HOISTING ===");

// ❌ EJEMPLO 1: Hoisting problemático con var
console.log("Antes de declarar:", nombre); // undefined (no error!)
var nombre = "Juan";
console.log("Después de declarar:", nombre); // "Juan"

// Lo que JavaScript realmente hace internamente:
// var nombre; // Se eleva al inicio -> undefined
// console.log("Antes de declarar:", nombre);
// nombre = "Juan"; // La asignación queda en su lugar

console.log("\n=== COMPARACIÓN CON LET/CONST ===");

// ✅ EJEMPLO 2: let/const son más estrictos
try {
    console.log("Antes de declarar:", edad); // ReferenceError!
    let edad = 25;
} catch (error) {
    console.log("Error con let:", error.message);
}

try {
    console.log("Antes de declarar:", PI); // ReferenceError!
    const PI = 3.14159;
} catch (error) {
    console.log("Error con const:", error.message);
}

console.log("\n=== HOISTING EN FUNCIONES ===");

// ❌ PROBLEMA: var tiene function scope, no block scope
function ejemploProblematico() {
    if (true) {
        var mensaje = "Hola"; // Se eleva a toda la función
    }
    console.log("Fuera del if:", mensaje); // "Hola" - ¡Problemático!
}

ejemploProblematico();

// ✅ SOLUCIÓN: let tiene block scope
function ejemploCorregido() {
    if (true) {
        let mensaje = "Hola"; // Solo existe en este bloque
    }
    try {
        console.log("Fuera del if:", mensaje); // ReferenceError - ¡Correcto!
    } catch (error) {
        console.log("Error esperado:", error.message);
    }
}

ejemploCorregido();

console.log("\n=== PROBLEMA EN LOOPS ===");

// ❌ PROBLEMA CLÁSICO: var en loops
console.log("Problema con var en loop:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var i:", i); // Imprime 3, 3, 3 (¡no 0, 1, 2!)
    }, 100);
}

// ✅ SOLUCIÓN: let en loops
console.log("Solución con let en loop:");
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log("let j:", j); // Imprime 0, 1, 2 (¡correcto!)
    }, 200);
}

// Temporal Dead Zone con let/const
console.log("\n=== TEMPORAL DEAD ZONE ===");
console.log("Con let/const existe la 'Temporal Dead Zone':");
console.log("- La variable se eleva, pero no se puede usar");
console.log("- Da ReferenceError hasta su declaración");
console.log("- Esto previene errores accidentales");

// ❌ var: sin Temporal Dead Zone
console.log("var sin TDZ:", varSinTDZ); // undefined
var varSinTDZ = "valor";

// ✅ let/const: con Temporal Dead Zone
// console.log("let con TDZ:", letConTDZ); // ReferenceError!
let letConTDZ = "valor";
