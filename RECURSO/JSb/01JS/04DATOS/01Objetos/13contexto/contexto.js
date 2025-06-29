

'use strict'

console.log('Paso 1: Retorna objetos con métodos')
{
  const createAccount = () => {
    // ...
    return {
      deposit: amount => { /* ... */ },
      withdraw: amount => { /* ... */ },
      getBalance: () => 0
    }
  }

  const p1Cuenta = createAccount()
  const p2Cuenta = createAccount()
  p2Cuenta.deposit(500)
}

console.log('// Paso 2: Variables locales guardan el estado del objeto')
{
  const createAccount = () => {
    let balance = 0
    return {
      // ...
    }
  }
}

console.log('// Paso 3: Métodos locales acceden variables locales')
{
  const createAccount = () => {
    let balance = 0
    return {
      deposit: amount => {
        balance += amount
      },
      withdraw: amount => {
        if (balance >= amount) 
          balance -= amount
      },
      getBalance: () => balance
    }
  }
}

console.log('// Paso 4: Se inicializan las propiedades del objeto')
{
  const createAccount = (initialBalance) => {
    let balance = initialBalance + 10 
    return {
      // ...
    }
  }
}
// Ok to capture parameter variables
{
  const createAccount = (balance) => {
    balance += 10 
    return {
      deposit: amount => {
        balance += amount
      },
      // ...
    }
  }
}
console.log('\n Paso 5: Freeze retorna el objeto')
{
  const createAccount = (balance) => {
    return Object.freeze({
          deposit: amount => {
            balance += amount
          },
          withdraw: amount => {
            balance += amount
          },
          getBalance: () => balance  
    })
  }

  const p1Cuenta = createAccount(500)
  const p2Cuenta = createAccount(1000)
  p2Cuenta.deposit(500)
  p1Cuenta.withdraw(100)
  let p1Balance = p1Cuenta.getBalance()
  let p2Balance = p2Cuenta.getBalance()
  console.log('p1Balance:', p1Balance) // 600
  console.log('p2Balance:', p2Balance) // 1500
}


