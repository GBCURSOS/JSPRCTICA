"use strict";


console.log("\n Funciones que retornan objetos");

{
  function createEmployee(name, salary) {
    return {

      name: name,
      salary: salary,

      raiseSalary: function (percent) {
        this.salary *= 1 + percent / 100;
      },

    };
  }

  const pedro = createEmployee("Pedro", 90000);
  const luis = createEmployee("Luis", 100000);

  console.log("pedro:", pedro);
  console.log("luis:", luis);

  console.log(pedro.raiseSalary === luis.raiseSalary);

}



console.log("\n Métodos compartidos: Prototype");

{

  const employeePrototype = {

    raiseSalary: function (percent) {
      console.log('funcion compartida')
      this.salary *= 1 + percent / 100;
    },

  };

  function createEmployee(name, salary) {
    const result = { name: name, salary: salary };
    Object.setPrototypeOf(result, employeePrototype);
    return result;
  }

  const pedro = createEmployee("Pedro", 90000);
  const luis = createEmployee("Luis", 100000);

  console.log("pedro1:", pedro);
  console.log("luis1:", luis);
  console.log('----------------------------------')

  console.log('comparacion funciones:',pedro.raiseSalary === luis.raiseSalary);

  console.log("----------------------------------");
  
  pedro.raiseSalary = function (rate) {
    this.salary = Number.MAX_VALUE;
  };
  pedro.apellido = "Combariza"

  console.log('pedro2:',pedro)
  console.log("luis2:", luis);

  console.log("----------------------------------");

  pedro.raiseSalary(5);
  luis.raiseSalary(5);

  console.log("pedro3:", pedro);
  console.log("luis3:", luis);
}
