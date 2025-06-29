
'use strict'
console.log('\n Getters')

{
class Person {

  constructor(last, first) {
    this.last = last;
    this.first = first
  }
  get fullName() { return `${this.last}, ${this.first}` }
}

const pedro = new Person('Saa', 'Pedro')
const pedroName = pedro.fullName 
console.log('pedroName:', pedroName) 
}

console.log('\n Setters')
{
  class Person {
    constructor(last, first) {
      this.last = last;
      this.first = first
    }

    get fullName() { return `${this.last}, ${this.first}` }

    set fullName(value) {
      const parts = value.split(/,\s*/)
      this.last = parts[0]
      this.first = parts[1]
    }
  }

  const luis = new Person(' ', ' ')
  console.log('luis: ',luis)
  luis.fullName = 'Sza, Luis'
  console.log('luis:', luis) 
}
