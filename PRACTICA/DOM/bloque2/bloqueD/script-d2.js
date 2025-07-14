// ========================================
// BLOQUE D2 - JSON PARSE Y STRINGIFY
// Convertir entre JavaScript y JSON
// ========================================

// Variable global para mostrar código
let codeDisplay;

// Variables para el ciclo completo
let currentUser = null;
let originalData = null;

// Función para mostrar código ejecutado
function showCode(code) {
  if (codeDisplay) {
    codeDisplay.textContent = code;
  }
}

// Función para mostrar notificación
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

// ========================================
// SECCIÓN 1: JSON.PARSE()
// ========================================

function initJSONParse() {
  const parseInput = document.getElementById("parse-input");
  const parseBtn = document.getElementById("parse-btn");
  const parseResult = document.getElementById("parse-result");
  const propertyAccess = document.getElementById("property-access");

  function executeJSONParse() {
    const jsonText = parseInput.value.trim();

    if (!jsonText) {
      parseResult.innerHTML =
        '<p style="color: #f59e0b;">⚠️ Por favor, ingresa JSON para convertir</p>';
      parseResult.className = "result-display";
      return;
    }

    try {
      // Ejecutar JSON.parse()
      const parsedObject = JSON.parse(jsonText);

      // Mostrar el objeto resultante
      const formatted = JSON.stringify(parsedObject, null, 2);
      parseResult.innerHTML = `
                <div style="color: #10b981; font-weight: bold; margin-bottom: 10px;">
                    ✅ JSON.parse() EXITOSO
                </div>
                <div style="color: #065f46;">
                    Objeto JavaScript creado:
                </div>
                <pre style="background: #f3f4f6; color: #374151; padding: 10px; border-radius: 5px; margin-top: 10px; overflow-x: auto;">${formatted}</pre>
            `;
      parseResult.className = "result-display success";

      // Mostrar acceso a propiedades
      showPropertyAccess(parsedObject);

      showNotification("✅ JSON convertido a objeto JavaScript", "success");

      showCode(`
// JSON.parse() - Convertir JSON string a objeto JavaScript
const jsonString = \`${jsonText}\`;

try {
    const parsedObject = JSON.parse(jsonString);
    
    console.log('Objeto parseado:', parsedObject);
    console.log('Tipo:', typeof parsedObject);
    ${
      Array.isArray(parsedObject)
        ? `console.log('Es un array con ${parsedObject.length} elementos');`
        : typeof parsedObject === "object" && parsedObject !== null
        ? `console.log('Propiedades:', Object.keys(parsedObject));`
        : `console.log('Valor primitivo:', parsedObject);`
    }
    
    // Ahora puedes usar el objeto normalmente:
    ${generateAccessExamples(parsedObject)}
    
} catch (error) {
    console.error('Error al parsear JSON:', error.message);
}
            `);
    } catch (error) {
      parseResult.innerHTML = `
                <div style="color: #ef4444; font-weight: bold; margin-bottom: 10px;">
                    ❌ ERROR EN JSON.parse()
                </div>
                <div style="color: #7f1d1d;">
                    <strong>Error:</strong> ${error.message}
                </div>
                <div style="color: #7f1d1d; margin-top: 10px;">
                    <strong>Causa probable:</strong> JSON mal formateado
                </div>
            `;
      parseResult.className = "result-display error";

      propertyAccess.innerHTML =
        '<p style="color: #ef4444;">Error en JSON - No se puede acceder a propiedades</p>';

      showNotification("❌ Error: " + error.message, "error");

      showCode(`
// JSON.parse() - Error al convertir
const jsonString = \`${jsonText}\`;

try {
    const parsedObject = JSON.parse(jsonString);
} catch (error) {
    console.error('Error al parsear JSON:', error.message);
    
    // Error: ${error.message}
    // Revisa la sintaxis del JSON:
    // - ¿Faltan comillas en las claves?
    // - ¿Hay comas extras?
    // - ¿Está bien cerrado?
}
            `);
    }
  }

  function showPropertyAccess(obj) {
    if (typeof obj !== "object" || obj === null) {
      propertyAccess.innerHTML = `
                <p>Valor primitivo: <strong>${obj}</strong></p>
                <p>Tipo: <strong>${typeof obj}</strong></p>
            `;
      return;
    }

    let accessHTML =
      '<div style="color: #92400e; font-weight: bold; margin-bottom: 10px;">🎯 Acceso a propiedades:</div>';

    if (Array.isArray(obj)) {
      accessHTML += `<p><strong>obj.length</strong> → ${obj.length}</p>`;
      if (obj.length > 0) {
        accessHTML += `<p><strong>obj[0]</strong> → ${JSON.stringify(
          obj[0]
        )}</p>`;
        if (typeof obj[0] === "object" && obj[0] !== null) {
          const firstKeys = Object.keys(obj[0]).slice(0, 2);
          firstKeys.forEach((key) => {
            accessHTML += `<p><strong>obj[0].${key}</strong> → ${JSON.stringify(
              obj[0][key]
            )}</p>`;
          });
        }
      }
    } else {
      const keys = Object.keys(obj).slice(0, 5); // Mostrar máximo 5 propiedades
      keys.forEach((key) => {
        const value = obj[key];
        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          accessHTML += `<p><strong>obj.${key}</strong> → [Objeto con ${
            Object.keys(value).length
          } propiedades]</p>`;
          const subKeys = Object.keys(value).slice(0, 2);
          subKeys.forEach((subKey) => {
            accessHTML += `<p style="margin-left: 20px;"><strong>obj.${key}.${subKey}</strong> → ${JSON.stringify(
              value[subKey]
            )}</p>`;
          });
        } else {
          accessHTML += `<p><strong>obj.${key}</strong> → ${JSON.stringify(
            value
          )}</p>`;
        }
      });
    }

    propertyAccess.innerHTML = accessHTML;
  }

  function generateAccessExamples(obj) {
    if (typeof obj !== "object" || obj === null) {
      return `// Valor: ${obj}`;
    }

    if (Array.isArray(obj)) {
      return `// Array con ${obj.length} elementos
    // obj[0] → primer elemento
    // obj.length → ${obj.length}`;
    }

    const keys = Object.keys(obj).slice(0, 3);
    return keys
      .map((key) => `// obj.${key} → ${JSON.stringify(obj[key])}`)
      .join("\n    ");
  }

  // Event listeners
  parseBtn.addEventListener("click", executeJSONParse);

  parseInput.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      executeJSONParse();
    }
  });
}

