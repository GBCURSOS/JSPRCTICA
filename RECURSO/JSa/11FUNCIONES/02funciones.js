// Arreglo de objetos sillas
const sillas = [
  { color: "negro", modelo: "oficina", precio: 100, ubicacion: "sala 1" },
  { color: "blanco", modelo: "comedor", precio: 80, ubicacion: "cocina" },
  { color: "marrón", modelo: "exterior", precio: 60, ubicacion: "jardín" },
];

// Creando un prototipo personalizado
const SillaPrototipo = {
  aplicarDescuento(porcentaje) {
    this.precio = this.precio * (1 - porcentaje / 100);
  },
  describir() {
    return `Silla ${this.modelo} de color ${this.color}, precio: $${this.precio}, ubicada en ${this.ubicacion}`;
  },
};

// Asignando el prototipo personalizado a cada silla
sillas.forEach((silla) => Object.setPrototypeOf(silla, SillaPrototipo));

// Ejemplo de uso
console.log(sillas[0].describir());
sillas[1].aplicarDescuento(10);
console.log(sillas[1].describir());

// Agregando un método al prototipo existente (Object.prototype)
Object.prototype.cambiarUbicacion = function (nuevaUbicacion) {
  this.ubicacion = nuevaUbicacion;
};

// Usando el método agregado al prototipo existente
sillas[2].cambiarUbicacion("terraza");
console.log(sillas[2].describir());


