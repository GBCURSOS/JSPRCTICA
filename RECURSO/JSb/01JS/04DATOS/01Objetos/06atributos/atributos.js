
'use strict'

console.log('\n Propiedades son implicitas con el uso')
{
  class BankAccount {
    constructor() { this.balance = 0 }
    deposit(amount) { this.balance += amount }
    withdraw(amount) { this.balance -= amount }
  }
  
  const pedroAccount = new BankAccount()
  pedroAccount.deposit(1000)
  console.log('pedroAccount:', pedroAccount) 
}
console.log('\n Propiedades explicitas')
{
  class BankAccount {
    balance = 0
    deposit(amount) { this.balance += amount }
    withdraw(amount) { this.balance -= amount }
  }
  
  const pedroAccount = new BankAccount()
  pedroAccount.deposit(1000)
  console.log('pedroAccount:', pedroAccount) 
}
console.log('// Atributos privados')
{
  class BankAccount {
    #balance = 0
    deposit(amount) { this.#balance += amount }
    withdraw(amount) { this.#balance -= amount }
    get balance() { return this.#balance }
  }
  
  const pedroAccount = new BankAccount()
  pedroAccount.deposit(1000)
  console.log('pedroAccount.balance:', pedroAccount.balance) 
}
