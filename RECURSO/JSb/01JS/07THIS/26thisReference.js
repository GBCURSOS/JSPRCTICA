// node this-reference.js

'use strict'
console.log('\n Estilo Moderno')

class CuentaBancaria {
  balance;

  constructor() { 
    this.balance = 0 
  }  
  
  deposito(amount) { 
    this.balance += amount 
  }

  retiro(amount) { 
    this.balance -= amount 
  }
}

const harrysAccount = new CuentaBancaria()

console.log('\n this es undefined cuando se llama un método sin un objeto')
const dosVeces = (what, arg) => { what(arg); what(arg) }

try {
  dosVeces(CuentaBancaria.prototype.deposito, 500) // Error
  /*harrysAccount.deposito(500);
  harrysAccount.deposito(500);*/
} catch (exception) {
  console.log('\nError:', exception.message) // No encuentra balance
}

console.log('\n Solución: Una expresión arrow')
dosVeces(amount => harrysAccount.deposito(amount), 500)
console.log('harrysAccount:', harrysAccount) // CuentaBancaria { balance: 1000 }
