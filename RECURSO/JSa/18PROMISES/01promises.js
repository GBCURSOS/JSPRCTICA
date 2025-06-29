
// Función para hacer una solicitud GET a la API
async function obtenerDatos(url) {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error(`HTTP error! status: ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
}

// Función para hacer una solicitud POST a la API
async function crearPublicacion(url, datos) {
  try {
    const respuesta = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!respuesta.ok) {
      throw new Error(`HTTP error! status: ${respuesta.status}`);
    }
    const datosRespuesta = await respuesta.json();
    return datosRespuesta;
  } catch (error) {
    console.error("Error al crear la publicación:", error);
    throw error;
  }
}

// Ejemplo de uso de las funciones
async function ejemploAPI() {
  try {
    // Obtener una lista de usuarios
    console.log("Obteniendo lista de usuarios...");
    const usuarios = await obtenerDatos('https://jsonplaceholder.typicode.com/users');
    console.log("Usuarios obtenidos:", usuarios.slice(0, 3)); // Mostramos solo los primeros 3 usuarios

    // Obtener los posts del primer usuario
    const primerUsuarioId = usuarios[0].id;
    console.log(`Obteniendo posts del usuario con ID ${primerUsuarioId}...`);
    const posts = await obtenerDatos(`https://jsonplaceholder.typicode.com/posts?userId=${primerUsuarioId}`);
    console.log("Posts del usuario:", posts.slice(0, 2)); // Mostramos solo los primeros 2 posts

    // Crear una nueva publicación
    console.log("Creando una nueva publicación...");
    const nuevaPublicacion = {
      title: 'Nuevo Post',
      body: 'Este es el contenido del nuevo post',
      userId: primerUsuarioId
    };
    const publicacionCreada = await crearPublicacion('https://jsonplaceholder.typicode.com/posts', nuevaPublicacion);
    console.log("Nueva publicación creada:", publicacionCreada);

    // Demostración de Promise.all
    console.log("Obteniendo datos de usuario, posts y comentarios simultáneamente...");
    const [usuario, postUsuario, comentarios] = await Promise.all([
      obtenerDatos(`https://jsonplaceholder.typicode.com/users/${primerUsuarioId}`),
      obtenerDatos(`https://jsonplaceholder.typicode.com/posts?userId=${primerUsuarioId}`),
      obtenerDatos(`https://jsonplaceholder.typicode.com/comments?postId=1`)
    ]);
    console.log("Datos obtenidos simultáneamente:");
    console.log("- Usuario:", usuario.name);
    console.log("- Número de posts del usuario:", postUsuario.length);
    console.log("- Número de comentarios en el primer post:", comentarios.length);

  } catch (error) {
    console.error("Error en el ejemplo de API:", error);
  }
}

// Ejecutar el ejemplo
ejemploAPI();