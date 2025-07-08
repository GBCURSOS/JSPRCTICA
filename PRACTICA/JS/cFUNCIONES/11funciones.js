// =====================================================
// FUNCIONES EN JAVASCRIPT - GUÍA COMPLETA
// De lo más básico a lo más avanzado
// =====================================================

console.log("=== INICIANDO GUÍA DE FUNCIONES EN JAVASCRIPT ===\n");

// =====================================================
// 1. FUNCIONES BÁSICAS
// =====================================================

console.log("1. FUNCIONES BÁSICAS");
console.log("===================");

// 1.1 Declaración básica de función
function saludar() {
  console.log("¡Prueba de Función!");
}

// Llamar a la función
saludar();

// 1.2 Función con parámetros
function saludarPersona(mensaje) {
  console.log("¡ " + mensaje + " !");
}

sona("mensaje uno");
saludarPersona("mensaje dos");

// 1.3 Función con múltiples parámetros
function sumar(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}

sumar(5, 3);
sumar(10, 20);

// 1.4 Función con valor de retorno
function multiplicar(x, y) {
  return x * y;
}

let resultado = multiplicar(4, 7);
console.log("4 x 7 = " + resultado);

// 1.5 Función con parámetros por defecto
function saludarConDefault(nombre = "Usuario") {
  return "¡Hola " + nombre + "!";
}

console.log(saludarConDefault()); // Sin parámetro
console.log(saludarConDefault("María")); // Con parámetro

console.log("\n");

// =====================================================
// 2. EXPRESIONES DE FUNCIÓN
// =====================================================

console.log("2. EXPRESIONES DE FUNCIÓN");
console.log("========================");

// 2.1 Función expresión básica
const dividir = function (a, b) {
  return a / b;
};

console.log("10 ÷ 2 = " + dividir(10, 2));

// 2.2 Función expresión nombrada
const factorial = function calcularFactorial(n) {
  if (n <= 1) return 1;
  return n * calcularFactorial(n - 1);
};

console.log("5! = " + factorial(5));

// // 2.3 Funciones anónimas (en callbacks)
// setTimeout(function () {
//   console.log("Esta función anónima se ejecuta después de 1 segundo");
// }, 1000);

console.log("\n");

// =====================================================
// 3. FUNCIONES FLECHA (ARROW FUNCTIONS)
// =====================================================

console.log("3. FUNCIONES FLECHA");
console.log("==================");

// 3.1 Sintaxis básica
const restar = (a, b) => {
  return a - b;
};

console.log("8 - 3 = " + restar(8, 3));

// 3.2 Función flecha simplificada (una línea)
const cuadrado = (x) => x * x;
console.log("5² = " + cuadrado(5));

// 3.3 Sin parámetros
const obtenerFechaActual = () => new Date().toLocaleDateString();
console.log("Fecha actual: " + obtenerFechaActual());

// 3.4 Múltiples parámetros
const calcularArea = (largo, ancho) => largo * ancho;
console.log("Área (5x3): " + calcularArea(5, 3));

// 3.5 Retorno de objeto (requiere paréntesis)
const crearPersona = (nombre, edad) => ({
  nombre: nombre,
  edad: edad,
  esAdulto: edad >= 18,
});

console.log("Persona:", crearPersona("Luis", 25));

console.log("\n");

// =====================================================
// 4. SCOPE Y CLOSURES
// =====================================================

console.log("4. SCOPE Y CLOSURES");
console.log("==================");

// 4.1 Scope global vs local
let variableGlobal = "Soy global";

function ejemploScope() {
  let variableLocal = "Soy local";
  console.log("Dentro de función - Global:", variableGlobal);
  console.log("Dentro de función - Local:", variableLocal);
}

ejemploScope();
console.log("Fuera de función - Global:", variableGlobal);
// console.log(variableLocal); // Error: no está definida

// 4.2 Closure básico
function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}

const contador1 = crearContador();
const contador2 = crearContador();

console.log("Contador 1:", contador1()); // 1
console.log("Contador 1:", contador1()); // 2
console.log("Contador 2:", contador2()); // 1
console.log("Contador 1:", contador1()); // 3

function crearContadorAvanzado(inicio = 0, paso = 1) {
  let contador = inicio;

  return {
    incrementar: () => {
      contador += paso;
      return contador;
    },
    decrementar: () => {
      contador -= paso;
      return contador;
    },
    obtenerValor: () => contador,
    reset: () => {
      contador = inicio;
      return contador;
    },
  };
}

