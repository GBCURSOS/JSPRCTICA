// ========================================
// DOM BLOQUE B1 - CONTENIDO Y ESTILOS
// innerHTML vs textContent + Estilos Dinámicos
// ========================================

// Variable global para mostrar código
let codeDisplay;

// Función para mostrar código ejecutado
function showCode(code) {
  if (codeDisplay) {
    codeDisplay.textContent = code;
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
      "<em>Nuevo texto</em> &nbspcon&nbsp <strong>etiquetas HTML</strong>";

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
    console.log("Tamaño de fuente:", e.target.value);
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
    console.log("Borde redondeado:", e.target.value);
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
setTimeout(() => {
    elemento.classList.remove('animating');
}, 600);
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
// INICIALIZACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar referencia al panel de código
  codeDisplay = document.getElementById("code-display");

  // Inicializar secciones
  initContentSection();
  initStyleSection();

  // Mensaje inicial
  showCode(`
// DOM Bloque B1 - Contenido y Estilos
// Hora 3: innerHTML vs textContent + Estilos Dinámicos
console.log('¡Bloque B1 inicializado!');
    `);

  console.log("📝 DOM Bloque B1 inicializado correctamente");
  console.log("Funcionalidades cargadas:", {
    "innerHTML vs textContent": "✅",
    "Estilos dinámicos": "✅",
  });
});
