let prototipoFunciones = {
  accion(parametro) {
    console.log(`El elemento ${this.color} sirve para ${parametro}`);
  },
  prueba() {
    console.log('prueba de prototipo de funciones')
  }
};

let elementoNegro = Object.create(prototipoFunciones);
elementoNegro.color = "negro";
elementoNegro.accion("el techo y la azotea");
elementoNegro.prueba();
elementoNegro.getColora = function () {
  return this.color
}
prototipoFunciones.getColorb = function () {
  return this.color;
};
console.log(elementoNegro.getColora())
console.log(elementoNegro.getColorb());
console.log(elementoNegro);
