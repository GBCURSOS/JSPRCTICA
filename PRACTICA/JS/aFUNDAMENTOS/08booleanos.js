/* BOOLEANOS EN JAVASCRIPT */

/*
=== OPERADORES DE COMPARACIÓN ===
• == (igual con coerción)
• === (estrictamente igual)
• != (diferente con coerción)
• !== (estrictamente diferente)
• < (menor que)
• > (mayor que)
• <= (menor o igual que)
• >= (mayor o igual que)

=== OPERADORES BOOLEANOS (LÓGICOS) ===
• && (AND lógico)
• || (OR lógico)
• ! (NOT lógico)
• ?? (Nullish coalescing)

=== VALORES FALSY ===
• false
• 0
• -0
• 0n (BigInt)
• "" (string vacío)
• null
• undefined
• NaN

=== VALORES TRUTHY ===
• true
• Cualquier número diferente de 0
• Cualquier string no vacío
• [] (array vacío)
• {} (objeto vacío)
• function() {} (funciones)
*/

console.log("=== BOOLEANOS EN JAVASCRIPT ===");

// 1. VALORES BOOLEANOS BÁSICOS
console.log("\n--- VALORES BOOLEANOS BÁSICOS ---");
let verdadero = true;
let falso = false;

console.log("true:", verdadero);
console.log("false:", falso);
console.log("typeof true:", typeof verdadero);
console.log("typeof false:", typeof falso);

// 2. OPERADORES DE COMPARACIÓN
console.log("\n--- OPERADORES DE COMPARACIÓN ---");
let a = 5;
let b = 10;
let c = "5";

console.log(`${a} == ${b}:`, a == b); // false
console.log(`${a} === ${c}:`, a === c); // false (diferente tipo)
console.log(`${a} == ${c}:`, a == c); // true (coerción)
console.log(`${a} != ${b}:`, a != b); // true
console.log(`${a} !== ${c}:`, a !== c); // true (diferente tipo)
console.log(`${a} < ${b}:`, a < b); // true
console.log(`${a} > ${b}:`, a > b); // false
console.log(`${a} <= ${a}:`, a <= a); // true
console.log(`${b} >= ${a}:`, b >= a); // true

// 3. OPERADORES LÓGICOS
console.log("\n--- OPERADORES LÓGICOS ---");
let x = true;
let y = false;
let z = true;

console.log("x && y:", x && y); // false (AND)
console.log("x || y:", x || y); // true (OR)
console.log("!x:", !x); // false (NOT)
console.log("!y:", !y); // true (NOT)
console.log("x && z:", x && z); // true
console.log("y || z:", y || z); // true

// 4. OPERADORES LÓGICOS CON VALORES NO BOOLEANOS
console.log("\n--- OPERADORES CON VALORES NO BOOLEANOS ---");
console.log("5 && 3:", 5 && 3); // 3 (retorna el último valor truthy)
console.log("0 && 5:", 0 && 5); // 0 (retorna el primer valor falsy)
console.log("5 || 0:", 5 || 0); // 5 (retorna el primer valor truthy)
console.log("0 || 3:", 0 || 3); // 3 (retorna el primer valor truthy)
console.log("null || undefined || 'hola':", null || undefined || "hola"); // "hola"

// 5. CORTOCIRCUITO (SHORT-CIRCUIT)
console.log("\n--- EVALUACIÓN DE CORTOCIRCUITO ---");
let variable1 = null;
let variable2 = "valor";

// AND: si el primer valor es falsy, no evalúa el segundo
console.log("variable1 && variable1.length:", variable1 && variable1.length); // null

// OR: si el primer valor es truthy, no evalúa el segundo
console.log("variable2 || variable2.toUpperCase():", variable2 || variable2.toUpperCase()); // "valor"

// Uso práctico para evitar errores
let usuario = { nombre: "Juan" };
console.log("usuario && usuario.nombre:", usuario && usuario.nombre); // "Juan"

let usuarioNulo = null;
console.log("usuarioNulo && usuarioNulo.nombre:", usuarioNulo && usuarioNulo.nombre); // null

// 6. OPERADOR NULLISH COALESCING (??)
console.log("\n--- OPERADOR NULLISH COALESCING (??) ---");
let valor1 = null;
let valor2 = undefined;
let valor3 = 0;
let valor4 = "";
let valor5 = "texto";

console.log("null ?? 'por defecto':", valor1 ?? "por defecto"); // "por defecto"
console.log("undefined ?? 'por defecto':", valor2 ?? "por defecto"); // "por defecto"
console.log("0 ?? 'por defecto':", valor3 ?? "por defecto"); // 0 (no es null/undefined)
console.log("'' ?? 'por defecto':", valor4 ?? "por defecto"); // "" (no es null/undefined)
console.log("'texto' ?? 'por defecto':", valor5 ?? "por defecto"); // "texto"

// Diferencia entre || y ??
console.log("0 || 'por defecto':", valor3 || "por defecto"); // "por defecto" (0 es falsy)
console.log("0 ?? 'por defecto':", valor3 ?? "por defecto"); // 0 (0 no es null/undefined)

// 7. CONVERSIÓN A BOOLEANO
console.log("\n--- CONVERSIÓN A BOOLEANO ---");
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean('hola'):", Boolean("hola")); // true
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean([]):", Boolean([])); // true (array vacío es truthy)
console.log("Boolean({}):", Boolean({})); // true (objeto vacío es truthy)

// Usando el operador ! doble
console.log("!!'texto':", !!"texto"); // true
console.log("!!0:", !!0); // false
console.log("!![]:", !![]); // true

