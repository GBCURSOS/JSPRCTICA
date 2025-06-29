// 1. Desestructuración de arreglos
const colores = ["rojo", "verde", "azul"];
const [primerColor, segundoColor, tercerColor] = colores;
console.log(primerColor); // 'rojo'

// 2. Omitir elementos en la desestructuración de arreglos
let numeros = [1, 2, 3, 4, 5];
let [primero, , tercero, , quinto] = numeros;
console.log(tercero); // 3

// 3. Desestructuración de objetos
const persona = { nombre: "Ana", edad: 28, ciudad: "Madrid" };
const { nombre, edad } = persona;
console.log(nombre); // 'Ana'

// 4. Asignar nuevos nombres de variable en la desestructuración de objetos
const { nombre: nombreCompleto, edad: años } = persona;
console.log(años); // 28

// 5. Desestructuración en parámetros de función
function imprimirInfo({ nombre, edad }) {
  console.log(`${nombre} tiene ${edad} años.`);
}
imprimirInfo(persona); // "Ana tiene 28 años."

// Ejemplo 1: Invertir un array de números
numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // Salida: [5, 4, 3, 2, 1]

// Ejemplo 2: Invertir un array de strings
let frutas = ['manzana', 'banana', 'cereza', 'dátil'];
const frutasInvertidas = frutas.reverse();
console.log(frutasInvertidas); // Salida: ['dátil', 'cereza', 'banana', 'manzana']
console.log(frutas); // Nota: el array original también se modifica

// Ejemplo 3: Invertir una cadena usando reverse()
const cadena = 'JavaScript';
const cadenaInvertida = cadena.split('').reverse().join('');
console.log(cadenaInvertida); // Salida: 'tpircSavaJ'

// 1. Spread para combinar arreglos
frutas = ['manzana', 'banana'];
const masFrutas = ['naranja', 'kiwi'];
const todasLasFrutas = [...frutas, ...masFrutas];
console.log(todasLasFrutas);
// Salida: ['manzana', 'banana', 'naranja', 'kiwi']

// 2. Spread para crear una copia de un arreglo
numeros = [1, 2, 3];
const copiaNumeros = [...numeros];
copiaNumeros.push(4);
console.log(numeros);     // Salida: [1, 2, 3]
console.log(copiaNumeros); // Salida: [1, 2, 3, 4]

// 3. Rest para recoger elementos restantes en un nuevo arreglo
let [primeroa, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primeroa); // Salida: 1
console.log(segundo); // Salida: 2
console.log(resto);   // Salida: [3, 4, 5]

// 4. Spread para pasar elementos de un arreglo como argumentos
function sumar(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(sumar(...nums)); // Salida: 6

// 5. Rest en parámetros de función para aceptar cualquier número de argumentos
function promediar(...numeros) {
  const suma = numeros.reduce((acc, val) => acc + val, 0);
  return suma / numeros.length;
}
console.log(promediar(1, 2, 3, 4, 5)); // Salida: 3
console.log(promediar(10, 20));        // Salida: 15

// Ejemplo 1: Encontrar el primer número par en un arreglo
numeros = [1, 3, 5, 8, 9, 10];
const primerPar = numeros.find(numero => numero % 2 === 0);
console.log(primerPar); // Salida: 8

// Ejemplo 2: Encontrar un objeto en un arreglo basado en una propiedad
const personas = [
  { nombre: 'Ana', edad: 28 },
  { nombre: 'Carlos', edad: 32 },
  { nombre: 'Marta', edad: 25 }
];
const personaMayor30 = personas.find(persona => persona.edad > 30);
console.log(personaMayor30); // Salida: { nombre: 'Carlos', edad: 32 }

// Ejemplo 3: Usar find() con índice y arreglo completo
frutas = ['manzana', 'banana', 'naranja', 'mango'];
const frutaLarga = frutas.find((fruta, index, array) => {
  console.log(`Verificando ${fruta} en la posición ${index} de ${array}`);
  return fruta.length > 6;
});
console.log(frutaLarga); // Salida: 'naranja'

