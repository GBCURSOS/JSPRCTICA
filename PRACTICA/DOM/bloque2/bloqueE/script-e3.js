// Bloque E3: Aplicación de Usuarios
// Objetivo: Organizar usuarios por sexo usando Random User API

// Referencias a elementos del DOM
const userCountInput = document.getElementById("user-count");
const fetchUsersBtn = document.getElementById("fetch-users-btn");
const loadingContainer = document.getElementById("loading-container");
const statsSection = document.getElementById("stats-section");
const usersSection = document.getElementById("users-section");
const jsonSection = document.getElementById("json-section");
const usersGrid = document.getElementById("users-grid");
const jsonDisplay = document.getElementById("json-display");
const copyJsonBtn = document.getElementById("copy-json-btn");
const tabButtons = document.querySelectorAll(".tab-btn");

// Contadores
const maleCountEl = document.getElementById("male-count");
const femaleCountEl = document.getElementById("female-count");
const totalCountEl = document.getElementById("total-count");

// Variables globales
let allUsers = [];
let currentFilter = "all";

// URL base de la API
const RANDOM_USER_API = "https://randomuser.me/api/";

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  console.log("👥 Bloque E3: Aplicación de Usuarios");
  console.log("🌐 Random User API:", RANDOM_USER_API);

  // Event listeners
  fetchUsersBtn.addEventListener("click", fetchUsers);
  copyJsonBtn.addEventListener("click", copyJsonToClipboard);

  // Event listeners para las pestañas
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const gender = this.getAttribute("data-gender");
      filterUsers(gender);
    });
  });

  // Event listener para Enter en el input
  userCountInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      fetchUsers();
    }
  });
});

/**
 * Obtiene usuarios de la API Random User
 */
async function fetchUsers() {
  const userCount = parseInt(userCountInput.value) || 10;

  // Validar rango
  if (userCount < 1 || userCount > 50) {
    alert("⚠️ El número de usuarios debe estar entre 1 y 50");
    return;
  }

  try {
    // Mostrar loading
    showLoading(true);
    hideResults();

    const url = `${RANDOM_USER_API}?results=${userCount}&inc=name,gender,email,picture,location,dob`;

    console.log("📤 Obteniendo usuarios:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("📥 Usuarios obtenidos:", data);

    // Procesar y mostrar usuarios
    allUsers = data.results;
    processUsers(allUsers);
    showResults();
  } catch (error) {
    console.error("❌ Error al obtener usuarios:", error);
    alert("❌ Error al obtener usuarios: " + error.message);
  } finally {
    showLoading(false);
  }
}

/**
 * Procesa los usuarios y actualiza las estadísticas
 */
function processUsers(users) {
  // Contar por género
  const maleUsers = users.filter((user) => user.gender === "male");
  const femaleUsers = users.filter((user) => user.gender === "female");

  // Actualizar contadores
  maleCountEl.textContent = maleUsers.length;
  femaleCountEl.textContent = femaleUsers.length;
  totalCountEl.textContent = users.length;

  // Mostrar usuarios
  displayUsers(users);

  // Mostrar JSON
  displayJson(users);

  console.log(
    `📊 Estadísticas: ${maleUsers.length} hombres, ${femaleUsers.length} mujeres, ${users.length} total`
  );
}

/**
 * Muestra los usuarios en la grilla
 */
function displayUsers(users) {
  usersGrid.innerHTML = "";

  users.forEach((user) => {
    const userCard = createUserCard(user);
    usersGrid.appendChild(userCard);
  });
}

/**
 * Crea una tarjeta de usuario
 */
function createUserCard(user) {
  const card = document.createElement("div");
  card.className = `user-card ${user.gender}`;

  const fullName = `${user.name.first} ${user.name.last}`;
  const age = user.dob.age;
  const location = `${user.location.city}, ${user.location.country}`;

  card.innerHTML = `
        <div class="user-avatar">
            <img src="${user.picture.large}" alt="${fullName}" loading="lazy">
            <div class="gender-badge ${user.gender}">
                ${user.gender === "male" ? "👨" : "👩"}
            </div>
        </div>
        <div class="user-info">
            <h3 class="user-name">${fullName}</h3>
            <p class="user-age">📅 ${age} años</p>
            <p class="user-email">📧 ${user.email}</p>
            <p class="user-location">📍 ${location}</p>
        </div>
    `;

  return card;
}

/**
 * Filtra usuarios por género
 */
function filterUsers(gender) {
  currentFilter = gender;

  // Actualizar pestañas activas
  tabButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-gender") === gender) {
      btn.classList.add("active");
    }
  });

  // Filtrar usuarios
  let filteredUsers;
  if (gender === "all") {
    filteredUsers = allUsers;
  } else {
    filteredUsers = allUsers.filter((user) => user.gender === gender);
  }

  displayUsers(filteredUsers);

  console.log(
    `🔍 Filtro aplicado: ${gender}, mostrando ${filteredUsers.length} usuarios`
  );
}

/**
 * Muestra el JSON de los datos
 */
function displayJson(users) {
  const jsonString = JSON.stringify(users, null, 2);
  jsonDisplay.textContent = jsonString;
}

/**
 * Copia el JSON al portapapeles
 */
async function copyJsonToClipboard() {
  try {
    const jsonString = JSON.stringify(allUsers, null, 2);
    await navigator.clipboard.writeText(jsonString);

    // Feedback visual
    const originalText = copyJsonBtn.textContent;
    copyJsonBtn.textContent = "✅ Copiado";
    setTimeout(() => {
      copyJsonBtn.textContent = originalText;
    }, 2000);

    console.log("📋 JSON copiado al portapapeles");
  } catch (error) {
    console.error("Error al copiar:", error);
    alert("❌ Error al copiar al portapapeles");
  }
}

/**
 * Muestra/oculta el indicador de carga
 */
function showLoading(show) {
  loadingContainer.style.display = show ? "block" : "none";
  fetchUsersBtn.disabled = show;
  fetchUsersBtn.textContent = show ? "⏳ Cargando..." : "👥 Obtener Usuarios";
}

/**
 * Muestra las secciones de resultados
 */
function showResults() {
  statsSection.style.display = "block";
  usersSection.style.display = "block";
  jsonSection.style.display = "block";

  // Scroll suave hacia las estadísticas
  statsSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/**
 * Oculta las secciones de resultados
 */
function hideResults() {
  statsSection.style.display = "none";
  usersSection.style.display = "none";
  jsonSection.style.display = "none";
}

// Información de la API en consola
console.log("🌐 Random User API - Funcionalidades:");
console.log("• Genera usuarios aleatorios realistas");
console.log("• Incluye: nombre, género, email, foto, ubicación, edad");
console.log("• Hasta 5000 usuarios por request");
console.log("📖 Documentación: https://randomuser.me/");
