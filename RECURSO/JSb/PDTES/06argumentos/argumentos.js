
'use strict'

const values = [1, 7, 2, 9]
console.log('\n Una función con comportamiento configurable')
{
  
  const mkString = (array, config) => {
    let separator = config.separator === undefined ? ',' : config.separator 
    let leftDelimiter = config.leftDelimiter === undefined ? '[' : config.leftDelimiter
    let rightDelimiter = config.rightDelimiter === undefined ? ']' : config.rightDelimiter
    return leftDelimiter + array.join(separator) + rightDelimiter
  }

  const result = mkString(values, { leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) // (1,7,2,9)
}

console.log('\n Solución: usar extracción')
{
  const mkString = (array, { separator = ',', leftDelimiter = '[', rightDelimiter = ']' }) => {
    return leftDelimiter + array.join(separator) + rightDelimiter
  }

  const result = mkString(values, { leftDelimiter: '(', rightDelimiter: ')' })
  console.log('result:', result) 
}

console.log('\n Otra forma')
{
  const mkString = (array, {
      separator = ',',
      leftDelimiter = '[',
      rightDelimiter = ']'
    } = {}) => {
    return leftDelimiter + array.join(separator) + rightDelimiter
  }

  const result = mkString(values) 
  console.log('result:', result) 
}
