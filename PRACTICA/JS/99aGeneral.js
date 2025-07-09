
let personas = [
  { nombre: "Ana", edad: 25, ciudad: "Madrid" },
  { nombre: "Luis", edad: 30, ciudad: "Barcelona" },
  { nombre: "María", edad: 22, ciudad: "Madrid" },
  { nombre: "Carlos", edad: 35, ciudad: "Valencia" },
];

// 12.1 Filtrar y mapear objetos
let madrilenos = personas
  .filter((p) => p.ciudad === "Madrid");
console.log("Madrileños: ",madrilenos);

madrilenos = madrilenos
  .map((p) => p.nombre);
console.log("Madrileños:", madrilenos);

madrilenos = personas
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

console.log("por Ciudad: ",porCiudad);

// 12.3 Buscar en objetos
let personaMayor30 = personas.find((p) => p.edad > 30);
console.log("Primera persona mayor a 30:", personaMayor30);

// 12.4 Calcular estadísticas
let edadPromedio =
  personas.reduce((sum, p) => sum + p.edad, 0) / personas.length;
console.log("Edad promedio:", edadPromedio.toFixed(1));

console.log("\n");

// =====================================================
// 7. MÉTODO forEach - ITERACIÓN SIN RETORNO
// =====================================================

console.log("7. MÉTODO forEach - ITERACIÓN SIN RETORNO");
console.log("==========================================");

// 7.1 forEach con array de enteros
numeros = [1, 2, 3, 4, 5];
console.log("Array de números:", numeros);

console.log("Iterando números con forEach:");
numeros.forEach((numero, indice) => {
  console.log(`Posición ${indice}: ${numero} -> ${numero * 2}`);
});

// forEach no retorna nada (undefined)
let resultado = numeros.forEach((num) => num * 2);
console.log("Resultado de forEach:", resultado); // undefined

// 7.2 forEach con array de strings
frutas = ["manzana", "banana", "naranja", "uva"];
console.log("\nArray de frutas:", frutas);

console.log("Procesando frutas con forEach:");
frutas.forEach((fruta, index, array) => {
  const mayuscula = fruta.toUpperCase();
  const longitud = fruta.length;
  console.log(`${index + 1}. ${fruta} -> ${mayuscula} (${longitud} letras)`);

  // Acceso al array completo como tercer parámetro
  if (index === array.length - 1) {
    console.log("   ✓ Última fruta procesada");
  }
});

// 7.3 forEach con array de objetos
let estudiantes = [
  { nombre: "Ana", edad: 20, nota: 85 },
  { nombre: "Carlos", edad: 22, nota: 92 },
  { nombre: "María", edad: 19, nota: 78 },
  { nombre: "Luis", edad: 21, nota: 88 },
];

console.log("\nArray de estudiantes:", estudiantes);

console.log("Procesando estudiantes con forEach:");
estudiantes.forEach((estudiante, posicion) => {
  const estado = estudiante.nota >= 80 ? "APROBADO" : "REPROBADO";
  const emoji = estudiante.nota >= 80 ? "✅" : "❌";

  console.log(
    `${posicion + 1}. ${estudiante.nombre} (${estudiante.edad} años)`
  );
  console.log(`   Nota: ${estudiante.nota} - ${estado} ${emoji}`);
});

// Ejemplo práctico: modificar elementos durante forEach
console.log("\nModificando array durante forEach:");
let puntuaciones = [75, 82, 90, 67, 88];
console.log("Puntuaciones originales:", puntuaciones);

puntuaciones.forEach((puntuacion, index, arr) => {
  // Aplicar bonificación del 5% si es menor a 80
  if (puntuacion < 80) {
    arr[index] = Math.min(puntuacion * 1.05, 100); // Máximo 100
    console.log(
      `  Bonificación aplicada en posición ${index}: ${puntuacion} -> ${arr[
        index
      ].toFixed(1)}`
    );
  }
});

console.log("Puntuaciones después de bonificación:", puntuaciones);

// 7.4 Diferencias importantes: forEach vs map vs for
console.log("\n--- COMPARACIÓN: forEach vs map vs for ---");

let datos = [1, 2, 3, 4, 5];

// forEach: No retorna nada, usado para efectos secundarios
console.log("forEach - Solo efectos:");
datos.forEach((num) => console.log(`  Procesando: ${num}`));

// map: Retorna nuevo array con transformaciones
console.log("map - Retorna nuevo array:");
let transformados = datos.map((num) => num * 2);
console.log("  Resultado:", transformados);

// for tradicional: Control total
console.log("for tradicional - Control total:");
for (let i = 0; i < datos.length; i++) {
  console.log(`  Índice ${i}: ${datos[i]}`);
}

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
let ventasAltas = ventas.map((venta) => ({
  ...venta,
  total: venta.precio * venta.cantidad,
}));
console.log("Ventas altas:", ventasAltas);


