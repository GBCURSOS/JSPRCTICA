// =====================================================
// SET EN JAVASCRIPT - GUÍA COMPLETA
// De lo más básico a intermedio-avanzado
// =====================================================

console.log("=== INICIANDO GUÍA DE SET EN JAVASCRIPT ===\n");

// =====================================================
// 1. INTRODUCCIÓN A SET
// =====================================================

console.log("1. INTRODUCCIÓN A SET");
console.log("====================");

// ¿Qué es un Set?
// Un Set es una colección de valores únicos (sin duplicados)
// Los valores pueden ser de cualquier tipo: primitivos u objetos

// 1.1 Creación básica
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
/*
// =====================================================
// 6. CASOS DE USO PRÁCTICOS
// =====================================================

console.log("6. CASOS DE USO PRÁCTICOS");
console.log("========================");

// 6.1 Eliminar duplicados de un array
let arrayConDuplicados = [1, 2, 2, 3, 3, 3, 4, 4, 5];
let arraySinDuplicados = [...new Set(arrayConDuplicados)];
console.log("Array original:", arrayConDuplicados);
console.log("Sin duplicados:", arraySinDuplicados);

// 6.2 Contar elementos únicos
let letras = "abracadabra".split("");
let letrasUnicas = new Set(letras);
console.log("Letras en 'abracadabra':", letras);
console.log("Letras únicas:", letrasUnicas);
console.log("Cantidad de letras únicas:", letrasUnicas.size);

// 6.3 Verificar si hay elementos duplicados
function tieneDuplicados(array) {
  return array.length !== new Set(array).size;
}

console.log("¿[1,2,3] tiene duplicados?", tieneDuplicados([1, 2, 3]));
console.log("¿[1,2,2,3] tiene duplicados?", tieneDuplicados([1, 2, 2, 3]));

// 6.4 Filtrar array basado en otro array
let productos = ["laptop", "mouse", "teclado", "monitor", "tablet"];
let disponibles = new Set(["laptop", "teclado", "tablet"]);
let productosDisponibles = productos.filter((p) => disponibles.has(p));
console.log("Productos disponibles:", productosDisponibles);

console.log("\n");

// =====================================================
// 7. SET VS ARRAY - RENDIMIENTO
// =====================================================

console.log("7. SET VS ARRAY - RENDIMIENTO");
console.log("=============================");

// Crear estructuras de datos grandes para comparar
let arrayGrande = Array.from({ length: 10000 }, (_, i) => i);
let setGrande = new Set(arrayGrande);

// 7.1 Búsqueda en Array (O(n))
console.time("Búsqueda en Array");
let encontradoArray = arrayGrande.includes(8999);
console.timeEnd("Búsqueda en Array");
console.log("Encontrado en array:", encontradoArray);

// 7.2 Búsqueda en Set (O(1))
console.time("Búsqueda en Set");
let encontradoSet = setGrande.has(8999);
console.timeEnd("Búsqueda en Set");
console.log("Encontrado en set:", encontradoSet);

// Nota: Set es mucho más rápido para búsquedas en estructuras grandes

console.log("\n");

// =====================================================
// 8. SET AVANZADO - TRABAJANDO CON OBJETOS
// =====================================================

console.log("8. SET AVANZADO - OBJETOS");
console.log("========================");

// 8.1 Set de objetos con identificador único
let usuarios = new Set();

class Usuario {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  toString() {
    return `Usuario(${this.id}, ${this.nombre})`;
  }
}

let user1 = new Usuario(1, "Ana");
let user2 = new Usuario(2, "Luis");
let user3 = new Usuario(1, "Ana"); // Mismo contenido, objeto diferente

usuarios.add(user1);
usuarios.add(user2);
usuarios.add(user3); // Se agrega porque es referencia diferente

console.log("Set de usuarios:", usuarios);

// 8.2 Implementar Set personalizado para objetos por propiedad
class CustomSet {
  constructor() {
    this.items = new Map();
  }

  add(obj, key = "id") {
    this.items.set(obj[key], obj);
    return this;
  }

  has(value, key = "id") {
    return this.items.has(value);
  }

  delete(value, key = "id") {
    return this.items.delete(value);
  }

  get size() {
    return this.items.size;
  }

  values() {
    return this.items.values();
  }
}

let usuariosCustom = new CustomSet();
usuariosCustom.add({ id: 1, nombre: "Ana" });
usuariosCustom.add({ id: 2, nombre: "Luis" });
usuariosCustom.add({ id: 1, nombre: "Ana Updated" }); // Reemplaza el anterior

console.log("Custom set size:", usuariosCustom.size);
console.log("Custom set values:", [...usuariosCustom.values()]);

console.log("\n");

// =====================================================
// 9. MÉTODOS DE ITERACIÓN AVANZADOS
// =====================================================

console.log("9. ITERACIÓN AVANZADA");
console.log("====================");

let numSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 9.1 keys(), values(), entries()
console.log("Keys (mismo que values):", [...numSet.keys()]);
console.log("Values:", [...numSet.values()]);
console.log("Entries:", [...numSet.entries()]); // [value, value] para cada elemento

// 9.2 Usar métodos de Array después de convertir
let pares = [...numSet].filter((n) => n % 2 === 0);
console.log("Números pares del set:", pares);

let cuadrados = [...numSet].map((n) => n * n);
console.log("Cuadrados (como array):", cuadrados);

// 9.3 Crear nuevo Set con transformación
let setCuadrados = new Set([...numSet].map((n) => n * n));
console.log("Set de cuadrados:", setCuadrados);

// 9.4 Reducir Set (convertir a array primero)
let suma = [...numSet].reduce((acc, val) => acc + val, 0);
console.log("Suma de elementos:", suma);

console.log("\n");

// =====================================================
// 10. CASOS DE USO COMPLEJOS
// =====================================================

console.log("10. CASOS DE USO COMPLEJOS");
console.log("=========================");

// 10.1 Sistema de etiquetas único
class TagSystem {
  constructor() {
    this.tags = new Set();
  }

  addTag(tag) {
    this.tags.add(tag.toLowerCase());
    return this;
  }

  removeTag(tag) {
    return this.tags.delete(tag.toLowerCase());
  }

  hasTag(tag) {
    return this.tags.has(tag.toLowerCase());
  }

  getTags() {
    return [...this.tags].sort();
  }

  getCount() {
    return this.tags.size;
  }
}

let articleTags = new TagSystem();
articleTags
  .addTag("JavaScript")
  .addTag("Programming")
  .addTag("Web")
  .addTag("javascript"); // No se duplica

console.log("Tags del artículo:", articleTags.getTags());
console.log("Cantidad de tags:", articleTags.getCount());

// 10.2 Seguimiento de visitantes únicos
class VisitorTracker {
  constructor() {
    this.visitors = new Set();
    this.sessions = new Map();
  }

  visit(userId) {
    this.visitors.add(userId);
    this.sessions.set(userId, Date.now());
  }

  getUniqueVisitors() {
    return this.visitors.size;
  }

  isReturning(userId) {
    return this.visitors.has(userId);
  }

  getVisitorsList() {
    return [...this.visitors];
  }
}

let tracker = new VisitorTracker();
tracker.visit("user123");
tracker.visit("user456");
tracker.visit("user123"); // Usuario que regresa

console.log("Visitantes únicos:", tracker.getUniqueVisitors());
console.log(
  "¿user123 es visitante recurrente?",
  tracker.isReturning("user123")
);

// 10.3 Análisis de datos - encontrar elementos únicos en múltiples arrays
let ventas2023 = ["producto1", "producto2", "producto3"];
let ventas2024 = ["producto2", "producto3", "producto4"];
let inventario = ["producto1", "producto3", "producto4", "producto5"];

// Productos vendidos en cualquier año
let todosLosProductos = new Set([...ventas2023, ...ventas2024]);
console.log("Productos vendidos (cualquier año):", todosLosProductos);

// Productos en inventario pero nunca vendidos
let productosNoVendidos = new Set(
  [...inventario].filter((p) => !todosLosProductos.has(p))
);
console.log("Productos nunca vendidos:", productosNoVendidos);

// Productos vendidos ambos años
let productosAmbosAnios = new Set(
  [...ventas2023].filter((p) => ventas2024.includes(p))
);
console.log("Productos vendidos ambos años:", productosAmbosAnios);

console.log("\n");

// =====================================================
// 11. COMPARACIÓN SET VS OTROS TIPOS
// =====================================================

console.log("11. COMPARACIONES");
console.log("================");

// 11.1 Set vs Array para almacenar únicos
let datos = [1, 2, 3, 4, 5, 4, 3, 2, 1];

// Método Array tradicional
let unicosArray = datos.filter((item, index) => datos.indexOf(item) === index);
console.log("Únicos con Array:", unicosArray);

// Método Set
let unicosSet = [...new Set(datos)];
console.log("Únicos con Set:", unicosSet);

// 11.2 Set vs Object para membership testing
let objetoLookup = { a: true, b: true, c: true };
let setLookup = new Set(["a", "b", "c"]);

console.log("Buscar 'b' en objeto:", "b" in objetoLookup);
console.log("Buscar 'b' en set:", setLookup.has("b"));

console.log("\n");

// =====================================================
// 12. LIMITACIONES Y CONSIDERACIONES
// =====================================================

console.log("12. LIMITACIONES Y CONSIDERACIONES");
console.log("==================================");

// 12.1 Set no tiene índices
let setNumeros = new Set([10, 20, 30]);
console.log("Set completo:", setNumeros);
// setNumeros[0] // undefined - no funciona
console.log(
  "Primer elemento (usando iterador):",
  setNumeros.values().next().value
);

// 12.2 No se puede acceder por índice, pero se puede convertir
let arrayFromSet = [...setNumeros];
console.log("Primer elemento (vía array):", arrayFromSet[0]);

// 12.3 Orden de inserción se mantiene (desde ES2015)
let setOrden = new Set();
setOrden.add("tercero");
setOrden.add("primero");
setOrden.add("segundo");
console.log("Orden de inserción:", [...setOrden]);

// 12.4 Comparación de objetos por referencia
let obj1 = { id: 1 };
let obj2 = { id: 1 };
let setObjetos = new Set([obj1, obj2]); // Ambos se agregan
console.log("Set con objetos similares:", setObjetos.size); // 2, no 1

console.log("\n");

// =====================================================
// RESUMEN Y MEJORES PRÁCTICAS
// =====================================================

console.log("RESUMEN Y MEJORES PRÁCTICAS");
console.log("===========================");

console.log(`
CONCEPTOS CUBIERTOS:
1. ✓ Creación y operaciones básicas de Set
2. ✓ Iteración sobre Sets (for...of, forEach)
3. ✓ Sets con diferentes tipos de datos
4. ✓ Operaciones de conjuntos (unión, intersección, diferencia)
5. ✓ Casos de uso prácticos (eliminar duplicados, etc.)
6. ✓ Comparación de rendimiento Set vs Array
7. ✓ Trabajar con objetos en Sets
8. ✓ Métodos de iteración avanzados
9. ✓ Casos de uso complejos (sistemas de tags, tracking)
10. ✓ Comparaciones con otras estructuras
11. ✓ Limitaciones y consideraciones

CUÁNDO USAR SET:
• Necesitas garantizar elementos únicos
• Realizas muchas búsquedas de membresía
• Trabajas con operaciones de conjuntos
• El orden de inserción es importante
• El rendimiento de búsqueda es crítico

CUÁNDO NO USAR SET:
• Necesitas acceso por índice
• Requieres métodos específicos de Array (map, filter, etc.)
• Trabajas principalmente con transformaciones de datos
• La estructura de datos es pequeña

MEJORES PRÁCTICAS:
• Usar Set para membresía rápida y elementos únicos
• Convertir a Array cuando necesites métodos de Array
• Considerar el tipo de datos para comparación de unicidad
• Usar en sistemas de etiquetas, permisos, tracking
• Combinar con Map para estructuras más complejas
`);

console.log("=== FIN DE LA GUÍA DE SET ===");
*/