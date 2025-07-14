// Ejemplo sencillo para explicar Promesas y async/await

// 1. PROMESA BÁSICA
// Una promesa que se resuelve después de 2 segundos
function promesaBasica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("¡La promesa se resolvió!");
    }, 2000);
  });
}

// Uso de la promesa con .then()
promesaBasica().then((mensaje) => {
  console.log("Promesa básica:", mensaje);
});

// 2. PROMESA CON ERROR
function promesaConError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Ocurrió un error en la promesa");
    }, 2500);
  });
}

promesaConError()
  .then((msg) => console.log(msg))
  .catch((err) => console.log("Error capturado:", err));

// 3. PROMESA ALEATORIA (puede resolver o rechazar)
// Esta promesa simula una operación que puede tener éxito o fallar
function promesaAleatoria() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5; // 50% de probabilidad
      if (exito) {
        resolve("¡La operación fue exitosa!");
      } else {
        reject("La operación falló. Intenta de nuevo.");
      }
    }, 3000);
  });
}

// Uso con .then() y .catch()
promesaAleatoria()
  .then((msg) => console.log("Promesa aleatoria (then):", msg))
  .catch((err) => console.log("Promesa aleatoria (catch):", err));


// 3. USO DE ASYNC/AWAIT
async function ejemploAsyncAwait() {
  try {
    const resultado = await promesaBasica();
    console.log("Async/ejemploAsyncAwait:", resultado);
  } catch (error) {
    console.log("Error en async/ejemploAsyncAwait:", error);
  }
}
ejemploAsyncAwait();

// 4. ASYNC/AWAIT CON ERROR
async function ejemploAsyncAwaitError() {
  try {
    const resultado = await promesaConError();
    console.log("Async/ejemploAsyncAwaitError:", resultado);
  } catch (error) {
    console.log("Error en async/ejemploAsyncAwaitError:", error);
  }
}
ejemploAsyncAwaitError();

// 5. PROMESA ALEATORIA (puede resolver o rechazar)
async function probarPromesaAleatoria() {
  try {
    const resultado = await promesaAleatoria();
    console.log("Promesa aleatoria (async/await):", resultado);
  } catch (error) {
    console.log("Promesa aleatoria (async/await, error):", error);
  }
}
probarPromesaAleatoria();
