/* CADENAS EN JAVASCRIPT */
// Operaciones con strings y métodos de String

console.log("=== CADENAS EN JAVASCRIPT ===");

// 1. CREACIÓN DE CADENAS
console.log("\n--- CREACIÓN DE CADENAS ---");
let cadena1 = "Hola mundo"; // Comillas dobles
let cadena2 = 'JavaScript'; // Comillas simples
let cadena3 = `Template literal`; // Backticks
let cadena4 = new String("Objeto String"); // Constructor (no recomendado)

console.log("Cadena 1:", cadena1);
console.log("Cadena 2:", cadena2);
console.log("Cadena 3:", cadena3);
console.log("Cadena 4:", cadena4);
console.log("Tipo de cadena4:", typeof cadena4); // object

// 2. CONCATENACIÓN
console.log("\n--- CONCATENACIÓN ---");
let nombre = "Juan";
let apellido = "Pérez";
let edad = 25;

// Concatenación con +
let saludo1 = "Hola " + nombre + " " + apellido;
console.log("Con +:", saludo1);

// Template literals (recomendado)
let saludo2 = `Hola ${nombre} ${apellido}, tienes ${edad} años`;
console.log("Con template:", saludo2);

// Método concat()
let saludo3 = "Hola ".concat(nombre, " ", apellido);
console.log("Con concat():", saludo3);

// 3. PROPIEDADES BÁSICAS
console.log("\n--- PROPIEDADES BÁSICAS ---");
let texto = "JavaScript es genial";
console.log("Texto:", texto);
console.log("Longitud:", texto.length);
console.log("Carácter en posición 0:", texto[0]);
console.log("Carácter en posición 4:", texto[4]);
console.log("Último carácter:", texto[texto.length - 1]);

// 4. MÉTODOS DE BÚSQUEDA
console.log("\n--- MÉTODOS DE BÚSQUEDA ---");
let frase = "JavaScript es un lenguaje de programación JavaScript";
console.log("Frase:", frase);
console.log("indexOf('JavaScript'):", frase.indexOf("JavaScript")); // Primera aparición
console.log("lastIndexOf('JavaScript'):", frase.lastIndexOf("JavaScript")); // Última aparición
console.log("includes('lenguaje'):", frase.includes("lenguaje")); // true/false
console.log("startsWith('Java'):", frase.startsWith("Java")); // true/false
console.log("endsWith('Script'):", frase.endsWith("Script")); // true/false
console.log("search('programación'):", frase.search("programación")); // Como indexOf pero acepta regex

// 5. EXTRACCIÓN DE SUBCADENAS
console.log("\n--- EXTRACCIÓN DE SUBCADENAS ---");
let oracion = "Aprender JavaScript es divertido";
console.log("Oración:", oracion);
console.log("substring(0, 8):", oracion.substring(0, 8)); // "Aprender"
console.log("substring(9, 19):", oracion.substring(9, 19)); // "JavaScript"
console.log("substr(9, 10):", oracion.substr(9, 10)); // "JavaScript" (desde posición, longitud)
console.log("slice(0, 8):", oracion.slice(0, 8)); // "Aprender"
console.log("slice(-9):", oracion.slice(-9)); // "divertido" (desde el final)
console.log("slice(-9, -1):", oracion.slice(-9, -1)); // "divertid"

// 6. TRANSFORMACIONES DE CASO
console.log("\n--- TRANSFORMACIONES DE CASO ---");
let mixto = "HoLa MuNdO";
console.log("Original:", mixto);
console.log("toLowerCase():", mixto.toLowerCase()); // "hola mundo"
console.log("toUpperCase():", mixto.toUpperCase()); // "HOLA MUNDO"
console.log("toLocaleLowerCase():", mixto.toLocaleLowerCase()); // Considera locale
console.log("toLocaleUpperCase():", mixto.toLocaleUpperCase()); // Considera locale

// 7. ELIMINACIÓN DE ESPACIOS
console.log("\n--- ELIMINACIÓN DE ESPACIOS ---");
let conEspacios = "   Hola mundo   ";
console.log("Original:", `"${conEspacios}"`);
console.log("trim():", `"${conEspacios.trim()}"`); // Elimina espacios al inicio y final
console.log("trimStart():", `"${conEspacios.trimStart()}"`); // Solo al inicio
console.log("trimEnd():", `"${conEspacios.trimEnd()}"`); // Solo al final

// 8. REEMPLAZO
console.log("\n--- REEMPLAZO ---");
let mensaje = "Me gusta JavaScript. JavaScript es genial.";
console.log("Original:", mensaje);
console.log("replace('JavaScript', 'JS'):", mensaje.replace("JavaScript", "JS")); // Solo primera aparición
console.log("replaceAll('JavaScript', 'JS'):", mensaje.replaceAll("JavaScript", "JS")); // Todas las apariciones

// Con expresiones regulares
console.log("replace(/JavaScript/g, 'JS'):", mensaje.replace(/JavaScript/g, "JS")); // Global con regex

