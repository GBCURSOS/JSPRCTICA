// Clase base
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un sonido.`);
  }

  static describirEspecie() {
    console.log("Los animales son seres vivos del reino animal.");
  }
}

// Clase que hereda de Animal
class Perro extends Animal {
  #edad; // Miembro privado

  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
    this.#edad = 0;
  }

  hablar() {
    console.log(`${this.nombre} ladra.`);
  }

  get edad() {
    return this.#edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad >= 0) {
      this.#edad = nuevaEdad;
    }
  }

  // Método con nombre dinámico
  ["comportamiento" + "Especial"]() {
    console.log(`${this.nombre} hace un truco especial.`);
  }
}

// Clase para gestionar datos privados
class GestorDatosPrivados {
  #datos = new WeakMap();

  guardarDato(objeto, clave, valor) {
    if (!this.#datos.has(objeto)) {
      this.#datos.set(objeto, new Map());
    }
    this.#datos.get(objeto).set(clave, valor);
  }

  obtenerDato(objeto, clave) {
    return this.#datos.get(objeto)?.get(clave);
  }
}

// Demostración de class name binding
let NombreClase = class {
  constructor() {
    console.log(NombreClase.name);
  }
};

// Uso de las clases

console.log("--- Demostración de Animal ---");
const animal = new Animal("Criatura");
animal.hablar();
Animal.describirEspecie();

console.log("\n--- Demostración de Perro ---");
const perro = new Perro("Firulais", "Labrador");
perro.hablar();
perro.edad = 5;
console.log(`Edad de ${perro.nombre}: ${perro.edad}`);
perro.comportamientoEspecial();

console.log("\n--- Demostración de GestorDatosPrivados ---");
const gestor = new GestorDatosPrivados();
gestor.guardarDato(perro, "comidaFavorita", "Croquetas");
console.log(
  `Comida favorita de ${perro.nombre}: ${gestor.obtenerDato(
    perro,
    "comidaFavorita"
  )}`
);

console.log("\n--- Demostración de Class Name Binding ---");
new NombreClase();

// Intento de acceder a un miembro privado (generará un error)
//   console.log(perro.#edad);
