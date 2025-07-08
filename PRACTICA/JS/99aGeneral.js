// =====================================================
// FUNCIONES EN JAVASCRIPT - GUÍA COMPLETA
// De lo más básico a lo más avanzado
// =====================================================

console.log("=== INICIANDO GUÍA DE FUNCIONES EN JAVASCRIPT ===\n");

// =====================================================
// 1. FUNCIONES BÁSICAS
// =====================================================

console.log("1. FUNCIONES BÁSICAS");
console.log("===================");

// 1.1 Declaración básica de función
function saludar() {
  console.log("¡Prueba de Función!");
}

// Llamar a la función
saludar();

// 1.2 Función con parámetros
function saludarPersona(mensaje) {
  console.log("¡ " + mensaje + " !");
}

sona("mensaje uno");
saludarPersona("mensaje dos");

// 1.3 Función con múltiples parámetros
function sumar(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}

sumar(5, 3);
sumar(10, 20);

// 1.4 Función con valor de retorno
function multiplicar(x, y) {
  return x * y;
}

let resultado = multiplicar(4, 7);
console.log("4 x 7 = " + resultado);

// 1.5 Función con parámetros por defecto
function saludarConDefault(nombre = "Usuario") {
  return "¡Hola " + nombre + "!";
}

console.log(saludarConDefault()); // Sin parámetro
console.log(saludarConDefault("María")); // Con parámetro

console.log("\n");

// =====================================================
// 2. EXPRESIONES DE FUNCIÓN
// =====================================================

console.log("2. EXPRESIONES DE FUNCIÓN");
console.log("========================");

// 2.1 Función expresión básica
const dividir = function (a, b) {
  return a / b;
};

console.log("10 ÷ 2 = " + dividir(10, 2));

// 2.2 Función expresión nombrada
const factorial = function calcularFactorial(n) {
  if (n <= 1) return 1;
  return n * calcularFactorial(n - 1);
};

console.log("5! = " + factorial(5));

// // 2.3 Funciones anónimas (en callbacks)
// setTimeout(function () {
//   console.log("Esta función anónima se ejecuta después de 1 segundo");
// }, 1000);

console.log("\n");

// =====================================================
// 3. FUNCIONES FLECHA (ARROW FUNCTIONS)
// =====================================================

console.log("3. FUNCIONES FLECHA");
console.log("==================");

// 3.1 Sintaxis básica
const restar = (a, b) => {
  return a - b;
};

console.log("8 - 3 = " + restar(8, 3));

// 3.2 Función flecha simplificada (una línea)
const cuadrado = (x) => x * x;
console.log("5² = " + cuadrado(5));

// 3.3 Sin parámetros
const obtenerFechaActual = () => new Date().toLocaleDateString();
console.log("Fecha actual: " + obtenerFechaActual());

// 3.4 Múltiples parámetros
const calcularArea = (largo, ancho) => largo * ancho;
console.log("Área (5x3): " + calcularArea(5, 3));

// 3.5 Retorno de objeto (requiere paréntesis)
const crearPersona = (nombre, edad) => ({
  nombre: nombre,
  edad: edad,
  esAdulto: edad >= 18,
});

console.log("Persona:", crearPersona("Luis", 25));

console.log("\n");

// =====================================================
// 4. SCOPE Y CLOSURES
// =====================================================

console.log("4. SCOPE Y CLOSURES");
console.log("==================");

// 4.1 Scope global vs local
let variableGlobal = "Soy global";

function ejemploScope() {
  let variableLocal = "Soy local";
  console.log("Dentro de función - Global:", variableGlobal);
  console.log("Dentro de función - Local:", variableLocal);
}

ejemploScope();
console.log("Fuera de función - Global:", variableGlobal);
// console.log(variableLocal); // Error: no está definida

// 4.2 Closure básico
function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}

const contador1 = crearContador();
const contador2 = crearContador();

console.log("Contador 1:", contador1()); // 1
console.log("Contador 1:", contador1()); // 2
console.log("Contador 2:", contador2()); // 1
console.log("Contador 1:", contador1()); // 3

function crearContadorAvanzado(inicio = 0, paso = 1) {
  let contador = inicio;

  return {
    incrementar: () => {
      contador += paso;
      return contador;
    },
    decrementar: () => {
      contador -= paso;
      return contador;
    },
    obtenerValor: () => contador,
    reset: () => {
      contador = inicio;
      return contador;
    },
  };
}

