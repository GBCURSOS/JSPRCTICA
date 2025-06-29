// Función map: sintaxis

/* 
const nuevaLista = listaOriginal.map(function callback(
  elementoActual,
  index,
  array
) {
  return // Elemento devuelto de nuevaLista ;
});
*/

const numeros = [1, 2, 3, 4];
const dobles = numeros.map((num) => num * 2);
console.log(dobles); // Salida: [2, 4, 6, 8]

function sumaUno(valor) {
  return valor + 1;
}

const listaOriginal = [1, 2, 3, 4, 5];
nuevaLista = listaOriginal.map(sumaUno);
console.log(nuevaLista); // Salida: [2, 3, 4, 5, 6]

console.log("---------------------------------");

let cadenas = ["uno", "dos", "tres", "cuatro"];
console.log(
  cadenas.map(function (value, index, arr) {
    console.log(value, index, arr);
    return value.length;
  })
);

console.log(cadenas.map((value) => value.length));

// Función filter: sintaxis
/*
const nuevaLista = listaOriginal.filter(function callback(
  elementoActual,
  index,
  array
) {
  return // true o false ;
});
*/

let numbers = [5, 32, 43, 4];
let odd = numbers.filter(function (n) {
  return n % 2 !== 0;
});
console.log(odd);

console.log(numbers.filter((n) => n % 2 !== 0));

var people = [
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];

let young = people.filter(function (person) {
  return person.age < 35;
});
console.log(young)
young = people.filter((person) => person.age < 35);
console.log(young)
