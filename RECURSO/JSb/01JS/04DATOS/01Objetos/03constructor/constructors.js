
'use strict'

console.log('\n Funcion constructor que instancia un objeto')
function Employee(name, salary) {
  this.name = name
  this.salary = salary
}

console.log("'\n El constructuro se ejecuta (invoca) con el operador 'new'")
const pedro = new Employee('Pedro', 90000)
console.log('pedro:', pedro) 

console.log('// Compartir métodos a través del prototipo ')

Employee.prototype.raiseSalary = function(percent) {
  this.salary *= 1 + percent / 100
}

pedro.raiseSalary(5)
console.log('pedro:', pedro) 

const sameMethod = pedro.raiseSalary === Employee.prototype.raiseSalary
console.log('sameMethod:', sameMethod) 
