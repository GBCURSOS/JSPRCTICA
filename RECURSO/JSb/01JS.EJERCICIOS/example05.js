
{
//81. Programa en JavaScript para Obtener un Elemento Aleatorio de un Array:

function obtenerElementoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

const colores = ["rojo", "verde", "azul", "amarillo"];
const colorAleatorio = obtenerElementoAleatorio(colores);
console.log("Color aleatorio:", colorAleatorio);
}

{
//82. Programa en JavaScript para Realizar la Intersección Entre Dos Arrays:

function interseccionArrays(array1, array2) {
    return array1.filter(valor => array2.includes(valor));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const interseccion = interseccionArrays(array1, array2);
console.log("Intersección:", interseccion);
}

{
//83. Programa en JavaScript para Dividir un Array en Segmentos Más Pequeños:

function dividirArray(array, tamaño) {
    const segmentos = [];
    for (let i = 0; i < array.length; i += tamaño) {
        segmentos.push(array.slice(i, i + tamaño));
    }
    return segmentos;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const segmentos = dividirArray(numeros, 3);
console.log("Segmentos:", segmentos);
}

{
//84. Programa en JavaScript para Incluir un Archivo JS en Otro Archivo JS:

// Archivo: archivo1.js
console.log("Este es el archivo 1.");

// Archivo: archivo2.js
console.log("Este es el archivo 2.");
}

{
//85. Programa en JavaScript para Obtener la Extensión de un Archivo:

const archivo = "documento.pdf";
const extension = archivo.slice(archivo.lastIndexOf(".") + 1);
console.log("Extensión del archivo:", extension);
}

{
//86. Programa en JavaScript para Verificar si una Variable es indefinida o nula:

function verificarUndefinedNull(variable) {
    if (variable === undefined) {
        console.log("La variable es undefined.");
    } else if (variable === null) {
        console.log("La variable es null.");
    } else {
        console.log("La variable no es undefined ni null.");
    }
}

let variable1;
const variable2 = null;
const variable3 = "Hola";

verificarUndefinedNull(variable1);
verificarUndefinedNull(variable2);
verificarUndefinedNull(variable3);
}

{
//87. Programa en JavaScript para Establecer un Valor de Parámetro Predeterminado para una Función:

function saludar(nombre = "Usuario") {
    console.log("¡Hola, " + nombre + "!");
}

saludar(); // Salida: ¡Hola, Usuario!
saludar("Juan"); // Salida: ¡Hola, Juan!
}

{
//88. Programa en JavaScript para Ilustrar Diferentes Operaciones de Conjuntos:

const conjuntoA = new Set([1, 2, 3]);
const conjuntoB = new Set([3, 4, 5]);

const union = new Set([...conjuntoA, ...conjuntoB]);
const interseccion = new Set([...conjuntoA].filter(x => conjuntoB.has(x)));
const diferencia = new Set([...conjuntoA].filter(x => !conjuntoB.has(x)));

console.log("Unión:", union);
console.log("Intersección:", interseccion);
console.log("Diferencia:", diferencia);
}

{
//89. Programa en JavaScript para Generar un Número Aleatorio Entre Dos Números:

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = numeroAleatorio(1, 100);
console.log("Número aleatorio:", numeroAleatorio);
}

{
//90. Programa en JavaScript para Obtener la URL Actual:

const urlActual = window.location.href;
console.log("URL actual:", urlActual);
}

{
//91. Programa en JavaScript para Validar una Dirección de Correo Electrónico:

function validarCorreo(correo) {
    const patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patron.test(correo);
}

const correo = "usuario@example.com";
if (validarCorreo(correo)) {
    console.log("La dirección de correo es válida.");
} else {
    console.log("La dirección de correo no es válida.");
}
}

{
//92. Programa en JavaScript para Verificar si una Variable es de Tipo Función:

const funcionEjemplo = function() {
    console.log("Esta es una función de ejemplo.");
};

if (typeof funcionEjemplo === "function") {
    console.log("La variable es de tipo función.");
} else {
    console.log("La variable no es de tipo función.");
}
}

{
//93. Programa en JavaScript para Trabajar con Constantes:

const PI = 3.14159;
const URL_API = "https://api.example.com";
console.log("Valor de PI:", PI);
console.log("URL de la API:", URL_API);
}

{
//94. Programa en JavaScript para Pasar un Parámetro a una Función setTimeout():

function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

setTimeout(mostrarMensaje, 2000, "¡Este es un mensaje después de 2 segundos!");
}

{
//95. Programa en JavaScript para Generar un Rango de Números y Caracteres:

function generarRango(inicio, fin) {
    const rango = [];
    for (let i = inicio; i <= fin; i++) {
        rango.push(i);
    }
    return rango;
}

const rangoNumeros = generarRango(1, 10);
console.log("Rango de números:", rangoNumeros);

const rangoCaracteres = generarRango("A", "F");
console.log("Rango de caracteres:", rangoCaracteres);
}

{
//96. Programa en JavaScript para Realizar Sobrecarga de Funciones:

function suma(a, b) {
    return a + b;
}

function suma(a, b, c) {
    return a + b + c;
}

console.log(suma(1, 2)); // Salida: NaN
console.log(suma(1, 2, 3)); // Salida: 6
}

{
//97. Programa en JavaScript para Implementar una Pila:

class Pila {
    constructor() {
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    estaVacia() {
        return this.items.length === 0;
    }

    tamano() {
        return this.items.length;
    }
}

const pila = new Pila();
pila.push(1);
pila.push(2);
pila.push(3);

console.log("Elemento superior:", pila.peek()); // Salida: 3
console.log("Tamaño de la pila:", pila.tamano()); // Salida: 3
}

{
//98. Programa en JavaScript para Implementar una Cola:

class Cola {
    constructor() {
        this.items = [];
    }

    encolar(elemento) {
        this.items.push(elemento);
    }

    desencolar() {
        return this.items.shift();
    }

    frente() {
        return this.items[0];
    }

    estaVacia() {
        return this.items.length === 0;
    }

    tamano() {
        return this.items.length;
    }
}

const cola = new Cola();
cola.encolar(1);
cola.encolar(2);
cola.encolar(3);

console.log("Elemento frontal:", cola.frente()); // Salida: 1
console.log("Tamaño de la cola:", cola.tamano()); // Salida: 3
}

{
//99. Programa en JavaScript para Verificar si un Número es Decimal o Entero:

function esDecimal(numero) {
    return numero % 1 !== 0;
}

const numeroDecimal = 3.14;
const numeroEntero = 7;

console.log(numeroDecimal + " es decimal:", esDecimal(numeroDecimal)); // Salida: true
console.log(numeroEntero + " es decimal:", esDecimal(numeroEntero)); // Salida: false
}

{
//100. Programa en JavaScript para Pasar una Función como Parámetro:

function ejecutarFuncion(funcion) {
    funcion();
}

function saludar() {
    console.log("¡Hola, mundo!");
}

ejecutarFuncion(saludar); // Salida: ¡Hola, mundo!
}

{
//101. Programa en JavaScript para Obtener las Dimensiones de una Imagen:

const imagen = new Image();
imagen.src = "imagen.jpg";

imagen.onload = function() {
    const ancho = imagen.width;
    const alto = imagen.height;
    console.log("Ancho de la imagen:", ancho);
    console.log("Alto de la imagen:", alto);
};
}

{
//102. Programa en JavaScript para Eliminar Todos los Espacios en Blanco de un Texto:

const textoConEspacios = "   Esto es un texto con espacios   ";
const textoSinEspacios = textoConEspacios.replace(/\s+/g, "");
console.log("Texto original:", textoConEspacios);
console.log("Texto sin espacios:", textoSinEspacios);
}

{
//103. Programa en JavaScript para Escribir en la Consola:

console.log("Este es un mensaje en la consola.");
}

{
//104. Programa en JavaScript para Convertir una Fecha a Número:

const fecha = new Date();
const numeroFecha = +fecha;
console.log("Fecha como número:", numeroFecha);
}
