/*
================================================================================
                            EJEMPLOS DE MAP EN JAVASCRIPT
================================================================================

Este archivo contiene ejemplos progresivos del uso de Map en JavaScript,
organizados de lo más básico a lo más avanzado, con buenas prácticas y 
casos de uso comunes.

Map es una colección de pares clave-valor donde las claves pueden ser de cualquier tipo
(no solo strings como en los objetos), y mantiene el orden de inserción.

Índice:
1. Creación y inicialización de Maps
2. Métodos básicos (set, get, has, delete)
3. Propiedades y métodos de información
4. Iteración sobre Maps
5. Conversión entre Map y otros tipos
6. Maps con claves de diferentes tipos
7. Maps anidados y estructuras complejas
8. Métodos avanzados y casos de uso
9. Comparación Map vs Object
10. Buenas prácticas y patrones comunes
================================================================================
*/

console.log("=== EJEMPLOS DE MAP EN JAVASCRIPT ===\n");

// ================================================================================
// 1. CREACIÓN E INICIALIZACIÓN DE MAPS
// ================================================================================

console.log("1. CREACIÓN E INICIALIZACIÓN DE MAPS");
console.log("=====================================");

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
const objeto = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
const mapFromObject = new Map(Object.entries(objeto));
console.log("Map creado desde objeto:", mapFromObject);

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
// 5. CONVERSIÓN ENTRE MAP Y OTROS TIPOS
// ================================================================================

console.log("5. CONVERSIÓN ENTRE MAP Y OTROS TIPOS");
console.log("=====================================");

// Map a Object
const configuracion = new Map([
  ["tema", "oscuro"],
  ["idioma", "español"],
  ["notificaciones", true],
]);

const configObj = Object.fromEntries(configuracion);
console.log("Map convertido a objeto:", configObj);

// Object a Map
const datosUsuario = { id: 1, nombre: "Ana", activo: true };
const userMap = new Map(Object.entries(datosUsuario));
console.log("Objeto convertido a Map:", userMap);

// Map a JSON
const configJSON = JSON.stringify(Object.fromEntries(configuracion));
console.log("Map convertido a JSON:", configJSON);

// JSON a Map
const jsonString = '{"servidor":"localhost","puerto":3000,"ssl":false}';
const serverMap = new Map(Object.entries(JSON.parse(jsonString)));
console.log("JSON convertido a Map:", serverMap);

// Map a Array de arrays
const arrayPares = [...configuracion];
console.log("Map como array de pares:", arrayPares);

console.log("\n");

// ================================================================================
// 6. MAPS CON CLAVES DE DIFERENTES TIPOS
// ================================================================================

console.log("6. MAPS CON CLAVES DE DIFERENTES TIPOS");
console.log("======================================");

const multiTipos = new Map();

// Claves string
multiTipos.set("nombre", "JavaScript");

// Claves number
multiTipos.set(42, "respuesta universal");

// Claves boolean
multiTipos.set(true, "verdadero");
multiTipos.set(false, "falso");

// Claves object
const objClave = { tipo: "configuración" };
multiTipos.set(objClave, "valor del objeto");

// Claves function
const funcionClave = () => "test";
multiTipos.set(funcionClave, "valor de función");

// Claves Symbol
const simbolo = Symbol("id");
multiTipos.set(simbolo, "valor del símbolo");

console.log("Map con diferentes tipos de claves:");
for (const [clave, valor] of multiTipos) {
  console.log(`Clave (${typeof clave}):`, clave, "-> Valor:", valor);
}

// Usar objetos como claves (útil para asociaciones)
const usuario1Obj = { id: 1, nombre: "Pedro" };
const usuario2Obj = { id: 2, nombre: "Laura" };

const sesionesUsuario = new Map();
sesionesUsuario.set(usuario1Obj, { loginTime: new Date(), intentos: 1 });
sesionesUsuario.set(usuario2Obj, { loginTime: new Date(), intentos: 3 });

console.log("\nUsando objetos como claves:");
console.log("Sesión de Pedro:", sesionesUsuario.get(usuario1Obj));
console.log("Sesión de Laura:", sesionesUsuario.get(usuario2Obj));

console.log("\n");

// ================================================================================
// 7. MAPS ANIDADOS Y ESTRUCTURAS COMPLEJAS
// ================================================================================

console.log("7. MAPS ANIDADOS Y ESTRUCTURAS COMPLEJAS");
console.log("========================================");

// Map de Maps (estructura anidada)
const empresa = new Map();

// Departamento de Ventas
const ventas = new Map([
  ["juan", { puesto: "Gerente", salario: 5000 }],
  ["ana", { puesto: "Vendedor", salario: 3000 }],
]);

// Departamento de IT
const it = new Map([
  ["carlos", { puesto: "Desarrollador", salario: 4500 }],
  ["maria", { puesto: "DevOps", salario: 5500 }],
]);

empresa.set("ventas", ventas);
empresa.set("it", it);

console.log("Estructura de empresa (Map de Maps):");
for (const [departamento, empleados] of empresa) {
  console.log(`\nDepartamento: ${departamento}`);
  for (const [nombre, datos] of empleados) {
    console.log(`  ${nombre}: ${datos.puesto} - $${datos.salario}`);
  }
}