// ========================================
// SECCIÓN 2: JSON.STRINGIFY()
// ========================================

function initJSONStringify() {
  const stringifyBtn = document.getElementById("stringify-btn");
  const stringifyResult = document.getElementById("stringify-result");

  // Campos del formulario
  const objName = document.getElementById("obj-name");
  const objAge = document.getElementById("obj-age");
  const objEmail = document.getElementById("obj-email");
  const objActive = document.getElementById("obj-active");
  const objSkills = document.getElementById("obj-skills");

  function executeJSONStringify() {
    try {
      // Crear objeto JavaScript desde el formulario
      const jsObject = {
        nombre: objName.value.trim(),
        edad: parseInt(objAge.value) || 0,
        email: objEmail.value.trim(),
        activo: objActive.checked,
        skills: objSkills.value
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0),
        timestamp: new Date().toISOString(),
      };

      // Ejecutar JSON.stringify()
      const jsonString = JSON.stringify(jsObject);
      const jsonFormatted = JSON.stringify(jsObject, null, 2);

      stringifyResult.innerHTML = `
                <div style="color: #10b981; font-weight: bold; margin-bottom: 10px;">
                    ✅ JSON.stringify() EXITOSO
                </div>
                <div style="color: #065f46; margin-bottom: 10px;">
                    <strong>Compacto:</strong>
                </div>
                <div style="background: #f3f4f6; color: #374151; padding: 10px; border-radius: 5px; font-size: 0.8em; margin-bottom: 10px; word-break: break-all;">
                    ${jsonString}
                </div>
                <div style="color: #065f46; margin-bottom: 10px;">
                    <strong>Formateado (pretty print):</strong>
                </div>
                <pre style="background: #f3f4f6; color: #374151; padding: 10px; border-radius: 5px; overflow-x: auto;">${jsonFormatted}</pre>
            `;
      stringifyResult.className = "result-display success";

      showNotification("✅ Objeto convertido a JSON string", "success");

      showCode(`
// JSON.stringify() - Convertir objeto JavaScript a JSON string
const jsObject = {
    nombre: "${jsObject.nombre}",
    edad: ${jsObject.edad},
    email: "${jsObject.email}",
    activo: ${jsObject.activo},
    skills: ${JSON.stringify(jsObject.skills)},
    timestamp: "${jsObject.timestamp}"
};

// Conversión básica (compacto)
const jsonString = JSON.stringify(jsObject);
console.log('JSON compacto:', jsonString);

// Conversión formateada (legible)
const jsonFormatted = JSON.stringify(jsObject, null, 2);
console.log('JSON formateado:', jsonFormatted);

// Ahora puedes:
// - Enviar a una API: fetch(url, { body: jsonString })
// - Guardar en localStorage: localStorage.setItem('user', jsonString)
// - Mostrar en pantalla para debug
            `);
    } catch (error) {
      stringifyResult.innerHTML = `
                <div style="color: #ef4444; font-weight: bold; margin-bottom: 10px;">
                    ❌ ERROR EN JSON.stringify()
                </div>
                <div style="color: #7f1d1d;">
                    <strong>Error:</strong> ${error.message}
                </div>
            `;
      stringifyResult.className = "result-display error";

      showNotification("❌ Error: " + error.message, "error");
    }
  }

  // Event listeners
  stringifyBtn.addEventListener("click", executeJSONStringify);

  // Auto-ejecutar cuando cambian los campos
  [objName, objAge, objEmail, objActive, objSkills].forEach((input) => {
    input.addEventListener("input", () => {
      // Auto-ejecutar después de un breve delay
      setTimeout(executeJSONStringify, 500);
    });
  });

  // Ejecutar inicial
  executeJSONStringify();
}

