// ===================================================================
// OBJETOS ITERABLES EN JAVASCRIPT - Arrays, Set y Map
// ===================================================================

console.log("=== OBJETOS ITERABLES EN JAVASCRIPT ===");

// ===================================================================
// MÉTODOS DE ARRAYS PARA RECORRER (forEach y otros)
// ===================================================================

const frutas = ["manzana", "banana", "naranja", "uva", "kiwi"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\n=== MÉTODOS DE ARRAYS PARA RECORRER ===");

// 1. forEach - Ejecuta una función para cada elemento
console.log("\n1. forEach:");
frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});

// forEach con función separada
function mostrarNumero(numero, indice, array) {
  console.log(`Posición ${indice}: ${numero} (Array length: ${array.length})`);
}
console.log("\nforEach con función separada:");
[10, 20, 30].forEach(mostrarNumero);

// 2. map - Crea un nuevo array transformando cada elemento
console.log("\n2. map:");
const frutasMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log("Frutas originales:", frutas);
console.log("Frutas en mayúsculas:", frutasMayusculas);

const numerosDobles = numeros.map((num) => num * 2);
console.log("Números originales:", numeros);
console.log("Números dobles:", numerosDobles);

// 3. filter - Filtra elementos que cumplan una condición
console.log("\n3. filter:");
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log("Números pares:", numerosPares);

const frutasConA = frutas.filter((fruta) => fruta.includes("a"));
console.log("Frutas que contienen 'a':", frutasConA);

// 4. find - Encuentra el primer elemento que cumple la condición
console.log("\n4. find:");
const primerPar = numeros.find((num) => num % 2 === 0);
console.log("Primer número par:", primerPar);

// 5. findIndex - Encuentra el índice del primer elemento
console.log("\n5. findIndex:");
const indiceManzana = frutas.findIndex((fruta) => fruta === "manzana");
console.log("Índice de 'manzana':", indiceManzana);

// 6. some - Verifica si al menos un elemento cumple la condición
console.log("\n6. some:");
const hayPares = numeros.some((num) => num % 2 === 0);
console.log("¿Hay números pares?", hayPares);

// 7. every - Verifica si todos los elementos cumplen la condición
console.log("\n7. every:");
const todosPositivos = numeros.every((num) => num > 0);
console.log("¿Todos son positivos?", todosPositivos);

// 8. reduce - Reduce el array a un solo valor
console.log("\n8. reduce:");
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma de todos los números:", suma);

const frutasConcatenadas = frutas.reduce((acc, fruta) => acc + ", " + fruta);
console.log("Frutas concatenadas:", frutasConcatenadas);

// ===================================================================
// ARRAYS - Métodos adicionales útiles
// ===================================================================

console.log("\n=== ARRAYS - MÉTODOS ADICIONALES ===");

const colores = ["rojo", "azul", "verde", "amarillo"];

// includes - Verifica si existe un elemento
console.log("\n¿Incluye 'azul'?", colores.includes("azul"));

// indexOf - Obtiene el índice de un elemento
console.log("Índice de 'verde':", colores.indexOf("verde"));

// join - Une elementos en un string
console.log("Colores unidos:", colores.join(" - "));

// slice - Extrae una porción del array
console.log("Primeros 2 colores:", colores.slice(0, 2));

// concat - Combina arrays
const masColores = colores.concat(["rosa", "negro"]);
console.log("Más colores:", masColores);

// ===================================================================
// SET - Colección de valores únicos
// ===================================================================

console.log("\n=== SET - VALORES ÚNICOS ===");

// Crear un Set
const numerosUnicos = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log("Set de números únicos:", numerosUnicos);
console.log("Tamaño del Set:", numerosUnicos.size);

// Métodos de Set
const coloresSet = new Set();

// add - Agregar elementos
coloresSet.add("rojo");
coloresSet.add("azul");
coloresSet.add("verde");
coloresSet.add("rojo"); // No se duplica
console.log("\nSet de colores:", coloresSet);

// has - Verificar si existe
console.log("¿Tiene 'azul'?", coloresSet.has("azul"));

// delete - Eliminar elemento
coloresSet.delete("verde");
console.log("Después de eliminar 'verde':", coloresSet);

// Recorrer Set con forEach
console.log("\nRecorriendo Set con forEach:");
coloresSet.forEach((color) => {
  console.log("Color:", color);
});

// Recorrer Set con for...of
console.log("\nRecorriendo Set con for...of:");
for (let color of coloresSet) {
  console.log("Color:", color);
}

