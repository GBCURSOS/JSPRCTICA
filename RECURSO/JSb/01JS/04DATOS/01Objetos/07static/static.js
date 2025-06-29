
'use strict'

console.log('// Un método estático')
class BankAccount {
  constructor() { this.balance = 0 }
  deposit(amount) { this.balance += amount }  
  withdraw(amount) { this.balance -= amount }
  static percentOf(amount, rate) { return amount * rate / 100 }
  
  addInterest(rate) {
    this.balance += BankAccount.percentOf(this.balance, rate)
  }
}
const pedroAccount = new BankAccount()
pedroAccount.deposit(1000)
pedroAccount.addInterest(10)
console.log('pedroAccount:', pedroAccount) 
console.log('\n Metodos estáticos existen sin necesidad de instanciar')
console.log('BankAccount.percentOf:', BankAccount.percentOf) 

{
  class BankAccount {
    static OVERDRAFT_FEE = 30
    constructor() { this.balance = 0 }
    deposit(amount) { this.balance += amount }    
    withdraw(amount) {
      if (this.balance < amount) {
        this.balance -= BankAccount.OVERDRAFT_FEE
      }
      this.balance -= amount
    }
  }
  const pedroAccount = new BankAccount()
  pedroAccount.deposit(1000)
  pedroAccount.withdraw(1200)
  console.log('pedroAccount:', pedroAccount) 
  console.log('overdraft: ',BankAccount.OVERDRAFT_FEE)
}

console.log('\n getters & setters estáticos')
{
  class BankAccount {
    static #OVERDRAFT_FEE = 30
    constructor() { this.balance = 0 }
    deposit(amount) { this.balance += amount }
    withdraw(amount) {
      if (this.balance < amount) {
        this.balance -= BankAccount.OVERDRAFT_FEE
      }
      this.balance -= amount
    }
    static get OVERDRAFT_FEE() {
      return this.#OVERDRAFT_FEE // In a static method, this is the constructor function
    }
    static set OVERDRAFT_FEE(newValue) {
      if (newValue > this.#OVERDRAFT_FEE) {
        this.#OVERDRAFT_FEE = newValue
      }
    }
  }
  
  const pedroAccount = new BankAccount()
  BankAccount.OVERDRAFT_FEE = 20 
  pedroAccount.deposit(1000)
  pedroAccount.withdraw(1200)
  console.log('pedroAccount:', pedroAccount) 
  pedroAccount.OVERDRAFT_FEE = 2000
  console.log('overdraft: ',pedroAccount.OVERDRAFT_FEE)
}
