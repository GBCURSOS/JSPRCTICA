
'use strict'

console.log('\n Clase anónima')

const Employee = class {

  constructor(name, lastName, salary) {
    this.name = name
    this.lastName = lastName
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}
/*
let empl = new Employee('Harry Potter', 90000)
empl.raiseSalary(10)
console.log('empl:', empl) 

console.log('\n Otro ejemplo')
*/

const Datos = class {
  constructor(marca, modelo, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
  }
  
};
const withToString = base => 
  class extends base {
    toString() {
      let result = '{' 
      console.log('this',this)
      for (const key in this) {
        console.log('key:',key)
        console.log('this[key]:',this[key])
        if (result !== '{') result += ', ' 
        result += `${key}=${this[key]}` 
      }
      return result + '}' 
    }
  }

let imprimeEmployee = withToString(Employee) 
let e = new imprimeEmployee('Harry','Potter', 90000) // Una instancia de la nueva clase
console.log(e.toString()) 
console.log("------------------------------------")
imprimeEmployee = withToString(Datos);
e = new imprimeEmployee("Samsung", "S30", 190000); // Una instancia de la nueva clase
console.log(e.toString()); 

