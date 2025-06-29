{
//61. Programa en JavaScript para Reemplazar Todos los Saltos de Línea con :

const textoConSaltos = "Línea 1\nLínea 2\nLínea 3";
const textoConBR = textoConSaltos.replace(/\n/g, "<br>");

console.log("Texto con saltos de línea:", textoConSaltos);
console.log("Texto con <br>:", textoConBR);

}

{
//62. Programa en JavaScript para Mostrar la Fecha y la Hora:

const fechaActual = new Date();
const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
const fechaYHora = fechaActual.toLocaleDateString('es-ES', opciones);

console.log("Fecha y hora actual:", fechaYHora);
}

{
//63. Programa en JavaScript para Verificar si un Año es Bisiesto:

function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

const año = parseInt(prompt("Ingresa un año:"));
if (esBisiesto(año)) {
    console.log(año + " es un año bisiesto.");
} else {
    console.log(año + " no es un año bisiesto.");
}
}

{
//64. Programa en JavaScript para Formatear la Fecha:

const fecha = new Date();
const opciones = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);
console.log("Fecha formateada:", fechaFormateada);
}

{
//65. Programa en JavaScript para Mostrar la Fecha Actual:

const fechaActual = new Date();
console.log("Fecha actual:", fechaActual.toDateString());
}

{
//66. Programa en JavaScript para Comparar el Valor de Dos Fechas:

const fecha1 = new Date("2023-08-25");
const fecha2 = new Date("2023-08-20");

if (fecha1 > fecha2) {
    console.log("La fecha 1 es posterior a la fecha 2.");
} else if (fecha1 < fecha2) {
    console.log("La fecha 1 es anterior a la fecha 2.");
} else {
    console.log("Las fechas son iguales.");
}
}

{
//67. Programa en JavaScript para Crear una Temporizador de Cuenta Regresiva:

function countdownTimer(tiempo) {
    const intervalo = setInterval(function() {
        console.log(tiempo);
        tiempo--;

        if (tiempo < 0) {
            clearInterval(intervalo);
            console.log("¡Tiempo terminado!");
        }
    }, 1000);
}

const segundos = parseInt(prompt("Ingresa la cantidad de segundos para la cuenta regresiva:"));
countdownTimer(segundos);
}

{
//68. Programa en JavaScript para Eliminar un Elemento Específico de un Array:

const numeros = [1, 2, 3, 4, 5];
const elementoEliminar = 3;

const indice = numeros.indexOf(elementoEliminar);
if (indice !== -1) {
    numeros.splice(indice, 1);
}

console.log("Array después de eliminar el elemento:", numeros);
}

{
//69. Programa en JavaScript para Verificar si un Array Contiene un Valor Especificado:

const numeros = [1, 2, 3, 4, 5];
const valorBuscado = 3;

const contieneValor = numeros.includes(valorBuscado);
if (contieneValor) {
    console.log("El array contiene el valor", valorBuscado);
} else {
    console.log("El array no contiene el valor", valorBuscado);
}
}

{
//70. Programa en JavaScript para Insertar un Elemento en un Array:

const numeros = [1, 2, 3, 5];
const elementoInsertar = 4;
const indice = 3;

numeros.splice(indice, 0, elementoInsertar);
console.log("Array después de insertar el elemento:", numeros);
}

{
//71. Programa en JavaScript para Agregar un Objeto al Final de un Array:

const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 }
];

const nuevaPersona = { nombre: "Carlos", edad: 28 };
personas.push(nuevaPersona);
console.log("Array después de agregar el objeto:", personas);
}

{
//72. Programa en JavaScript para Verificar si un Objeto es un Array:

const arreglo = [1, 2, 3];
const objeto = { a: 1, b: 2 };

if (Array.isArray(arreglo)) {
    console.log("El objeto es un array.");
} else {
    console.log("El objeto no es un array.");
}

if (Array.isArray(objeto)) {
    console.log("El objeto es un array.");
} else {
    console.log("El objeto no es un array.");
}
}

{
//73. Programa en JavaScript para Vaciar un Array:

const numeros = [1, 2, 3, 4, 5];
numeros.length = 0;
console.log("Array vaciado:", numeros);
}

{
//74. Programa en JavaScript para Agregar un Elemento al Inicio de un Array:

const numeros = [2, 3, 4, 5];
const elementoAgregar = 1;

numeros.unshift(elementoAgregar);
console.log("Array después de agregar el elemento:", numeros);
}

{
//75. Programa en JavaScript para Eliminar Duplicados de un Array:

const numeros = [1, 2, 2, 3, 4, 4, 5];
const numerosUnicos = [...new Set(numeros)];

console.log("Array original:", numeros);
console.log("Array sin duplicados:", numerosUnicos);
}

{
//76. Programa en JavaScript para Combinar Dos Arrays y Eliminar Elementos Duplicados:

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const arrayCombinado = [...new Set([...array1, ...array2])];

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array combinado sin duplicados:", arrayCombinado);
}

{
//77. Programa en JavaScript para Ordenar un Array de Objetos por Valores de Propiedades:

const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Carlos", edad: 28 }
];

personas.sort((a, b) => a.edad - b.edad);
console.log("Array de personas ordenado por edad:", personas);
}

{
//78. Programa en JavaScript para Crear un Array Bidimensional:

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz:", matriz);
}

{
//79. Programa en JavaScript para Extraer Valores de Propiedades Dadas de Objetos como Array:

const personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Carlos", edad: 28 }
];

const edades = personas.map(persona => persona.edad);
console.log("Array de edades:", edades);
}

{
//80. Programa en JavaScript para Comparar Elementos de Dos Arrays:

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];

const sonIguales = JSON.stringify(array1) === JSON.stringify(array2);
console.log('Los arrays son iguales:', sonIguales)
}