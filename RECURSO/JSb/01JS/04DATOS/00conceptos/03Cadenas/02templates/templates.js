

'use strict'

const person = {
  name: "Harry",
  age: 42
}

console.log('// Implementation of the tag function')

const strong = (fragments, ...values) => {
  console.log('dentro f', fragments)
  console.log("dentro v", values);
  let result = fragments[0]
  for (let i = 0; i < values.length; i++){
    result += `<strong>${values[i]}</strong>${fragments[i + 1]}` 
    console.log("result", i, ":", result);
  }
  return result 
}

/*
console.log('// Use of the function in a tagged template literal')
let message = strong(`Next year, ${person.name} will be ${person.age + 1}.`)
console.log('message:', message) // Next year, <strong>Harry</strong> will be <strong>43</strong>.
*/
/*
console.log('// This tagged template string...')
let message = strong`Next year, ${person.name} will be ${person.age + 1}.`
console.log('message:', message) // Next year, <strong>Harry</strong> will be <strong>43</strong>.
*/

console.log('// ... is equivalent to this function call')
let message = strong(['Next year, ', ' will be ', '.'], 'Harry', 43)
console.log('message:', message) // Next year, <strong>Harry</strong> will be <strong>43</strong>.
