// ========================================
// BLOQUE D3 - MANIPULAR OBJETOS Y ARRAYS JSON
// ========================================

// Referencias globales
let codeDisplay;
let jsonData = [];

// Utilidad para mostrar código
function showCode(code) {
  if (codeDisplay) {
    codeDisplay.textContent = code;
  }
}

// Utilidad para notificaciones
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${
          type === "success"
            ? "#10b981"
            : type === "error"
            ? "#ef4444"
            : "#f59e0b"
        };
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: all 0.3s ease;
        z-index: 1000;
        font-weight: 600;
        max-width: 300px;
    `;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Renderizar lista de usuarios en el DOM
function renderUserList(users) {
  const userList = document.getElementById("user-list");
  if (!users || users.length === 0) {
    userList.innerHTML = "<p>No hay usuarios para mostrar.</p>";
    return;
  }
  userList.innerHTML = users
    .map(
      (user) => `
        <div class="user-card">
            <strong>${user.nombre}</strong> <span>(${user.edad} años)</span><br>
            <span>Email:</span> ${user.email}<br>
            <span>Activo:</span> ${user.activo ? "✅" : "❌"}<br>
            <span>Skills:</span> ${user.skills.join(", ")}
        </div>
    `
    )
    .join("");
}

// Filtrar usuarios activos
function filterActiveUsers() {
  const activos = jsonData.filter((u) => u.activo);
  renderUserList(activos);
  showCode(`// Filtrar usuarios activos
const activos = jsonData.filter(u => u.activo);
renderUserList(activos);`);
  showNotification("Mostrando solo usuarios activos", "success");
}

// Buscar usuario por nombre
function searchUser() {
  const searchInput = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();
  if (!searchInput) {
    renderUserList(jsonData);
    showNotification("Mostrando todos los usuarios", "success");
    return;
  }
  const encontrados = jsonData.filter((u) =>
    u.nombre.toLowerCase().includes(searchInput)
  );
  renderUserList(encontrados);
  showCode(`// Buscar usuario por nombre
const encontrados = jsonData.filter(u => u.nombre.toLowerCase().includes('${searchInput}'));
renderUserList(encontrados);`);
  showNotification(`Búsqueda: "${searchInput}"`, "success");
}

// Editar usuario (simulación)
function editUser(index) {
  const user = jsonData[index];
  if (!user) return;
  const nuevoNombre = prompt("Nuevo nombre:", user.nombre);
  if (nuevoNombre) {
    user.nombre = nuevoNombre;
    renderUserList(jsonData);
    showCode(`// Editar usuario
jsonData[${index}].nombre = "${nuevoNombre}";
renderUserList(jsonData);`);
    showNotification("Usuario editado", "success");
  }
}

// Inicializar datos de ejemplo
function loadExampleData() {
  jsonData = [
    {
      nombre: "Ana García",
      edad: 28,
      email: "ana@email.com",
      activo: true,
      skills: ["JavaScript", "React"],
    },
    {
      nombre: "Luis Pérez",
      edad: 35,
      email: "luis@email.com",
      activo: false,
      skills: ["Python", "Django"],
    },
    {
      nombre: "María López",
      edad: 22,
      email: "maria@email.com",
      activo: true,
      skills: ["HTML", "CSS", "JS"],
    },
  ];
  renderUserList(jsonData);
  showCode(`// Datos de ejemplo cargados
jsonData = [...];
renderUserList(jsonData);`);
  showNotification("Datos de ejemplo cargados", "success");
}

// Event listeners
function initD3Events() {
  document
    .getElementById("filter-active")
    .addEventListener("click", filterActiveUsers);
  document.getElementById("search-input").addEventListener("input", searchUser);
  document
    .getElementById("load-example")
    .addEventListener("click", loadExampleData);
  // Editar usuario al hacer doble click en la tarjeta
  document
    .getElementById("user-list")
    .addEventListener("dblclick", function (e) {
      const cards = Array.from(document.querySelectorAll(".user-card"));
      const idx = cards.indexOf(e.target.closest(".user-card"));
      if (idx >= 0) editUser(idx);
    });
}

// Inicialización
window.addEventListener("DOMContentLoaded", () => {
  codeDisplay = document.getElementById("code-display");
  loadExampleData();
  initD3Events();
  showCode(`// Manipulación de objetos y arrays JSON
// - Filtrar
// - Buscar
// - Editar
// - Renderizar en el DOM`);
});
