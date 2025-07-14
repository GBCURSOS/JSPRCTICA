// Bloque E2: Fetch API - Países del Mundo
// Objetivo: Explorar la API REST Countries y visualizar JSON

// Referencias a elementos del DOM
const endpointSelect = document.getElementById("endpoint-select");
const customEndpoint = document.getElementById("custom-endpoint");
const fetchBtn = document.getElementById("fetch-btn");
const copyBtn = document.getElementById("copy-btn");
const currentUrl = document.getElementById("current-url");
const requestStatus = document.getElementById("request-status");
const requestTime = document.getElementById("request-time");
const jsonDisplay = document.getElementById("json-display");

// Nuevos elementos para explorar campos
const fieldInput = document.getElementById("field-input");
const fieldPath = document.getElementById("field-path");
const fieldResult = document.getElementById("field-result");
const examples = document.querySelectorAll(".example");

// URL base de la API
const BASE_URL = "https://restcountries.com/v3.1/";

// Variable para almacenar el JSON actual
let currentJsonData = null;

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  console.log("🌍 Bloque E2: Fetch API - Países del Mundo");
  console.log("📡 API Base URL:", BASE_URL);

  // Event listeners
  fetchBtn.addEventListener("click", handleFetchRequest);
  copyBtn.addEventListener("click", copyJsonToClipboard);

  // Actualizar URL cuando cambia el select
  endpointSelect.addEventListener("change", updateCurrentUrl);
  customEndpoint.addEventListener("input", updateCurrentUrl);

  // Event listeners para el explorador de campos
  fieldInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      exploreField();
    }
  });

  // Event listeners para los ejemplos clicables
  examples.forEach((example) => {
    example.addEventListener("click", function () {
      const field = this.getAttribute("data-field");
      fieldInput.value = field;
      exploreField();
    });
  });

  // Inicializar URL
  updateCurrentUrl();
});

/**
 * Actualiza la URL mostrada basada en la selección actual
 */
function updateCurrentUrl() {
  let endpoint = "";

  if (customEndpoint.value.trim()) {
    endpoint = customEndpoint.value.trim();
  } else {
    endpoint = endpointSelect.value;
  }

  const fullUrl = BASE_URL + endpoint;
  currentUrl.textContent = fullUrl;
  currentUrl.title = fullUrl;
}

/**
 * Maneja el request a la API
 */
async function handleFetchRequest() {
  const startTime = Date.now();

  try {
    // Obtener endpoint
    let endpoint = "";
    if (customEndpoint.value.trim()) {
      endpoint = customEndpoint.value.trim();
    } else {
      endpoint = endpointSelect.value;
    }

    const url = BASE_URL + endpoint;

    // Actualizar UI - estado de carga
    updateRequestStatus("🔄 Cargando...", "loading");
    fetchBtn.disabled = true;
    fetchBtn.textContent = "🔄 Cargando...";

    console.log("📤 Haciendo request a:", url);

    // Hacer el fetch
    const response = await fetch(url);
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    console.log("📥 Response recibida:", response.status, response.statusText);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    // Parsear JSON
    const data = await response.json();
    currentJsonData = data;

    // Mostrar resultado
    displayJsonResponse(data);
    updateRequestStatus(`✅ Éxito (${responseTime}ms)`, "success");
    requestTime.textContent = `${responseTime}ms`;

    console.log("✅ Request completado exitosamente");
  } catch (error) {
    console.error("❌ Error en el request:", error);

    const endTime = Date.now();
    const responseTime = endTime - startTime;

    // Mostrar error
    displayError(error);
    updateRequestStatus(`❌ Error (${responseTime}ms)`, "error");
    requestTime.textContent = `${responseTime}ms`;
  } finally {
    // Restaurar botón
    fetchBtn.disabled = false;
    fetchBtn.textContent = "🌐 Hacer Request";
  }
}

/**
 * Muestra la respuesta JSON en el contenedor
 */
function displayJsonResponse(data) {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    jsonDisplay.textContent = jsonString;
    jsonDisplay.className = "json-display success";

    // Scroll hacia la respuesta
    document.querySelector(".response-section").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } catch (error) {
    console.error("Error al mostrar JSON:", error);
    displayError(new Error("Error al parsear la respuesta JSON"));
  }
}

/**
 * Muestra un error en el contenedor de respuesta
 */