const contador = crearContadorAvanzado(10, 2);
console.log(contador.incrementar()); // 12
console.log(contador.incrementar()); // 14
console.log(contador.obtenerValor()); // 14
console.log(contador.reset()); // 10

// 4.3 Closure con parámetros
function crearMultiplicador(factor) {
  return function (numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
const quintuplicar = crearMultiplicador(5);

console.log("Duplicar 5:", duplicar(5)); // 10
console.log("Triplicar 4:", triplicar(4)); // 12
console.log("Quintuplicar 3:", quintuplicar(3)); // 15

console.log("\n");

// =====================================================
// 5. PARÁMETROS AVANZADOS
// =====================================================

console.log("5. PARÁMETROS AVANZADOS");
console.log("======================");

// 5.0 EXPLICACIÓN DEL OPERADOR TRES PUNTOS (...)
console.log("5.0 EL OPERADOR TRES PUNTOS (...)");
console.log("---------------------------------");

// El operador ... tiene dos usos principales:
// 1. SPREAD (expansión) - Expandir elementos de arrays/objetos
// 2. REST (agrupación) - Agrupar elementos en arrays

// 5.0.1 SPREAD OPERATOR - Expandir arrays
console.log("\n--- SPREAD con Arrays ---");
const numArray1 = [1, 2, 3];
const numArray2 = [4, 5, 6];

// Combinar arrays con spread
const arraysCombinados = [...numArray1, ...numArray2];
console.log("Array 1:", numArray1);
console.log("Array 2:", numArray2);
console.log("Arrays combinados:", arraysCombinados);

// Copiar array
const copiaArray = [...numArray1];
console.log("Copia del array 1:", copiaArray);

// Agregar elementos al inicio y final
const arrayExtendido = [0, ...numArray1, 7, 8];
console.log("Array extendido:", arrayExtendido);

// 5.0.2 SPREAD OPERATOR - Expandir objetos
console.log("\n--- SPREAD con Objetos ---");
const persona = { nombre: "Juan", edad: 30 };
const direccion = { ciudad: "Madrid", pais: "España" };

// Combinar objetos
const personaCompleta = { ...persona, ...direccion };
console.log("Persona:", persona);
console.log("Dirección:", direccion);
console.log("Persona completa:", personaCompleta);

// Sobrescribir propiedades
const personaModificada = { ...persona, edad: 31, profesion: "Desarrollador" };
console.log("Persona modificada:", personaModificada);

// 5.0.3 SPREAD OPERATOR - En llamadas a funciones
console.log("\n--- SPREAD en llamadas a funciones ---");
function mostrarNumeros(a, b, c, d, e) {
  console.log("Números recibidos:", a, b, c, d, e);
}

const numerosParaEnviar = [10, 20, 30, 40, 50];
console.log("Array original:", numerosParaEnviar);
mostrarNumeros(...numerosParaEnviar); // Expande el array como argumentos separados

// Convertir string a array de caracteres
const texto = "Dabale arroz a la zorra el Abad";
const caracteres = [...texto];
console.log("Texto:", texto);
console.log("Caracteres:", caracteres);

// 5.0.4 REST OPERATOR - Agrupar elementos
console.log("\n--- REST Operator ---");

// En destructuring de arrays
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5, 6];
console.log("Primero:", primero);
console.log("Segundo:", segundo);
console.log("Resto:", resto);

// En destructuring de objetos
const { nombre, ...otrosDatos } = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Barcelona",
  profesion: "Médica",
};
console.log("Nombre:", nombre);
console.log("Otros datos:", otrosDatos);

// 5.0.5 Ejemplos prácticos del operador ...
console.log("\n--- Ejemplos prácticos ---");

// Encontrar el máximo en un array
const numerosEjemplo = [15, 8, 23, 4, 42, 16];
const maximoA = Math.max(numerosEjemplo);
console.log("Máximo:", maximoA);
const maximoB = Math.max(...numerosEjemplo);
console.log("Array:", numerosEjemplo);
console.log("Máximo:", maximoB);

// Eliminar duplicados de un array
// const numerosConDuplicados = [1, 2, 2, 3, 4, 4, 5];
// const numerosSinDuplicados = [...new Set(numerosConDuplicados)];
// console.log("Con duplicados:", numerosConDuplicados);
// console.log("Sin duplicados:", numerosSinDuplicados);

