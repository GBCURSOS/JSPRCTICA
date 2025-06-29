
'use strict'
console.log('\n Try Catch')

try {
  // let data = JSON.parse('{"name":"John", "age":30, "city":"New York"}')
  let data = JSON.parse('{"nombre":"dodo"}')
  // entrada válida
  console.log({data})
} catch {
  // entrada invalida
  console.log(`entrada inválida`)
}
