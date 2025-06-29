

"use strict";

console.log("\n Estilo Clásico");
function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.raiseSalary = function (percent) {
  this.salary *= 1 + percent / 100;
};


console.log("// Number puede ser llamado con ó sin new");
const price = Number("19.95"); // Retorna un número primitivo
const unCero = Number("0");

const otroCero = new Number(0); // Retorna un objeto

console.log("price:", price, typeof price); // 19.95
console.log("unCero:", unCero, typeof unCero); // 0
console.log("otroCero:", otroCero, typeof otroCero); // [Number: 0]
console.log(
  "0 === unCero:",
  0 === unCero,
  "--------------",
  "0 === otroCero:",
  0 === otroCero
); // false


console.log("\n this es undefined cuando se llama el constructor sin new");
try {
  let empl = Employee("Harry Potter", 90000); // NO tiene new
} catch (exception) {
  console.log("Error:", exception.message);
}
