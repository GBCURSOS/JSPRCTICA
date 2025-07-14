// D4: CRUD con LocalStorage - Versión sin clases
// Este archivo permite cargar, guardar y visualizar empleados usando LocalStorage y archivos locales

// Clave para guardar los empleados en LocalStorage
const storageKey = "empleados_sistema";
// Arreglo principal de empleados guardados
let empleados = [];
// Arreglo temporal para datos cargados desde archivo antes de guardar
let datosTemporales = [];

// Función principal de inicialización: carga datos, configura eventos y muestra empleados
function init() {
  cargarDesdeLocalStorage(); // Carga empleados guardados previamente
  configurarEventListeners(); // Asocia los botones a sus funciones
  mostrarEmpleados(); // Muestra la tabla de empleados
  actualizarEstadoDB(); // Actualiza el estado de la base de datos
}

// Actualiza el estado de la base de datos en la interfaz (total, activos, inactivos)
function actualizarEstadoDB() {
  const statusDiv = document.getElementById("db-status");
  if (statusDiv) {
    const total = empleados.length;
    const activos = empleados.filter((e) => e.activo).length;
    statusDiv.innerHTML = `
      <p><strong>📊 Estado actual:</strong></p>
      <ul>
        <li>📋 Total empleados: <strong>${total}</strong></li>
        <li>✅ Empleados activos: <strong>${activos}</strong></li>
        <li>❌ Empleados inactivos: <strong>${total - activos}</strong></li>
        <li>💾 Datos guardados en LocalStorage</li>
      </ul>
    `;
  }
}

// Carga los empleados desde LocalStorage y los guarda en el arreglo principal
function cargarDesdeLocalStorage() {
  try {
    const data = localStorage.getItem(storageKey);
    empleados = data ? JSON.parse(data) : [];
    mostrarNotificacion(
      `Cargados ${empleados.length} empleados desde LocalStorage`,
      "info"
    );
  } catch (error) {
    console.error("Error cargando desde LocalStorage:", error);
    empleados = [];
    mostrarNotificacion("Error al cargar datos de LocalStorage", "error");
  }
}

// Guarda los empleados (o datos temporales) en LocalStorage
function guardarEnLocalStorage() {
  try {
    const datosAGuardar =
      datosTemporales.length > 0 ? datosTemporales : empleados;
    localStorage.setItem(storageKey, JSON.stringify(datosAGuardar));
    empleados = [...datosAGuardar];
    datosTemporales = [];
    mostrarEmpleados();
    actualizarEstadoDB();
    deshabilitarBotonGuardar();
    mostrarNotificacion(
      `${datosAGuardar.length} empleados guardados en LocalStorage`,
      "success"
    );
  } catch (error) {
    console.error("Error guardando en LocalStorage:", error);
    mostrarNotificacion("Error al guardar datos", "error");
  }
}

// Habilita el botón para guardar datos temporales en LocalStorage
function habilitarBotonGuardar() {
  const boton = document.getElementById("save-to-storage");
  if (boton) {
    boton.disabled = false;
    boton.textContent = `2️⃣ Guardar ${datosTemporales.length} empleados en LocalStorage`;
  }
}

// Deshabilita el botón de guardar cuando no hay datos temporales
function deshabilitarBotonGuardar() {
  const boton = document.getElementById("save-to-storage");
  if (boton) {
    boton.disabled = true;
    boton.textContent = "2️⃣ Guardar en LocalStorage";
  }
}

// Muestra la tabla de empleados guardados en LocalStorage
function mostrarEmpleados() {
  const container = document.getElementById("employee-table");
  if (!container) return;
  if (empleados.length === 0) {
    container.innerHTML =
      "<p>No hay empleados guardados en LocalStorage. Carga datos desde un archivo.</p>";
    return;
  }
  container.innerHTML = generarTablaHTML(
    empleados,
    "Empleados en LocalStorage"
  );
}

// Muestra la tabla de empleados cargados temporalmente desde archivo
function mostrarEmpleadosTemporales() {
  const container = document.getElementById("employee-table");
  if (!container) return;
  if (datosTemporales.length === 0) return;
  container.innerHTML = generarTablaHTML(
    datosTemporales,
    "Datos cargados desde archivo (temporal)"
  );
}

