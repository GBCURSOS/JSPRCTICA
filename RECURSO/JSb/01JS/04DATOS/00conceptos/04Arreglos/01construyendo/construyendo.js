"use strict";

console.log("\nArreglo Literal");
let names = ["Peter", "Paul", "Mary"];
console.log("names:", names);

console.log("\n Arreglos grandes");
const bigEmptyArray = [];
bigEmptyArray.length = 10000;
console.log("bigEmptyArray:", bigEmptyArray);

console.log("\nConcatena arreglos");
const a = [2, 3, 5, 7];
const b = "Hello";
let elements = [...a, ...b];
console.log("elements:", elements); // [2, 3, 5, 7, 'H', 'e', 'l', 'l', 'o']

console.log("\n Como un objeto");
const arrayLike = { length: 3, 0: "Peter", 1: "Paul", 2: "Mary" };
elements = Array.from(arrayLike);
console.log("elements:", elements); // ['Peter', 'Paul', 'Mary']

console.log("\n Genera elementos con una función");
const squares = Array.from({ length: 5 }, (element, index) => index * index); // [0, 1, 4, 9, 16]
console.log("squares:", squares);

console.log("\n Constructor");
names = new Array("Peter", "Paul", "Mary");
names = Array("Peter", "Paul", "Mary");
console.log("names:", names); // ['Peter', 'Paul', 'Mary']

console.log(
  "\n Constructor con un solo número, lo toma como longitud del arreglo"
);
let numbers = new Array(10000);
console.log("numbers:", numbers); // [<10000 empty items>]
