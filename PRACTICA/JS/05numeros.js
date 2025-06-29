/* NÚMEROS EN JAVASCRIPT */
// Operaciones numéricas y métodos del objeto Number

console.log("=== NÚMEROS EN JAVASCRIPT ===");

// 1. TIPOS DE NÚMEROS
console.log("\n--- TIPOS DE NÚMEROS ---");
let entero = 42;
let decimal = 3.14159;
let negativo = -17;
let cientifico = 2.5e6; // 2500000
let hexadecimal = 0xFF; // 255
let binario = 0b1010; // 10
let octal = 0o777; // 511

console.log("Entero:", entero);
console.log("Decimal:", decimal);
console.log("Negativo:", negativo);
console.log("Científico:", cientifico);
console.log("Hexadecimal:", hexadecimal);
console.log("Binario:", binario);
console.log("Octal:", octal);

// 2. OPERACIONES ARITMÉTICAS BÁSICAS
console.log("\n--- OPERACIONES ARITMÉTICAS ---");
let a = 10;
let b = 3;

console.log(`${a} + ${b} =`, a + b); // Suma: 13
console.log(`${a} - ${b} =`, a - b); // Resta: 7
console.log(`${a} * ${b} =`, a * b); // Multiplicación: 30
console.log(`${a} / ${b} =`, a / b); // División: 3.333...
console.log(`${a} % ${b} =`, a % b); // Módulo: 1
console.log(`${a} ** ${b} =`, a ** b); // Potencia: 1000

// 3. OPERADORES DE INCREMENTO Y DECREMENTO
console.log("\n--- INCREMENTO Y DECREMENTO ---");
let contador = 5;
console.log("contador inicial:", contador); // 5
console.log("++contador:", ++contador); // 6 (pre-incremento)
console.log("contador++:", contador++); // 6 (post-incremento)
console.log("contador después:", contador); // 7
console.log("--contador:", --contador); // 6 (pre-decremento)
console.log("contador--:", contador--); // 6 (post-decremento)
console.log("contador final:", contador); // 5

// 4. OBJECT NUMBER - PROPIEDADES ESTÁTICAS
console.log("\n--- PROPIEDADES DE NUMBER ---");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);
console.log("Number.EPSILON:", Number.EPSILON);

