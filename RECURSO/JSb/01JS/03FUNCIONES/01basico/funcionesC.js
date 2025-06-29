"use strict";

console.log("\n manejo de funciones");

function multiplicaPor10(x) {
  return x * 10;
}

let multiplica = function (x) {
  return x * 10;
};

console.log('anonima funcion: ',multiplica(10));

let result = [0, 1, 2, 4].map(multiplicaPor10);
console.log("estándar result:", result); // [0, 10, 20, 40]

console.log("\n mejor definir en la función");
result = [0, 1, 2, 4].map(function (x) {
  return 10 * x;
});
result = [0, 1, 2, 4].map(multiplica);
console.log("anónima result:", result); // [0, 10, 20, 40]

/*
console.log("\n en una variable");
const average = function (x, y) {
  return (x + y) / 2 + ":" + x + ":" + y;
};
result = average(6, 7);
console.log("result 6,7:", result); // 6.5
result = [0, 1, 2, 4, 5].map(average);
console.log("result array:", result);
result = [0, 1, 2, 4, 5].map(multiplica);
console.log("result multiplica:", result);
*/