// Función para buscar empleado en toda la empresa
function buscarEmpleado(empresa, nombreEmpleado) {
  for (const [departamento, empleados] of empresa) {
    if (empleados.has(nombreEmpleado)) {
      return {
        departamento,
        empleado: empleados.get(nombreEmpleado),
      };
    }
  }
  return null;
}

console.log("\nBuscar empleado 'maria':", buscarEmpleado(empresa, "maria"));
console.log("Buscar empleado 'pedro':", buscarEmpleado(empresa, "pedro"));

// Map con arrays como valores
const proyectos = new Map([
  ["web-app", ["HTML", "CSS", "JavaScript", "React"]],
  ["mobile-app", ["React Native", "Firebase", "Redux"]],
  ["api-server", ["Node.js", "Express", "MongoDB", "JWT"]],
]);

console.log("\nProyectos y sus tecnologías:");
proyectos.forEach((tecnologias, proyecto) => {
  console.log(`${proyecto}: ${tecnologias.join(", ")}`);
});

console.log("\n");

// ================================================================================
// 8. MÉTODOS AVANZADOS Y CASOS DE USO
// ================================================================================

console.log("8. MÉTODOS AVANZADOS Y CASOS DE USO");
console.log("===================================");

// Cache con Map
class CacheSimple {
  constructor(maxSize = 10) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  get(key) {
    if (this.cache.has(key)) {
      // LRU: mover al final
      const valor = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, valor);
      return valor;
    }
    return null;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // Eliminar el más antiguo (primero)
      const primeraKey = this.cache.keys().next().value;
      this.cache.delete(primeraKey);
    }
    this.cache.set(key, value);
  }

  mostrarCache() {
    console.log("Cache actual:", Array.from(this.cache.entries()));
  }
}

console.log("Ejemplo de Cache con Map:");
const cache = new CacheSimple(3);
cache.set("user1", "Juan");
cache.set("user2", "María");
cache.set("user3", "Carlos");
cache.mostrarCache();

cache.set("user4", "Ana"); // Elimina user1
cache.mostrarCache();

console.log("Obtener user2:", cache.get("user2")); // Lo mueve al final
cache.mostrarCache();

// Contar frecuencias
function contarFrecuencias(array) {
  const frecuencias = new Map();
  for (const item of array) {
    frecuencias.set(item, (frecuencias.get(item) || 0) + 1);
  }
  return frecuencias;
}

const palabras = ["casa", "auto", "casa", "bicicleta", "auto", "casa"];
const frecuenciaPalabras = contarFrecuencias(palabras);
console.log("\nFrecuencia de palabras:", frecuenciaPalabras);

// Agrupar por criterio
function agruparPor(array, criterio) {
  const grupos = new Map();
  for (const item of array) {
    const clave = criterio(item);
    if (!grupos.has(clave)) {
      grupos.set(clave, []);
    }
    grupos.get(clave).push(item);
  }
  return grupos;
}

const personas = [
  { nombre: "Juan", edad: 25, departamento: "IT" },
  { nombre: "María", edad: 30, departamento: "Ventas" },
  { nombre: "Carlos", edad: 25, departamento: "IT" },
  { nombre: "Ana", edad: 35, departamento: "Ventas" },
];

const porDepartamento = agruparPor(personas, (p) => p.departamento);
const porEdad = agruparPor(personas, (p) => p.edad);

console.log("\nAgrupado por departamento:", porDepartamento);
console.log("Agrupado por edad:", porEdad);

console.log("\n");

// ================================================================================
// 9. COMPARACIÓN MAP VS OBJECT
// ================================================================================

console.log("9. COMPARACIÓN MAP VS OBJECT");
console.log("============================");

// Diferencias principales
console.log("DIFERENCIAS PRINCIPALES:");
console.log("------------------------");

// 1. Tipos de claves
const obj = {};
const map = new Map();

// Object: solo strings y símbolos
obj["123"] = "string key";
obj[123] = "number key convertido a string";
console.log("Object keys:", Object.keys(obj)); // ['123']

// Map: cualquier tipo
map.set("123", "string key");
map.set(123, "number key");
console.log("Map keys:", Array.from(map.keys())); // ['123', 123]

// 2. Tamaño
console.log("Tamaño Object:", Object.keys(obj).length);
console.log("Tamaño Map:", map.size);

// 3. Iteración
console.log("\nIteración Object:");
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

console.log("\nIteración Map:");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// 4. Prototipo
console.log("\nObject tiene prototype:", Object.getPrototypeOf(obj) !== null);
console.log("Map keys include prototype methods:", "toString" in obj);

const cleanObj = Object.create(null); // sin prototype
console.log(
  "Clean object prototype:",
  Object.getPrototypeOf(cleanObj) === null
);

// Casos de uso recomendados
console.log("\nCASOS DE USO RECOMENDADOS:");
console.log("-------------------------");
console.log("Usar Map cuando:");
console.log("- Las claves son dinámicas o no strings");
console.log("- Necesitas iterar frecuentemente");
console.log("- Necesitas conocer el tamaño fácilmente");
console.log("- Las claves pueden ser objetos o funciones");

