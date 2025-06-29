
'use strict'
// https://es.wikipedia.org/wiki/Tiempo_universal_coordinado
console.log('\n UTC date  new Date(Date(...))')
const deadline = new Date(Date.UTC(2020, 0 /* January */, 31))
console.log('deadline:', deadline) // 2020-01-31T00:00:00.000Z

console.log('\n UTC desde Date')
const epoch = new Date('1970-01-01T00:00:00.000Z')
console.log('epoch.getUTCDay():', epoch.getUTCDay()) // 4 (Jueves)
console.log('epoch.getDay():', epoch.getDay()) // 3, 4, or 5, dependen de la ubicación de la zona