console.log("\n--- Ahora aplicamos ... en FUNCIONES ---");

// 5.1 Parámetros rest (...) en funciones
function sumarTodosA(numeros) {
  console.log("Números recibidos:", numeros, typeof numeros);
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma;
}

function sumarTodosB(...numeros) {
  console.log("Números recibidos:", numeros, typeof numeros);
  let suma = 0;
  for (let numero of numeros) {
    suma += numero;
  }
  return suma;
}

console.log("Suma de varios números:", sumarTodosA(1, 2, 3, 4, 5));
console.log("Suma de otros números:", sumarTodosA(10, 20));

console.log("Suma de varios números:", sumarTodosB(1, 2, 3, 4, 5));
console.log("Suma de otros números:", sumarTodosB(10, 20));

// 5.2 Destructuring en parámetros - Arrays
function procesarArray([primero, segundo, ...resto]) {
  console.log("Primero:", primero);
  console.log("Segundo:", segundo);
  console.log("Resto:", resto);
}

procesarArray([1, 2, 3, 4, 5]);

// 5.3 Destructuring en parámetros - Objetos
function procesarPersona({ nombre, edad, ciudad = "No especificada" }) {
  console.log(`${nombre}, ${edad} años, vive en ${ciudad}`);
}

procesarPersona({ nombre: "Ana", edad: 30, ciudad: "Madrid" });
procesarPersona({ nombre: "Pedro", edad: 25 }); // sin ciudad

// 5.4 Combinando rest y destructuring
function analizarDatos({ nombre, ...otrosDatos }, ...comentarios) {
  console.log("Nombre:", nombre);
  console.log("Otros datos:", otrosDatos);
  console.log("Comentarios:", comentarios);
}

analizarDatos(
  { nombre: "María", edad: 28, profesion: "Doctora" },
  "Excelente",
  "Muy profesional"
);

console.log("\n");

// =====================================================
// 6. FUNCIONES COMO OBJETOS DE PRIMERA CLASE
// =====================================================

console.log("6. FUNCIONES COMO OBJETOS DE PRIMERA CLASE");
console.log("==========================================");

// 6.1 Asignar funciones a variables
function original() {
  return "Función original";
}

const copia = original;
console.log("Función copiada:", copia());

// 6.2 Pasar funciones como parámetros
function ejecutarOperacion(a, b, operacion) {
  return operacion(a, b);
}

function suma(x, y) {
  return x + y;
}
function resta(x, y) {
  return x - y;
}

console.log("Ejecutar suma:", ejecutarOperacion(10, 5, suma));
console.log("Ejecutar resta:", ejecutarOperacion(10, 5, resta));

console.log(
  "Ejecutar suma con arrow:",
  ejecutarOperacion(10, 5, (x, y) => x + y)
);
console.log(
  "Ejecutar resta con arrow:",
  ejecutarOperacion(10, 5, (x, y) => x - y)
);

// 6.3 Retornar funciones desde funciones
function crearSaludador(saludo) {
  return function (nombre) {
    return saludo + " " + nombre;
  };
}

const saludoFormal = crearSaludador("Buenos días");
const saludoInformal = crearSaludador("¡Hola");

console.log(saludoFormal("Dr. García"));
console.log(saludoInformal("amigo!"));

// 6.4 Almacenar funciones en arrays
const operaciones = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b,
];

console.log("Operaciones con 12 y 3:");
const nombres = ["+", "-", "*", "/"];
for (let i = 0; i < operaciones.length; i++) {
  console.log(`12 ${nombres[i]} 3 = ${operaciones[i](12, 3)}`);
}

console.log("\n");

// =====================================================
// 7. MÉTODOS DE FUNCIÓN AVANZADOS
// =====================================================

console.log("7. MÉTODOS DE FUNCIÓN AVANZADOS");
console.log("===============================");

// 7.1 call() - llamar función con contexto específico
function presentarse() {
  return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
}

const persona1 = { nombre: "Juan", edad: 30 };
const persona2 = { nombre: "María", edad: 25 };

console.log("Con call():");
console.log(presentarse.call(persona1));
console.log(presentarse.call(persona2));

