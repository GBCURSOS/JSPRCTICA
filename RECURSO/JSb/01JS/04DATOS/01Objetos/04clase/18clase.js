

'use strict'

/*
Diagrama de Clases
https://online.visual-paradigm.com/es/diagrams/solutions/free-class-diagram-tool/
*/

console.log('\n Clase')

class Employee {

  name
  salary

  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
  
}

const pedro = new Employee('Pedro', 90000)
pedro.raiseSalary(5)
const maria = new Employee('Maria', 100000)
console.log('pedro:', pedro) 
console.log('maria:', maria) 
