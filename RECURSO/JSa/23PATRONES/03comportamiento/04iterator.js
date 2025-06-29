// Iterator Pattern Example
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }

  hasNext() {
    return this.index < this.collection.length;
  }
}

// Usage
const collection = ["item1", "item2", "item3"];
const iterator = new Iterator(collection);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
// Outputs: item1, item2, item3
