// Supongamos que tenemos un arreglo de números
let numeros = [10, 20, 30, 40, 50];

// Usando reduce() para calcular la suma de todos los números
let suma = numeros.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0);

console.log(suma); // Output: 150

// Contar la ocurrencia de cada letra en una cadena
let cadena = "hola mundo";
let conteoLetras = cadena.split("").reduce((acc, letra) => {
  acc[letra] = (acc[letra] || 0) + 1;
  return acc;
}, {});
console.log(conteoLetras); // Output: { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

// Transformar un arreglo de objetos en un objeto indexado por id
let personas = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "María" },
  { id: 3, nombre: "Pedro" }
];
let personasObj = personas.reduce((acc, persona) => {
  acc[persona.id] = persona;
  return acc;
}, {});
console.log(personasObj); // Output: { 1: { id: 1, nombre: "Juan" }, 2: { id: 2, nombre: "María" }, 3: { id: 3, nombre: "Pedro" } }

// Ejemplo de propiedad rest
function sumarNumeros(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

// Uso de la función con propiedad rest
console.log(sumarNumeros(1, 2, 3)); // Output: 6
console.log(sumarNumeros(4, 5, 6, 7, 8)); // Output: 30
console.log(sumarNumeros()); // Output: 0

// Ejemplo de operador spread y propiedad rest
function mostrarNombres(nombre, ...otrosNombres) {
  console.log(`Nombre principal: ${nombre}`);
  console.log("Otros nombres:");
  otrosNombres.forEach(n => console.log(n));
}

// Uso de la función con operador spread y propiedad rest
let nombresCompletos = ["Juan", "María", "Pedro", "Ana"];
mostrarNombres(...nombresCompletos);
 