console.log("Ventas altas (>$150):", ventasAltas);
ventasAltas = ventasAltas.filter((venta) => venta.total > 150);
console.log("Ventas altas (>$150):", ventasAltas);
ventasAltas.sort((a, b) => b.total - a.total);
console.log("Ventas altas (>$150):", ventasAltas);
ventasAltas = ventasAltas.map((venta) => `${venta.producto}: $${venta.total}`);
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
resultado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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

// =======================================================================================================

// Crear un Map vacío
const mapVacio = new Map();
console.log("Map vacío:", mapVacio);
console.log("Tamaño del map vacío:", mapVacio.size);

// Crear un Map con valores iniciales usando array de arrays
const frutasPrecios = new Map([
  ["manzana", 1.5],
  ["banana", 0.8],
  ["naranja", 2.0],
  ["uva", 3.5],
]);
console.log("Map de frutas y precios:", frutasPrecios);

// Crear un Map a partir de un objeto
// const objeto = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
// const mapFromObject = new Map(Object.entries(objeto));
// console.log("Map creado desde objeto:", mapFromObject);

console.log("\n");

// ================================================================================
// 2. MÉTODOS BÁSICOS (SET, GET, HAS, DELETE)
// ================================================================================

console.log("2. MÉTODOS BÁSICOS");
console.log("==================");

const usuarios = new Map();

// set() - Agregar elementos
usuarios.set("juan123", { nombre: "Juan", email: "juan@email.com" });
usuarios.set("maria456", { nombre: "María", email: "maria@email.com" });
usuarios.set("carlos789", { nombre: "Carlos", email: "carlos@email.com" });

console.log("Usuarios después de agregar:", usuarios);

// get() - Obtener elementos
const usuario1 = usuarios.get("juan123");
console.log("Usuario juan123:", usuario1);

const usuarioNoExiste = usuarios.get("inexistente");
console.log("Usuario inexistente:", usuarioNoExiste); // undefined

// has() - Verificar existencia
console.log("¿Existe juan123?", usuarios.has("juan123"));
console.log("¿Existe admin?", usuarios.has("admin"));

// delete() - Eliminar elementos
console.log("Eliminando maria456:", usuarios.delete("maria456"));
console.log("Intentando eliminar inexistente:", usuarios.delete("inexistente"));
console.log("Usuarios después de eliminar:", usuarios);

// clear() - Limpiar todo el Map
const tempMap = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log("Map temporal antes de clear:", tempMap);
tempMap.clear();
console.log("Map temporal después de clear:", tempMap);

console.log("\n");

// ================================================================================
// 3. PROPIEDADES Y MÉTODOS DE INFORMACIÓN
// ================================================================================

console.log("3. PROPIEDADES Y MÉTODOS DE INFORMACIÓN");
console.log("=======================================");

const inventario = new Map([
  ["laptop", 15],
  ["mouse", 50],
  ["teclado", 25],
  ["monitor", 8],
]);

// size - Obtener el tamaño
console.log("Tamaño del inventario:", inventario.size);
console.log("¿Está vacío?", inventario.size === 0);

// Verificar si está vacío
function estaVacio(map) {
  return map.size === 0;
}

console.log("¿Inventario vacío?", estaVacio(inventario));
console.log("¿Map vacío está vacío?", estaVacio(new Map()));

console.log("\n");

// ================================================================================
// 4. ITERACIÓN SOBRE MAPS
// ================================================================================

console.log("4. ITERACIÓN SOBRE MAPS");
console.log("=======================");

const colores = new Map([
  ["rojo", "#FF0000"],
  ["verde", "#00FF00"],
  ["azul", "#0000FF"],
  ["amarillo", "#FFFF00"],
]);

// for...of con entries() (por defecto)
console.log("Iterando con for...of (entries):");
for (const [nombre, codigo] of colores) {
  console.log(`${nombre}: ${codigo}`);
}

// for...of con keys()
console.log("\nIterando solo las claves:");
for (const nombre of colores.keys()) {
  console.log(`Color: ${nombre}`);
}

// for...of con values()
console.log("\nIterando solo los valores:");
for (const codigo of colores.values()) {
  console.log(`Código: ${codigo}`);
}

// forEach()
console.log("\nUsando forEach:");
colores.forEach((valor, clave) => {
  console.log(`${clave} -> ${valor}`);
});

// Convertir a arrays para usar métodos de array
console.log("\nConvertir a arrays:");
const clavesArray = Array.from(colores.keys());
const valoresArray = Array.from(colores.values());
const entradasArray = Array.from(colores.entries());

console.log("Claves como array:", clavesArray);
console.log("Valores como array:", valoresArray);
console.log("Entradas como array:", entradasArray);

console.log("\n");

// ================================================================================

let miSet = new Set();
console.log("Set vacío:", miSet);
console.log("Tamaño del set vacío:", miSet.size);

// 1.2 Creación con valores iniciales
let numeros = new Set([1, 2, 3, 4, 5]);
console.log("Set con números:", numeros);

