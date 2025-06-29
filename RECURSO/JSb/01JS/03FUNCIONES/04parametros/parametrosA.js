
'use strict'
console.log('\n esta función puede ser llamada con números ó arreglos')
const average = (x, y) => {
  let sum = 0
  let n = 0
  if (Array.isArray(x)) {
    for (const value of x) { sum += value; n++ }
  } else {
    sum = x; n++
  }
  if (Array.isArray(y)) {
    for (const value of y) { sum += value; n++ }
  } else {
    sum += y; n++
  }
  return n === 0 ? 0 : sum / n
}

console.log('average(1, 2):', average(1, 2)) // 1.5
console.log('average([1, 2, 3], 4):', average([1, 2, 3], 4)) // 2.5
console.log('average(1, [2, 3, 4]):', average(1, [2, 3, 4])) // 2.5
console.log('average([1, 2], [3, 4, 5]):', average([1, 2], [3, 4, 5])) // 3

console.log('\n A veces se pueden usar las conversiones')
{
  const average = (x, y) => {
    return (+x + +y) / 2
  }
  console.log('average(\'3\', [4]):', average('3', [4])) // 3.5
}

console.log('\n Más parámetros')
{
  const average = (x, y) => (x + y) / 2
  let result = average(3, 4, 5) 
  console.log('result:', result) 
}

console.log(' Menos parámetros')
{
  const average = (x, y) => y === undefined ? x : (x + y) / 2
  console.log('average(3):', average(3)) 
}

{
  const average = (x, y = x) => (x + y) / 2
  console.log('average(3):', average(3)) // 3
}

{
    const average = (x = 0, y = x) => (x + y) / 2
  console.log('average():', average()) // 0
}

