let cadena = "esta es una cadena";
let numero = 47645;
let decimal = 54564.8787;

let persona1 = {
  nombre: "ramiro",
  apellido: "nogales",
  edad: 60,
  rol: "docente",
};

let sinInicializar;

let frutas = [
  "manzana",
  "banana",
  "naranja",
  "fresa",
  "uva",
  "piña",
  "mango",
  "sandía",
  "kiwi",
  "pera",
];

// console.log("Arreglo de frutas:", frutas);
// console.log("Número de frutas:", frutas.length);

let personas = [
  persona1,
  {
    nombre: "lucia",
    apellido: "gomez",
    edad: 28,
    rol: "estudiante",
  },
  {
    nombre: "carlos",
    apellido: "perez",
    edad: 35,
    rol: "ingeniero",
  },
  {
    nombre: "ana",
    apellido: "lopez",
    edad: 42,
    rol: "doctora",
  },
];

console.log("el valor de la variable número es: ", numero);
numero = 3434534;
console.log("el valor de la variable número es: ", numero);

console.log(
  "este es el doble de la edad de la persona1: ",
  persona1.nombre * 2
);
console.log(
  "este es el valor que tiene la variable sin Inicializar: ",
  sinInicializar
);

console.log("persona1: ", persona1);
// persona1 = null;
console.log("persona1: ", persona1);

console.log("persona1: ", personas);

let base = 5;
let exponente = 3
let alCubo = Math.pow(base, exponente);
console.log(`El valor de ${base} elevado a la potencia de ${exponente} es: ${alCubo}`);
base = Math.PI;
alCubo = Math.pow(base, exponente);
console.log(`El valor de ${base} elevado a la potencia de ${exponente} es: ${alCubo}`);

console.log(`el valor de ${Math.PI} elevado a la potencia de 3 es: ${Math.pow(Math.PI, exponente)}`);   


// ============================================
// CONDICIONALES EN JAVASCRIPT
// Estructuras de control para tomar decisiones
// ============================================

console.log("=== CONDICIONALES EN JAVASCRIPT ===");

// ============================================
// 1. CONDICIONAL IF BÁSICO
// ============================================
console.log("\n--- 1. IF BÁSICO ---");

// El programador define una variable para la edad
let edad = 18;
console.log("Edad del usuario:", edad);

// La estructura if evalúa una condición
if (edad >= 18) {
    console.log("El usuario es mayor de edad");
}

// Ejemplo con variable booleana
let esMayorDeEdad = edad >= 18;
console.log("¿Es mayor de edad?", esMayorDeEdad);

if (esMayorDeEdad) {
    console.log("Puede votar en las elecciones");
}

// ============================================
// 2. CONDICIONAL IF-ELSE
// ============================================
console.log("\n--- 2. IF-ELSE ---");

let temperatura = 25;
console.log("Temperatura actual:", temperatura + "°C");

// El programador usa if-else para dos opciones
if (temperatura > 20) {
    console.log("Hace calor, se recomienda ropa ligera");
} else {
    console.log("Hace frío, se recomienda abrigarse");
}

// Ejemplo con número negativo
let saldo = -150;
console.log("Saldo de la cuenta:", saldo);

if (saldo >= 0) {
    console.log("La cuenta tiene fondos disponibles");
} else {
    console.log("La cuenta está en números rojos");
}

// ============================================
// 3. CONDICIONAL IF-ELSE IF-ELSE
// ============================================
console.log("\n--- 3. IF-ELSE IF-ELSE ---");

let calificacion = 85;
console.log("Calificación del estudiante:", calificacion);

// El sistema evalúa múltiples rangos
if (calificacion >= 90) {
    console.log("Calificación: A - Excelente");
} else if (calificacion >= 80) {
    console.log("Calificación: B - Muy bueno");
} else if (calificacion >= 70) {
    console.log("Calificación: C - Bueno");
} else if (calificacion >= 60) {
    console.log("Calificación: D - Suficiente");
} else {
    console.log("Calificación: F - Insuficiente");
}

