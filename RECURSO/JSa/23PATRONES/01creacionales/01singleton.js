class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.data = [];
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

// Ejemplo de uso
const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.addData("Dato 1");
instance2.addData("Dato 2");

console.log(instance1.getData()); // ["Dato 1", "Dato 2"]
console.log(instance2.getData()); // ["Dato 1", "Dato 2"]
console.log(instance1 === instance2); // true
