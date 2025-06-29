// Ejemplos de Funciones Flecha en JavaScript

// 1. Introducción a las funciones flecha
console.log("1. Introducción a las funciones flecha:");

// Función tradicional
function suma(a, b) {
  return a + b;
}

// Función flecha equivalente
const sumaFlecha = (a, b) => a + b;

console.log(suma(5, 3)); // 8
console.log(sumaFlecha(5, 3)); // 8

// 2. Ámbito léxico y enlace (valor de 'this')
console.log("\n2. Ámbito léxico y enlace (valor de 'this'):");

function Persona() {
  this.edad = 0;

  setInterval(() => {
    this.edad++; // 'this' se refiere correctamente a la instancia de Persona
    console.log(this.edad);
  }, 1000);
}

// Descomenta la siguiente línea para ver el incremento de edad cada segundo
// new Persona();

// 3. Objeto arguments
console.log("\n3. Objeto arguments:");

function funcionTradicional() {
  console.log(arguments);
}

const funcionFlecha = (...args) => {
  console.log(args); // Las funciones flecha no tienen su propio 'arguments'
};

funcionTradicional(1, 2, 3);
funcionFlecha(1, 2, 3);

// 4. Retorno implícito
console.log("\n4. Retorno implícito:");

const cuadrado = (x) => x * x;
console.log(cuadrado(4)); // 16

// 5. Funciones flecha como constructores
console.log("\n5. Funciones flecha como constructores:");

// Esto arrojará un error
// const Perro = (nombre) => {
//     this.nombre = nombre;
// };
// const miPerro = new Perro('Fido'); // TypeError: Perro is not a constructor

// 6. Retorno explícito
console.log("\n6. Retorno explícito:");

const saludar = (nombre) => {
  return `Hola, ${nombre}!`;
};
console.log(saludar("Ana")); // Hola, Ana!

// 7. Ejemplos como callback en map
console.log("\n7. Ejemplos como callback en map:");

const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map((num) => num * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]

// 8. Ejemplo con find
console.log("\n8. Ejemplo con find:");

const frutas = ["manzana", "banana", "naranja", "pera"];
const frutaLarga = frutas.find((fruta) => fruta.length > 5);
console.log(frutaLarga); // banana

// 9. Comparación de 'this' en funciones tradicionales y flecha
console.log("\n9. Comparación de 'this' en funciones tradicionales y flecha:");

const objetoTradicional = {
  nombre: "Objeto Tradicional",
  saludarTradicional: function () {
    console.log("Hola, soy", this.nombre);
  },
  saludarFlecha: () => {
    console.log("Hola, soy", this.nombre);
  },
};

objetoTradicional.saludarTradicional(); // Hola, soy Objeto Tradicional
objetoTradicional.saludarFlecha(); // Hola, soy undefined

// 10. Uso de funciones flecha en métodos de array
console.log("\n10. Uso de funciones flecha en métodos de array:");

const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Teléfono", precio: 500 },
  { nombre: "Tablet", precio: 300 },
];

const nombresProductos = productos.map((producto) => producto.nombre);
console.log(nombresProductos);

const productosCostosos = productos.filter((producto) => producto.precio > 400);
console.log(productosCostosos);

const totalPrecio = productos.reduce(
  (total, producto) => total + producto.precio,
  0
);
console.log(totalPrecio);
