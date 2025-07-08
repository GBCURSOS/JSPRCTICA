// =====================================================
// ARRAYS EN JAVASCRIPT - GUÍA COMPLETA
// De lo más básico a intermedio-avanzado
// =====================================================

console.log("=== INICIANDO GUÍA DE ARRAYS EN JAVASCRIPT ===\n");

// =====================================================
// 1. CREACIÓN DE ARRAYS
// =====================================================

console.log("1. CREACIÓN DE ARRAYS");
console.log("====================");

// 1.1 Sintaxis literal (más común)
let frutas = ["manzana", "banana", "naranja"];
console.log("Frutas:", frutas, typeof frutas);

// 1.2 Constructor Array()
let numeros = new Array(1, 2, 3, 4, 5);
console.log("Números:", numeros, typeof numeros);

// 1.3 Array vacío
let colores = [];
colores[0] = "rojo";
colores[1] = "verde";
colores[2] = "azul";
colores[6] = "amarillo";
colores[9] = "morado";
console.log("Colores:", colores);

// 1.4 Array.from() - desde string
let cadena = "hola";
let letras = Array.from(cadena);
console.log("Letras:", letras);

// 1.5 Array.of() - elementos específicos
let mixto = Array.of(1, "dos", true, null);
console.log("Mixto:", mixto);

// 1.6 Array con tamaño específico
let vacio = new Array(5);
console.log("Vacío:", vacio);
console.log("Longitud:", vacio.length);

console.log("\n");

// =====================================================
// 2. ACCESO Y MODIFICACIÓN
// =====================================================

console.log("2. ACCESO Y MODIFICACIÓN");
console.log("=======================");

let animales = ["perro", "gato", "conejo"];
console.log("Animales originales:", animales);

// 2.1 Acceso por índice
console.log("Primer animal:", animales[0]);
console.log("longitud", animales.length);
console.log("Último animal:", animales[animales.length - 1]);

// 2.2 Modificación
animales[1] = "hamster";
console.log("Después de cambiar gato:", animales);

// 2.3 Propiedades útiles
console.log("Longitud:", animales.length);
console.log("¿Es array?", Array.isArray(animales));

console.log("\n");

// =====================================================
// 3. MÉTODOS BÁSICOS DE ARRAY
// =====================================================

console.log("3. MÉTODOS BÁSICOS");
console.log("=================");

let lista = ["a", "b", "c"];
console.log("Lista inicial:", lista);

// 3.1 push() - agregar al final
lista.push("d");
console.log("Después de push('d'):", lista);

// 3.2 pop() - quitar del final
let ultimo = lista.pop();
console.log("Después de pop():", lista);
console.log("Elemento removido:", ultimo);

// 3.3 unshift() - agregar al inicio
lista.unshift("z");
console.log("Después de unshift('z'):", lista);

// 3.4 shift() - quitar del inicio
let primerElemento = lista.shift();
console.log("Después de shift():", lista);
console.log("Elemento removido:", primerElemento);

// 3.5 splice() - insertar/eliminar en posición específica
lista.splice(1, 0, "x", "y"); // en posición 1, eliminar 0, insertar x,y
console.log("Después de splice(1,0,'x','y'):", lista);

lista.splice(2, 1); // en posición 2, eliminar 1 elemento
console.log("Después de splice(2,1):", lista);

console.log("\n");

// =====================================================
// 4. BÚSQUEDA Y VERIFICACIÓN
// =====================================================

console.log("4. BÚSQUEDA Y VERIFICACIÓN");
console.log("=========================");

let productos = ["laptop", "mouse", "teclado", "monitor"];
console.log("Productos:", productos);

// 4.1 indexOf() - encontrar posición
console.log("Posición de 'mouse':", productos.indexOf("mouse"));
console.log("Posición de 'tablet':", productos.indexOf("tablet")); // -1 si no existe

