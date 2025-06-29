// 1. Usando la sintaxis literal de arreglos
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas); // Output: ['manzana', 'banana', 'naranja']

// 2. Usando el constructor `Array()`
let numeros = new Array(1, 2, 3, 4, 5);
console.log(numeros); // Output: [1, 2, 3, 4, 5]

// 3. Creando un arreglo vacío y luego agregando elementos
let colores = [];
colores[0] = "rojo";
colores[1] = "verde";
colores[2] = "azul";
console.log(colores); // Output: ['rojo', 'verde', 'azul']

// 4. Usando el método `Array.from()`
let cadena = "hola";
let letras = Array.from(cadena);
console.log(letras); // Output: ['h', 'o', 'l', 'a']

// 5. Creando un arreglo a partir de un objeto similar a un arreglo
let personas = { 0: "Juan", 1: "María", 2: "Pedro" };
let personasArray = Array.from(personas);
console.log(personasArray); // Output: ['Juan', 'María', 'Pedro']

// 6. Usando el método `Array.of()`
let mixto = Array.of(1, "dos", true, null);
console.log(mixto); // Output: [1, 'dos', true, null]

// 7. Creando un arreglo con un número específico de elementos
let vacio = new Array(5);
console.log(vacio); // Output: [undefined, undefined, undefined, undefined, undefined]