function displayError(error) {
  const errorResponse = {
    error: true,
    message: error.message,
    timestamp: new Date().toISOString(),
    tip: "Verifica el endpoint o tu conexión a internet",
  };

  const jsonString = JSON.stringify(errorResponse, null, 2);
  jsonDisplay.textContent = jsonString;
  jsonDisplay.className = "json-display error";
  currentJsonData = errorResponse;
}

/**
 * Actualiza el estado del request
 */
function updateRequestStatus(status, type) {
  requestStatus.textContent = status;
  requestStatus.className = `status-${type}`;
}

/**
 * Copia el JSON actual al portapapeles
 */
async function copyJsonToClipboard() {
  if (!currentJsonData) {
    alert("⚠️ No hay datos para copiar");
    return;
  }

  try {
    const jsonString = JSON.stringify(currentJsonData, null, 2);
    await navigator.clipboard.writeText(jsonString);

    // Feedback visual
    const originalText = copyBtn.textContent;
    copyBtn.textContent = "✅";
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 1000);

    console.log("📋 JSON copiado al portapapeles");
  } catch (error) {
    console.error("Error al copiar:", error);
    alert("❌ Error al copiar al portapapeles");
  }
}

/**
 * Explora un campo específico del JSON actual
 */
function exploreField() {
  const fieldPath = fieldInput.value.trim();

  if (!fieldPath) {
    showFieldResult("⚠️ Escribe un campo para explorar", "warning");
    return;
  }

  if (!currentJsonData) {
    showFieldResult("⚠️ Primero haz un request para obtener datos", "warning");
    return;
  }

  try {
    console.log(`🔍 Explorando campo: ${fieldPath}`);

    // Evaluar el campo en el JSON
    const result = getNestedValue(currentJsonData, fieldPath);

    if (result === undefined) {
      showFieldResult("❌ Campo no encontrado", "error");
      return;
    }

    // Mostrar el resultado
    showFieldResult(result, "success");

    // Actualizar el path mostrado
    document.getElementById("field-path").textContent = fieldPath;

    console.log(`✅ Campo encontrado:`, result);
  } catch (error) {
    console.error("❌ Error al explorar campo:", error);
    showFieldResult("❌ Error en la sintaxis del campo", "error");
  }
}

/**
 * Obtiene un valor anidado del objeto usando notación de punto y corchetes
 */
function getNestedValue(obj, path) {
  try {
    // Si el objeto es un array, tomar el primer elemento para la exploración
    const data = Array.isArray(obj) ? obj[0] : obj;

    if (!data) return undefined;

    // Dividir el path y evaluar paso a paso
    const pathParts = path.split(".");
    let current = data;

    for (let part of pathParts) {
      // Manejar arrays con índices [0], [1], etc.
      if (part.includes("[") && part.includes("]")) {
        const propName = part.substring(0, part.indexOf("["));
        const indexMatch = part.match(/\[(\d+)\]/);

        if (propName) {
          current = current[propName];
        }

        if (indexMatch && current && Array.isArray(current)) {
          const index = parseInt(indexMatch[1]);
          current = current[index];
        }
      } else {
        current = current[part];
      }

      if (current === undefined) break;
    }

    return current;
  } catch (error) {
    console.error("Error al acceder al campo:", error);
    return undefined;
  }
}

/**
 * Muestra el resultado del campo explorado
 */
function showFieldResult(result, type) {
  const resultElement = document.getElementById("field-result");

  // Formatear el resultado según su tipo
  let displayValue;

  if (typeof result === "object" && result !== null) {
    displayValue = JSON.stringify(result, null, 2);
    resultElement.innerHTML = `<pre>${displayValue}</pre>`;
  } else if (typeof result === "string" && result.startsWith("http")) {
    // Si es una URL, mostrar como enlace
    displayValue = result;
    resultElement.innerHTML = `<a href="${result}" target="_blank" rel="noopener">${result}</a>`;
  } else {
    displayValue = String(result);
    resultElement.textContent = displayValue;
  }

  // Aplicar clase según el tipo
  resultElement.className = `field-result ${type}`;

  // Scroll suave hacia el resultado
  document.querySelector(".field-explorer-section").scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}

// Función utilitaria para logging
function logApiInfo() {
  console.log("🌍 REST Countries API - Endpoints disponibles:");
  console.log("• /name/{name} - Buscar por nombre");
  console.log("• /alpha/{code} - Buscar por código de país");
  console.log("• /region/{region} - Filtrar por región");
  console.log("📖 Documentación: https://restcountries.com/");
}

// Mostrar información de la API en consola
logApiInfo();
