
'use strict'

console.log('\n con break ')
{
  let arr = [2, 3, 5, -7, 11, 13]
  let i = 0
  while (i < arr.length) {
    if (arr[i] < 0) break
    i++
  }
  
  console.log('con i:', i) // 3
}

console.log('\n sin el break')
{
  let arr = [2, 3, 5, -7, 11, 13]
  let i = 0
  let found = false
  while (!found && i < arr.length) {
    if (arr[i] < 0) {
      found = true
    } else {
      i++
    }
  }
  console.log('sin i:', i) // 3
}

console.log('\n break con etiqueta')
{
  let arr = [[2, 3], [5, -7], [11, 13]]
  let i = 0
  let j = 0
  outer:
  while (i < arr.length) {
    while (j < arr[i].length) {
      if (arr[i][j] < 0) break outer
      j++
    }
    i++
    j = 0
  }
  
  console.log('etiqueta i:', i) // 1
  console.log('etiqueta j:', j) // 1
}


console.log('\n continue ')
{
  let arr = [2, 3, 5, -7, 11, 13]
  let count = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) continue
    count++
    sum += arr[i]
  }
  let avg = count === 0 ? 0 : sum / count
  console.log(count,':',sum)
  console.log('avg:', avg) // 6.8
}
