// ========================================
// DOM BLOQUE B2 - CLASES Y TEMAS
// Hora 4: Clases CSS + Sistema de Temas
// ========================================

// Variables globales
let codeDisplay;
let currentTheme = "light";

// Función para mostrar código ejecutado
function showCode(code) {
  if (codeDisplay) {
    codeDisplay.textContent = code;
  }
}

// ========================================
// SISTEMA DE TEMAS
// ========================================

function initThemeSystem() {
  
  // Detectar preferencia del sistema
  // Detectar tema del sistema
  // window.matchMedia("(prefers-color-scheme: dark)").matches;

  // // Detectar ancho de pantalla
  // window.matchMedia("(max-width: 768px)").matches;

  // // Detectar orientación
  // window.matchMedia("(orientation: portrait)").matches;

  // // Ver el objeto completo
  // window.matchMedia("(prefers-color-scheme: dark)");

  // Responsive breakpoints
  // const isMobile = window.matchMedia("(max-width: 768px)").matches;
  // const isTablet = window.matchMedia(
  //   "(min-width: 769px) and (max-width: 1024px)"
  // ).matches;

  // // Preferencias de movimiento
  // const prefersReducedMotion = window.matchMedia(
  //   "(prefers-reduced-motion: reduce)"
  // ).matches;

  // // Alto contraste
  // const prefersHighContrast = window.matchMedia(
  //   "(prefers-contrast: high)"
  // ).matches;

  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  document.getElementById("system-preference").textContent = systemPreference;

  // Cargar tema guardado o usar el del sistema
  const savedTheme = localStorage.getItem("theme") || "auto";
  applyTheme(savedTheme);

  // Event listeners para botones de tema
  document.getElementById("btn-light").addEventListener("click", () => {
    applyTheme("light");
    showCode(`
// Cambiar a modo claro
localStorage.setItem('theme', 'light');
document.documentElement.setAttribute('data-theme', 'light');
        `);
  });

  document.getElementById("btn-dark").addEventListener("click", () => {
    applyTheme("dark");
    showCode(`
// Cambiar a modo oscuro
localStorage.setItem('theme', 'dark');
document.documentElement.setAttribute('data-theme', 'dark');
        `);
  });

  document.getElementById("btn-auto").addEventListener("click", () => {
    applyTheme("auto");
    showCode(`
// Cambiar a modo automático
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
localStorage.setItem('theme', 'auto');
document.documentElement.setAttribute('data-theme', systemPreference);
        `);
  });

  // Escuchar cambios en preferencia del sistema
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newPreference = e.matches ? "dark" : "light";
      document.getElementById("system-preference").textContent = newPreference;

      if (localStorage.getItem("theme") === "auto") {
        document.documentElement.setAttribute("data-theme", newPreference);
        updateThemeDisplay(newPreference);
      }
    });
}

function applyTheme(theme) {
  localStorage.setItem("theme", theme);

  let actualTheme;
  if (theme === "auto") {
    actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } else {
    actualTheme = theme;
  }

  document.documentElement.setAttribute("data-theme", actualTheme);
  updateThemeDisplay(actualTheme);
  updateThemeButtons(theme);
}

function updateThemeDisplay(theme) {
  currentTheme = theme;
  document.getElementById("current-theme").textContent = theme;
}

function updateThemeButtons(selectedTheme) {
  // Remover clase active de todos los botones
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Agregar clase active al botón seleccionado
  const activeBtn = document.getElementById(`btn-${selectedTheme}`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

// ========================================
// SECCIÓN 3: Manipular clases CSS
// ========================================

function initClassSection() {
  const classDemo = document.getElementById("class-demo");
  const card = classDemo.querySelector(".card");
  const statusSpan = card.querySelector(".status");
  const currentClassesSpan = document.getElementById("current-classes");

  const btnAddSuccess = document.getElementById("btn-add-success");
  const btnAddWarning = document.getElementById("btn-add-warning");
  const btnAddError = document.getElementById("btn-add-error");
  const btnToggleHighlight = document.getElementById("btn-toggle-highlight");
  const btnRemoveAll = document.getElementById("btn-remove-all");
  const btnShowClasses = document.getElementById("btn-show-classes");

  function updateClassDisplay() {
    const classes = Array.from(card.classList).join(" ");
    currentClassesSpan.textContent = classes;
  }

  function updateStatus(newStatus) {
    statusSpan.textContent = `Estado: ${newStatus}`;
  }

  btnAddSuccess.addEventListener("click", () => {
    card.classList.remove("warning", "error");
    card.classList.add("success");
    updateStatus("Éxito");
    updateClassDisplay();

    showCode(`
// Agregar clase de éxito
const elemento = document.querySelector('.card');
elemento.classList.remove('warning', 'error');
elemento.classList.add('success');
        `);
  });

  btnAddWarning.addEventListener("click", () => {
    card.classList.remove("success", "error");
    card.classList.add("warning");
    updateStatus("Advertencia");
    updateClassDisplay();

    showCode(`
// Agregar clase de advertencia
const elemento = document.querySelector('.card');
elemento.classList.remove('success', 'error');
elemento.classList.add('warning');
        `);
  });

  btnAddError.addEventListener("click", () => {
    card.classList.remove("success", "warning");
    card.classList.add("error");
    updateStatus("Error");
    updateClassDisplay();

    showCode(`
// Agregar clase de error
const elemento = document.querySelector('.card');
elemento.classList.remove('success', 'warning');
elemento.classList.add('error');
        `);
  });

  btnToggleHighlight.addEventListener("click", () => {
    card.classList.toggle("highlight");
    updateClassDisplay();

    const isHighlighted = card.classList.contains("highlight");
    showCode(`
// Toggle clase highlight (activar/desactivar)
const elemento = document.querySelector('.card');
elemento.classList.toggle('highlight');
// Resultado: ${isHighlighted ? "Clase agregada" : "Clase removida"}
        `);
  });

  btnRemoveAll.addEventListener("click", () => {
    card.className = "card";
    updateStatus("Normal");
    updateClassDisplay();

    showCode(`
// Limpiar todas las clases excepto la base
const elemento = document.querySelector('.card');
elemento.className = 'card';
        `);
  });

  btnShowClasses.addEventListener("click", () => {
    const classes = Array.from(card.classList);
    alert(`Clases actuales:\\n${classes.join("\\n")}`);

    showCode(`
// Mostrar todas las clases del elemento
const elemento = document.querySelector('.card');
const classes = Array.from(elemento.classList);
console.log('Clases:', classes);
        `);
  });

  // Inicializar display
  updateClassDisplay();
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar referencia al panel de código
  codeDisplay = document.getElementById("code-display");

  // Inicializar secciones
  initThemeSystem();
  initClassSection();

  // Mensaje inicial
  showCode(`
// DOM Bloque B2 - Clases y Temas
// Hora 4: Manipulación de clases CSS + Sistema de temas
console.log('¡Bloque B2 inicializado!');
    `);

  console.log("🎨 DOM Bloque B2 inicializado correctamente");
  console.log("Funcionalidades cargadas:", {
    "Manipulación de clases CSS": "✅",
    "Sistema de temas": "✅",
  });
});
