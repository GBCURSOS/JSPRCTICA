"use strict";
console.log("\n Objeto Propiedades");
let pedro = {
  name: "Pedro",
  salary: 90000,
};

console.log("\n Objeto con un Método");
pedro = {
  name: "Pedro",
  salary: 90000,
  raiseSalary: function (percent) {
    this.salary *= 1 + percent / 100;
  },
};

let arnoldo = {
  name: "Arnoldo",
  salary: 80000,
  raiseSalary: function (percent) {
    this.salary *= 1 + percent / 100;
  },
};

console.log(pedro.name);
console.log(arnoldo.name);

console.log('\n Accediendo al método')
pedro.raiseSalary(10)
console.log('salario:',pedro.salary)
console.log('pedro:', pedro) 

console.log('\n Otra forma para el método')
let luis = {
  name: 'Luis',
  salary: 90000,
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}
console.log(luis)
