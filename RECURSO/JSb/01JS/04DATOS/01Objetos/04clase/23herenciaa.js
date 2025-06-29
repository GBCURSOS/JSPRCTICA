
'use strict'

console.log('\n Super clase & sub clase')
class Employee {
  name;
  salary;

  constructor(name, salary) { 
    this.name = name; 
    this.salary = salary 
  }

  raiseSalary(percent) { 
    this.salary *= 1 + percent / 100 
  }
  
  getSalary() { 
    return this.salary 
  }

}

class Manager extends Employee {
  bonus;

  getSalary() { 
    return this.salary + this.bonus 
  } // Sobreescribe método en la super
  
  setBonus(bonus) { 
    this.bonus = bonus 
  }
}

console.log('// El método raiseSalary es heredado')
const boss = new Manager('Pedro Lee', 180000) // Usa el constructor de Employee
boss.setBonus(10000)                          // Usa método de Manager 
boss.raiseSalary(10)                          // Usa Employee.prototype.raiseSalary
console.log('boss:', boss)                    // Manager { name: 'Pedro Lee', salary: 198000.00000000003, bonus: 10000 }
console.log('boss salary:',boss.getSalary())
console.log('\n Operador instanceof')
console.log('boss instanceof Employee:', boss instanceof Employee) // true
console.log('boss instanceof Manager:', boss instanceof Manager)   // true