// 9. DIVISIÓN Y UNIÓN
console.log("\n--- DIVISIÓN Y UNIÓN ---");
let palabras = "manzana,banana,naranja,uva";
console.log("Cadena:", palabras);
let array = palabras.split(",");
console.log("split(','):", array); // ["manzana", "banana", "naranja", "uva"]

let frase2 = "Hola mundo JavaScript";
console.log("split(' '):", frase2.split(" ")); // ["Hola", "mundo", "JavaScript"]
console.log("split(''):", "Hola".split("")); // ["H", "o", "l", "a"]

// join() es de arrays, no de strings
console.log("array.join(' - '):", array.join(" - ")); // "manzana - banana - naranja - uva"

// 10. REPETICIÓN Y RELLENO
console.log("\n--- REPETICIÓN Y RELLENO ---");
let patron = "Ja";
console.log("repeat(3):", patron.repeat(3)); // "JaJaJa"

let numero = "5";
console.log("padStart(3, '0'):", numero.padStart(3, "0")); // "005"
console.log("padEnd(5, '*'):", numero.padEnd(5, "*")); // "5****"

// 11. COMPARACIÓN
console.log("\n--- COMPARACIÓN ---");
let str1 = "abc";
let str2 = "def";
let str3 = "ABC";

console.log("'abc' < 'def':", str1 < str2); // true (comparación lexicográfica)
console.log("'abc' === 'ABC':", str1 === str3); // false (sensible a mayúsculas)
console.log("localeCompare():", str1.localeCompare(str2)); // -1, 0, o 1

// 12. CONVERSIÓN A ARRAY DE CARACTERES
console.log("\n--- CONVERSIÓN A ARRAY ---");
let palabra = "Hola";
console.log("Array.from():", Array.from(palabra)); // ["H", "o", "l", "a"]
console.log("Spread operator:", [...palabra]); // ["H", "o", "l", "a"]
console.log("split(''):", palabra.split("")); // ["H", "o", "l", "a"]

// 13. CARACTERES Y CÓDIGOS
console.log("\n--- CARACTERES Y CÓDIGOS ---");
let letra = "A";
console.log("charCodeAt(0):", letra.charCodeAt(0)); // 65 (código ASCII)
console.log("String.fromCharCode(65):", String.fromCharCode(65)); // "A"

let emoji = "😀";
console.log("codePointAt(0):", emoji.codePointAt(0)); // Código Unicode
console.log("String.fromCodePoint(128512):", String.fromCodePoint(128512)); // "😀"

// 14. VALIDACIONES COMUNES
console.log("\n--- VALIDACIONES COMUNES ---");
function esEmail(email) {
    return email.includes("@") && email.includes(".");
}

function esPalindromo(str) {
    let limpio = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return limpio === limpio.split("").reverse().join("");
}

function contarVocales(str) {
    return (str.match(/[aeiouáéíóú]/gi) || []).length;
}

console.log("esEmail('test@test.com'):", esEmail("test@test.com"));
console.log("esPalindromo('Anita lava la tina'):", esPalindromo("Anita lava la tina"));
console.log("contarVocales('Hola mundo'):", contarVocales("Hola mundo"));

// 15. TEMPLATE LITERALS AVANZADOS
console.log("\n--- TEMPLATE LITERALS AVANZADOS ---");
let producto = "Laptop";
let precio = 999.99;
let descuento = 0.1;

let factura = `
Producto: ${producto}
Precio: $${precio}
Descuento: ${(descuento * 100)}%
Total: $${(precio * (1 - descuento)).toFixed(2)}
`;
console.log(factura);

// Función tag para template literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? `**${values[i]}**` : "");
    }, "");
}

let destacado = highlight`El precio es ${precio} y el descuento es ${descuento * 100}%`;
console.log("Template con tag:", destacado);

// 16. EXPRESIONES REGULARES BÁSICAS
console.log("\n--- EXPRESIONES REGULARES BÁSICAS ---");
let telefono = "123-456-7890";
console.log("match(/\\d{3}-\\d{3}-\\d{4}/):", telefono.match(/\d{3}-\d{3}-\d{4}/)); // Encuentra patrón
console.log("test() con regex:", /\d{3}-\d{3}-\d{4}/.test(telefono)); // true/false

let texto2 = "Tengo 25 años y mi hermana tiene 30 años";
console.log("match(/\\d+/g):", texto2.match(/\d+/g)); // Todos los números

console.log("\n=== RESUMEN DE MÉTODOS IMPORTANTES ===");
console.log("• length - Longitud de la cadena");
console.log("• indexOf/includes - Búsqueda de subcadenas");
console.log("• substring/slice - Extracción de partes");
console.log("• toUpperCase/toLowerCase - Cambio de caso");
console.log("• trim - Eliminación de espacios");
console.log("• replace/replaceAll - Reemplazo de texto");
console.log("• split - Conversión a array");
console.log("• repeat - Repetición de cadenas");
console.log("• padStart/padEnd - Relleno con caracteres");
console.log("• Template literals - Interpolación de variables");