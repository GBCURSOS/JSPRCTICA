/*
Este código incluye cuatro ejemplos que demuestran el uso de JSON con fetch y Web Storage:

Fetch de posts de JSONPlaceholder:

    Obtiene una lista de posts de una API de ejemplo.
    Muestra cómo hacer una solicitud GET simple y procesar la respuesta JSON.


Fetch de datos de usuario de GitHub:

    Permite buscar información de un usuario de GitHub.
    Demuestra cómo usar parámetros en la URL de la API.


Fetch de datos de clima:

    Obtiene datos del clima para una ciudad especificada.
    Utiliza la API de OpenWeatherMap (requiere una API key).
    Muestra cómo manejar APIs que requieren autenticación.


JSON con Web Storage:

    Implementa una lista de favoritos usando localStorage.
    Demuestra cómo almacenar y recuperar datos JSON en el almacenamiento local del navegador.

Para usar este código:

    Copia y pega el código en un archivo HTML.
    Para el ejemplo del clima, necesitarás registrarte en OpenWeatherMap y obtener una API key gratuita. Reemplaza 'TU_API_KEY' con tu clave real.
    Abre el archivo en un navegador web y prueba cada ejemplo.

Notas importantes:

    Estos ejemplos usan APIs públicas que pueden tener límites de uso.
    El ejemplo del clima requiere una API key válida de OpenWeatherMap.
    Asegúrate de tener una conexión a Internet para que los ejemplos de fetch funcionen.
    El ejemplo de Web Storage funciona localmente en tu navegador y no requiere conexión a Internet.

*/

// Ejemplo 1: Fetch de posts de JSONPlaceholder
function fetchPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((response) => response.json())
    .then((posts) => {
      document.getElementById("postsOutput").textContent = JSON.stringify(
        posts,
        null,
        2
      );
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("postsOutput").textContent =
        "Error al obtener los posts";
    });
}

// Ejemplo 2: Fetch de datos de usuario de GitHub
function fetchGithubUser() {
  const username = document.getElementById("githubUsername").value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((userData) => {
      document.getElementById("githubOutput").textContent = JSON.stringify(
        userData,
        null,
        2
      );
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("githubOutput").textContent =
        "Error al obtener los datos del usuario";
    });
}

// Ejemplo 3: Fetch de datos de clima
function fetchWeather() {
  const city = document.getElementById("cityName").value;
  const apiKey = "TU_API_KEY"; // Reemplaza con tu API key de OpenWeatherMap
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      document.getElementById("weatherOutput").textContent = JSON.stringify(
        weatherData,
        null,
        2
      );
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("weatherOutput").textContent =
        "Error al obtener los datos del clima";
    });
}

// Ejemplo 4: JSON con Web Storage
function addFavorite() {
  const item = document.getElementById("favoriteItem").value;
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(item);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayFavorites();
}

function displayFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  document.getElementById("favoritesOutput").textContent = JSON.stringify(
    favorites,
    null,
    2
  );
}

function clearFavorites() {
  localStorage.removeItem("favorites");
  displayFavorites();
}