// Ejemplo con día de la semana
let diaSemana = 3;
console.log("Día de la semana (número):", diaSemana);

if (diaSemana === 1) {
    console.log("Hoy es Lunes");
} else if (diaSemana === 2) {
    console.log("Hoy es Martes");
} else if (diaSemana === 3) {
    console.log("Hoy es Miércoles");
} else if (diaSemana === 4) {
    console.log("Hoy es Jueves");
} else if (diaSemana === 5) {
    console.log("Hoy es Viernes");
} else if (diaSemana === 6) {
    console.log("Hoy es Sábado");
} else if (diaSemana === 7) {
    console.log("Hoy es Domingo");
} else {
    console.log("Día inválido");
}

// ============================================
// 4. OPERADORES DE COMPARACIÓN: == & ===
// ============================================
console.log("\n--- 4. OPERADORES DE COMPARACIÓN ---");

let a = 10;
let b = 20;
let c = "10";

console.log("a =", a);
console.log("b =", b);
console.log("c =", c, "(string)");

// Igual (==) - compara valor, no tipo
console.log("a == c:", a == c); // true
console.log("a === c:", a === c); // false (estricto)

// Diferente
console.log("a != b:", a != b); // true
console.log("a !== c:", a !== c); // true (estricto)

// Mayor y menor
console.log("a > b:", a > b); // false
console.log("a < b:", a < b); // true
console.log("a >= 10:", a >= 10); // true
console.log("b <= 20:", b <= 20); // true

// El programador usa comparaciones en condicionales
if (a === parseInt(c)) {
    console.log("a y c son iguales en valor y tipo después de conversión");
}

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
console.log("parseInt('42'):", parseInt("42")); // 42
console.log("parseInt('42.5'):", parseInt("42.5")); // 42 (solo la parte entera)
console.log("parseInt('42px'):", parseInt("42px")); // 42 (ignora caracteres no numéricos al final)
console.log("parseInt('px42'):", parseInt("px42")); // NaN (no puede empezar con no-numérico)
console.log("parseInt('1010', 2):", parseInt("1010", 2)); // 10 (binario a decimal)
console.log("parseInt('FF', 16):", parseInt("FF", 16)); // 255 (hexadecimal a decimal)

// 2. parseFloat() - Convierte cadena a número decimal
console.log("\n--- parseFloat() ---");
console.log("parseFloat('42.5'):", parseFloat("42.5")); // 42.5
console.log("parseFloat('42.5px'):", parseFloat("42.5px")); // 42.5
console.log("parseFloat('3.14159'):", parseFloat("3.14159")); // 3.14159
console.log("parseFloat('px3.14'):", parseFloat("px3.14")); // NaN

// 3. Number.parseInt() - Método estático (ES6+)
console.log("\n--- Number.parseInt() ---");
console.log("Number.parseInt('42'):", Number.parseInt("42"));
console.log("Number.parseInt('1010', 2):", Number.parseInt("1010", 2));

// 4. Number.parseFloat() - Método estático (ES6+)
console.log("\n--- Number.parseFloat() ---");
console.log("Number.parseFloat('3.14'):", Number.parseFloat("3.14"));

// ============================================
// 5. OPERADORES LÓGICOS
// ============================================
console.log("\n--- 5. OPERADORES LÓGICOS ---");

let usuario = "admin";
let contraseña = "12345";
let esActivo = true;

console.log("Usuario:", usuario);
console.log("Contraseña:", contraseña);
console.log("Está activo:", esActivo);

// AND (&&) - ambas condiciones deben ser verdaderas
if (usuario === "admin" && contraseña === "12345") {
    console.log("Credenciales correctas");
}

// OR (||) - al menos una condición debe ser verdadera
if (usuario === "admin" || usuario === "moderator") {
    console.log("El usuario tiene privilegios");
}

