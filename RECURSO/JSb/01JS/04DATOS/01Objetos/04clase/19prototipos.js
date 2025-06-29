
let prototipoFunciones = {

  accion(parametro) {
    console.log(`El elemento ${this.color} sirve para ${parametro}`);
  },

};

function haceElemento(color) {
  let elemento = Object.create(prototipoFunciones);
  elemento.color = color;
  return elemento;
}

class Elemento {
  color;

  constructor(color) {
    this.color = color;
  }

  accionObjeto(parametro) {
    console.log(`El elemento ${this.color} sirve para ${parametro}`);
  }
}

let objeto1 = haceElemento("amarillo");
let objeto2 = new Elemento("gris");

console.log("objeto1:", objeto1);
console.log("objeto2", objeto2);


console.log(Object.getPrototypeOf(objeto1));
console.log(Object.getPrototypeOf(objeto2));

let objeto3 = Object.create(prototipoFunciones);
console.log(Object.getPrototypeOf(objeto3));