// 5. MÉTODOS ESTÁTICOS DE NUMBER
console.log("\n--- MÉTODOS ESTÁTICOS DE NUMBER ---");
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log("Number.isNaN('texto'):", Number.isNaN("texto")); // false
console.log("Number.isFinite(42):", Number.isFinite(42)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isInteger(42):", Number.isInteger(42)); // true
console.log("Number.isInteger(42.5):", Number.isInteger(42.5)); // false
console.log("Number.isSafeInteger(42):", Number.isSafeInteger(42)); // true

// 6. MÉTODOS DE INSTANCIA - toString()
console.log("\n--- MÉTODO toString() ---");
let numero = 42;
console.log("numero.toString():", numero.toString()); // "42"
console.log("numero.toString(2):", numero.toString(2)); // "101010" (binario)
console.log("numero.toString(8):", numero.toString(8)); // "52" (octal)
console.log("numero.toString(16):", numero.toString(16)); // "2a" (hexadecimal)
console.log("numero.toString(36):", numero.toString(36)); // "16" (base 36)

let numeroDecimal = 3.14159;
console.log("numeroDecimal.toString():", numeroDecimal.toString()); // "3.14159"

// 7. MÉTODOS DE FORMATO - toFixed(), toPrecision(), toExponential()
console.log("\n--- MÉTODOS DE FORMATO ---");
let pi = 3.14159265359;
console.log("pi.toFixed(2):", pi.toFixed(2)); // "3.14" (2 decimales)
console.log("pi.toFixed(4):", pi.toFixed(4)); // "3.1416" (4 decimales)
console.log("pi.toPrecision(3):", pi.toPrecision(3)); // "3.14" (3 dígitos significativos)
console.log("pi.toPrecision(6):", pi.toPrecision(6)); // "3.14159" (6 dígitos significativos)
console.log("pi.toExponential():", pi.toExponential()); // "3.14159265359e+0"
console.log("pi.toExponential(2):", pi.toExponential(2)); // "3.14e+0"

// 8. CONVERSIONES A NÚMERO
console.log("\n--- CONVERSIONES A NÚMERO ---");
console.log("Number('42'):", Number("42")); // 42
console.log("Number('3.14'):", Number("3.14")); // 3.14
console.log("Number('texto'):", Number("texto")); // NaN
console.log("Number(''):", Number("")); // 0
console.log("Number(true):", Number(true)); // 1
console.log("Number(false):", Number(false)); // 0
console.log("Number(null):", Number(null)); // 0
console.log("Number(undefined):", Number(undefined)); // NaN

// 9. OBJETO MATH - OPERACIONES AVANZADAS
console.log("\n--- OBJETO MATH ---");
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.abs(-5):", Math.abs(-5)); // 5
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.floor(4.7):", Math.floor(4.7)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5
console.log("Math.max(1, 3, 2):", Math.max(1, 3, 2)); // 3
console.log("Math.min(1, 3, 2):", Math.min(1, 3, 2)); // 1
console.log("Math.random():", Math.random()); // número aleatorio 0-1
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4

// 10. FUNCIONES TRIGONOMÉTRICAS
console.log("\n--- FUNCIONES TRIGONOMÉTRICAS ---");
console.log("Math.sin(Math.PI/2):", Math.sin(Math.PI/2)); // 1
console.log("Math.cos(0):", Math.cos(0)); // 1
console.log("Math.tan(Math.PI/4):", Math.tan(Math.PI/4)); // 1

// 11. NÚMEROS ALEATORIOS ÚTILES
console.log("\n--- NÚMEROS ALEATORIOS ---");
// Número aleatorio entre 1 y 10
let aleatorio1a10 = Math.floor(Math.random() * 10) + 1;
console.log("Aleatorio 1-10:", aleatorio1a10);

// Número aleatorio entre min y max
function aleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Aleatorio 5-15:", aleatorioEntre(5, 15));

// 12. VALIDACIÓN DE NÚMEROS
console.log("\n--- VALIDACIÓN DE NÚMEROS ---");
function esNumeroValido(valor) {
    return typeof valor === 'number' && !isNaN(valor) && isFinite(valor);
}

console.log("esNumeroValido(42):", esNumeroValido(42)); // true
console.log("esNumeroValido('42'):", esNumeroValido('42')); // false
console.log("esNumeroValido(NaN):", esNumeroValido(NaN)); // false
console.log("esNumeroValido(Infinity):", esNumeroValido(Infinity)); // false

// 13. FORMATEO DE NÚMEROS PARA USUARIOS
console.log("\n--- FORMATEO PARA USUARIOS ---");
let precio = 1234.567;
console.log("Precio:", precio.toLocaleString('es-ES', { 
    style: 'currency', 
    currency: 'EUR' 
}));

let numeroGrande = 1234567.89;
console.log("Número grande:", numeroGrande.toLocaleString('es-ES'));

// 14. CASOS ESPECIALES Y CUIDADOS
console.log("\n--- CASOS ESPECIALES ---");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004 (problema de precisión)
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false
console.log("Solución con toFixed:", +(0.1 + 0.2).toFixed(1)); // 0.3

console.log("Infinity / Infinity:", Infinity / Infinity); // NaN
console.log("1 / 0:", 1 / 0); // Infinity
console.log("typeof NaN:", typeof NaN); // "number"

console.log("\n=== RESUMEN DE MÉTODOS IMPORTANTES ===");
console.log("• toString(base) - Convierte a string en base específica");
console.log("• toFixed(decimales) - Formato con decimales fijos");
console.log("• toPrecision(dígitos) - Formato con precisión específica");
console.log("• toExponential() - Notación científica");
console.log("• Number.isNaN() - Verificar si es NaN");
console.log("• Number.isInteger() - Verificar si es entero");
console.log("• Math.round/floor/ceil - Redondeo");
console.log("• Math.random() - Números aleatorios");