const contador = crearContadorAvanzado(10, 2);
console.log(contador.incrementar()); // 12
console.log(contador.incrementar()); // 14
console.log(contador.obtenerValor()); // 14
console.log(contador.reset()); // 10

// 4.3 Closure con parámetros
function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
const quintuplicar = crearMultiplicador(5);

console.log("Duplicar 5:", duplicar(5)); // 10
console.log("Triplicar 4:", triplicar(4)); // 12
console.log("Quintuplicar 3:", quintuplicar(3)); // 15

console.log("\n");

// =====================================================
// 5. PARÁMETROS AVANZADOS
// =====================================================

console.log("5. PARÁMETROS AVANZADOS");
console.log("======================");

// 5.0 EXPLICACIÓN DEL OPERADOR TRES PUNTOS (...)
console.log("5.0 EL OPERADOR TRES PUNTOS (...)");
console.log("---------------------------------");

// El operador ... tiene dos usos principales:
// 1. SPREAD (expansión) - Expandir elementos de arrays/objetos
// 2. REST (agrupación) - Agrupar elementos en arrays

// 5.0.1 SPREAD OPERATOR - Expandir arrays
console.log("\n--- SPREAD con Arrays ---");
const numArray1 = [1, 2, 3];
const numArray2 = [4, 5, 6];

// Combinar arrays con spread
const arraysCombinados = [...numArray1, ...numArray2];
console.log("Array 1:", numArray1);
console.log("Array 2:", numArray2);
console.log("Arrays combinados:", arraysCombinados);

// Copiar array
const copiaArray = [...numArray1];
console.log("Copia del array 1:", copiaArray);

// Agregar elementos al inicio y final
const arrayExtendido = [0, ...numArray1, 7, 8];
console.log("Array extendido:", arrayExtendido);

// 5.0.2 SPREAD OPERATOR - Expandir objetos
console.log("\n--- SPREAD con Objetos ---");
const persona = { nombre: "Juan", edad: 30 };
const direccion = { ciudad: "Madrid", pais: "España" };

// Combinar objetos
const personaCompleta = { ...persona, ...direccion };
console.log("Persona:", persona);
console.log("Dirección:", direccion);
console.log("Persona completa:", personaCompleta);

// Sobrescribir propiedades
const personaModificada = { ...persona, edad: 31, profesion: "Desarrollador" };
console.log("Persona modificada:", personaModificada);

// 5.0.3 SPREAD OPERATOR - En llamadas a funciones
console.log("\n--- SPREAD en llamadas a funciones ---");
function mostrarNumeros(a, b, c, d, e) {
  console.log("Números recibidos:", a, b, c, d, e);
}

const numerosParaEnviar = [10, 20, 30, 40, 50];
console.log("Array original:", numerosParaEnviar);
mostrarNumeros(...numerosParaEnviar); // Expande el array como argumentos separados

// Convertir string a array de caracteres
const texto = "Dabale arroz a la zorra el Abad";
const caracteres = [...texto];
console.log("Texto:", texto);
console.log("Caracteres:", caracteres);

// 5.0.4 REST OPERATOR - Agrupar elementos
console.log("\n--- REST Operator ---");

// En destructuring de arrays
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5, 6];
console.log("Primero:", primero);
console.log("Segundo:", segundo);
console.log("Resto:", resto);

// En destructuring de objetos
const { nombre, ...otrosDatos } = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Barcelona",
  profesion: "Médica",
};
console.log("Nombre:", nombre);
console.log("Otros datos:", otrosDatos);

// 5.0.5 Ejemplos prácticos del operador ...
console.log("\n--- Ejemplos prácticos ---");

// Encontrar el máximo en un array
const numerosEjemplo = [15, 8, 23, 4, 42, 16];
const maximoA = Math.max(numerosEjemplo);
console.log("Máximo:", maximoA);
const maximoB = Math.max(...numerosEjemplo);
console.log("Array:", numerosEjemplo);
console.log("Máximo:", maximoB);


console.log("\n--- Ahora aplicamos ... en FUNCIONES ---");

// 5.1 Parámetros rest (...) en funciones
function sumarTodosA(numeros) {
  console.log("Números recibidos:", numeros, typeof numeros);
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma;
}

function sumarTodosB(...numeros) {
  console.log("Números recibidos:", numeros, typeof numeros);
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma;
}