// 4.2 includes() - verificar existencia
console.log("¿Contiene 'teclado'?", productos.includes("teclado"));
console.log("¿Contiene 'tablet'?", productos.includes("tablet"));

// 4.3 find() - encontrar elemento
let numerosTest = [1, 3, 5, 8, 9, 10];
let primerPar = numerosTest.find((num) => num % 2 === 0);
console.log("Primer número par:", primerPar);

// 4.4 findIndex() - encontrar índice
let indicePar = numerosTest.findIndex((num) => num % 2 === 0);
console.log("Índice del primer par:", indicePar);

console.log("\n");

// =====================================================
// 5. MÉTODOS DE TRANSFORMACIÓN
// =====================================================

console.log("5. MÉTODOS DE TRANSFORMACIÓN");
console.log("===========================");

let nums = [1, 2, 3, 4, 5];
console.log("Números originales:", nums);

// 5.1 map() - transformar cada elemento
let dobles = nums.map((num) => num * 2);
console.log("Dobles:", dobles);

let cuadrados = nums.map((num) => num * num);
console.log("Cuadrados:", cuadrados);

// 5.2 filter() - filtrar elementos
let pares = nums.filter((num) => num % 2 === 0);
console.log("Números pares:", pares);

let mayoresA2 = nums.filter((num) => num > 2);
console.log("Mayores a 2:", mayoresA2);

// 5.3 map + filter combinados
let paresDobles = nums.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log("Pares duplicados:", paresDobles);

console.log("\n");

// =====================================================
// 6. MÉTODOS DE REDUCCIÓN
// =====================================================

console.log("6. MÉTODOS DE REDUCCIÓN");
console.log("======================");

let valores = [1, 2, 3, 4, 5];
console.log("Valores:", valores);

// 6.1 reduce() - reducir a un solo valor
let suma = valores.reduce((acc, num) => acc + num, 0);
console.log("Suma:", suma);

let producto = valores.reduce((acc, num) => acc * num, 1);
console.log("Producto:", producto);

// 6.2 reduce() para operaciones complejas
let maximo = valores.reduce((max, num) => (num > max ? num : max));
console.log("Máximo:", maximo);

// 6.3 reduce() con objetos
let palabras = ["hola", "mundo", "javascript"];
let longitudes = palabras.reduce((obj, palabra) => {
  obj[palabra] = palabra.length;
  return obj;
}, {});
console.log("Longitudes:", longitudes);

console.log("\n");

// =====================================================
// 7. MÉTODOS DE VERIFICACIÓN
// =====================================================

console.log("7. MÉTODOS DE VERIFICACIÓN");
console.log("=========================");

let edades = [18, 25, 30, 17, 22];
console.log("Edades:", edades);

// 7.1 every() - todos cumplen condición
let todosMayores = edades.every((edad) => edad >= 18);
console.log("¿Todos son mayores de edad?", todosMayores);

// 7.2 some() - al menos uno cumple condición
let algunMenor = edades.some((edad) => edad < 18);
console.log("¿Alguno es menor de edad?", algunMenor);

console.log("\n");

// =====================================================
// 8. ORDENAMIENTO
// =====================================================

console.log("8. ORDENAMIENTO");
console.log("===============");

let numerosDesorden = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Números desordenados:", numerosDesorden);

// 8.1 sort() básico (strings)
let frutasSort = ["banana", "manzana", "cereza"];
frutasSort.sort();
console.log("Frutas ordenadas:", frutasSort);

// 8.2 sort() con función comparadora (números)
let numerosOrdenados = [...numerosDesorden].sort((a, b) => a - b);
console.log("Números ascendente:", numerosOrdenados);

let numerosDesc = [...numerosDesorden].sort((a, b) => b - a);
console.log("Números descendente:", numerosDesc);

// 8.3 reverse()
let numerosRev = [1, 2, 3, 4, 5];
numerosRev.reverse();
console.log("Números invertidos:", numerosRev);

console.log("\n");

// =====================================================
// 9. COMBINACIÓN Y DIVISIÓN
// =====================================================