// Convertir Set a Array
const arrayDeColores = Array.from(coloresSet);
console.log("Set convertido a Array:", arrayDeColores);

// Eliminar duplicados de un array usando Set
const numerosConDuplicados = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const sinDuplicados = [...new Set(numerosConDuplicados)];
console.log("Array original:", numerosConDuplicados);
console.log("Sin duplicados:", sinDuplicados);

// ===================================================================
// MAP - Colección de pares clave-valor
// ===================================================================

console.log("\n=== MAP - CLAVE-VALOR ===");

// Crear un Map
const usuarios = new Map();

// set - Agregar pares clave-valor
usuarios.set("juan", { edad: 30, rol: "admin" });
usuarios.set("maria", { edad: 25, rol: "user" });
usuarios.set("pedro", { edad: 35, rol: "moderator" });

console.log("Map de usuarios:", usuarios);
console.log("Tamaño del Map:", usuarios.size);

// get - Obtener valor por clave
console.log("\nUsuario 'juan':", usuarios.get("juan"));

// has - Verificar si existe una clave
console.log("¿Existe 'maria'?", usuarios.has("maria"));

// delete - Eliminar por clave
usuarios.delete("pedro");
console.log("Después de eliminar 'pedro':", usuarios);

// Recorrer Map con forEach
console.log("\nRecorriendo Map con forEach:");
usuarios.forEach((valor, clave) => {
  console.log(`${clave}:`, valor);
});

// Recorrer Map con for...of
console.log("\nRecorriendo Map con for...of:");
for (let [clave, valor] of usuarios) {
  console.log(`${clave}: edad ${valor.edad}, rol ${valor.rol}`);
}

// keys() - Obtener todas las claves
console.log("\nClaves del Map:", [...usuarios.keys()]);

// values() - Obtener todos los valores
console.log("Valores del Map:", [...usuarios.values()]);

// entries() - Obtener pares clave-valor
console.log("Entradas del Map:", [...usuarios.entries()]);

// Map desde array de arrays
const configuracion = new Map([
  ["tema", "oscuro"],
  ["idioma", "español"],
  ["notificaciones", true],
]);

console.log("\nConfiguración:", configuracion);

// Convertir Map a Object
const configObj = Object.fromEntries(configuracion);
console.log("Map convertido a Object:", configObj);

// ===================================================================
// COMPARACIÓN: Array vs Set vs Map
// ===================================================================

console.log("\n=== COMPARACIÓN: ARRAY vs SET vs MAP ===");

console.log("\nARRAY:");
console.log("- Permite duplicados");
console.log("- Índices numéricos");
console.log("- Métodos: push, pop, slice, etc.");
console.log("- Uso: Listas ordenadas de elementos");

console.log("\nSET:");
console.log("- NO permite duplicados");
console.log("- No tiene índices");
console.log("- Métodos: add, delete, has");
console.log("- Uso: Colecciones únicas");

console.log("\nMAP:");
console.log("- Pares clave-valor");
console.log("- Claves pueden ser cualquier tipo");
console.log("- Métodos: set, get, has, delete");
console.log("- Uso: Asociaciones clave-valor");

// ===================================================================
// EJEMPLOS PRÁCTICOS
// ===================================================================

console.log("\n=== EJEMPLOS PRÁCTICOS ===");

// 1. Contar elementos con Map
const palabras = ["hola", "mundo", "hola", "javascript", "mundo"];
const conteo = new Map();

palabras.forEach((palabra) => {
  conteo.set(palabra, (conteo.get(palabra) || 0) + 1);
});

console.log("\nConteo de palabras:");
for (let [palabra, cantidad] of conteo) {
  console.log(`${palabra}: ${cantidad} veces`);
}

// 2. Filtrar y transformar con arrays
const productos = [
  { nombre: "laptop", precio: 1000, categoria: "tech" },
  { nombre: "mouse", precio: 25, categoria: "tech" },
  { nombre: "libro", precio: 15, categoria: "educacion" },
  { nombre: "tablet", precio: 300, categoria: "tech" },
];

const techBaratos = productos
  .filter((producto) => producto.categoria === "tech")
  .filter((producto) => producto.precio < 500)
  .map((producto) => producto.nombre);

console.log("\nProductos tech baratos:", techBaratos);

// 3. Set para categorías únicas
const categorias = new Set(productos.map((p) => p.categoria));
console.log("Categorías únicas:", [...categorias]);

// clear - Limpiar colecciones
usuarios.clear();
coloresSet.clear();
console.log("\nDespués de clear - usuarios:", usuarios.size);
console.log("Después de clear - colores:", coloresSet.size);