console.log("Suma de varios números:", sumarTodosA(1, 2, 3, 4, 5));
console.log("Suma de otros números:", sumarTodosA(10, 20));

console.log("Suma de varios números:", sumarTodosB(1, 2, 3, 4, 5));
console.log("Suma de otros números:", sumarTodosB(10, 20));

// 5.2 Destructuring en parámetros - Arrays
function procesarArray([primero, segundo, ...resto]) {
  console.log("Primero:", primero);
  console.log("Segundo:", segundo);
  console.log("Resto:", resto);
}

procesarArray([1, 2, 3, 4, 5]);

// 5.3 Destructuring en parámetros - Objetos
function procesarPersona({ nombre, edad, ciudad = "No especificada" }) {
  console.log(`${nombre}, ${edad} años, vive en ${ciudad}`);
}

procesarPersona({ nombre: "Ana", edad: 30, ciudad: "Madrid" });
procesarPersona({ nombre: "Pedro", edad: 25 }); // sin ciudad

// 5.4 Combinando rest y destructuring
function analizarDatos({ nombre, ...otrosDatos }, ...comentarios) {
  console.log("Nombre:", nombre);
  console.log("Otros datos:", otrosDatos);
  console.log("Comentarios:", comentarios);
}

analizarDatos(
  { nombre: "María", edad: 28, profesion: "Doctora" },
  "Excelente",
  "Muy profesional"
);

console.log("\n");

// =====================================================
// 6. FUNCIONES COMO OBJETOS DE PRIMERA CLASE
// =====================================================

console.log("6. FUNCIONES COMO OBJETOS DE PRIMERA CLASE");
console.log("==========================================");

// 6.1 Asignar funciones a variables
function original() {
  return "Función original";
}

const copia = original;
console.log("Función copiada:", copia());

// 6.2 Pasar funciones como parámetros
function ejecutarOperacion(a, b, operacion) {
  return operacion(a, b);
}

function suma(x, y) {
  return x + y;
}
function resta(x, y) {
  return x - y;
}

console.log("Ejecutar suma:", ejecutarOperacion(10, 5, suma));
console.log("Ejecutar resta:", ejecutarOperacion(10, 5, resta));

console.log(
  "Ejecutar suma con arrow:",
  ejecutarOperacion(10, 5, (x, y) => x + y)
);
console.log(
  "Ejecutar resta con arrow:",
  ejecutarOperacion(10, 5, (x, y) => x - y)
);

// 6.3 Retornar funciones desde funciones
function crearSaludador(saludo) {
  return function (nombre) {
    return saludo + " " + nombre;
  };
}

const saludoFormal = crearSaludador("Buenos días");
const saludoInformal = crearSaludador("¡Hola");

console.log(saludoFormal("Dr. García"));
console.log(saludoInformal("amigo!"));

// 6.4 Almacenar funciones en arrays
const operaciones = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b,
];

console.log("Operaciones con 12 y 3:");
const nombres = ["+", "-", "*", "/"];
for (let i = 0; i < operaciones.length; i++) {
  console.log(`12 ${nombres[i]} 3 = ${operaciones[i](12, 3)}`);
}

console.log("\n");

// =====================================================
// 7. MÉTODOS DE FUNCIÓN AVANZADOS
// =====================================================

console.log("7. MÉTODOS DE FUNCIÓN AVANZADOS");
console.log("===============================");

// 7.1 call() - llamar función con contexto específico
function presentarse() {
  return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
}

const persona1 = { nombre: "Juan", edad: 30 };
const persona2 = { nombre: "María", edad: 25 };

console.log("Con call():");
console.log(presentarse.call(persona1));
console.log(presentarse.call(persona2));

// =====================================================
// 11. FUNCIONES DE ORDEN SUPERIOR
// =====================================================

console.log("11. FUNCIONES DE ORDEN SUPERIOR");
console.log("===============================");

// 11.1 Función que recibe otra función
function aplicarOperacion(arr, operacion) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(operacion(arr[i]));
  }
  return resultado;
}

const numeros = [1, 2, 3, 4, 5];
console.log("Números originales:", numeros);
console.log(
  "Números al cuadrado:",
  aplicarOperacion(numeros, (x) => x * x)
);
console.log(
  "Números duplicados:",
  aplicarOperacion(numeros, (x) => x * 2)
);

