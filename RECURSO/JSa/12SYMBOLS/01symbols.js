/*
El tipo de dato Symbol en JavaScript es un tipo de dato primitivo, introducido en ECMAScript 2015 (ES6). Los Symbols son únicos e inmutables, lo que significa que una vez creados, su valor no puede ser cambiado.
Aquí están características clave y casos de uso para los Symbols:

Identificadores únicos: Cada Symbol está garantizado a ser único.
Claves de propiedades: Pueden ser usados como claves de propiedades en objetos.
Evitar colisiones de nombres: Útiles en escenarios donde quieres añadir propiedades a un objeto sin el riesgo de sobrescribir las existentes.
*/

// Creando un Symbol
const miSymbol = Symbol("miSymbol");

// Usando Symbol como clave de propiedad
const obj = {
  [miSymbol]: "Esta es una propiedad con clave Symbol",
  propiedadRegular: "Esta es una propiedad regular",
};

console.log(obj[miSymbol]); // Salida: 'Esta es una propiedad con clave Symbol'
console.log(obj.propiedadRegular); // Salida: 'Esta es una propiedad regular'

// Demostrando la unicidad
const symbol1 = Symbol("descripcion");
const symbol2 = Symbol("descripcion");

console.log(symbol1 === symbol2); // Salida: false

// Usando Symbols para evitar colisiones de nombres
const symbolBiblioteca = Symbol("propiedadEspecificaDeBiblioteca");

// Imagina que este es un objeto de una biblioteca de terceros
let objetoDeTerceros = {
  propiedadExistente: "Yo estaba aquí primero",
};

// Podemos añadir nuestra propiedad de forma segura sin preocuparnos de sobrescribir nada
objetoDeTerceros[symbolBiblioteca] =
  "Nuestro valor específico de la biblioteca";

console.log(objetoDeTerceros.propiedadExistente); // Salida: 'Yo estaba aquí primero'
console.log(objetoDeTerceros[symbolBiblioteca]); // Salida: 'Nuestro valor específico de la biblioteca'