// 7.2 apply() - similar a call pero con array de argumentos
// function calcular(operacion, a, b) {
//   return `${this.nombre} calcula: ${a} ${operacion} ${b} = ${
//     operacion === "+"
//       ? a + b
//       : operacion === "-"
//       ? a - b
//       : operacion === "*"
//       ? a * b
//       : operacion === "/"
//       ? a / b
//       : "No válida"
//   }`;
// }

// const calculadora = { nombre: "Calc-3000" };

// console.log("\nCon apply():");
// console.log(calcular.apply(calculadora, ["+", 10, 5]));
// console.log(calcular.apply(calculadora, ["*", 7, 8]));

// 7.3 bind() - crear nueva función con contexto fijado
// const presentarseJuan = presentarse.bind(persona1);
// const presentarseMaria = presentarse.bind(persona2);

// console.log("\nCon bind():");
// console.log(presentarseJuan());
// console.log(presentarseMaria());

// 7.4 bind() con argumentos parciales
// function multiplicarPor(factor, numero) {
//   return factor * numero;
// }

// const duplicarNumero = multiplicarPor.bind(null, 2);
// const triplicarNumero = multiplicarPor.bind(null, 3);

// console.log("\nBind con argumentos parciales:");
// console.log("Duplicar 5:", duplicarNumero(5));
// console.log("Triplicar 4:", triplicarNumero(4));

// console.log("\n");

// =====================================================
// 8. FUNCIONES RECURSIVAS
// =====================================================

// console.log("8. FUNCIONES RECURSIVAS");
// console.log("======================");

// 8.1 Factorial recursivo
// function factorialRecursivo(n) {
//   // Caso base
//   if (n <= 1) {
//     return 1;
//   }
//   // Caso recursivo
//   return n * factorialRecursivo(n - 1);
// }

// console.log("Factorial recursivo de 5:", factorialRecursivo(5));

// 8.2 Fibonacci recursivo
// function fibonacciRecursivo(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
// }

// console.log("Fibonacci recursivo de 7:", fibonacciRecursivo(7));

// 8.3 Suma de array recursiva
// function sumaArrayRecursiva(arr, index = 0) {
//   // Caso base
//   if (index >= arr.length) {
//     return 0;
//   }
//   // Caso recursivo
//   return arr[index] + sumaArrayRecursiva(arr, index + 1);
// }

// console.log("Suma recursiva [1,2,3,4,5]:", sumaArrayRecursiva([1, 2, 3, 4, 5]));

// 8.4 Recursión con objetos anidados
// function contarPropiedades(obj) {
//   let contador = 0;

//   for (let key in obj) {
//     contador++; // Contar la propiedad actual

//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       contador += contarPropiedades(obj[key]); // Recursión
//     }
//   }

//   return contador;
// }

// const objetoAnidado = {
//   nombre: "Juan",
//   edad: 30,
//   direccion: {
//     calle: "Main St",
//     numero: 123,
//     ciudad: {
//       nombre: "Madrid",
//       pais: "España",
//     },
//   },
// };

// console.log("Propiedades totales:", contarPropiedades(objetoAnidado));

// console.log("\n");

// =====================================================
// 9. FUNCIONES GENERADORAS
// =====================================================

// console.log("9. FUNCIONES GENERADORAS");
// console.log("=======================");

// 9.1 Generador básico
// function* contadorGenerador() {
//   let count = 1;
//   while (true) {
//     yield count++;
//   }
// }

// const gen = contadorGenerador();
// console.log("Generador contador:");
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3

// 9.2 Generador finito
// function* fibonacciGenerador(limite) {
//   let a = 0,
//     b = 1;
//   for (let i = 0; i < limite; i++) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// console.log("\nFibonacci con generador:");
// for (let num of fibonacciGenerador(8)) {
//   console.log(num);
// }

// 9.3 Generador con yield*
// function* numeros() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* letras() {
//   yield "a";
//   yield "b";
//   yield "c";
// }

// function* combinado() {
//   yield* numeros();
//   yield* letras();
// }

// console.log("\nGenerador combinado:");
// for (let item of combinado()) {
//   console.log(item);
// }

// console.log("\n");

// =====================================================
// 10. FUNCIONES ASÍNCRONAS
// =====================================================

// console.log("10. FUNCIONES ASÍNCRONAS");
// console.log("=======================");

