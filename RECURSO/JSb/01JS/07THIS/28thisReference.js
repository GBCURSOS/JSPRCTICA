// node this-reference.js

'use strict'

/*
const dodo = function () {
  console.log('soy una funcion anonima')
}
dodo()

const arreglo = []

arreglo[0] = function () {
  console.log("soy una funcion anonima en la posicion 0");
};
arreglo[0]()

arreglo[1] = function () {
  console.log("soy una funcion anonima en la posicion 1");
};
arreglo[1]();

arreglo[2] = function () {
  console.log("soy una funcion anonima en la posicion 2");
};

arreglo[3] = function () {
  console.log("soy una funcion anonima en la posicion 3");
};

for(let i = 0; i < arreglo.length;i++){
  console.log(i,':',arreglo[i])
  arreglo[i]()
}
*/
console.log('----------------------------------------------')


console.log('// Ejemplo oscuro con matrices, sin operador punto a la vista')

class BankAccount {
    balance;
    observers;

    constructor() {
      this.balance = 0
      this.observers = []
    }

    addObserver(f) {
      this.observers.push(f)
      console.log('array',this.observers);
    }

    notifyObservers() {
      for (let i = 0; i < this.observers.length; i++) {
        console.log('notify:',this.observers[i])
        console.log('ejecuta funcion')
        this.observers[i]()
      } 
    }

    deposit(amount) {
      console.log('antes',this.balance)
      this.balance += amount
      console.log("despues", this.balance);
      this.notifyObservers()
    }
    
    withdraw(amount) {
      this.balance -= amount
      this.notifyObservers()
    }
  }
  
  const acct = new BankAccount()


console.log('\n Solución: función arrow')
/*
class UserInterface {

  log(message) {
    console.log({message})  
  }

  start() {
    acct.addObserver(() => { this.log('Más Dinero') })
    acct.deposit(1000)
  }
}

const ui = new UserInterface()
ui.start()
*/
/*
  class UserInterface {
    log(message) {
      console.log({message})  
    }
    start() {
      acct.addObserver(function() { this.log('Más Dinero') })
      acct.deposit(1000)
    }
  }

  const ui = new UserInterface()
  ui.start()
*/