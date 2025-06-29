/*

Las generator functions (funciones generadoras) son un tipo especial de función en JavaScript que permite pausar y reanudar su ejecución. Fueron introducidas en ECMAScript 6 (ES6) y ofrecen una forma poderosa de trabajar con iteraciones y flujos de datos.

Ahora, expliquemos qué son las generator functions y para qué se usan:

Definición:

Una generator function se define usando la sintaxis function*.
Usa la palabra clave yield para pausar la ejecución y producir un valor.


Características principales:

Pueden pausar y reanudar su ejecución.
Retornan un objeto generador que es iterable.
Mantienen su propio estado interno entre las llamadas.


Usos principales:
a) Iteración controlada:

Permiten crear secuencias de valores bajo demanda.
Útil para trabajar con grandes conjuntos de datos o secuencias infinitas.

b) Gestión de memoria eficiente:

Generan valores uno a la vez, en lugar de crear toda la secuencia en memoria.

c) Control de flujo:

Facilitan la implementación de máquinas de estado y flujos de control complejos.

d) Asincronía:

Pueden simplificar el código asíncrono, especialmente cuando se combinan con promises.

e) Generación de identificadores únicos:

Útiles para crear secuencias de IDs o tokens únicos.

f) Implementación de iteradores personalizados:

Permiten definir comportamientos de iteración específicos para objetos.


Ventajas:

Código más limpio y legible para ciertos tipos de problemas.
Mejor rendimiento en situaciones donde se necesita generar grandes secuencias.
Facilitan la creación de iteradores infinitos sin bloquear el hilo de ejecución.


Consideraciones:

La sintaxis puede ser confusa al principio.
No son adecuadas para todas las situaciones; su uso debe ser juicioso.

En resumen, las generator functions son una herramienta poderosa en JavaScript que ofrece control fino sobre iteraciones y flujos de datos. Son particularmente útiles en escenarios donde necesitas trabajar con secuencias largas o potencialmente infinitas de datos, o cuando quieres implementar un control de flujo más complejo en tu aplicación.

*/

/*
Explicación del código:

fetchPosts Generator Function:

Utiliza yield con fetch para obtener datos de JSONPlaceholder.
Usa otro yield para convertir la respuesta a JSON.
Utiliza yield* para producir cada post individualmente.


runGenerator Function:

Esta función auxiliar maneja la ejecución del generator.
Resuelve las promesas devueltas por fetch y response.json().
Maneja errores que puedan ocurrir durante la ejecución.


displayPosts Function:

Función asíncrona que utiliza el generator.
Muestra los títulos de los primeros 5 posts obtenidos.


Ejecución:

Llamamos a displayPosts() para ejecutar todo el proceso.



Este ejemplo demuestra cómo las generator functions pueden ser útiles para manejar operaciones asíncronas como peticiones fetch. Algunas ventajas de este enfoque:

Control de flujo: Podemos pausar y reanudar la ejecución en puntos específicos (después de fetch y después de response.json()).
Manejo de errores: Podemos manejar errores de forma más clara y centralizada.
Flexibilidad: Podemos procesar los resultados de manera iterativa, lo cual es útil para grandes conjuntos de datos.

Para ejecutar este código:

Cópialo en un archivo JavaScript.
Ejecútalo en un entorno que soporte ES6+ (como Node.js moderno o un navegador actualizado).
Verás los títulos de los primeros 5 posts de JSONPlaceholder en la consola.

*/

// Generator function para obtener posts de JSONPlaceholder
function* fetchPosts() {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = yield response.json();
        yield* posts; // Yield each post individually
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Función para ejecutar el generator
function runGenerator(generatorFunction) {
    return new Promise((resolve, reject) => {
        const generator = generatorFunction();

        function handleNext(value) {
            const next = generator.next(value);

            if (next.done) {
                resolve(next.value);
                return;
            }

            Promise.resolve(next.value)
                .then(handleNext)
                .catch(error => generator.throw(error));
        }

        handleNext();
    });
}

// Uso del generator
async function displayPosts() {
    const postGenerator = fetchPosts();
    let result = await runGenerator(fetchPosts);

    // Mostrar los primeros 5 posts
    for (let i = 0; i < 5; i++) {
        const post = postGenerator.next().value;
        if (post) {
            console.log(`Post ${post.id}: ${post.title}`);
        } else {
            break;
        }
    }
}

// Ejecutar el ejemplo
displayPosts();