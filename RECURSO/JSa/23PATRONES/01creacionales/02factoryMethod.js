class Product {
  operation() {
    throw new Error("operation() debe ser implementado en las subclases.");
  }
}

class ConcreteProduct1 extends Product {
  operation() {
    return "Resultado de ConcreteProduct1";
  }
}

class ConcreteProduct2 extends Product {
  operation() {
    return "Resultado de ConcreteProduct2";
  }
}

class Creator {
  factoryMethod() {
    throw new Error("factoryMethod() debe ser implementado en las subclases.");
  }

  someOperation() {
    const product = this.factoryMethod();
    return `Creator: El mismo código del creador ha trabajado con ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  factoryMethod() {
    return new ConcreteProduct2();
  }
}

// Ejemplo de uso
function clientCode(creator) {
  console.log(creator.someOperation());
}

console.log("App: Lanzada con ConcreteCreator1.");
clientCode(new ConcreteCreator1());

console.log("\nApp: Lanzada con ConcreteCreator2.");
clientCode(new ConcreteCreator2());