// ========================================
// SECCIÓN 3: CICLO COMPLETO
// ========================================

function initCompleteCycle() {
  const step1Btn = document.getElementById("step1-btn");
  const step2Btn = document.getElementById("modify-btn");
  const step3Btn = document.getElementById("step3-btn");

  const apiResponseDisplay = document.getElementById("api-response-display");
  const jsObjectDisplay = document.getElementById("js-object-display");
  const sendDataDisplay = document.getElementById("send-data-display");

  const modifyName = document.getElementById("modify-name");
  const modifyEmail = document.getElementById("modify-email");

  // Datos de ejemplo que simula respuesta de API
  originalData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031",
    website: "hildegard.org",
  };

  // Paso 1: JSON.parse()
  step1Btn.addEventListener("click", () => {
    const jsonString = JSON.stringify(originalData);
    apiResponseDisplay.textContent = jsonString;

    // Simular JSON.parse()
    currentUser = JSON.parse(jsonString);

    jsObjectDisplay.innerHTML = `
            <div style="color: #10b981; margin-bottom: 10px;">✅ JSON.parse() ejecutado</div>
            <div>ID: ${currentUser.id}</div>
            <div>Nombre: ${currentUser.name}</div>
            <div>Username: ${currentUser.username}</div>
            <div>Email: ${currentUser.email}</div>
            <div>Teléfono: ${currentUser.phone}</div>
            <div>Website: ${currentUser.website}</div>
        `;

    // Llenar campos de modificación
    modifyName.value = currentUser.name;
    modifyEmail.value = currentUser.email;

    showNotification("📥 Paso 1: JSON parseado correctamente", "success");

    showCode(`
// PASO 1: Recibir datos de API (JSON.parse)
// Esto simula lo que hace fetch() automáticamente

const responseFromAPI = '${jsonString}';

// Convertir JSON string a objeto JavaScript
const userData = JSON.parse(responseFromAPI);

console.log('Datos recibidos:', userData);
console.log('Tipo:', typeof userData); // 'object'

// Ahora puedes usar los datos:
console.log('Nombre del usuario:', userData.name);
console.log('Email del usuario:', userData.email);
        `);
  });

  // Paso 2: Modificar datos
  step2Btn.addEventListener("click", () => {
    if (!currentUser) {
      showNotification("❌ Primero ejecuta el Paso 1", "error");
      return;
    }

    // Modificar el objeto JavaScript
    const newName = modifyName.value.trim();
    const newEmail = modifyEmail.value.trim();

    if (newName) currentUser.name = newName;
    if (newEmail) currentUser.email = newEmail;

    jsObjectDisplay.innerHTML = `
            <div style="color: #f59e0b; margin-bottom: 10px;">✏️ Datos modificados</div>
            <div>ID: ${currentUser.id}</div>
            <div style="background: #fef3c7; padding: 2px 4px; border-radius: 3px;">Nombre: ${currentUser.name}</div>
            <div>Username: ${currentUser.username}</div>
            <div style="background: #fef3c7; padding: 2px 4px; border-radius: 3px;">Email: ${currentUser.email}</div>
            <div>Teléfono: ${currentUser.phone}</div>
            <div>Website: ${currentUser.website}</div>
        `;

    showNotification("✏️ Paso 2: Datos modificados", "warning");

    showCode(`
// PASO 2: Modificar objeto JavaScript
// Trabajas con el objeto normalmente

userData.name = "${currentUser.name}";
userData.email = "${currentUser.email}";

console.log('Datos modificados:', userData);

// También puedes:
// - Validar los datos
// - Agregar nuevas propiedades
// - Eliminar propiedades innecesarias
// - Transformar el formato
        `);
  });

  // Paso 3: JSON.stringify()
  step3Btn.addEventListener("click", () => {
    if (!currentUser) {
      showNotification("❌ Primero ejecuta los pasos 1 y 2", "error");
      return;
    }

    // Convertir de vuelta a JSON para enviar
    const jsonToSend = JSON.stringify(currentUser, null, 2);

    sendDataDisplay.innerHTML = `
            <div style="color: #10b981; margin-bottom: 10px;">📤 JSON.stringify() ejecutado</div>
            <div style="color: #065f46; margin-bottom: 5px;">Listo para enviar a API:</div>
            <pre>${jsonToSend}</pre>
        `;

    showNotification("📤 Paso 3: JSON preparado para envío", "success");

    showCode(`
// PASO 3: Preparar para envío (JSON.stringify)
// Convertir objeto JavaScript de vuelta a JSON string

const jsonToSend = JSON.stringify(userData);

console.log('JSON para enviar:', jsonToSend);

// Ahora puedes enviarlo a la API:
fetch('/api/users/' + userData.id, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: jsonToSend  // ← Aquí va el JSON string
})
.then(response => response.json())
.then(result => {
    console.log('Usuario actualizado:', result);
});

// CICLO COMPLETO:
// API → JSON string → parse() → JS object → modify → stringify() → JSON string → API
        `);
  });
}

