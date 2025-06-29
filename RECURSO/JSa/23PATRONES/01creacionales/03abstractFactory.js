class AbstractFactory {
  createProductA() {
    throw new Error("createProductA() debe ser implementado en las subclases.");
  }

  createProductB() {
    throw new Error("createProductB() debe ser implementado en las subclases.");
  }
}

class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA1();
  }

  createProductB() {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }

  createProductB() {
    return new ConcreteProductB2();
  }
}

class AbstractProductA {
  usefulFunctionA() {
    throw new Error(
      "usefulFunctionA() debe ser implementado en las subclases."
    );
  }
}

class ConcreteProductA1 extends AbstractProductA {
  usefulFunctionA() {
    return "El resultado del producto A1.";
  }
}

class ConcreteProductA2 extends AbstractProductA {
  usefulFunctionA() {
    return "El resultado del producto A2.";
  }
}

class AbstractProductB {
  usefulFunctionB() {
    throw new Error(
      "usefulFunctionB() debe ser implementado en las subclases."
    );
  }
}

class ConcreteProductB1 extends AbstractProductB {
  usefulFunctionB() {
    return "El resultado del producto B1.";
  }
}

class ConcreteProductB2 extends AbstractProductB {
  usefulFunctionB() {
    return "El resultado del producto B2.";
  }
}

// Ejemplo de uso
function clientCode(factory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.usefulFunctionA());
  console.log(productB.usefulFunctionB());
}

console.log(
  "Cliente: Probando el código del cliente con el primer tipo de fábrica:"
);
clientCode(new ConcreteFactory1());

console.log(
  "\nCliente: Probando el mismo código del cliente con el segundo tipo de fábrica:"
);
clientCode(new ConcreteFactory2());
