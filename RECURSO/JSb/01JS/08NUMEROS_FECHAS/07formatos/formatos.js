
'use strict'
console.log('\N Formatos')
const alunizaje = new Date('1969-07-20T20:17:40.000Z')

console.log('alunizaje.toLocaleDateString():', alunizaje.toLocaleDateString()) // '20.7.1969' Alemania
console.log('alunizaje.toLocaleDateString(\'en-US\'):', alunizaje.toLocaleDateString('en-US')) // '7/20/1969'

console.log('\Otros')
console.log('alunizaje.toLocaleDateString( \'en-US\', { year: \'numeric\', month: \'long\', day: \'numeric\' }):',
     alunizaje.toLocaleDateString( 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })) // 'July 20, 1969'

console.log('\n Formato de máquina')
console.log('alunizaje.toISOString():', alunizaje.toISOString()) // '1969-07-20T20:17:40.000Z'
