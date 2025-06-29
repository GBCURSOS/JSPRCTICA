// 1. this con objetos simples
const objetoSimple = {
  nombre: "Objeto Simple",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

console.log("1. this con objetos simples:");
objetoSimple.saludar();

// 2. Guardando this para uso en funciones/objetos anidados
const objetoAnidado = {
  nombre: "Objeto Anidado",
  saludar: function () {
    const that = this; // Guardamos 'this' en 'that'
    function saludoInterno() {
      console.log(`Hola, soy ${that.nombre} desde una función anidada`);
    }
    saludoInterno();
  },
};

console.log("\n2. Guardando this para uso en funciones anidadas:");
objetoAnidado.saludar();

// 3. Vinculando el contexto de la función
const objetoSinContexto = {
  nombre: "Objeto Sin Contexto",
};

function saludarGenerico() {
  console.log(`Hola, soy ${this.nombre}`);
}

const saludarVinculado = saludarGenerico.bind(objetoSinContexto);

console.log("\n3. Vinculando el contexto de la función:");
saludarVinculado();

// 4. this en funciones constructoras
function PersonaConstructor(nombre) {
  this.nombre = nombre;
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} creado con un constructor`);
  };
}

const personaConstructor = new PersonaConstructor("Juan");

console.log("\n4. this en funciones constructoras:");
personaConstructor.saludar();

// 5. this en funciones flecha
const objetoConFlechas = {
  nombre: "Objeto Con Flechas",
  saludarTradicional: function () {
    console.log(`Hola, soy ${this.nombre} (método tradicional)`);
  },
  saludarFlecha: () => {
    console.log(`Hola, soy ${this.nombre} (función flecha)`);
  },
};

console.log("\n5. this en funciones flecha:");
objetoConFlechas.saludarTradicional();
objetoConFlechas.saludarFlecha(); // Notarás que esta no funciona como se espera

// 6. this en funciones anónimas
console.log("\n6. this en funciones anónimas:");

// 6.1 Como método de objeto
const objetoAnonimo = {
  nombre: "Objeto Anónimo",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} (función anónima como método)`);
  },
};
objetoAnonimo.saludar();

// 6.2 Como callback
const arreglo = ["a", "b", "c"];
arreglo.forEach(function (item, index) {
  console.log(`${index}: ${item}, this es ${this}`);
});

// 6.3 Como evento (simulado)
const botonSimulado = {
  onClick: function (callback) {
    callback.call({ type: "click" }); // Simulamos el contexto de evento
  },
};

botonSimulado.onClick(function () {
  console.log(`Evento de tipo: ${this.type}`);
});
