
'use strict'

console.log('\n Construyendo Fechas')
/*
    Para representar el tiempo en un ordenador, es conveniente tener un origen fijo
    desde el que contar hacia delante o hacia atrás. Este es epoch: medianoche UTC
    del jueves 1 de enero de 1970.
    En JavaScript, el tiempo se mide en milisegundos a partir de epoch,
    con un rango válido de ±100.000.000 días en cualquier dirección.

    JavaScript utiliza el formato estándar ISO 8601 para un punto en el tiempo:
    AAAA-MM-DDTHH:mm:ss.sssZ, con cuatro dígitos para el año, dos dígitos para el mes,
    día, horas, minutos y segundos, y tres dígitos para los milisegundos.
    La letra T separa el día y las horas, y el sufijo Z denota un desfase cero
    respecto a UTC.
    Por ejemplo, el epoch es
    1970-01-01T00:00:00.000Z
*/

// https://www.epochconverter.com/
// https://www.w3schools.com/jsref/jsref_obj_date.asp
const epoch = new Date('1970-01-01T00:00:00.000Z')
const unAnnoMasTarde = new Date(365 * 86400 * 1000) // 1971-01-01T00:00:00.000Z
console.log('epoch:', epoch) // 1970-01-01T00:00:00.000Z
console.log('unAnnoMasTarde:', unAnnoMasTarde) 

const now = new Date()
console.log('now:', now)
console.log('\n nunca use Date sin el new')
console.log('Date(365 * 86400 * 1000):', Date(365 * 86400 * 1000)) 

console.log('\n Date en expresiones aritméticas convierte a cadenas ó números')
console.log('unAnnoMasTarde + 1:', unAnnoMasTarde + 1) // 'Fri Jan 01 1971 01:00:00 GMT+0100 (Central European Summer Time)1'
console.log('unAnnoMasTarde * 1:', unAnnoMasTarde * 1) // 31536000000

console.log('\n Diferencias entre fechas')
let f = 1n
const before = new Date()
for (let i = 1n; i <= 123456n; i++) f = f * i // Do some work

const after = new Date()
const millisecondsElapsed = after - before
console.log('millisecondsElapsed: ', millisecondsElapsed)

console.log('\n Fechas en timezone')
let fecha = new Date(1970, 0 /* January */, 1, 0, 0, 0, 0, 0) 
console.log({fecha})

console.log('\n Valores fuera de rango')
console.log('new Date(1970, 0 /* January */, 1, 0, 0, 0, 0, 0):', new Date(1970, 0 /* January */, 1, 0, 0, 0, 0, 0)) 