/*
Una función callback (también llamada "función de retorno" o "función de devolución de llamada") es una función que se pasa como argumento a otra función, para ser ejecutada en un momento específico dentro de esa función.

Características principales:

Se pasa como parámetro a otra función
Se ejecuta después de que ocurra algo específico
Permite personalizar el comportamiento de una función
Es asíncrona o síncrona dependiendo del contexto
*/

// 10.1 Función con callback
// function operacionAsincrona(callback) {
//   setTimeout(() => {
//     const resultado = Math.random() * 100;
//     callback(resultado);
//   }, 1000);
// }

// console.log("Iniciando operación asíncrona con callback...");
// operacionAsincrona((resultado) => {
//   console.log("Resultado del callback:", resultado.toFixed(2));
// });

// // sincronizar la ejecución

// // 10.2 Función que retorna Promise
// function operacionPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let valor = Math.random();
//       const exito = valor > 0.5; // 50% de éxito
//       console.log(valor,exito);
//       if (exito) {
//         resolve("Operación exitosa!");
//       } else {
//         reject("Error en la operación");
//       }
//     }, 1500);
//   });
// }

// // console.log("Iniciando operación con Promise...");
// // operacionPromise()
// //   .then((resultado) => console.log("Promise resuelto:", resultado))
// //   .catch((error) => console.log("Promise rechazado:", error));

// // 10.3 Función async/await
// async function operacionAsync() {
//   try {
//     console.log("Iniciando operación async...");
//     const resultado = await operacionPromise();
//     console.log("Resultado async:", resultado);
//     return resultado;
//   } catch (error) {
//     console.log("Error en async:", error);
//     throw error;
//   }
// }

// // Ejecutar función async
// operacionAsync().catch((error) =>
//   console.log("Error no manejado capturado:", error)
// );

// // 10.4 Múltiples operaciones async
// async function operacionesMultiples() {
//   try {
//     console.log("Ejecutando múltiples operaciones async...");

//     const promesas = [
//       operacionPromise(),
//       operacionPromise(),
//       operacionPromise(),
//     ];

//     const resultados = await Promise.all(promesas);
//     console.log("Todos los resultados:", resultados);
//   } catch (error) {
//     console.log("Error en operaciones múltiples:", error);
//   }
// }

// setTimeout(() => operacionesMultiples(), 3000);

// console.log("\n");

// =====================================================
// 11. FUNCIONES DE ORDEN SUPERIOR
// =====================================================

console.log("11. FUNCIONES DE ORDEN SUPERIOR");
console.log("===============================");

// 11.1 Función que recibe otra función
function aplicarOperacion(arr, operacion) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(operacion(arr[i]));
  }
  return resultado;
}

const numeros = [1, 2, 3, 4, 5];
console.log("Números originales:", numeros);
console.log(
  "Números al cuadrado:",
  aplicarOperacion(numeros, (x) => x * x)
);
console.log(
  "Números duplicados:",
  aplicarOperacion(numeros, (x) => x * 2)
);



// 11.2 Función que retorna función (currying)
// function curry(fn) {
//   return function (...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     }
//     return function (...moreArgs) {
//       return curry(fn)(...args, ...moreArgs);
//     };
//   };
// }

// function sumarTres(a, b, c) {
//   return a + b + c;
// }

// const sumarCurried = curry(sumarTres);
// console.log("\nCurrying:");
// console.log("Suma normal:", sumarTres(1, 2, 3));
// console.log("Suma curried:", sumarCurried(1)(2)(3));
// console.log("Suma curried parcial:", sumarCurried(1, 2)(3));

// 11.3 Composición de funciones
// function componer(...funciones) {
//   return function (valor) {
//     return funciones.reduceRight((acc, fn) => fn(acc), valor);
//   };
// }

// const incrementar = (x) => x + 1;
// const duplicarValor = (x) => x * 2;
// const elevarAlCuadrado = (x) => x * x;

// const operacionCompuesta = componer(
//   elevarAlCuadrado,
//   duplicarValor,
//   incrementar
// );
// console.log("\nComposición de funciones:");
// console.log("Valor inicial: 3");
// console.log("(3 + 1) * 2 ^ 2 =", operacionCompuesta(3));

// console.log("\n");

// =====================================================
// 12. FUNCIONES PURAS E IMPURAS
// =====================================================

// console.log("12. FUNCIONES PURAS E IMPURAS");
// console.log("=============================");

// 12.1 Función pura
// function funcionPura(a, b) {
//   return a + b; // No modifica nada externo, siempre retorna lo mismo
// }