// ========================================
// SECCIÓN 4: MANEJO DE ERRORES
// ========================================

function initErrorHandling() {
  const testButtons = document.querySelectorAll(".test-btn");

  testButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const testType = btn.dataset.test;

      switch (testType) {
        case "invalid":
          testInvalidJSON();
          break;
        case "non-serializable":
          testNonSerializable();
          break;
        case "formatted":
          testFormattedJSON();
          break;
      }
    });
  });

  function testInvalidJSON() {
    const invalidJsonInput = document.getElementById("invalid-json");
    const invalidResult = document.getElementById("invalid-result");

    const invalidJSON = invalidJsonInput.value;

    try {
      const parsed = JSON.parse(invalidJSON);
      invalidResult.textContent =
        "Sorpresa: ¡El JSON es válido!\n" + JSON.stringify(parsed, null, 2);
      invalidResult.style.color = "#10b981";
    } catch (error) {
      invalidResult.innerHTML = `
❌ Error capturado:
${error.message}

💡 Solución:
${getSolution(error.message)}

🔧 JSON corregido:
{"nombre": "Ana", "edad": 25}
            `;
      invalidResult.style.color = "#ef4444";
    }

    showCode(`
// Manejo de errores con JSON.parse()
const invalidJSON = '${invalidJSON}';

try {
    const parsed = JSON.parse(invalidJSON);
    console.log('JSON válido:', parsed);
} catch (error) {
    console.error('Error al parsear JSON:', error.message);
    
    // Error: ${error.message}
    // Siempre usa try/catch con JSON.parse()
    // porque puede fallar si el JSON está mal formateado
    
    // Mostrar mensaje de error al usuario
    alert('JSON inválido: ' + error.message);
}
        `);
  }

  function testNonSerializable() {
    const nonSerializableResult = document.getElementById(
      "non-serializable-result"
    );

    const objWithFunction = {
      nombre: "Ana",
      edad: 25,
      saludar: function () {
        return "Hola";
      },
      fecha: new Date(),
      indefinido: undefined,
      nulo: null,
    };

    try {
      const jsonString = JSON.stringify(objWithFunction, null, 2);
      nonSerializableResult.innerHTML = `
✅ JSON.stringify() ejecutado:

${jsonString}

⚠️ Observaciones:
- La función 'saludar' fue omitida
- 'undefined' fue omitido  
- Date fue convertido a string
- 'null' se mantiene como null
            `;
      nonSerializableResult.style.color = "#f59e0b";
    } catch (error) {
      nonSerializableResult.textContent = "❌ Error: " + error.message;
      nonSerializableResult.style.color = "#ef4444";
    }

    showCode(`
// Tipos de datos no serializables en JSON
const objWithFunction = {
    nombre: "Ana",
    edad: 25,
    saludar: function() { return "Hola"; },  // ← Se omite
    fecha: new Date(),                       // ← Se convierte a string
    indefinido: undefined,                   // ← Se omite
    nulo: null                              // ← Se mantiene
};

const jsonString = JSON.stringify(objWithFunction, null, 2);
console.log('Resultado:', jsonString);

// JSON solo soporta:
// - string, number, boolean, null
// - object (sin funciones)
// - array

// Se omiten automáticamente:
// - functions, undefined, Symbol
        `);
  }

  function testFormattedJSON() {
    const formattedResult = document.getElementById("formatted-result");

    const data = {
      usuario: {
        id: 1,
        nombre: "María González",
        configuracion: {
          tema: "oscuro",
          notificaciones: true,
          idioma: "es",
        },
      },
      sesion: {
        inicio: "2025-01-15T10:30:00Z",
        expira: "2025-01-15T18:30:00Z",
      },
    };

    const compact = JSON.stringify(data);
    const formatted = JSON.stringify(data, null, 2);
    const customFormatted = JSON.stringify(data, null, 4);

    formattedResult.innerHTML = `
📦 Compacto (para APIs):
${compact.substring(0, 60)}...

📋 Formateado (2 espacios):
${formatted}

📄 Formateado (4 espacios):
${customFormatted}
        `;

    showCode(`
// JSON.stringify() con formato
const data = ${JSON.stringify(data, null, 2)};

// Para envío a APIs (compacto)
const compact = JSON.stringify(data);
console.log('Compacto:', compact);

// Para debug/desarrollo (legible)
const formatted = JSON.stringify(data, null, 2);
console.log('Formateado:', formatted);

// Parámetros de JSON.stringify():
// 1. objeto a convertir
// 2. replacer function (null = todos los campos)
// 3. espacios para indentación (2, 4, "\t", etc.)

// Uso común:
// - Compacto: enviar a servidor
// - Formateado: mostrar en consola/debug
        `);
  }

  function getSolution(errorMessage) {
    if (errorMessage.includes("Unexpected token")) {
      return "Revisa las comas, comillas y llaves";
    }
    if (errorMessage.includes("Unexpected end")) {
      return "Faltan llaves de cierre } o corchetes ]";
    }
    return "Verifica la sintaxis JSON";
  }
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar referencia al panel de código
  codeDisplay = document.getElementById("code-display");

  // Inicializar todas las secciones
  initJSONParse();
  initJSONStringify();
  initCompleteCycle();
  initErrorHandling();

  // Mensaje inicial
  showCode(`
// Bloque D2 - JSON Parse y Stringify
// Convertir entre JavaScript y JSON
console.log('¡Bloque D2 inicializado!');

// JSON.parse() - De JSON string a objeto JavaScript
// JSON.stringify() - De objeto JavaScript a JSON string

console.log('Laboratorios disponibles:');
console.log('- JSON.parse() interactivo');
console.log('- JSON.stringify() con formulario');
console.log('- Ciclo completo API simulation');
console.log('- Manejo de errores y casos especiales');

// Flujo típico con APIs:
// 1. fetch() → JSON string
// 2. JSON.parse() → JavaScript object  
// 3. Modificar/procesar objeto
// 4. JSON.stringify() → JSON string
// 5. Enviar a API
    `);

  console.log("🚀 Bloque D2 - JSON Parse y Stringify inicializado");
  console.log("Funcionalidades:", {
    "JSON.parse() Lab": "✅",
    "JSON.stringify() Lab": "✅",
    "Complete Cycle Demo": "✅",
    "Error Handling": "✅",
  });
});
