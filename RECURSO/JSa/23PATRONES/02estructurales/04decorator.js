class Coffee {
  cost() {
    return 5;
  }

  description() {
    return "Simple coffee";
  }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  description() {
    return this.coffee.description();
  }
}

class Milk extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2;
  }

  description() {
    return `${this.coffee.description()}, milk`;
  }
}

class Sugar extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }

  description() {
    return `${this.coffee.description()}, sugar`;
  }
}

class Vanilla extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 3;
  }

  description() {
    return `${this.coffee.description()}, vanilla`;
  }
}

// Uso del patrón
let coffee = new Coffee();
console.log(coffee.description() + ": $" + coffee.cost());

coffee = new Milk(coffee);
console.log(coffee.description() + ": $" + coffee.cost());

coffee = new Sugar(coffee);
console.log(coffee.description() + ": $" + coffee.cost());

coffee = new Vanilla(coffee);
console.log(coffee.description() + ": $" + coffee.cost());
