// ========================================
// DOM BLOQUE B - MANIPULACIÓN AVANZADA
// Hora 3-4: innerHTML vs textContent + Estilos + Temas
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
// SISTEMA DE TEMAS (Funcionalidad principal)
// ========================================

function initThemeSystem() {
  // Detectar preferencia del sistema
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
  console.log("Botón activo:", activeBtn);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

// ========================================
// SECCIÓN 1: innerHTML vs textContent
// ========================================

function initContentSection() {
  const contentDemo = document.getElementById("content-demo");
  const textInput = document.getElementById("text-input");
  const btnInnerHTML = document.getElementById("btn-innerhtml");
  const btnTextContent = document.getElementById("btn-textcontent");
  const btnReset = document.getElementById("btn-reset");

  const originalContent = "<p>Contenido original con <strong>HTML</strong></p>";

  btnInnerHTML.addEventListener("click", () => {
    const inputValue = textInput.value;
    contentDemo.innerHTML = inputValue;

    showCode(`
// Usando innerHTML - Interpreta etiquetas HTML
const elemento = document.getElementById('content-demo');
elemento.innerHTML = '${inputValue}';
// Resultado: Las etiquetas HTML se convierten en elementos
        `);
  });

  btnTextContent.addEventListener("click", () => {
    const inputValue = textInput.value;
    contentDemo.textContent = inputValue;

    showCode(`
// Usando textContent - Solo texto plano
const elemento = document.getElementById('content-demo');
elemento.textContent = '${inputValue}';
// Resultado: Las etiquetas HTML se muestran como texto
        `);
  });

  btnReset.addEventListener("click", () => {
    contentDemo.innerHTML = originalContent;
    textInput.value =
      "<em>Nuevo texto</em> con <strong>etiquetas HTML</strong>";

    showCode(`
// Restablecer contenido original
const elemento = document.getElementById('content-demo');
elemento.innerHTML = '${originalContent}';
        `);
  });
}

// ========================================
// SECCIÓN 2: Modificar estilos dinámicamente
// ========================================

function initStyleSection() {
  const styleDemo = document.getElementById("style-demo");
  const colorPicker = document.getElementById("color-picker");
  const bgColorPicker = document.getElementById("bg-color-picker");
  const fontSizeRange = document.getElementById("font-size");
  const fontSizeDisplay = document.getElementById("font-size-display");
  const borderRadiusRange = document.getElementById("border-radius");
  const borderRadiusDisplay = document.getElementById("border-radius-display");
  const btnAnimate = document.getElementById("btn-animate");
  const btnResetStyles = document.getElementById("btn-reset-styles");

  // Valores iniciales
  const initialStyles = {
    color: "#333333",
    backgroundColor: "#f0f0f0",
    fontSize: "16px",
    borderRadius: "10px",
  };

  // Event listeners para controles de estilo
  colorPicker.addEventListener("input", (e) => {
    styleDemo.style.color = e.target.value;
    showCode(`
// Cambiar color de texto usando style.color
const elemento = document.getElementById('style-demo');
elemento.style.color = '${e.target.value}';
        `);
  });

  bgColorPicker.addEventListener("input", (e) => {
    styleDemo.style.backgroundColor = e.target.value;
    showCode(`
// Cambiar color de fondo usando style.backgroundColor
const elemento = document.getElementById('style-demo');
elemento.style.backgroundColor = '${e.target.value}';
        `);
  });

  fontSizeRange.addEventListener("input", (e) => {
    const size = e.target.value + "px";
    styleDemo.style.fontSize = size;
    fontSizeDisplay.textContent = size;
    showCode(`
// Cambiar tamaño de fuente usando style.fontSize
const elemento = document.getElementById('style-demo');
elemento.style.fontSize = '${size}';
        `);
  });

  borderRadiusRange.addEventListener("input", (e) => {
    const radius = e.target.value + "px";
    styleDemo.style.borderRadius = radius;
    borderRadiusDisplay.textContent = radius;
    showCode(`
// Cambiar borde redondeado usando style.borderRadius
const elemento = document.getElementById('style-demo');
elemento.style.borderRadius = '${radius}';
        `);
  });

  btnAnimate.addEventListener("click", () => {
    styleDemo.classList.add("animating");
    setTimeout(() => {
      styleDemo.classList.remove("animating");
    }, 600);

    showCode(`
// Animar elemento agregando clase CSS
const elemento = document.getElementById('style-demo');
elemento.classList.add('animating');
// La clase 'animating' tiene una animación CSS definida
        `);
  });

  btnResetStyles.addEventListener("click", () => {
    Object.assign(styleDemo.style, initialStyles);
    colorPicker.value = initialStyles.color;
    bgColorPicker.value = initialStyles.backgroundColor;
    fontSizeRange.value = "16";
    fontSizeDisplay.textContent = "16px";
    borderRadiusRange.value = "10";
    borderRadiusDisplay.textContent = "10px";

    showCode(`
// Restablecer estilos a valores iniciales
const elemento = document.getElementById('style-demo');
elemento.style.color = '${initialStyles.color}';
elemento.style.backgroundColor = '${initialStyles.backgroundColor}';
elemento.style.fontSize = '${initialStyles.fontSize}';
elemento.style.borderRadius = '${initialStyles.borderRadius}';
        `);
  });
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

  // Inicializar todas las secciones
  initThemeSystem();
  initContentSection();
  initStyleSection();
  initClassSection();

  // Mensaje inicial
  showCode(`
// DOM Bloque B - Manipulación Avanzada
// Interactúa con los elementos para ver el código JavaScript en acción
console.log('¡Bienvenido a la manipulación avanzada del DOM!');
    `);

  console.log("🎨 DOM Bloque B inicializado correctamente");
  console.log("Temas disponibles:", ["light", "dark", "auto"]);
  console.log("Funcionalidades cargadas:", {
    "innerHTML vs textContent": "✅",
    "Estilos dinámicos": "✅",
    "Manipulación de clases": "✅",
    "Sistema de temas": "✅",
  });
});
