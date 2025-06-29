/* COERCIONES EN JAVASCRIPT */
// Conversiones automáticas que JavaScript hace por nosotros

console.log("=== COERCIONES EN JAVASCRIPT ===");

// 1. COERCIÓN A STRING (+ con strings)
console.log("\n--- COERCIÓN A STRING ---");
console.log("5 + '3':", 5 + "3"); // "53" - número se convierte a string
console.log("true + 'false':", true + "false"); // "truefalse"
console.log("null + 'valor':", null + "valor"); // "nullvalor"
console.log("undefined + '!':", undefined + "!"); // "undefined!"

// 2. COERCIÓN A NUMBER (operadores matemáticos)
console.log("\n--- COERCIÓN A NUMBER ---");
console.log("'5' - 3:", "5" - 3); // 2 - string se convierte a número
console.log("'10' * 2:", "10" * 2); // 20
console.log("'8' / 4:", "8" / 4); // 2
console.log("'7' % 3:", "7" % 3); // 1

// 3. COERCIÓN CON OPERADOR UNARIO +
console.log("\n--- OPERADOR UNARIO + ---");
console.log("+'42':", +"42"); // 42 - convierte a número
console.log("+'3.14':", +"3.14"); // 3.14
console.log("+'true':", +"true"); // NaN - no se puede convertir
console.log("+true:", +true); // 1
console.log("+false:", +false); // 0
console.log("+null:", +null); // 0
console.log("+undefined:", +undefined); // NaN

// 4. COERCIÓN A BOOLEAN (contextos booleanos)
console.log("\n--- COERCIÓN A BOOLEAN ---");
console.log("!!'texto':", !!"texto"); // true - string no vacío
console.log("!!'':", !!""); // false - string vacío
console.log("!!0:", !!0); // false
console.log("!!1:", !!1); // true
console.log("!!null:", !!null); // false
console.log("!!undefined:", !!undefined); // false
console.log("!![]:", !![]); // true - array siempre es truthy
console.log("!!{}:", !!{}); // true - objeto siempre es truthy

// 5. VALORES FALSY Y TRUTHY
console.log("\n--- VALORES FALSY ---");
const valoresFalsy = [false, 0, -0, 0n, "", null, undefined, NaN];
valoresFalsy.forEach(valor => {
    console.log(`!${valor}:`, !valor); // todos serán true porque son falsy
});

console.log("\n--- VALORES TRUTHY (ejemplos) ---");
const valoresTruthy = [true, 1, -1, "0", "false", [], {}, Infinity];
valoresTruthy.forEach(valor => {
    console.log(`!${valor}:`, !valor); // todos serán false porque son truthy
});

// 6. COMPARACIONES CON COERCIÓN (== vs ===)
console.log("\n--- COMPARACIONES CON COERCIÓN (==) ---");
console.log("5 == '5':", 5 == "5"); // true - coerción
console.log("true == 1:", true == 1); // true - coerción
console.log("false == 0:", false == 0); // true - coerción
console.log("null == undefined:", null == undefined); // true - caso especial
console.log("[] == false:", [] == false); // true - coerción compleja
console.log("'' == 0:", "" == 0); // true - coerción

console.log("\n--- COMPARACIONES SIN COERCIÓN (===) ---");
console.log("5 === '5':", 5 === "5"); // false - sin coerción
console.log("true === 1:", true === 1); // false - sin coerción
console.log("false === 0:", false === 0); // false - sin coerción
console.log("null === undefined:", null === undefined); // false - sin coerción

// 7. COERCIONES RARAS Y PELIGROSAS
console.log("\n--- COERCIONES EXTRAÑAS ---");
console.log("[] + []:", [] + []); // "" - arrays vacíos se convierten a string vacío
console.log("[] + {}:", [] + {}); // "[object Object]"
console.log("{} + []:", {} + []); // 0 (en algunos contextos)
console.log("true + true:", true + true); // 2 - true se convierte a 1
console.log("'5' - '2':", "5" - "2"); // 3 - ambos se convierten a números
console.log("'5' + - '2':", "5" + -"2"); // "5-2" - mezcla de conversiones

// 8. COERCIÓN EN IF STATEMENTS
console.log("\n--- COERCIÓN EN CONDICIONALES ---");
if ("") {
    console.log("String vacío es truthy");
} else {
    console.log("String vacío es falsy"); // Este se ejecuta
}

if ("0") {
    console.log("String '0' es truthy"); // Este se ejecuta
} else {
    console.log("String '0' es falsy");
}

// 9. FUNCIÓN PARA VERIFICAR COERCIÓN
function mostrarCoercion(valor) {
    console.log(`Valor: ${valor} | Tipo: ${typeof valor} | Boolean: ${!!valor} | String: "${valor}" | Number: ${+valor}`);
}

console.log("\n--- TABLA DE COERCIONES ---");
const valores = [0, 1, "", "0", "1", true, false, null, undefined, [], {}, NaN];
valores.forEach(mostrarCoercion);

// 10. CASOS PROBLEMÁTICOS PARA EVITAR
console.log("\n--- CASOS PROBLEMÁTICOS ---");
console.log("'11' + 1:", "11" + 1); // "111" (concatenación)
console.log("'11' - 1:", "11" - 1); // 10 (sustracción)
console.log("'2' * '3':", "2" * "3"); // 6
console.log("true + true + true:", true + true + true); // 3

console.log("\n=== RECOMENDACIONES ===");
console.log("• Usar === en lugar de == para evitar coerciones");
console.log("• Convertir explícitamente con Number(), String(), Boolean()");
console.log("• Usar parseInt(), parseFloat() para números desde strings");
console.log("• Conocer los valores falsy: false, 0, '', null, undefined, NaN");