class Aleatorios {
  
  #max;

  constructor(max) {
    this.#max = max;
  }

  getNumber() {
    console.log(this.#max)
    return Math.floor(Math.random() * this.#max);
  }
}

let objeto = new Aleatorios(10);
console.log(objeto.max);
console.log(objeto.getNumber());
