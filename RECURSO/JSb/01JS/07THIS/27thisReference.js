"use strict";

console.log("// this no está definido en una función anidada");
/*
{
  class CuentaBancaria {
    balance;
    constructor() {
      this.balance = 0;
    }
    deposito(amount) {
      this.balance += amount;
    }
    retiro(amount) {
      this.balance -= amount;
    }
    reparteElDinero(accounts) {
      
      accounts.forEach(function (element) {
        console.log("cuentas:", element);
        element.deposito(this.balance / accounts.length); // el this está indefinido en la función anidada
      });
      this.balance = 0;
    }
  }
  const petersAccount = new CuentaBancaria();
  petersAccount.deposito(1000);
  const paulsAccount = new CuentaBancaria();
  const marysAccount = new CuentaBancaria();

  try {
    
    petersAccount.reparteElDinero([paulsAccount, marysAccount]);
  } catch (exception) {
    console.log("Error:", exception.message); // No puede leer propiedad balance está indefinida
  }

  console.log("petersAccount:", petersAccount); // CuentaBancaria{ balance: 1000 }
  console.log("paulsAccount:", paulsAccount); // CuentaBancaria{ balance: 0 }
  console.log("marysAccount:", marysAccount); // CuentaBancaria{ balance: 0 }
}
*/
/*
console.log("-------------------------------------------------");
console.log("\\ Solución Elegante: función arrow");
{
  class CuentaBancaria {
    balance;
    constructor() {
      this.balance = 0;
    }
    deposito(amount) {
      this.balance += amount;
    }
    retiro(amount) {
      this.balance -= amount;
    }
        
    reparteElDinero(accounts) {
      console.log('cuentas',accounts);
      accounts.forEach((element) => {
        console.log("cuenta antes:", element);
        element.deposito(this.balance / accounts.length); // this encontrado
        console.log("cuenta despues:", element);
      });
      this.balance = 0;
    }
  }

  const petersAccount = new CuentaBancaria();
  petersAccount.deposito(1200);
  const paulsAccount = new CuentaBancaria();
  const marysAccount = new CuentaBancaria();
  const johnsAccount = new CuentaBancaria();
  petersAccount.reparteElDinero([paulsAccount, marysAccount, johnsAccount]);
  johnsAccount.reparteElDinero([paulsAccount, marysAccount]);
  console.log("petersAccount:", petersAccount); // CuentaBancaria{ balance: 0 }
  console.log("paulsAccount:", paulsAccount); // CuentaBancaria{ balance: 500 }
  console.log("marysAccount:", marysAccount);
  console.log("johnsAccount:", johnsAccount); // CuentaBancaria{ balance: 500 }
}
*/

console.log("-------------------------------------------------");
console.log("\n Solución Clásica");
{
  class CuentaBancaria {
    
    constructor() {
      this.balance = 0;
    }
    deposito(amount) {
      this.balance += amount;
    }
    retiro(amount) {
      this.balance -= amount;
    }
    reparteElDinero(accounts) {
      const that = this;
      accounts.forEach(function (account) {
        account.deposito(that.balance / accounts.length);
      });
      this.balance = 0;
    }
  }
  const petersAccount = new CuentaBancaria();
  petersAccount.deposito(1000);
  const paulsAccount = new CuentaBancaria();
  const marysAccount = new CuentaBancaria();
  petersAccount.reparteElDinero([paulsAccount, marysAccount]);
  console.log("petersAccount:", petersAccount); // CuentaBancaria{ balance: 0 }
  console.log("paulsAccount:", paulsAccount); // CuentaBancaria{ balance: 500 }
  console.log("marysAccount:", marysAccount); // CuentaBancaria{ balance: 500 }
}

