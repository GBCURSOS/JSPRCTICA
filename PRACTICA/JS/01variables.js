/* 
Ctrl + K, Q - Iniciar Quokka
Ctrl + K, S - Detener Quokka
Ctrl + K, R - Reiniciar Quokka
*/

/* VARIABLES */
// Declaración de variables

// ❌ NUNCA se debe usar var (tiene function scope y hoisting sin Temporal Dead Zone)
// var nombre = "Juan"; // NO SE DEBE HACER ESTO
// nombre = "Juan"; // NO SE DEBE HACER ESTO

nombre = "Juan"; // NO SE DEBE HACER ESTO   
// var nombre = "Juan"; // NO SE DEBE HACER ESTO

// let nombre = "Juan"; // Esto es correcto, nombre es let
// let nombre ;

// ✅ Se debe usar let para variables que van a cambiar
let edad = 25;
let contador = 0;
let estaActivo = true;

// ✅ Se debe usar const para valores que no van a cambiar
const PI = 3.14159;
const NOMBRE_APLICACION = "Mi App";
const configuracion = {
    tema: "oscuro",
    idioma: "es"
};

// Ejemplos de uso
console.log("=== EJEMPLOS DE VARIABLES ===");

// let - se puede reasignar el valor
edad = 26;
contador++;
estaActivo = !estaActivo;

console.log(`Edad: ${edad}`);
console.log(`Contador: ${contador}`);
console.log(`Está activo: ${estaActivo}`);

// const - NO se puede reasignar, pero se pueden modificar objetos/arrays
console.log(`PI: ${PI}`);
console.log(`App: ${NOMBRE_APLICACION}`);

// Se pueden modificar propiedades de objetos const
configuracion.tema = "claro";
configuracion.version = "1.0.0";
console.log("Configuración:", configuracion);

// ✅ const con arrays - se puede modificar el contenido
const frutas = ["manzana", "banana"];
frutas.push("naranja");
frutas.pop();
console.log("Frutas:", frutas);

console.log("=== DIFERENCIAS IMPORTANTES ===");
console.log("let: reasignable, block scope");
console.log("const: no reasignable, block scope");

const objeto = {}; // Ejemplo de objeto vacío
console.log("Objeto vacío:", objeto);

let variable = 200; // Ejemplo de variable let
console.log("Variable let:", variable); 
variable = "cadena"; // Reasignación válida
console.log("Variable let reasignada:", variable);