// NOT (!) - invierte el valor booleano
if (!esActivo) {
    console.log("El usuario está inactivo");
} else {
    console.log("El usuario está activo");
}

// Combinación de operadores lógicos
let edadUsuario = 25;
let tienePermiso = true;

if ((edadUsuario >= 18 && edadUsuario <= 65) && tienePermiso) {
    console.log("El usuario puede acceder al sistema");
} else {
    console.log("Acceso denegado");
}

// ============================================
// 6. SWITCH STATEMENT
// ============================================
console.log("\n--- 6. SWITCH STATEMENT ---");

let mes = 3;
console.log("Mes (número):", mes);

// El programador usa switch para múltiples opciones exactas
switch (mes) {
    case 1:
        console.log("Enero - Invierno");
        break;
    case 2:
        console.log("Febrero - Invierno");
        break;
    case 3:
        console.log("Marzo - Primavera");
        break;
    case 4:
        console.log("Abril - Primavera");
        break;
    case 5:
        console.log("Mayo - Primavera");
        break;
    case 6:
        console.log("Junio - Verano");
        break;
    case 7:
        console.log("Julio - Verano");
        break;
    case 8:
        console.log("Agosto - Verano");
        break;
    case 9:
        console.log("Septiembre - Otoño");
        break;
    case 10:
        console.log("Octubre - Otoño");
        break;
    case 11:
        console.log("Noviembre - Otoño");
        break;
    case 12:
        console.log("Diciembre - Invierno");
        break;
    default:
        console.log("Mes inválido");
}

// Switch con agrupación de casos
let tipoVehiculo = "carro";
console.log("Tipo de vehículo:", tipoVehiculo);

switch (tipoVehiculo) {
    case "carro":
    case "auto":
    case "automóvil":
        console.log("Vehículo de 4 ruedas para pasajeros");
        break;
    case "moto":
    case "motocicleta":
        console.log("Vehículo de 2 ruedas");
        break;
    case "bicicleta":
        console.log("Vehículo sin motor");
        break;
    default:
        console.log("Tipo de vehículo no reconocido");
}

// ============================================
// 7. OPERADOR TERNARIO
// ============================================
console.log("\n--- 7. OPERADOR TERNARIO ---");

let puntuacion = 750;
console.log("Puntuación del jugador:", puntuacion);

// Sintaxis: condición ? valor_si_verdadero : valor_si_falso
let mensaje = puntuacion >= 500 ? "¡Has ganado!" : "Intenta de nuevo";
console.log("Mensaje:", mensaje);

// El programador puede anidar operadores ternarios
let categoria = puntuacion >= 800 ? "Experto" : 
               puntuacion >= 500 ? "Intermedio" : "Principiante";
console.log("Categoría del jugador:", categoria);

// Operador ternario en asignación de variables
let descuento = puntuacion >= 1000 ? 0.2 : 0.1;
console.log("Descuento aplicado:", descuento * 100 + "%");

// ============================================
// 8. VALIDACIONES COMUNES
// ============================================
console.log("\n--- 8. VALIDACIONES COMUNES ---");

// Validación de números
numero = 42;
console.log("Número a validar:", numero);

if (typeof numero === "number" && !isNaN(numero)) {
    console.log("Es un número válido");
    
    if (numero > 0) {
        console.log("Es un número positivo");
    } else if (numero < 0) {
        console.log("Es un número negativo");
    } else {
        console.log("Es cero");
    }
} else {
    console.log("No es un número válido");
}

// Validación de strings
let texto = "JavaScript";
console.log("Texto a validar:", texto);

if (typeof texto === "string" && texto.length > 0) {
    console.log("Es un string válido y no está vacío");
    
    if (texto.length >= 5) {
        console.log("El texto tiene suficiente longitud");
    }
} else {
    console.log("String inválido o vacío");
}

