// Observer Pattern Example
class Store {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  notify(product) {
    this.observers.forEach((observer) => observer.update(product));
  }
}

class Customer {
  update(product) {
    console.log("New product added: " + product);
  }
}

// Usage
const store = new Store();
const customer = new Customer();
store.add(customer); // Add a customer to the store's observers
store.notify("iPhone 15"); // Notify all observers about a new product