console.log("\nUsar Object cuando:");
console.log("- Las claves son strings conocidas");
console.log("- Necesitas JSON serialization");
console.log("- Trabajas con records/diccionarios simples");
console.log("- Necesitas acceso por notación de punto");

console.log("\n");

// ================================================================================
// 10. BUENAS PRÁCTICAS Y PATRONES COMUNES
// ================================================================================

console.log("10. BUENAS PRÁCTICAS Y PATRONES COMUNES");
console.log("=======================================");

// 1. Inicialización segura
function crearMapConfig(config = {}) {
  const defaultConfig = new Map([
    ["debug", false],
    ["timeout", 5000],
    ["retries", 3],
  ]);

  // Sobrescribir con configuración personalizada
  for (const [key, value] of Object.entries(config)) {
    defaultConfig.set(key, value);
  }

  return defaultConfig;
}

const config1 = crearMapConfig({ debug: true, timeout: 10000 });
console.log("Configuración personalizada:", config1);

// 2. Validación de claves
function setSeguro(map, key, value) {
  if (key === null || key === undefined) {
    throw new Error("La clave no puede ser null o undefined");
  }
  return map.set(key, value);
}

const mapSeguro = new Map();
try {
  setSeguro(mapSeguro, "valida", "valor");
  console.log("Valor agregado correctamente");
  // setSeguro(mapSeguro, null, 'valor'); // Error
} catch (error) {
  console.error("Error:", error.message);
}

// 3. Copia profunda de Maps
function copiarMapProfundo(originalMap) {
  const nuevoMap = new Map();
  for (const [key, value] of originalMap) {
    // Copia profunda del valor si es objeto
    const valorCopiado =
      typeof value === "object" && value !== null
        ? JSON.parse(JSON.stringify(value))
        : value;
    nuevoMap.set(key, valorCopiado);
  }
  return nuevoMap;
}

const mapOriginal = new Map([
  ["config", { debug: true, level: 1 }],
  ["users", [1, 2, 3]],
]);

const mapCopia = copiarMapProfundo(mapOriginal);
mapCopia.get("config").debug = false;

console.log("Map original:", mapOriginal.get("config"));
console.log("Map copia:", mapCopia.get("config"));

// 4. Combinar Maps
function combinarMaps(...maps) {
  const resultado = new Map();
  for (const map of maps) {
    for (const [key, value] of map) {
      resultado.set(key, value);
    }
  }
  return resultado;
}

const map1 = new Map([
  ["a", 1],
  ["b", 2],
]);
const map2 = new Map([
  ["c", 3],
  ["d", 4],
]);
const map3 = new Map([
  ["b", 20],
  ["e", 5],
]); // 'b' se sobrescribirá

const mapCombinado = combinarMaps(map1, map2, map3);
console.log("Maps combinados:", mapCombinado);

// 5. Filtrar Map
function filtrarMap(map, predicado) {
  const resultado = new Map();
  for (const [key, value] of map) {
    if (predicado(value, key)) {
      resultado.set(key, value);
    }
  }
  return resultado;
}

const numeros = new Map([
  ["uno", 1],
  ["dos", 2],
  ["tres", 3],
  ["cuatro", 4],
  ["cinco", 5],
]);

const numerosPares = filtrarMap(numeros, (valor) => valor % 2 === 0);
console.log("Números pares:", numerosPares);

// 6. Transformar Map
function transformarMap(map, transformer) {
  const resultado = new Map();
  for (const [key, value] of map) {
    resultado.set(key, transformer(value, key));
  }
  return resultado;
}

const numerosDobles = transformarMap(numeros, (valor) => valor * 2);
console.log("Números duplicados:", numerosDobles);

console.log("\n=== FIN DE EJEMPLOS DE MAP ===");

/*
================================================================================
RESUMEN DE CARACTERÍSTICAS PRINCIPALES DE MAP:

✅ VENTAJAS:
- Claves pueden ser de cualquier tipo (objetos, primitivos, funciones)
- Mantiene el orden de inserción
- Tamaño fácil de obtener con .size
- Iteración sencilla y directa
- Mejor performance para operaciones frecuentes de inserción/eliminación
- No tiene claves predeterminadas (prototype)

❌ DESVENTAJAS:
- No es serializable a JSON directamente
- Sintaxis más verbosa para acceso
- No compatible con notación de punto
- Requiere más memoria que objetos simples

🎯 CASOS DE USO IDEALES:
- Cachés y almacenamiento temporal
- Asociaciones objeto-valor
- Contadores y frecuencias
- Configuraciones dinámicas
- Relaciones muchos-a-muchos
- Cuando las claves son dinámicas o no strings

📋 MÉTODOS PRINCIPALES:
- set(key, value) - Agregar/actualizar
- get(key) - Obtener valor
- has(key) - Verificar existencia
- delete(key) - Eliminar
- clear() - Limpiar todo
- keys(), values(), entries() - Iteradores
- forEach() - Iterar con callback
================================================================================
*/