// Validación de arrays
let lista = [1, 2, 3, 4, 5];
console.log("Array a validar:", lista);

if (Array.isArray(lista) && lista.length > 0) {
    console.log("Es un array válido con elementos");
    console.log("Cantidad de elementos:", lista.length);
} else {
    console.log("No es un array válido o está vacío");
}

// ============================================
// 9. CONDICIONALES ANIDADOS
// ============================================
console.log("\n--- 9. CONDICIONALES ANIDADOS ---");

let esEstudiante = true;
let edadEstudiante = 20;
let promedioNotas = 8.5;

console.log("¿Es estudiante?", esEstudiante);
console.log("Edad:", edadEstudiante);
console.log("Promedio de notas:", promedioNotas);

// El programador anida condicionales para lógica compleja
if (esEstudiante) {
    console.log("La persona es estudiante");
    
    if (edadEstudiante >= 18) {
        console.log("Es estudiante universitario");
        
        if (promedioNotas >= 9.0) {
            console.log("Estudiante con honores - Beca completa");
        } else if (promedioNotas >= 8.0) {
            console.log("Buen estudiante - Beca parcial");
        } else if (promedioNotas >= 7.0) {
            console.log("Estudiante regular - Sin beca");
        } else {
            console.log("Estudiante en riesgo académico");
        }
    } else {
        console.log("Es estudiante de secundaria");
    }
} else {
    console.log("La persona no es estudiante");
}

// ============================================
// 10. TRUTHY Y FALSY VALUES
// ============================================
console.log("\n--- 10. VALORES TRUTHY Y FALSY ---");

// El programador debe conocer los valores falsy en JavaScript
let valoresFalsy = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log("Valores falsy en JavaScript:", valoresFalsy);

// Prueba de valores falsy
valoresFalsy.forEach((valor, index) => {
    if (valor) {
        console.log(`Valor ${index + 1} (${valor}) es truthy`);
    } else {
        console.log(`Valor ${index + 1} (${valor}) es falsy`);
    }
});

// Ejemplos prácticos con truthy/falsy
let nombreUsuario = "";
if (nombreUsuario) {
    console.log("Bienvenido,", nombreUsuario);
} else {
    console.log("Por favor, ingrese su nombre");
}

let listaCompras = [];
if (listaCompras.length) {
    console.log("Hay", listaCompras.length, "elementos en la lista");
} else {
    console.log("La lista de compras está vacía");
}

// ============================================
// 11. SHORT-CIRCUIT EVALUATION
// ============================================
console.log("\n--- 11. EVALUACIÓN DE CORTOCIRCUITO ---");

let config = null;
let valorPorDefecto = "Configuración predeterminada";

// OR (||) - devuelve el primer valor truthy
let configuracion = config || valorPorDefecto;
console.log("Configuración:", configuracion);

// AND (&&) - devuelve el último valor si todos son truthy
let usuario2 = { nombre: "Juan", activo: true };
let saludo = usuario2 && usuario2.activo && "Hola, " + usuario2.nombre;
console.log("Saludo:", saludo);

// Nullish coalescing (??) - solo considera null y undefined como falsy
/*
El operador ?? devuelve el valor de la derecha cuando el valor de la izquierda es null o undefined. En cualquier otro caso, devuelve el valor de la izquierda.
*/

let valor1 = 0;
let valor2 = null;

console.log("Con ||:", valor1 || "Por defecto"); // "Por defecto"
console.log("Con ??:", valor1 ?? "Por defecto"); // 0

console.log("Con ||:", valor2 || "Por defecto"); // "Por defecto"
console.log("Con ??:", valor2 ?? "Por defecto"); // "Por defecto"

console.log(validarContraseña("123"));
console.log(validarContraseña("Contraseña123"));

console.log("\n=== FIN DE EJEMPLOS DE CONDICIONALES ===");

/* CICLOS */

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
frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}

// For...of con strings
texto = "Hola";
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
