// Ejemplo 1: Constructor de Persona
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  };
}

const juan = new Persona("Juan", 30);
juan.saludar(); // Salida: Hola, soy Juan y tengo 30 años.

// Ejemplo 2: Constructor de Coche
function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.kilometraje = 0;
  this.conducir = function (km) {
    this.kilometraje += km;
    console.log(
      `${this.marca} ${this.modelo} ha recorrido ${km} km. Kilometraje total: ${this.kilometraje} km.`
    );
  };
}

const miCoche = new Coche("Toyota", "Corolla", 2022);
miCoche.conducir(100); // Salida: Toyota Corolla ha recorrido 100 km. Kilometraje total: 100 km.

// Ejemplo 3: Constructor de Libro
function Libro(titulo, autor, paginas) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.leido = false;
  this.marcarComoLeido = function () {
    this.leido = true;
    console.log(`Has terminado de leer ${this.titulo} de ${this.autor}.`);
  };
  this.resumen = function () {
    return `${this.titulo} por ${this.autor}, ${this.paginas} páginas, ${
      this.leido ? "leído" : "no leído"
    }.`;
  };
}

const miLibro = new Libro("1984", "George Orwell", 328);
console.log(miLibro.resumen()); // Salida: 1984 por George Orwell, 328 páginas, no leído.
miLibro.marcarComoLeido(); // Salida: Has terminado de leer 1984 de George Orwell.

// Ejemplo 4: Constructor de Cuenta Bancaria
function CuentaBancaria(titular, saldoInicial = 0) {
  this.titular = titular;
  this.saldo = saldoInicial;
  this.depositar = function (cantidad) {
    this.saldo += cantidad;
    console.log(
      `Depósito de ${cantidad} realizado. Nuevo saldo: ${this.saldo}`
    );
  };
  this.retirar = function (cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(
        `Retiro de ${cantidad} realizado. Nuevo saldo: ${this.saldo}`
      );
    } else {
      console.log("Fondos insuficientes");
    }
  };
}

const miCuenta = new CuentaBancaria("Alice", 1000);
miCuenta.depositar(500); // Salida: Depósito de 500 realizado. Nuevo saldo: 1500
miCuenta.retirar(200); // Salida: Retiro de 200 realizado. Nuevo saldo: 1300

// Ejemplo 5: Constructor de Tarea
function Tarea(descripcion, prioridad = "normal") {
  this.descripcion = descripcion;
  this.prioridad = prioridad;
  this.completada = false;
  this.fechaCreacion = new Date();
  this.completar = function () {
    this.completada = true;
    console.log(`Tarea "${this.descripcion}" marcada como completada.`);
  };
  this.cambiarPrioridad = function (nuevaPrioridad) {
    this.prioridad = nuevaPrioridad;
    console.log(
      `Prioridad de la tarea "${this.descripcion}" cambiada a ${nuevaPrioridad}.`
    );
  };
  this.obtenerEstado = function () {
    return `Tarea: ${this.descripcion}, Prioridad: ${this.prioridad}, Estado: ${
      this.completada ? "Completada" : "Pendiente"
    }`;
  };
}

const miTarea = new Tarea("Aprender JavaScript", "alta");
console.log(miTarea.obtenerEstado()); // Salida: Tarea: Aprender JavaScript, Prioridad: alta, Estado: Pendiente
miTarea.completar(); // Salida: Tarea "Aprender JavaScript" marcada como completada.
