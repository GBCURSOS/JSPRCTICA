// ========================================
// BLOQUE D1 - JSON FUNDAMENTALS
// ¿Qué es JSON? Sintaxis y Estructura
// ========================================

// Variable global para mostrar código
let codeDisplay;

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
// VALIDADOR JSON INTERACTIVO
// ========================================

function initJSONValidator() {
  const jsonInput = document.getElementById("json-input");
  const validateBtn = document.getElementById("validate-btn");
  const validationResult = document.getElementById("validation-result");

  // Ejemplos JSON predefinidos
  const examples = {
    user: {
      id: 1,
      nombre: "Ana García",
      email: "ana.garcia@email.com",
      edad: 28,
      activo: true,
      skills: ["JavaScript", "React", "Node.js"],
      direccion: {
        ciudad: "Madrid",
        pais: "España",
        codigo_postal: "28001",
      },
    },
    product: {
      id: 101,
      nombre: "Laptop Gaming",
      descripcion: "Laptop de alto rendimiento para gaming",
      precio: 1299.99,
      categoria: "Electrónicos",
      en_stock: true,
      stock_cantidad: 15,
      especificaciones: {
        cpu: "Intel i7",
        ram: "16GB",
        storage: "1TB SSD",
      },
      tags: ["gaming", "laptop", "alta-gama"],
    },
    array: [
      {
        id: 1,
        nombre: "Juan Pérez",
        departamento: "Desarrollo",
      },
      {
        id: 2,
        nombre: "María González",
        departamento: "Diseño",
      },
      {
        id: 3,
        nombre: "Carlos Rodríguez",
        departamento: "Marketing",
      },
    ],
    nested: {
      empresa: {
        nombre: "TechCorp",
        fundacion: 2020,
        empleados: [
          {
            id: 1,
            nombre: "Ana Directora",
            puesto: "CEO",
            contacto: {
              email: "ana@techcorp.com",
              telefono: "+34 123 456 789",
            },
            proyectos: [
              {
                nombre: "App Móvil",
                estado: "en_progreso",
                deadline: "2025-03-15",
              },
            ],
          },
        ],
        oficinas: [
          {
            ciudad: "Madrid",
            direccion: "Calle Gran Vía 123",
            empleados_count: 25,
          },
          {
            ciudad: "Barcelona",
            direccion: "Passeig de Gràcia 456",
            empleados_count: 18,
          },
        ],
      },
    },
  };

  // Función para validar JSON
  function validateJSON() {
    const jsonText = jsonInput.value.trim();

    if (!jsonText) {
      validationResult.innerHTML =
        '<p style="color: #f59e0b;">⚠️ Por favor, ingresa algún JSON para validar</p>';
      validationResult.className = "result-display";
      return;
    }

    try {
      // Intentar parsear el JSON
      const parsed = JSON.parse(jsonText);

      // Si es exitoso, mostrar el resultado formateado
      const formatted = JSON.stringify(parsed, null, 2);
      validationResult.innerHTML = `
                <div style="color: #10b981; font-weight: bold; margin-bottom: 15px;">
                    ✅ JSON VÁLIDO
                </div>
                <div style="color: #065f46;">
                    <strong>Tipo:</strong> ${
                      Array.isArray(parsed) ? "Array" : typeof parsed
                    }
                </div>
                <div style="color: #065f46; margin-bottom: 15px;">
                    <strong>Propiedades:</strong> ${
                      Array.isArray(parsed)
                        ? parsed.length + " elementos"
                        : Object.keys(parsed).length + " propiedades"
                    }
                </div>
                <div style="color: #374151;">
                    <strong>JSON Formateado:</strong>
                </div>
                <pre style="background: #f3f4f6; color: #374151; padding: 10px; border-radius: 5px; margin-top: 10px; overflow-x: auto;">${formatted}</pre>
            `;
      validationResult.className = "result-display valid";

      showNotification("✅ JSON válido correctamente", "success");

      showCode(`
// Validación de JSON exitosa
const jsonText = \`${jsonText.substring(0, 50)}...\`;

try {
    const parsed = JSON.parse(jsonText);
    
    console.log('JSON válido:', parsed);
    console.log('Tipo:', ${
      Array.isArray(parsed) ? "'Array'" : `'${typeof parsed}'`
    });
    console.log('Propiedades:', ${
      Array.isArray(parsed) ? parsed.length : Object.keys(parsed).length
    });
    
    // El objeto JavaScript está listo para usar
    // parsed.nombre, parsed.edad, etc.
    
} catch (error) {
    console.error('JSON inválido:', error.message);
}
            `);
    } catch (error) {
      // Si hay error, mostrar detalles del error
      validationResult.innerHTML = `
                <div style="color: #ef4444; font-weight: bold; margin-bottom: 15px;">
                    ❌ JSON INVÁLIDO
                </div>
                <div style="color: #7f1d1d; margin-bottom: 15px;">
                    <strong>Error:</strong> ${error.message}
                </div>
                <div style="color: #7f1d1d;">
                    <strong>Posibles problemas:</strong>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Comillas simples en lugar de dobles</li>
                        <li>Coma extra al final de propiedades</li>
                        <li>Propiedades sin comillas</li>
                        <li>Comentarios no permitidos en JSON</li>
                        <li>Valores undefined o funciones</li>
                    </ul>
                </div>
            `;
      validationResult.className = "result-display invalid";

      showNotification("❌ Error en JSON: " + error.message, "error");

      showCode(`
// Error al validar JSON
const jsonText = \`${jsonText.substring(0, 50)}...\`;

try {
    const parsed = JSON.parse(jsonText);
} catch (error) {
    console.error('JSON inválido:', error.message);
    
    // Error común: ${error.message}
    // Revisa la sintaxis de JSON
}
            `);
    }
  }

  // Event listeners
  validateBtn.addEventListener("click", validateJSON);

  // Validar al presionar Enter en el textarea
  jsonInput.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      validateJSON();
    }
  });

  // Botones de ejemplos
  document.getElementById("example-user").addEventListener("click", () => {
    jsonInput.value = JSON.stringify(examples.user, null, 2);
    showNotification("📝 Ejemplo de usuario cargado", "success");

    showCode(`
// Ejemplo cargado: Usuario
const usuarioJSON = {
    "id": 1,
    "nombre": "Ana García",
    "email": "ana.garcia@email.com",
    "edad": 28,
    "activo": true,
    "skills": ["JavaScript", "React", "Node.js"],
    "direccion": {
        "ciudad": "Madrid",
        "pais": "España"
    }
};

// Estructura típica de usuario en APIs
// - id: identificador único
// - datos personales: nombre, email, edad
// - estado: activo/inactivo
// - arrays: lista de habilidades
// - objetos anidados: dirección
        `);
  });

  document.getElementById("example-product").addEventListener("click", () => {
    jsonInput.value = JSON.stringify(examples.product, null, 2);
    showNotification("📦 Ejemplo de producto cargado", "success");

    showCode(`
// Ejemplo cargado: Producto E-commerce
const productoJSON = {
    "id": 101,
    "nombre": "Laptop Gaming",
    "precio": 1299.99,
    "categoria": "Electrónicos",
    "en_stock": true,
    "especificaciones": {
        "cpu": "Intel i7",
        "ram": "16GB",
        "storage": "1TB SSD"
    }
};

// Estructura típica de producto:
// - identificación: id, nombre
// - comercial: precio, categoría, stock
// - técnico: especificaciones anidadas
// - clasificación: tags para búsqueda
        `);
  });

  document.getElementById("example-array").addEventListener("click", () => {
    jsonInput.value = JSON.stringify(examples.array, null, 2);
    showNotification("📋 Ejemplo de array cargado", "success");

    showCode(`
// Ejemplo cargado: Array de empleados
const empleadosJSON = [
    {
        "id": 1,
        "nombre": "Juan Pérez",
        "departamento": "Desarrollo"
    },
    {
        "id": 2,
        "nombre": "María González", 
        "departamento": "Diseño"
    }
];

// Arrays en JSON:
// - Lista de objetos similares
// - Estructura consistente
// - Fácil de iterar con forEach, map, etc.
// - Cada elemento tiene las mismas propiedades
        `);
  });

  document.getElementById("example-nested").addEventListener("click", () => {
    jsonInput.value = JSON.stringify(examples.nested, null, 2);
    showNotification("🏗️ Ejemplo anidado cargado", "success");

    showCode(`
// Ejemplo cargado: Estructura anidada compleja
const empresaJSON = {
    "empresa": {
        "nombre": "TechCorp",
        "empleados": [
            {
                "nombre": "Ana Directora",
                "contacto": {
                    "email": "ana@techcorp.com"
                },
                "proyectos": [...]
            }
        ]
    }
};

// Anidación en JSON:
// - Objetos dentro de objetos
// - Arrays dentro de objetos
// - Múltiples niveles de profundidad
// - Acceso: empresa.empleados[0].contacto.email
        `);
  });
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar referencia al panel de código
  codeDisplay = document.getElementById("code-display");

  // Inicializar validador JSON
  initJSONValidator();

  // Mensaje inicial
  showCode(`
// Bloque D1 - JSON Fundamentals
// ¿Qué es JSON? Sintaxis y Estructura
console.log('¡Bloque D1 inicializado!');

// JSON = JavaScript Object Notation
// - Formato de texto para intercambiar datos
// - Estándar universal usado en APIs  
// - Fácil de leer para humanos y máquinas
// - Independiente del lenguaje de programación

console.log('Funcionalidades disponibles:');
console.log('- Validador JSON interactivo');
console.log('- Ejemplos del mundo real');
console.log('- Comparación JS Object vs JSON');
console.log('- Sintaxis y reglas de JSON');
    `);

  console.log("🚀 Bloque D1 - JSON Fundamentals inicializado");
  console.log("Funcionalidades:", {
    "JSON Validator": "✅",
    "Ejemplos interactivos": "✅",
    "Sintaxis comparison": "✅",
    "Real world examples": "✅",
  });
});
