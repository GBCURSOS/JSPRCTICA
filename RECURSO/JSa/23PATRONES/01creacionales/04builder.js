class Car {
  constructor() {
    this.wheels = null;
    this.engine = null;
    this.body = null;
  }

  toString() {
    return `Car [wheels = ${this.wheels}, engine = ${this.engine}, body = ${this.body}]`;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setBody(body) {
    this.car.body = body;
    return this;
  }

  build() {
    return this.car;
  }
}

class CarDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructSportsCar() {
    return this.builder
      .setWheels("Aleación")
      .setEngine("V8")
      .setBody("Fibra de carbono")
      .build();
  }

  constructCityCar() {
    return this.builder
      .setWheels("Acero")
      .setEngine("4 cilindros")
      .setBody("Hatchback")
      .build();
  }
}

// Ejemplo de uso
const builder = new CarBuilder();
const director = new CarDirector(builder);

const sportsCar = director.constructSportsCar();
console.log("Coche deportivo construido:");
console.log(sportsCar.toString());

const cityCar = director.constructCityCar();
console.log("\nCoche de ciudad construido:");
console.log(cityCar.toString());