// Genera el HTML de la tabla de empleados para mostrar en pantalla
function generarTablaHTML(datos, titulo) {
  return `
    <h4>${titulo} (${datos.length} empleados)</h4>
    <div class="table-responsive">
      <table class="employees-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Puesto</th>
            <th>Salario</th>
            <th>Fecha Ingreso</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          ${datos
            .map(
              (emp) => `
            <tr class="${emp.activo ? "active" : "inactive"}">
              <td>${emp.id}</td>
              <td>${emp.nombre}</td>
              <td>${emp.departamento}</td>
              <td>${emp.puesto}</td>
              <td>$${emp.salario?.toLocaleString() || "N/A"}</td>
              <td>${
                emp.fechaIngreso
                  ? new Date(emp.fechaIngreso).toLocaleDateString()
                  : "N/A"
              }</td>
              <td><span class="status ${emp.activo ? "active" : "inactive"}">${
                emp.activo ? "Activo" : "Inactivo"
              }</span></td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

// Carga empleados desde un archivo CSV local usando fetch
async function cargarCSVLocal() {
  try {
    mostrarNotificacion("Cargando datos desde empleados.csv...", "info");
    const response = await fetch("../data/empleados.csv");
    if (!response.ok)
      throw new Error(`Error al cargar CSV: ${response.status}`);
    const csvText = await response.text();
    procesarCSVText(csvText);
  } catch (error) {
    console.error("Error cargando CSV local:", error);
    mostrarNotificacion(
      "Error al cargar empleados.csv. Verifica que el archivo exista en la carpeta data/",
      "error"
    );
  }
}

// Carga empleados desde un archivo JSON local usando fetch
async function cargarJSONLocal() {
  try {
    mostrarNotificacion(
      "Cargando datos desde empleados-ejemplo.json...",
      "info"
    );
    const response = await fetch("../data/empleados-ejemplo.json");
    if (!response.ok)
      throw new Error(`Error al cargar JSON: ${response.status}`);
    const jsonData = await response.json();
    if (validarEstructuraJSON(jsonData)) {
      datosTemporales = jsonData;
      mostrarEmpleadosTemporales();
      habilitarBotonGuardar();
      mostrarNotificacion(
        `${jsonData.length} empleados cargados desde empleados-ejemplo.json`,
        "success"
      );
    } else {
      throw new Error("Estructura de datos JSON inválida");
    }
  } catch (error) {
    console.error("Error cargando JSON local:", error);
    mostrarNotificacion(
      "Error al cargar empleados-ejemplo.json. Verifica que el archivo exista en la carpeta data/",
      "error"
    );
  }
}

// Procesa el texto CSV y lo convierte en un arreglo de empleados
function procesarCSVText(csvText) {
  const lines = csvText.split("\n").filter((line) => line.trim());
  const headers = lines[0].split(",").map((h) => h.trim());
  const empleadosCSV = lines.slice(1).map((line, index) => {
    const values = line.split(",").map((v) => v.trim());
    const empleado = {};
    headers.forEach((header, i) => {
      const value = values[i] || "";
      switch (header.toLowerCase()) {
        case "id":
          empleado.id = parseInt(value) || index + 1;
          break;
        case "nombre":
          empleado.nombre = value;
          break;
        case "departamento":
          empleado.departamento = value;
          break;
        case "puesto":
          empleado.puesto = value;
          break;
        case "salario":
          empleado.salario = parseInt(value) || 0;
          break;
        case "email":
          empleado.email = value;
          break;
        case "fechaingreso":
        case "fecha_ingreso":
          empleado.fechaIngreso =
            value || new Date().toISOString().split("T")[0];
          break;
        case "activo":
          empleado.activo = value.toLowerCase() === "true" || value === "1";
          break;
      }
    });
    return empleado;
  });
  // Filtra empleados válidos (con nombre y departamento)
  const empleadosValidos = empleadosCSV.filter(
    (emp) => emp.nombre && emp.departamento
  );
  if (empleadosValidos.length > 0) {
    datosTemporales = empleadosValidos;
    mostrarEmpleadosTemporales();
    habilitarBotonGuardar();
    mostrarNotificacion(
      `${empleadosValidos.length} empleados cargados desde CSV local`,
      "success"
    );
  } else {
    mostrarNotificacion(
      "No se encontraron empleados válidos en el CSV",
      "error"
    );
  }
}

// Valida que el JSON tenga la estructura esperada para empleados
function validarEstructuraJSON(data) {
  return (
    Array.isArray(data) &&
    data.every(
      (emp) =>
        emp.hasOwnProperty("id") &&
        emp.hasOwnProperty("nombre") &&
        emp.hasOwnProperty("departamento") &&
        emp.hasOwnProperty("salario")
    )
  );
}

// Muestra una notificación en pantalla (info, éxito, error, advertencia)
function mostrarNotificacion(mensaje, tipo = "info") {
  const notificacion = document.createElement("div");
  notificacion.className = `notificacion ${tipo}`;
  notificacion.textContent = mensaje;
  document.body.appendChild(notificacion);
  setTimeout(() => notificacion.classList.add("mostrar"), 100);
  setTimeout(() => {
    notificacion.classList.remove("mostrar");
    setTimeout(() => document.body.removeChild(notificacion), 300);
  }, 3000);
}

// Configura los eventos de los botones de la interfaz
function configurarEventListeners() {
  document
    .getElementById("load-csv")
    ?.addEventListener("click", cargarCSVLocal);
  document
    .getElementById("load-json")
    ?.addEventListener("click", cargarJSONLocal);
  document
    .getElementById("save-to-storage")
    ?.addEventListener("click", guardarEnLocalStorage);
  document.getElementById("clear-db")?.addEventListener("click", () => {
    if (
      confirm(
        "¿Estás seguro de limpiar toda la base de datos? Esta acción no se puede deshacer."
      )
    ) {
      localStorage.removeItem(storageKey);
      empleados = [];
      datosTemporales = [];
      mostrarEmpleados();
      actualizarEstadoDB();
      deshabilitarBotonGuardar();
      mostrarNotificacion("Base de datos limpiada", "warning");
    }
  });
}

// Inicializar cuando el DOM esté listo

document.addEventListener("DOMContentLoaded", () => {
  init(); // Llama a la función principal
  console.log(
    "✅ Sistema de gestión de empleados iniciado (D4)"
  );
  console.log("📊 Datos cargados:", empleados.length, "empleados");
  setTimeout(() => {
    mostrarNotificacion(
      "Sistema LocalStorage D4 cargado exitosamente",
      "success"
    );
  }, 500);
});

// Variables y funciones globales para acceso desde HTML
window.empleados = empleados;
window.datosTemporales = datosTemporales;
window.guardarEnLocalStorage = guardarEnLocalStorage;
window.cargarCSVLocal = cargarCSVLocal;
window.cargarJSONLocal = cargarJSONLocal;
window.mostrarEmpleados = mostrarEmpleados;
window.mostrarEmpleadosTemporales = mostrarEmpleadosTemporales;
window.actualizarEstadoDB = actualizarEstadoDB;
