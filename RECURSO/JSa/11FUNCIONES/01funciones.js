// 1. Ámbito (Scoping)
// Ejemplo 1: Ámbito de bloque con let
function ejemploAmbito1() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // 20
  }
  console.log(x); // 10
}

// Ejemplo 2: Ámbito de función con var
function ejemploAmbito2() {
  var y = 10;
  if (true) {
    var y = 20;
    console.log(y); // 20
  }
  console.log(y); // 20
}

// 2. Currificación (Currying)
// Ejemplo 1: Función currificada simple
const sumarCurry = (a) => (b) => a + b;
console.log(sumarCurry(2)(3)); // 5

// Ejemplo 2: Currificación con múltiples argumentos
const multiplicarCurry = (a) => (b) => (c) => a * b * c;
console.log(multiplicarCurry(2)(3)(4)); // 24

// 3. Expresiones de función inmediatamente invocadas (IIFE)
// Ejemplo 1: IIFE básica
(function () {
  console.log("IIFE ejecutada");
})();

// Ejemplo 2: IIFE con parámetros
(function (nombre) {
  console.log(`Hola, ${nombre}`);
})("Juan");

// 4. Funciones nombradas
// Ejemplo 1: Función nombrada simple
function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

// Ejemplo 2: Función nombrada como expresión
const despedir = function adios(nombre) {
  console.log(`Adiós, ${nombre}`);
};

// 5. Vinculación de 'this' y argumentos
// Ejemplo 1: Uso de bind
const persona = {
  nombre: "Ana",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
  saludo: function (parametro) {
    console.log(`Hola, soy ${parametro}`);
  },
};
const saludarAna = persona.saludar.bind(persona);
saludarAna();
const saludarPedro = persona.saludo.bind(persona,'Pedro');
saludarPedro();

// Ejemplo 2: Uso de call
function presentar(edad) {
  console.log(`${this.nombre} tiene ${edad} años`);
}
presentar.call(persona, 30);

// 6. Funciones con número desconocido de argumentos
// Ejemplo 1: Uso del objeto arguments
function sumarTodos() {
  return Array.from(arguments).reduce((sum, num) => sum + num, 0);
}
console.log(sumarTodos(1, 2, 3, 4)); // 10

// Ejemplo 2: Uso de parámetro rest
const multiplicarTodos = (...numeros) =>
  numeros.reduce((prod, num) => prod * num, 1);
console.log(multiplicarTodos(2, 3, 4)); // 24

// 7. Funciones anónimas
// Ejemplo 1: Función anónima como callback
[1, 2, 3].map(function (num) {
  return num * 2;
});

// Ejemplo 2: Función anónima como arrow function
[1, 2, 3].filter((num) => num > 1);

// 8. Parámetros por defecto
// Ejemplo 1: Parámetro por defecto simple
function saludarConDefecto(nombre = "Invitado") {
  console.log(`Hola, ${nombre}`);
}

// Ejemplo 2: Parámetros por defecto complejos
function crearPersona(nombre = "Anónimo", edad = 18, hobbies = []) {
  return { nombre, edad, hobbies };
}

// 9. Call y Apply
// Ejemplo 1: Uso de call
function saludarFormal(saludo, puntuacion) {
  console.log(`${saludo}, ${this.nombre}${puntuacion}`);
}
saludarFormal.call(persona, "Buenos días", "!");

// Ejemplo 2: Uso de apply
saludarFormal.apply(persona, ["Buenas noches", "."]);

// 10. Aplicación parcial
// Ejemplo 1: Aplicación parcial con bind
const sumar = (a, b) => a + b;
const sumarCinco = sumar.bind(null, 5);
console.log(sumarCinco(3)); // 8

// Ejemplo 2: Aplicación parcial manual
const multiplicar = (a, b, c) => a * b * c;
const duplicarYMultiplicar = (b, c) => multiplicar(2, b, c);

// 11. Paso de argumentos por referencia o valor
// Ejemplo 1: Paso por valor (tipos primitivos)
function incrementar(num) {
  num++;
  return num;
}
let x = 5;
console.log(incrementar(x)); // 6
console.log(x); // 5 (no cambia)

// Ejemplo 2: Paso por referencia (objetos)
function agregarPropiedad(obj) {
  obj.nuevaProp = true;
}
let miObjeto = {};
agregarPropiedad(miObjeto);
console.log(miObjeto.nuevaProp); // true

// 12. Argumentos de funciones
// Ejemplo 1: Desestructuración de argumentos
function procesarUsuario({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

// Ejemplo 2: Argumentos opcionales
function enviarMensaje(destinatario, mensaje, prioridad = "normal") {
  console.log(
    `A: ${destinatario}, Mensaje: ${mensaje}, Prioridad: ${prioridad}`
  );
}

// 13. Objeto "arguments"
// Ejemplo 1: Uso básico de arguments
function contarArgumentos() {
  console.log(`Número de argumentos: ${arguments.length}`);
}

// Ejemplo 2: Convertir arguments a array
function sumarArgumentos() {
  const nums = Array.from(arguments);
  return nums.reduce((sum, num) => sum + num, 0);
}

// 14. Parámetros rest y spread
// Ejemplo 1: Parámetro rest
function logTodos(...args) {
  args.forEach((arg) => console.log(arg));
}

// Ejemplo 2: Operador spread
const numeros = [1, 2, 3];
console.log(Math.max(...numeros));

// 15. Composición de funciones
// Ejemplo 1: Composición simple
let duplicar = (x) => x * 2;
const sumarUno = (x) => x + 1;
const operacionCompuesta = (x) => sumarUno(duplicar(x));
console.log(operacionCompuesta(5)); // 11

// Ejemplo 2: Función de composición general
// Función de composición
let componer = (...funciones) => (x) => funciones.reduceRight((acc, fn) => fn(acc), x);

// Funciones individuales
const mayusculas = (str) => str.toUpperCase();
const quitarEspacios = (str) => str.replace(/\s/g, '');
const invertir = (str) => str.split('').reverse().join('');

// Composición de funciones
const transformarTexto = componer(invertir, quitarEspacios, mayusculas);

// Uso
const texto = "Hola Mundo";
console.log(transformarTexto(texto)); // Salida: "ODNUMOLAH"

// Función de composición (la misma que antes)
componer = (...funciones) => (x) => funciones.reduceRight((acc, fn) => fn(acc), x);

// Funciones individuales
duplicar = (n) => n * 2;
const sumarDiez = (n) => n + 10;
const redondear = (n) => Math.round(n);

// Composición de funciones
const manipularNumero = componer(redondear, sumarDiez, duplicar);

// Uso
const numero = 7.3;
console.log(manipularNumero(numero)); // Salida: 25


// 16. Obtener el nombre de un objeto función
// Ejemplo 1: Nombre de función declarada
console.log(saludar.name); // "saludar"

// Ejemplo 2: Nombre de función anónima asignada
const funcionAnonima = function () {};
console.log(funcionAnonima.name); // "funcionAnonima"

// 17. Funciones recursivas
// Ejemplo 1: Factorial
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Ejemplo 2: Fibonacci
function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// 18. Uso de la declaración return
// Ejemplo 1: Return explícito
function cuadrado(x) {
  return x * x;
}

// Ejemplo 2: Return implícito en arrow function
const cubo = (x) => x * x * x;

// 19. Funciones como variable
// Ejemplo 1: Asignación de función a variable
const miFuncion = function (x) {
  return x + 1;
};

// Ejemplo 2: Paso de función como argumento
function ejecutar(fn, valor) {
  return fn(valor);
}
console.log(ejecutar((x) => x * x, 4)); // 16
