class Car {
  constructor(name, color, options) {
    this.name = name;
    this.color = color;
    this.options = options;
  }

  clone() {
    return new Car(this.name, this.color, this.options);
  }

  toString() {
    return `${this.name} | ${this.color} | ${this.options}`;
  }
}

class CarManager {
  constructor() {
    this.cars = {};
  }

  registerCar(name, car) {
    this.cars[name] = car;
  }

  unregisterCar(name) {
    delete this.cars[name];
  }

  createCar(name) {
    if (name in this.cars) {
      return this.cars[name].clone();
    }
    return null;
  }
}

// Ejemplo de uso
const manager = new CarManager();

const prototypeCar = new Car("Coche", "Rojo", "Ex");
manager.registerCar("prototipo", prototypeCar);

const car1 = manager.createCar("prototipo");
console.log("Coche 1:", car1.toString());

const car2 = manager.createCar("prototipo");
car2.color = "Amarillo";
console.log("Coche 2:", car2.toString());

const car3 = manager.createCar("prototipo");
car3.color = "Azul";
car3.options = "Ex V8";
console.log("Coche 3:", car3.toString());
