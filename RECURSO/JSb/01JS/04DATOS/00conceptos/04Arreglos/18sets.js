// node sets.js

'use strict'
console.log('// Constructing a set')
const iterable = [3, 1, 4, 1, 5, 9]
const emptySet = new Set()
const setWithElements = new Set(iterable)

console.log('emptySet:', emptySet) // Set(0) {}
console.log('setWithElements:', setWithElements) // Set(5) { 3, 1, 4, 5, 9 }


console.log('// Adding and removing elements')
let set = setWithElements
let x = 7
const result1 = set.add(x) // Adds x if not present and returns set for chaining
console.log('r1',result1)
const result2 = set.delete(x) // If x present, deletes x and returns true, otherwise false
console.log("r2", result1, result2);
const result3 = set.has(x) // Returns true if x is present
console.log("r3", result3);
const result4 = set.clear() // Deletes all elements

console.log('result1:', result1) // Set(0) {}
console.log('result2:', result2) // true

console.log('// Visiting all elements')
set = new Set(iterable)
let arr = []
for (const value of set) {
  arr.push(value)
  console.log(value)
}
console.log('\n')

set.forEach(value => {
  console.log(value)
})

console.log('// Sets remember insertion order')
const weekdays = new Set(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])

for (const value of weekdays) console.log({value})
console.log("\n");  
weekdays.forEach(value => console.log({value}))
