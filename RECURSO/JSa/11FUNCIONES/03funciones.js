// 1. Referenciando y modificando el prototipo personalizado

// Suponiendo que ya tenemos nuestro SillaPrototipo y sillas del ejemplo anterior
const SillaPrototipo = {
  aplicarDescuento(porcentaje) {
    this.precio = this.precio * (1 - porcentaje / 100);
  },
  describir() {
    return `Silla ${this.modelo} de color ${this.color}, precio: $${this.precio}, ubicada en ${this.ubicacion}`;
  },
};

const sillas = [
  { color: "negro", modelo: "oficina", precio: 100, ubicacion: "sala 1" },
  { color: "blanco", modelo: "comedor", precio: 80, ubicacion: "cocina" },
];

sillas.forEach((silla) => Object.setPrototypeOf(silla, SillaPrototipo));

// Agregando una nueva función al prototipo
SillaPrototipo.actualizarPrecio = function (nuevoPrecio) {
  this.precio = nuevoPrecio;
  console.log(`Precio actualizado a $${this.precio}`);
};

// Usando la nueva función
sillas[0].actualizarPrecio(120);
console.log(sillas[0].describir());

// 2. Ejemplo de herencia de prototipos

// Creamos un prototipo base para muebles
const MueblePrototipo = {
  mover(nuevaUbicacion) {
    this.ubicacion = nuevaUbicacion;
    console.log(`${this.tipo} movido a ${this.ubicacion}`);
  },
  describirMueble() {
    return `${this.tipo} de color ${this.color}, ubicado en ${this.ubicacion}`;
  },
};

// SillaPrototipo hereda de MueblePrototipo
Object.setPrototypeOf(SillaPrototipo, MueblePrototipo);

// Agregamos una propiedad específica a SillaPrototipo
SillaPrototipo.ajustarAltura = function (altura) {
  this.altura = altura;
  console.log(`Altura de la silla ajustada a ${altura}cm`);
};

// Creamos un objeto silla que usa esta cadena de prototipos
const sillaNueva = {
  tipo: "Silla",
  color: "rojo",
  modelo: "gaming",
  precio: 150,
  ubicacion: "oficina",
};

Object.setPrototypeOf(sillaNueva, SillaPrototipo);

// Usamos métodos de diferentes niveles de la cadena de prototipos
sillaNueva.mover("sala de juegos"); // De MueblePrototipo
console.log(sillaNueva.describirMueble()); // De MueblePrototipo
sillaNueva.aplicarDescuento(10); // De SillaPrototipo
sillaNueva.ajustarAltura(65); // De SillaPrototipo
console.log(sillaNueva.describir()); // De SillaPrototipo
