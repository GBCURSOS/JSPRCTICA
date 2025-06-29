
'use strict'

class Employee {
  name;
  salary;
  constructor(name, salary) { this.name = name; this.salary = salary }
  raiseSalary(percent) { this.salary *= 1 + percent / 100 }
  getSalary() { return this.salary }    
}

console.log('\n Constructor')
{
  class Manager extends Employee {
    bonus;
    constructor(name, salary, bonus) {
      super(name, salary) 
      this.bonus = bonus 
    }
    getSalary() { return super.getSalary() + this.bonus }
  }
  let boss = new Manager('Mary Lee', 180000, 10000);
  let salary =  boss.getSalary()
  console.log('salary:', salary) 
}
