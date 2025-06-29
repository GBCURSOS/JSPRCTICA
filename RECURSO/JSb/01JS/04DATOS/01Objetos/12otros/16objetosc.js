function accion(parametro) {
  console.log(`El elemento ${this.color} sirve para ${parametro}`);
}

let elemento1 = { 
  color: "blanco",
  accion };

let elemento2 = { 
  color: "azul",
  accion };

console.log(typeof elemento1);
console.log(elemento1);
console.log(typeof elemento2);
console.log(elemento2);

elemento1.accion("la ventana");
elemento2.accion("la pared");

accion.call(elemento1, "el corredor");

let buscador = {
  value:  1,
  find(array) {
    return array.some((v) => v == this.value);
  },
};

console.log("buscador:", buscador.find([4, 5, 6, 7]));
console.log("buscador:", buscador.find([4, 3, 2, 1]));