// console.log("Función pura (5 + 3):", funcionPura(5, 3));
// console.log("Función pura (5 + 3):", funcionPura(5, 3)); // Mismo resultado

// 12.2 Función impura (modifica estado externo)
// let contadorGlobal = 0;

// function funcionImpura() {
//   contadorGlobal++; // Modifica variable externa
//   return contadorGlobal;
// }

// console.log("Función impura - llamada 1:", funcionImpura());
// console.log("Función impura - llamada 2:", funcionImpura()); // Resultado diferente

// 12.3 Función impura (depende de estado externo)
// function funcionImpuraDependiente() {
//   return contadorGlobal * 2; // Depende de variable externa
// }

// console.log("Función impura dependiente:", funcionImpuraDependiente());
// contadorGlobal = 10;
// console.log(
//   "Función impura dependiente (después de cambio):",
//   funcionImpuraDependiente()
// );

// 12.4 Convertir función impura en pura
// function funcionPuraEquivalente(contador) {
//   return contador * 2; // No depende de estado externo
// }

// console.log("Función pura equivalente:", funcionPuraEquivalente(10));

// console.log("\n");

// =====================================================
// 13. MEMORIZACIÓN (MEMOIZATION)
// =====================================================

// console.log("13. MEMORIZACIÓN (MEMOIZATION)");
// console.log("==============================");

// 13.1 Función de memoización genérica
// function memoizar(fn) {
//   const cache = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (key in cache) {
//       console.log("Resultado desde cache para:", args);
//       return cache[key];
//     }
//     console.log("Calculando resultado para:", args);
//     const resultado = fn(...args);
//     cache[key] = resultado;
//     return resultado;
//   };
// }

// 13.2 Fibonacci memoizado
// const fibonacciMemoizado = memoizar(function (n) {
//   if (n <= 1) return n;
//   return fibonacciMemoizado(n - 1) + fibonacciMemoizado(n - 2);
// });

// console.log("Fibonacci memoizado:");
// console.log("fib(10):", fibonacciMemoizado(10));
// console.log("fib(10) otra vez:", fibonacciMemoizado(10)); // Desde cache

// 13.3 Operación costosa memoizada
// const operacionCostosa = memoizar(function (x, y) {
//   // Simular operación costosa
//   let resultado = 0;
//   for (let i = 0; i < 1000000; i++) {
//     resultado += Math.sqrt(x * y + i);
//   }
//   return resultado;
// });

// console.log("\nOperación costosa memoizada:");
// console.time("Primera ejecución");
// operacionCostosa(5, 3);
// console.timeEnd("Primera ejecución");

// console.time("Segunda ejecución (cache)");
// operacionCostosa(5, 3);
// console.timeEnd("Segunda ejecución (cache)");

// console.log("\n");

// =====================================================
// 14. FUNCIONES CON CONTEXTO DINÁMICO
// =====================================================

// console.log("14. FUNCIONES CON CONTEXTO DINÁMICO");
// console.log("===================================");

// // 14.1 Simulador de this dinámico
// const objetoA = {
//   nombre: "Objeto A",
//   metodo: function () {
//     console.log("This apunta a:", this.nombre);
//   },
// };

// const objetoB = {
//   nombre: "Objeto B",
// };

// // Diferentes formas de cambiar el contexto
// console.log("Contexto normal:");
// objetoA.metodo();

// console.log("Contexto cambiado con call:");
// objetoA.metodo.call(objetoB);

// console.log("Contexto cambiado con apply:");
// objetoA.metodo.apply(objetoB);

// console.log("Contexto fijado con bind:");
// const metodoFijado = objetoA.metodo.bind(objetoB);
// metodoFijado();

// // 14.2 Factory de objetos con métodos
// function crearCalculadora(nombre) {
//   return {
//     nombre: nombre,
//     resultado: 0,

//     sumar: function (valor) {
//       this.resultado += valor;
//       console.log(
//         `${this.nombre}: sumando ${valor}, resultado: ${this.resultado}`
//       );
//       return this; // Para encadenamiento
//     },

//     restar: function (valor) {
//       this.resultado -= valor;
//       console.log(
//         `${this.nombre}: restando ${valor}, resultado: ${this.resultado}`
//       );
//       return this; // Para encadenamiento
//     },

