
// 12.3 Buscar en objetos
let personaMayor30 = personas.find((p) => p.edad > 30);
console.log("Primera persona mayor a 30:", personaMayor30);

// 12.4 Calcular estadísticas
let edadPromedio =
  personas.reduce((sum, p) => sum + p.edad, 0) / personas.length;
console.log("Edad promedio:", edadPromedio.toFixed(1));

console.log("\n");

// =====================================================
// 13. ENCADENAMIENTO DE MÉTODOS
// =====================================================

// console.log("13. ENCADENAMIENTO DE MÉTODOS");
// console.log("=============================");

let ventas = [
  { producto: "laptop", precio: 1000, cantidad: 2 },
  { producto: "mouse", precio: 25, cantidad: 5 },
  { producto: "teclado", precio: 80, cantidad: 3 },
  { producto: "monitor", precio: 300, cantidad: 1 },
];

// 13.1 Encadenamiento complejo
let ventasAltas = ventas
.map((venta) => ({
  ...venta,
  total: venta.precio * venta.cantidad,
}));
console.log("Ventas altas (>$150):", ventasAltas);
ventasAltas = ventasAltas
.filter((venta) => venta.total > 150);
console.log("Ventas altas (>$150):", ventasAltas);
ventasAltas
.sort((a, b) => b.total - a.total);
console.log("Ventas altas (>$150):", ventasAltas);
ventasAltas = ventasAltas
.map((venta) => `${venta.producto}: $${venta.total}`);
console.log("Ventas altas (>$150):", ventasAltas);

ventasAltas = ventas
  .map((venta) => ({
    ...venta,
    total: venta.precio * venta.cantidad,
  }))
  .filter((venta) => venta.total > 150)
  .sort((a, b) => b.total - a.total)
  .map((venta) => `${venta.producto}: $${venta.total}`);
  console.log("Ventas altas (>$150):", ventasAltas);

// 13.2 Cadena de transformaciones
let resultado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter((n) => n % 2 === 0) // solo pares
  .map((n) => n * n) // elevar al cuadrado
  .filter((n) => n > 10) // solo mayores a 10
  .reduce((sum, n) => sum + n); // sumar todo

console.log("Resultado de cadena:", resultado);

console.log("\n");

// MÉTODOS QUE NO MODIFICAN EL ARRAY ORIGINAL (inmutables):

// map() - retorna nuevo array transformado
// filter() - retorna nuevo array filtrado
// slice() - retorna copia de una porción
// concat() - retorna nuevo array concatenado
// reduce() - retorna un valor acumulado
// find() - retorna el elemento encontrado
// some() - retorna true/false
// every() - retorna true/false
// includes() - retorna true/false
// indexOf() - retorna índice
// join() - retorna string
// MÉTODOS QUE SÍ MODIFICAN EL ARRAY ORIGINAL (mutables):

// push() - agrega al final
// pop() - quita del final
// shift() - quita del inicio
// unshift() - agrega al inicio
// splice() - quita/agrega en cualquier posición
// sort() - ordena el array
// reverse() - invierte el orden
// fill() - llena con un valor