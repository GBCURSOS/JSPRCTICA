// Strategy Pattern Example
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a, b) {
    return this.strategy.execute(a, b);
  }
}

class Addition {
  execute(a, b) {
    return a + b;
  }
}

class Subtraction {
  execute(a, b) {
    return a - b;
  }
}

// Usage
const context = new Context(new Addition());
console.log(context.executeStrategy(5, 3)); // Outputs: 8

context.setStrategy(new Subtraction());
console.log(context.executeStrategy(5, 3)); // Outputs: 2