//     reset: function () {
//       this.resultado = 0;
//       console.log(`${this.nombre}: reseteado a 0`);
//       return this;
//     },
//   };
// }

// console.log("\nCalculadora con encadenamiento:");
// const calc = crearCalculadora("Calc-Pro");
// calc.sumar(10).sumar(5).restar(3).sumar(2);

// console.log("\n");

// // =====================================================
// // 15. FUNCIONES AVANZADAS Y PATRONES
// // =====================================================

// console.log("15. FUNCIONES AVANZADAS Y PATRONES");
// console.log("==================================");

// // 15.1 Throttle - limitar ejecución por tiempo
// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       return func.apply(this, args);
//     }
//   };
// }

// // 15.2 Debounce - retrasar ejecución hasta que pare de llamarse
// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// // Ejemplos de uso (simulados)
// const busquedaRapida = throttle(function (termino) {
//   console.log("Buscando:", termino);
// }, 1000);

// const autoguardado = debounce(function (contenido) {
//   console.log("Guardando:", contenido);
// }, 2000);

// // 15.3 Pipe - composición de funciones de izquierda a derecha
// function pipe(...funciones) {
//   return function (valor) {
//     return funciones.reduce((acc, fn) => fn(acc), valor);
//   };
// }

// const procesarTexto = pipe(
//   (str) => str.toLowerCase(),
//   (str) => str.replace(/\s+/g, "-"),
//   (str) => str.replace(/[^a-z0-9-]/g, ""),
//   (str) => str.substring(0, 20)
// );

// console.log("Procesamiento de texto:");
// console.log(procesarTexto("¡Hola Mundo! Este es un Texto de Prueba"));

// // 15.4 Función partial - aplicación parcial de argumentos
// function partial(fn, ...argsIniciales) {
//   return function (...argsRestantes) {
//     return fn(...argsIniciales, ...argsRestantes);
//   };
// }

// function operacionCompleja(a, b, c, d) {
//   return (a + b) * (c + d);
// }

// const operacionParcial = partial(operacionCompleja, 10, 20);
// console.log("\nFunción parcial:");
// console.log("Resultado:", operacionParcial(5, 15)); // (10+20) * (5+15) = 600

// // 15.5 Once - función que solo se ejecuta una vez
// function once(fn) {
//   let executed = false;
//   let result;

//   return function (...args) {
//     if (!executed) {
//       executed = true;
//       result = fn.apply(this, args);
//     }
//     return result;
//   };
// }

// const inicializarUnaVez = once(function () {
//   console.log("Inicializando sistema...");
//   return "Sistema inicializado";
// });

// console.log("\nFunción once:");
// console.log(inicializarUnaVez()); // Se ejecuta
// console.log(inicializarUnaVez()); // No se ejecuta, retorna resultado guardado

// console.log("\n");

// // =====================================================
// // RESUMEN Y MEJORES PRÁCTICAS
// // =====================================================

// console.log("RESUMEN Y MEJORES PRÁCTICAS");
// console.log("===========================");

// console.log(`
// CONCEPTOS CUBIERTOS:
// 1. ✓ Funciones básicas y declaraciones
// 2. ✓ Expresiones de función y funciones flecha
// 3. ✓ Scope, closures y contexto
// 4. ✓ Parámetros avanzados (rest, destructuring)
// 5. ✓ Funciones como objetos de primera clase
// 6. ✓ Métodos call, apply, bind
// 7. ✓ Recursión y casos base
// 8. ✓ Funciones generadoras
// 9. ✓ Funciones asíncronas (callbacks, promises, async/await)
// 10. ✓ Funciones de orden superior
// 11. ✓ Funciones puras vs impuras
// 12. ✓ Memoización para optimización
// 13. ✓ Contexto dinámico y this
// 14. ✓ Patrones avanzados (throttle, debounce, pipe, partial, once)

// MEJORES PRÁCTICAS:
// • Usar funciones puras cuando sea posible
// • Nombrar funciones descriptivamente
// • Evitar funciones muy largas (principio de responsabilidad única)
// • Usar arrow functions para callbacks simples
// • Implementar manejo de errores en funciones async
// • Documentar funciones complejas
// • Usar memoización para operaciones costosas
// • Preferir composición sobre herencia
// • Mantener funciones testeable y reutilizable
// `);

// console.log("=== FIN DE LA GUÍA DE FUNCIONES ===");
