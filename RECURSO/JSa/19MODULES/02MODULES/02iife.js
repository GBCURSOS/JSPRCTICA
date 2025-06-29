// Immediately Invoked Function Expression (IIFE)

var miModulo = (function () {
  // Variables privadas
  var contador = 0;

  // Métodos públicos
  return {
    incrementar: function () {
      contador++;
    },
    obtenerContador: function () {
      return contador;
    },
  };
})();

// Uso
miModulo.incrementar();
console.log(miModulo.obtenerContador()); // 1
console.log(miModulo.contador); // undefined (es privada)