console.log("9. COMBINACIÓN Y DIVISIÓN");
console.log("========================");

// 9.1 concat() - combinar arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2);
console.log("Combinado con concat:", combinado);

// 9.2 Spread operator
let combinadoSpread = [...arr1, ...arr2];
console.log("Combinado con spread:", combinadoSpread);

// 9.3 slice() - extraer porción
let alfabeto = ["a", "b", "c", "d", "e"];
let porcion = alfabeto.slice(1, 4);
console.log("Porción (1,4):", porcion);
console.log("Original intacto:", alfabeto);

// 9.4 join() - convertir a string
let elementos = ["Hola", "mundo", "JavaScript"];
let frase = elementos.join(" ");
console.log("Unido con espacios:", frase);

let csv = elementos.join(",");
console.log("CSV:", csv);

console.log("\n");

// =====================================================
// 10. DESESTRUCTURACIÓN
// =====================================================

console.log("10. DESESTRUCTURACIÓN");
console.log("====================");

// 10.1 Desestructuración básica
let coordenadas = [10, 20, 30];
let [x, y, z] = coordenadas;
console.log(`x: ${x}, y: ${y}, z: ${z}`);

// 10.2 Omitir elementos
let numArray = [1, 2, 3, 4, 5];
let [primero, , tercero, , quinto] = numArray;
console.log(`1°: ${primero}, 3°: ${tercero}, 5°: ${quinto}`);

// 10.3 Rest operator
let [head, ...tail] = numArray;
console.log("Cabeza:", head);
console.log("Cola:", tail);

// 10.4 Valores por defecto
let [a, b, c = 100] = [1, 2];
console.log(`a: ${a}, b: ${b}, c: ${c}`);

console.log("\n");

// =====================================================
// 11. ARRAYS MULTIDIMENSIONALES
// =====================================================

console.log("11. ARRAYS MULTIDIMENSIONALES");
console.log("=============================");

// 11.1 Matriz 2D
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matriz:", matriz);
console.log("Elemento [1][2]:", matriz[1][2]); // 6

// 11.2 Recorrer matriz
console.log("Recorrido de matriz:");
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`[${i}][${j}] = ${matriz[i][j]}`);
  }
}

// 11.3 Aplanar array (flatten)
let anidado = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let plano = anidado.flat();
console.log("Array anidado:", anidado);
console.log("Array plano:", plano);

console.log("\n");

// =====================================================
// 12. MÉTODOS AVANZADOS
// =====================================================

console.log("12. MÉTODOS AVANZADOS");
console.log("====================");

numeros = [1, 2, 3, 4, 5];

suma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

const promedio = numeros.reduce((acumulador, numero, indice, array) => {
    acumulador += numero;
    
    // Si es el último elemento, dividir por la cantidad
    if (indice === array.length - 1) {
        return acumulador / array.length;
    }
    
    return acumulador;
}, 0);

console.log("Promedio:", promedio); 

console.log("Suma:", suma); // 15

let personas = [
  { nombre: "Ana", edad: 25, ciudad: "Madrid" },
  { nombre: "Luis", edad: 30, ciudad: "Barcelona" },
  { nombre: "María", edad: 22, ciudad: "Madrid" },
  { nombre: "Carlos", edad: 35, ciudad: "Valencia" },
];

// 12.1 Filtrar y mapear objetos
let madrilenos = personas
  .filter((p) => p.ciudad === "Madrid")
  .map((p) => p.nombre);
console.log("Madrileños:", madrilenos);

// 12.2 Agrupar por propiedad
let porCiudad = personas.reduce((acc, persona) => {
  if (!acc[persona.ciudad]) {
    acc[persona.ciudad] = [];
  }
  acc[persona.ciudad].push(persona);
  return acc;
}, {});
console.log("Agrupados por ciudad:", porCiudad);

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

console.log("13. ENCADENAMIENTO DE MÉTODOS");
console.log("=============================");

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

