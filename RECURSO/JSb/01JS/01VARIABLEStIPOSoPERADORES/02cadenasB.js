// Templates Literals

'use strict'

let destino = 'mundo' // cadena normal
let prueba = `Prueba, ${destino.toUpperCase()}...` // plantilla
console.log('Prueba:', prueba) // Prueba, MUNDO!
// pueden ser unidos
let nombre = 'Pios'
let apellido = 'Antonio'
prueba = `Prueba , ${nombre.length > 3 ? `${nombre[0]}.` : '' } ${apellido}`
console.log('prueba:', prueba) // Prueba, R. Nogales
// Pueden tener varias líneas
destino = 'Cali'
prueba = `<div>Destino:</div>
          <div>${destino}</div>
          `
console.log('prueba:', prueba) // 

const html = (fragments, ...values) => { 
  console.log(fragments)
  console.log(values)
  const escapeHTML = str => [...str].map(c => c === '<' ? '&lt;'
    : c === '&' ? '&amp;' : c).join('')
  let result = fragments[0]
  for (let i = 0; i < values.length; i++) {
    result += escapeHTML(values[i])
    result += fragments[i + 1]
  }
  return result
}

destino = 'Colombia'
let message = html`<div>Hello, ${destino}</div>`
console.log('message:', message) // <div>Hello, St. Kitts &amp; Nevis</div>