// 8. VALORES FALSY Y TRUTHY
console.log("\n--- VALORES FALSY ---");
let valoresFalsy = [false, 0, -0, 0n, "", null, undefined, NaN];
valoresFalsy.forEach((valor, index) => {
    console.log(`Falsy ${index + 1}: ${valor} -> ${!!valor}`);
});

console.log("\n--- VALORES TRUTHY (ejemplos) ---");
let valoresTruthy = [true, 1, -1, "0", "false", [], {}, function() {}, Infinity];
valoresTruthy.forEach((valor, index) => {
    console.log(`Truthy ${index + 1}: ${valor} -> ${!!valor}`);
});

// 9. COMPARACIONES COMPLEJAS
console.log("\n--- COMPARACIONES COMPLEJAS ---");
let edad = 25;
let tieneLicencia = true;
let dinero = 100;

// Múltiples condiciones con AND
let puedeConducir = edad >= 18 && tieneLicencia;
console.log("Puede conducir:", puedeConducir);

// Múltiples condiciones con OR
let puedeComprar = dinero >= 50 || edad >= 21;
console.log("Puede comprar:", puedeComprar);

// Combinando operadores
let puedeViajar = (edad >= 18 || tieneLicencia) && dinero > 200;
console.log("Puede viajar:", puedeViajar);

// 10. NEGACIÓN Y DOBLE NEGACIÓN
console.log("\n--- NEGACIÓN ---");
let activo = true;
console.log("activo:", activo); // true
console.log("!activo:", !activo); // false
console.log("!!activo:", !!activo); // true

let numero = 0;
console.log("numero:", numero); // 0
console.log("!numero:", !numero); // true (porque 0 es falsy)
console.log("!!numero:", !!numero); // false

// 11. CONDICIONALES CON BOOLEANOS
console.log("\n--- CONDICIONALES ---");
let temperatura = 30;
let llueve = false;

if (temperatura > 25 && !llueve) {
    console.log("Perfecto para ir a la playa");
} else if (temperatura > 15 || llueve) {
    console.log("Buen día para estar en casa");
} else {
    console.log("Hace frío");
}

// 12. FUNCIONES QUE RETORNAN BOOLEANOS
console.log("\n--- FUNCIONES BOOLEANAS ---");
function esPar(numero) {
    return numero % 2 === 0;
}

function esPositivo(numero) {
    return numero > 0;
}

function esVocal(letra) {
    return "aeiouAEIOU".includes(letra);
}

function estaEnRango(numero, min, max) {
    return numero >= min && numero <= max;
}

console.log("esPar(4):", esPar(4)); // true
console.log("esPar(5):", esPar(5)); // false
console.log("esPositivo(-3):", esPositivo(-3)); // false
console.log("esVocal('a'):", esVocal('a')); // true
console.log("estaEnRango(5, 1, 10):", estaEnRango(5, 1, 10)); // true

// 13. OPERADORES TERNARIOS
console.log("\n--- OPERADOR TERNARIO ---");
let puntos = 85;
let resultado = puntos >= 70 ? "Aprobado" : "Reprobado";
console.log(`Con ${puntos} puntos: ${resultado}`);

// Ternario anidado
let calificacion = puntos >= 90 ? "A" : puntos >= 80 ? "B" : puntos >= 70 ? "C" : "F";
console.log(`Calificación: ${calificacion}`);

// 14. VALIDACIONES COMUNES
console.log("\n--- VALIDACIONES COMUNES ---");
function validarEmail(email) {
    return email && email.includes("@") && email.includes(".");
}

function validarEdad(edad) {
    return typeof edad === "number" && edad >= 0 && edad <= 150;
}

function validarContrasena(password) {
    return password && password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
}

console.log("validarEmail('test@test.com'):", validarEmail("test@test.com"));
console.log("validarEdad(25):", validarEdad(25));
console.log("validarContrasena('MiPass123'):", validarContrasena("MiPass123"));

// 15. CASOS ESPECIALES Y CURIOSIDADES
console.log("\n--- CASOS ESPECIALES ---");
console.log("NaN == NaN:", NaN == NaN); // false (NaN no es igual a sí mismo)
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (forma correcta)

console.log("[] == false:", [] == false); // true (coerción extraña)
// console.log("[] === false:", [] === false); // false
console.log("!![]:", !![]); // true (array vacío es truthy)

console.log("'0' == false:", "0" == false); // true (coerción)
console.log("'0' === false:", "0" === false); // false

// 16. MEJORES PRÁCTICAS
console.log("\n--- MEJORES PRÁCTICAS ---");
console.log("• Usar === en lugar de == para evitar coerción");
console.log("• Conocer los 8 valores falsy");
console.log("• Usar !! para conversión explícita a booleano");
console.log("• Aprovechar el cortocircuito para código más limpio");
console.log("• Usar ?? para valores por defecto (solo null/undefined)");
console.log("• Validar siempre las entradas del usuario");

// Ejemplos de código limpio con operadores lógicos
console.log("\n--- CÓDIGO LIMPIO CON OPERADORES ---");
let configuracion = {
    tema: null,
    idioma: "es"
};

// Usando || para valores por defecto (cuidado con falsy)
let tema = configuracion.tema || "claro";
console.log("Tema con ||:", tema);

// Usando ?? para valores por defecto (solo null/undefined)
let temaCorrect = configuracion.tema ?? "claro";
console.log("Tema con ??:", temaCorrect);

// Usando && para ejecución condicional
configuracion.idioma && console.log("Idioma configurado:", configuracion.idioma);