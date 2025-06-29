// node overriding.js

"use strict";

console.log("\n Polymorfismo");
/*
{
  class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
    raiseSalary(percent) {
      this.salary *= 1 + percent / 100;
    }
    getSalary() {
      return this.salary;
    }
  }

  class Manager extends Employee {
    setBonus(bonus) {
      this.bonus = bonus;
    }
    getSalary() {
      return this.salary + this.bonus;
    }
  }

  let empl1 = new Manager("Pedro Lee", 180000);
  empl1.setBonus(10000);
  let salary = empl1.getSalary();
  console.log("salary:", salary); // 190000
  let empl2 = new Employee("Pedro Smith", 90000);
  salary = empl2.getSalary();
  console.log("salary:", salary); // 90000
}
*/


console.log("\n Llamando super");
{
  class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
    raiseSalary(percent) {
      this.salary *= 1 + percent / 100;
    }
    getSalary() {
      return this.salary;
    }
  }
  class Manager extends Employee {
    setBonus(bonus) {
      this.bonus = bonus;
    }
    getSalary() {
      return super.getSalary() + this.bonus;
    }
  }

  let empl = new Manager("Pedro Lee", 180000);
  empl.setBonus(10000);
  let salary = empl.getSalary();
  console.log("salary:", salary); // 190000
}


console.log("\n Sobreescritura de un método");
{
  class Employee {
    #name = "";
    #salary = 0;

    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }

    raiseSalary(percent) {
      this.salary *= 1 + percent / 100;
    }

    set Salary(value) {
      this.salary = value;
    }
    get Salary() {
      return this.salary;
    }
  }

  class Manager extends Employee {
    #bonus = 0;

    set Salary(value) {
      this.salary = value;
    }
    get Salary() {
      return this.salary + this.bonus;
    }

    set Bonus(value) {
      this.bonus = value;
    }
    
    get Bonus() {
      return this.bonus;
    }
  }

  let empl = new Manager("Pedro Lee", 180000);
  empl.Bonus = 10000;
  console.log("salary: ", empl.Salary);
  empl.Salary = 1000000;
  console.log("salary: ", empl.Salary);
  console.log("bono: ", empl.Bonus);

  console.log(Object.keys(empl)); // retorna un arreglo con los keys
  console.log(Object.values(empl)); // retorna un arreglo con los valores
  console.log(Object.entries(empl)); // retorna una matriz de llaves y valores
}