
'use strict'

console.log('\n función flecha')

const averagea = (x, y) => (x + y) / 2

function averagee (x,y){
  return (x+y/2)
} 

let averagean = function (x, y) {
  return x + y / 2;
}; 

console.log('average(3, 4):', averagea(3, 4)) // 3.5

console.log('\n No se requieren paréntesis si tiene un sólo parámetro')
const multiplicaPor10 = x => x * 10
console.log('multiplicaPor10(42):', multiplicaPor10(42)) // 420

console.log('\n paréntesis vacíos si no hay parámetros')
const dieToss = () => Math.trunc(Math.random() * 6) + 1
console.log(dieToss())
console.log(dieToss())

console.log('\n Se usa bloques para funciones flecha más complejas')

const indexOf = (arr, value) => {
    for (let i in arr) {
      if (arr[i] === value) return i
    }
    return -1
  }

console.log('indexOf([3, 1, 4, 1, 5, 9], 5):', indexOf([3, 1, 4, 1, 5, 9], 5)) // 4

console.log('\n Se deben usar llaves si la función tiene más de una línea')
{
  const average = (x, y) => {
    return (x + y) / 2
  }
  console.log('average(3, 4):', average(3, 4)) // 3.5
}

console.log('\n Se deben usar paréntesis si se retorna un objeto')

const stats1 = (x, y) => ({
    average: (x + y) / 2,
    distance: Math.abs(x - y)
  })

function stats2 (x, y) {
  return {
    average: (x + y) / 2,
    distance: Math.abs(x - y)
  }
};

console.log('stats(3, 4):', stats2(3, 4)) // { average: 3.5, distance: 1 }
