// Función auxiliar para hacer peticiones
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

// 1. Introducción
async function ejemploIntroduccion() {
  try {
    const datos = await fetchData(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Introducción:", datos);
  } catch (error) {
    console.error("Error en Introducción:", error);
  }
}

// 2. Await y precedencia de operadores
async function ejemploPrecedencia() {
  try {
    // Correcto: await se aplica a toda la expresión
    const datos = await (
      await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();
    console.log("Precedencia:", datos);
  } catch (error) {
    console.error("Error en Precedencia:", error);
  }
}

// 3. Comparación entre funciones async y Promesas
// Con Promesas
function conPromesas() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log("Con Promesas:", data))
    .catch((error) => console.error("Error en Promesas:", error));
}

// Con async/await
async function conAsyncAwait() {
  try {
    const datos = await fetchData(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("Con Async/Await:", datos);
  } catch (error) {
    console.error("Error en Async/Await:", error);
  }
}

// 4. Bucles con async/await
async function ejemploBucles() {
  const ids = [1, 2, 3];

  // Secuencial
  console.log("Bucle Secuencial:");
  for (const id of ids) {
    const datos = await fetchData(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(datos.title);
  }

  // Paralelo
  console.log("Bucle Paralelo:");
  const promesas = ids.map((id) =>
    fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`)
  );
  const resultados = await Promise.all(promesas);
  resultados.forEach((datos) => console.log(datos.title));
}

// 5. Menos indentación
// Con Promesas (más indentación)
function conPromesasIndentado() {
  return fetchData("https://jsonplaceholder.typicode.com/posts/1").then(
    (post) => {
      return fetchData(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      ).then((user) => {
        return { post, user };
      });
    }
  );
}

// Con async/await (menos indentación)
async function conAsyncAwaitMenosIndentado() {
  const post = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  const user = await fetchData(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  return { post, user };
}

// 6. Operaciones asíncronas simultáneas (paralelas)
async function operacionesParalelas() {
  const [posts, todos] = await Promise.all([
    fetchData("https://jsonplaceholder.typicode.com/posts"),
    fetchData("https://jsonplaceholder.typicode.com/todos"),
  ]);

  console.log("Operaciones Paralelas:");
  console.log(`Número de posts: ${posts.length}`);
  console.log(`Número de todos: ${todos.length}`);
}

// 7. Iteradores Async: Básico
async function* generadorAsync() {
  for (let i = 1; i <= 3; i++) {
    yield await fetchData(`https://jsonplaceholder.typicode.com/posts/${i}`);
  }
}

async function usarGeneradorAsync() {
  console.log("Iterador Async:");
  for await (const post of generadorAsync()) {
    console.log(post.title);
  }
}

// 8. Cómo hacer que un iterador sea utilizable dentro de una función de callback async
function iteradorEnCallback() {
  const ids = [1, 2, 3][Symbol.iterator]();

  // Usando una IIFE async
  (async () => {
    for (const id of ids) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un retraso
      const post = await fetchData(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log("Iterador en Callback:", post.title);
    }
  })();
}

// Ejecutar ejemplos
async function ejecutarEjemplos() {
  await ejemploIntroduccion();
  await ejemploPrecedencia();
  await conPromesas();
  await conAsyncAwait();
  await ejemploBucles();
  const resultadoPromesas = await conPromesasIndentado();
  console.log("Resultado Promesas Indentado:", resultadoPromesas);
  const resultadoAsync = await conAsyncAwaitMenosIndentado();
  console.log("Resultado Async/Await Menos Indentado:", resultadoAsync);
  await operacionesParalelas();
  await usarGeneradorAsync();
  iteradorEnCallback();
}

ejecutarEjemplos().catch((error) => console.error("Error general:", error));