// =====================================================
// 14. COPIAR ARRAYS
// =====================================================

// console.log("14. COPIAR ARRAYS");
// console.log("================");

// let original = [1, 2, 3, { nombre: "test" }];

// // 14.1 Copia superficial con spread
// let copiaSpread = [...original];
// copiaSpread[0] = 999;
// copiaSpread[3].nombre = "modificado";
// console.log("Original:", original);
// console.log("Copia spread:", copiaSpread);

// // 14.2 Copia superficial con slice
// let copiaSlice = original.slice();
// console.log("Copia slice:", copiaSlice);

// // 14.3 Copia profunda (para objetos simples)
// let originalSimple = [1, 2, 3];
// let copiaProfunda = JSON.parse(JSON.stringify(originalSimple));
// console.log("Copia profunda:", copiaProfunda);

// console.log("\n");

// // =====================================================
// // 15. CASOS DE USO PRÁCTICOS
// // =====================================================

// console.log("15. CASOS DE USO PRÁCTICOS");
// console.log("=========================");

// // 15.1 Eliminar duplicados
// let conDuplicados = [1, 2, 2, 3, 3, 3, 4, 5];
// let sinDuplicados = [...new Set(conDuplicados)];
// console.log("Sin duplicados:", sinDuplicados);

// // 15.2 Buscar intersección de arrays
// let set1 = [1, 2, 3, 4];
// let set2 = [3, 4, 5, 6];
// let interseccion = set1.filter((x) => set2.includes(x));
// console.log("Intersección:", interseccion);

// // 15.3 Crear rango de números
// let rango = Array.from({ length: 5 }, (_, i) => i + 1);
// console.log("Rango 1-5:", rango);

// // 15.4 Shuffle (mezclar) array
// let cartas = ["A", "K", "Q", "J"];
// let mezcladas = [...cartas].sort(() => Math.random() - 0.5);
// console.log("Cartas mezcladas:", mezcladas);

// // 15.5 Chunk (dividir en grupos)
// function chunk(array, size) {
//   let result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// }

// let numeros15 = [1, 2, 3, 4, 5, 6, 7, 8];
// let grupos = chunk(numeros15, 3);
// console.log("Dividido en grupos de 3:", grupos);

// console.log("\n");

// // =====================================================
// // RESUMEN Y MEJORES PRÁCTICAS
// // =====================================================

// console.log("RESUMEN Y MEJORES PRÁCTICAS");
// console.log("===========================");

// console.log(`
// CONCEPTOS CUBIERTOS:
// 1. ✓ Creación de arrays (literal, constructor, Array.from, Array.of)
// 2. ✓ Acceso y modificación de elementos
// 3. ✓ Métodos básicos (push, pop, shift, unshift, splice)
// 4. ✓ Búsqueda y verificación (indexOf, includes, find, findIndex)
// 5. ✓ Transformación (map, filter)
// 6. ✓ Reducción (reduce)
// 7. ✓ Verificación (every, some)
// 8. ✓ Ordenamiento (sort, reverse)
// 9. ✓ Combinación y división (concat, slice, join)
// 10. ✓ Desestructuración y spread/rest
// 11. ✓ Arrays multidimensionales
// 12. ✓ Trabajar con arrays de objetos
// 13. ✓ Encadenamiento de métodos
// 14. ✓ Copia de arrays
// 15. ✓ Casos de uso prácticos

// MEJORES PRÁCTICAS:
// • Usar métodos inmutables (map, filter) cuando sea posible
// • Preferir const para arrays que no se reasignan
// • Usar spread operator para copias superficiales
// • Encadenar métodos para operaciones complejas
// • Validar índices antes de acceder a elementos
// • Usar Array.isArray() para verificar tipos
// • Nombrar variables descriptivamente
// • Evitar modificar arrays durante iteración
// `);

// console.log("=== FIN DE LA GUÍA DE ARRAYS ===");
