
'use strict'

console.log('\n Excepciones')
// Para lanzar una excepción, simplemente lanza cualquier valor; por convención,
// un objeto de error. Para capturar una excepción, utilice un bloque try.
const elem = 42
try {
  let reason = `Element ${elem} not found`
  throw Error(reason)
} catch (e) {
  console.log(`Caught exception with message ${e.message}`)
}
