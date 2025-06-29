// Archivo: main.js
console.log("Script principal iniciado");

// Crear un nuevo Web Worker
const worker = new Worker("worker.js");

// Enviar un mensaje al worker
worker.postMessage({ action: "start", data: 1000000000 });

// Escuchar mensajes del worker
worker.onmessage = function (event) {
  console.log("Mensaje recibido del worker:", event.data);
};

// Manejar errores del worker
worker.onerror = function (error) {
  console.error("Error en el worker:", error.message);
};

console.log("Script principal continúa ejecutándose");

// Archivo: worker.js
self.onmessage = function (event) {
  if (event.data.action === "start") {
    const result = heavyComputation(event.data.data);
    self.postMessage({ action: "result", data: result });
  }
};

function heavyComputation(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