// 1.3 Set elimina duplicados automáticamente
let conDuplicados = new Set([1, 2, 2, 3, 3, 3, 4]);
console.log("Set sin duplicados:", conDuplicados);

console.log("\n");

// =====================================================
// 2. OPERACIONES BÁSICAS
// =====================================================

console.log("2. OPERACIONES BÁSICAS");
console.log("=====================");

let frutas = new Set();

// 2.1 add() - agregar elementos
frutas.add("manzana");
frutas.add("banana");
frutas.add("naranja");
console.log("Frutas después de agregar:", frutas);

// 2.2 Agregar duplicado (no hace nada)
frutas.add("manzana");
console.log("Después de agregar manzana otra vez:", frutas);

// 2.3 has() - verificar existencia
console.log("¿Contiene manzana?", frutas.has("manzana"));
console.log("¿Contiene uva?", frutas.has("uva"));

// 2.4 delete() - eliminar elemento
frutas.delete("banana");
console.log("Después de eliminar banana:", frutas);

// 2.5 size - obtener tamaño
console.log("Tamaño del set:", frutas.size);

// 2.6 clear() - vaciar set
let temp = new Set([1, 2, 3]);
console.log("Set temporal antes:", temp);
temp.clear();
console.log("Set temporal después de clear:", temp);

console.log("\n");

// =====================================================
// 3. ITERACIÓN SOBRE SET
// =====================================================

console.log("3. ITERACIÓN SOBRE SET");
console.log("=====================");

let colores = new Set(["rojo", "verde", "azul", "amarillo"]);

// 3.1 for...of
console.log("Usando for...of:");
for (let color of colores) {
  console.log("Color:", color);
}

// 3.2 forEach()
console.log("\nUsando forEach:");
colores.forEach((color) => {
  console.log("Color forEach:", color);
});

// 3.3 forEach con índice (el valor se repite)
console.log("\nforEach con parámetros completos:");
colores.forEach((valor, valor2, set) => {
  console.log(`Valor: ${valor}, Valor2: ${valor2}, Set size: ${set.size}`);
});

// 3.4 Convertir a array para usar métodos de array
let arrayColores = [...colores];
console.log("Convertido a array:", arrayColores);

// 3.5 Usar Array.from()
let arrayColores2 = Array.from(colores);
console.log("Con Array.from():", arrayColores2);

console.log("\n");

// =====================================================
// 4. SET CON DIFERENTES TIPOS DE DATOS
// =====================================================

console.log("4. DIFERENTES TIPOS DE DATOS");
console.log("============================");

// 4.1 Set mixto
let mixto = new Set();
mixto.add(1);
mixto.add("1"); // String "1" es diferente del número 1
mixto.add(true);
mixto.add(null);
mixto.add(undefined);
mixto.add({ id: 1 });
mixto.add({ id: 1 }); // Objetos diferentes aunque tengan mismo contenido

console.log("Set mixto:", mixto);
console.log("Tamaño del set mixto:", mixto.size);

// 4.2 Set con objetos
let personas = new Set();
let persona1 = { nombre: "Ana", edad: 25 };
let persona2 = { nombre: "Luis", edad: 30 };
let persona3 = persona1; // Misma referencia

personas.add(persona1);
personas.add(persona2);
personas.add(persona3); // No se agrega porque es la misma referencia
personas.add({ nombre: "Ana", edad: 25 }); // Se agrega porque es objeto diferente

console.log("Set de personas:", personas);
console.log("Tamaño set personas:", personas.size);

console.log("\n");

// =====================================================
// 5. OPERACIONES DE CONJUNTOS
// =====================================================

console.log("5. OPERACIONES DE CONJUNTOS");
console.log("===========================");

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

console.log("Set A:", setA);
console.log("Set B:", setB);

// 5.1 Unión (todos los elementos de ambos sets)
let union = new Set([...setA, ...setB]);
console.log("Unión A ∪ B:", union);

// 5.2 Intersección (elementos comunes)
let interseccion = new Set([...setA].filter((x) => setB.has(x)));
console.log("Intersección A ∩ B:", interseccion);

// 5.3 Diferencia (elementos de A que no están en B)
let diferencia = new Set([...setA].filter((x) => !setB.has(x)));
console.log("Diferencia A - B:", diferencia);

// 5.4 Diferencia simétrica (elementos que están en A o B, pero no en ambos)
let diferenciaSimetrica = new Set([
  ...[...setA].filter((x) => !setB.has(x)),
  ...[...setB].filter((x) => !setA.has(x)),
]);
console.log("Diferencia simétrica A ⊕ B:", diferenciaSimetrica);

// 5.5 Verificar subconjunto
function esSubconjunto(subSet, superSet) {
  return [...subSet].every((x) => superSet.has(x));
}

let setC = new Set([1, 2]);
console.log("¿C es subconjunto de A?", esSubconjunto(setC, setA));

console.log("\n");