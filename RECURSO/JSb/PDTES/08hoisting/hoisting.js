

'use strict'

const values = [1, 7, 2, 9]
console.log('NO se puede acceder a una variable antes de ser definida')
{
  function doStuff() { 
    try {
      console.log(someVariable)
    } catch(e) { console.log(`Error: ${e}`) }
    // Intentando acceder a la variable genera un error
    let someVariable // contesto inicia aquí
    console.log('someVariable:', someVariable) // undefined
    // puede acceder a la variable someVariable, el valor es undefined
    someVariable = 42
    console.log('someVariable:', someVariable) // 42
    // Puede acceder someVariable, valor es  42
  } // Contexto termina aquí

  doStuff()
}

console.log('\n Variables locales pueden ser sostenidas (hoisted)')
// Se puede acceder a una variable en una función que precede la definición
// asumiendo que ésta sera llamada después de la definición de la misma.
// La variable será sostenidad (hoisted) dentro del contexto.
{
  function doStuff() { 
    function localWork() {
      console.log(someVariable) // OK to access variable
      // . . .
    }
    let someVariable = 42
  
    localWork() // Prints 42
  }

  doStuff()
}


console.log('\n Las funciones también pueden ser sostenidas, de allí, que se puede definir mutuamente')
// función recursiva
{
  function isEven(n) { return n === 0 ? true : isOdd(n -1) }
  function isOdd(n) { return n === 0 ? false : isEven(n -1) }
  console.log('isEven(42):', isEven(42)) // true
}

console.log('\n Funcionas llamadas inmediatamente')
{
  (function () {
    var someVariable = 42
    function someFunction(arg) { return arg * arg }
    console.log(someFunction(someVariable))
  })() // La función es llamada aquí, notese los ()
  // someVariable, someFunction no exiten en este contexto

  console.log('typeof someFunction:', typeof someFunction) // undefined
  console.log('typeof someVariable:', typeof someVariable) // undefined
}

console.log('\n Hoy día, se usa let')
{
  {
    let someVariable = 42
    const someFunction = (arg) => { return arg * arg }
    console.log(someFunction(someVariable))
  }

  console.log('typeof someFunction:', typeof someFunction) // undefined
  console.log('typeof someVariable:', typeof someVariable) // undefined
}
