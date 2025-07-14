// D5: UPDATE y DELETE con LocalStorage
// Operaciones de modificación y eliminación de empleados por ID

class EmpleadosCRUD {
  constructor() {
    this.storageKey = "empleados_sistema";
    this.empleados = [];
    this.empleadoActual = null;
    this.init();
  }

  init() {
    this.cargarDesdeLocalStorage();
    this.configurarEventListeners();
    this.actualizarEstadoDB();
    this.mostrarTodosLosEmpleados();
  }

  // ========== OPERACIONES DE LOCALSTORAGE ==========

  cargarDesdeLocalStorage() {
    try {
      const data = localStorage.getItem(this.storageKey);
      this.empleados = data ? JSON.parse(data) : [];

      if (this.empleados.length === 0) {
        this.mostrarNotificacion(
          "No hay empleados en LocalStorage. Ve al D4 para cargar datos primero.",
          "warning"
        );
      } else {
        this.mostrarNotificacion(
          `Cargados ${this.empleados.length} empleados desde LocalStorage`,
          "info"
        );
      }
    } catch (error) {
      console.error("Error cargando desde LocalStorage:", error);
      this.empleados = [];
      this.mostrarNotificacion(
        "Error al cargar datos de LocalStorage",
        "error"
      );
    }
  }

  guardarEnLocalStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.empleados));
      this.mostrarNotificacion("Cambios guardados en LocalStorage", "success");
    } catch (error) {
      console.error("Error guardando en LocalStorage:", error);
      this.mostrarNotificacion("Error al guardar datos", "error");
    }
  }

  // ========== ACTUALIZACIÓN DE INTERFAZ ==========

  actualizarEstadoDB() {
    const statusDiv = document.getElementById("db-status");
    if (statusDiv) {
      const total = this.empleados.length;
      const activos = this.empleados.filter((e) => e.activo).length;
      statusDiv.innerHTML = `
        <p><strong>📊 Estado actual:</strong></p>
        <ul>
          <li>📋 Total empleados: <strong>${total}</strong></li>
          <li>✅ Empleados activos: <strong>${activos}</strong></li>
          <li>❌ Empleados inactivos: <strong>${total - activos}</strong></li>
          <li>💾 Datos en LocalStorage</li>
        </ul>
      `;
    }
  }

  actualizarCodigoPannel(operacion, detalles) {
    const codeDisplay = document.getElementById("code-display");
    if (codeDisplay) {
      const timestamp = new Date().toLocaleTimeString();
      codeDisplay.innerHTML += `\n// ${timestamp} - ${operacion}\n${detalles}\n`;
      codeDisplay.scrollTop = codeDisplay.scrollHeight;
    }
  }

  // ========== OPERACIONES CRUD ==========

  buscarEmpleadoPorId(id) {
    const empleado = this.empleados.find((emp) => emp.id === parseInt(id));
    return empleado || null;
  }

  actualizarEmpleado(id, datosActualizados) {
    const index = this.empleados.findIndex((emp) => emp.id === parseInt(id));

    if (index === -1) {
      throw new Error("Empleado no encontrado");
    }

    // Mantener el ID original
    datosActualizados.id = parseInt(id);

    // Actualizar empleado
    this.empleados[index] = { ...this.empleados[index], ...datosActualizados };
    this.guardarEnLocalStorage();

    this.actualizarCodigoPannel(
      "UPDATE",
      `empleados[${index}] = ${JSON.stringify(datosActualizados, null, 2)}`
    );

    return this.empleados[index];
  }

  eliminarEmpleado(id) {
    const index = this.empleados.findIndex((emp) => emp.id === parseInt(id));

    if (index === -1) {
      throw new Error("Empleado no encontrado");
    }

    const empleadoEliminado = this.empleados[index];
    this.empleados.splice(index, 1);
    this.guardarEnLocalStorage();

    this.actualizarCodigoPannel(
      "DELETE",
      `empleados.splice(${index}, 1) // Eliminado: ${empleadoEliminado.nombre}`
    );

    return empleadoEliminado;
  }

  // ========== INTERFAZ DE BÚSQUEDA ==========

  mostrarResultadoBusqueda(empleado) {
    const resultsDiv = document.getElementById("search-results");

    if (!empleado) {
      resultsDiv.innerHTML = `
        <div class="info-message">
          ❌ No se encontró ningún empleado con ese ID.
        </div>
      `;
      return;
    }

    resultsDiv.innerHTML = `
      <div class="employee-card">
        <h4>Empleado encontrado (ID: ${empleado.id})</h4>
        <div class="employee-details">
          <div class="detail-item">
            <span class="detail-label">Nombre:</span>
            <span class="detail-value">${empleado.nombre}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Departamento:</span>
            <span class="detail-value">${empleado.departamento}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Puesto:</span>
            <span class="detail-value">${empleado.puesto}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Salario:</span>
            <span class="detail-value">$${empleado.salario?.toLocaleString()}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Email:</span>
            <span class="detail-value">${empleado.email}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Fecha Ingreso:</span>
            <span class="detail-value">${
              empleado.fechaIngreso
                ? new Date(empleado.fechaIngreso).toLocaleDateString()
                : "N/A"
            }</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Estado:</span>
            <span class="detail-value">
              <span class="status ${empleado.activo ? "active" : "inactive"}">
                ${empleado.activo ? "Activo" : "Inactivo"}
              </span>
            </span>
          </div>
        </div>
        <div style="margin-top: 15px; text-align: center;">
          <button onclick="empleadosCRUD.prepararEdicion(${
            empleado.id
          })" class="action-btn primary">
            ✏️ Editar este empleado
          </button>
        </div>
      </div>
    `;

    this.actualizarCodigoPannel(
      "READ",
      `empleado = empleados.find(emp => emp.id === ${empleado.id})`
    );
  }

  // ========== INTERFAZ DE EDICIÓN ==========

  prepararEdicion(id) {
    const empleado = this.buscarEmpleadoPorId(id);

    if (!empleado) {
      this.mostrarNotificacion("Empleado no encontrado", "error");
      return;
    }

    this.empleadoActual = empleado;
    this.mostrarFormularioEdicion(empleado);
  }

  mostrarFormularioEdicion(empleado) {
    const form = document.getElementById("update-form");
    const infoMessage = document.querySelector(".update-area .info-message");

    // Ocultar mensaje y mostrar formulario
    if (infoMessage) infoMessage.style.display = "none";
    form.style.display = "grid";

    // Llenar formulario con datos del empleado
    document.getElementById("edit-id").value = empleado.id;
    document.getElementById("edit-name").value = empleado.nombre;
    document.getElementById("edit-department").value = empleado.departamento;
    document.getElementById("edit-position").value = empleado.puesto;
    document.getElementById("edit-salary").value = empleado.salario;
    document.getElementById("edit-email").value = empleado.email;
    document.getElementById("edit-date").value = empleado.fechaIngreso;
    document.getElementById("edit-active").value = empleado.activo.toString();

    // Scroll al formulario
    form.scrollIntoView({ behavior: "smooth" });
  }

  cancelarEdicion() {
    const form = document.getElementById("update-form");
    const infoMessage = document.querySelector(".update-area .info-message");

    form.style.display = "none";
    if (infoMessage) infoMessage.style.display = "block";

    this.empleadoActual = null;
    form.reset();
  }

  procesarActualizacion(formData) {
    if (!this.empleadoActual) {
      this.mostrarNotificacion(
        "No hay empleado seleccionado para editar",
        "error"
      );
      return;
    }

    const datosActualizados = {
      nombre: formData.get("edit-name").trim(),
      departamento: formData.get("edit-department"),
      puesto: formData.get("edit-position").trim(),
      salario: parseInt(formData.get("edit-salary")),
      email: formData.get("edit-email").trim(),
      fechaIngreso: formData.get("edit-date"),
      activo: formData.get("edit-active") === "true",
    };

    // Validaciones
    if (
      !datosActualizados.nombre ||
      !datosActualizados.departamento ||
      !datosActualizados.puesto
    ) {
      this.mostrarNotificacion(
        "Por favor completa todos los campos obligatorios",
        "error"
      );
      return;
    }

    if (datosActualizados.salario <= 0) {
      this.mostrarNotificacion("El salario debe ser mayor a 0", "error");
      return;
    }

    try {
      const empleadoActualizado = this.actualizarEmpleado(
        this.empleadoActual.id,
        datosActualizados
      );

      this.mostrarNotificacion(
        `Empleado ${empleadoActualizado.nombre} actualizado exitosamente`,
        "success"
      );
      this.cancelarEdicion();
      this.actualizarEstadoDB();
      this.mostrarTodosLosEmpleados();

      // Actualizar búsqueda si hay ID en el campo
      const searchId = document.getElementById("search-id").value;
      if (searchId == this.empleadoActual.id) {
        this.mostrarResultadoBusqueda(empleadoActualizado);
      }
    } catch (error) {
      this.mostrarNotificacion(
        "Error al actualizar empleado: " + error.message,
        "error"
      );
    }
  }

  // ========== INTERFAZ DE ELIMINACIÓN ==========

  prepararEliminacion(id) {
    const empleado = this.buscarEmpleadoPorId(id);

    if (!empleado) {
      this.mostrarNotificacion("Empleado no encontrado", "error");
      return;
    }

    this.mostrarVistaPrevia(empleado);
  }

  mostrarVistaPrevia(empleado) {
    const preview = document.getElementById("delete-preview");
    const employeeInfo = document.getElementById("delete-employee-info");

    employeeInfo.innerHTML = `
      <h4>⚠️ ${empleado.nombre} (ID: ${empleado.id})</h4>
      <div class="employee-details">
        <div class="detail-item">
          <span class="detail-label">Departamento:</span>
          <span class="detail-value">${empleado.departamento}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Puesto:</span>
          <span class="detail-value">${empleado.puesto}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Email:</span>
          <span class="detail-value">${empleado.email}</span>
        </div>
      </div>
    `;

    preview.style.display = "block";
    this.empleadoAEliminar = empleado;

    // Scroll a la vista previa
    preview.scrollIntoView({ behavior: "smooth" });
  }

  confirmarEliminacion() {
    if (!this.empleadoAEliminar) {
      this.mostrarNotificacion(
        "No hay empleado seleccionado para eliminar",
        "error"
      );
      return;
    }

    try {
      const empleadoEliminado = this.eliminarEmpleado(
        this.empleadoAEliminar.id
      );

      this.mostrarNotificacion(
        `Empleado ${empleadoEliminado.nombre} eliminado exitosamente`,
        "success"
      );
      this.cancelarEliminacion();
      this.actualizarEstadoDB();
      this.mostrarTodosLosEmpleados();

      // Limpiar búsqueda si era el mismo empleado
      const searchId = document.getElementById("search-id").value;
      if (searchId == empleadoEliminado.id) {
        document.getElementById("search-id").value = "";
        this.mostrarResultadoBusqueda(null);
      }
    } catch (error) {
      this.mostrarNotificacion(
        "Error al eliminar empleado: " + error.message,
        "error"
      );
    }
  }

  cancelarEliminacion() {
    const preview = document.getElementById("delete-preview");
    preview.style.display = "none";
    this.empleadoAEliminar = null;
    document.getElementById("delete-id").value = "";
  }

  // ========== MOSTRAR LISTA COMPLETA ==========

  mostrarTodosLosEmpleados() {
    const container = document.getElementById("employees-list");

    if (this.empleados.length === 0) {
      container.innerHTML = `
        <div class="info-message">
          No hay empleados en LocalStorage. 
          <br>Ve al <a href="index-d4.html">Bloque D4</a> para cargar datos primero.
        </div>
      `;
      return;
    }

    container.innerHTML = this.generarTablaHTML(this.empleados);
  }

  generarTablaHTML(empleados) {
    return `
      <div class="table-responsive">
        <table class="employees-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Departamento</th>
              <th>Puesto</th>
              <th>Salario</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${empleados
              .map(
                (emp) => `
              <tr class="${emp.activo ? "active" : "inactive"}">
                <td><strong>${emp.id}</strong></td>
                <td>${emp.nombre}</td>
                <td>${emp.departamento}</td>
                <td>${emp.puesto}</td>
                <td>$${emp.salario?.toLocaleString() || "N/A"}</td>
                <td>
                  <span class="status ${emp.activo ? "active" : "inactive"}">
                    ${emp.activo ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td>
                  <button onclick="empleadosCRUD.prepararEdicion(${
                    emp.id
                  })" class="action-btn primary" style="font-size: 0.8em; padding: 6px 12px;">
                    ✏️ Editar
                  </button>
                </td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  // ========== UTILIDADES ==========

  mostrarNotificacion(mensaje, tipo = "info") {
    const notificacion = document.createElement("div");
    notificacion.className = `notificacion ${tipo}`;
    notificacion.textContent = mensaje;

    // Estilos para la notificación
    Object.assign(notificacion.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "15px 20px",
      borderRadius: "8px",
      color: "white",
      fontWeight: "600",
      zIndex: "10000",
      transform: "translateX(400px)",
      transition: "transform 0.3s ease",
      maxWidth: "400px",
    });

    // Colores según tipo
    const colores = {
      info: "#06b6d4",
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
    };

    notificacion.style.backgroundColor = colores[tipo] || colores.info;

    document.body.appendChild(notificacion);

    // Animación de entrada
    setTimeout(() => (notificacion.style.transform = "translateX(0)"), 100);

    // Remover después de 4 segundos
    setTimeout(() => {
      notificacion.style.transform = "translateX(400px)";
      setTimeout(() => document.body.removeChild(notificacion), 300);
    }, 4000);
  }

  // ========== EVENT LISTENERS ==========

  configurarEventListeners() {
    // Actualizar vista
    document.getElementById("refresh-data")?.addEventListener("click", () => {
      this.cargarDesdeLocalStorage();
      this.actualizarEstadoDB();
      this.mostrarTodosLosEmpleados();
      this.mostrarNotificacion("Vista actualizada", "info");
    });

    // Mostrar todos
    document.getElementById("show-all")?.addEventListener("click", () => {
      this.mostrarTodosLosEmpleados();
      document
        .getElementById("employees-list")
        .scrollIntoView({ behavior: "smooth" });
    });

    // Búsqueda por ID
    document.getElementById("search-btn")?.addEventListener("click", () => {
      const id = document.getElementById("search-id").value;

      if (!id) {
        this.mostrarNotificacion("Por favor ingresa un ID", "warning");
        return;
      }

      const empleado = this.buscarEmpleadoPorId(id);
      this.mostrarResultadoBusqueda(empleado);
    });

    // Enter en campo de búsqueda
    document.getElementById("search-id")?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        document.getElementById("search-btn").click();
      }
    });

    // Formulario de actualización
    document.getElementById("update-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      this.procesarActualizacion(formData);
    });

    // Cancelar edición
    document.getElementById("cancel-edit")?.addEventListener("click", () => {
      this.cancelarEdicion();
    });

    // Eliminar empleado
    document.getElementById("delete-btn")?.addEventListener("click", () => {
      const id = document.getElementById("delete-id").value;

      if (!id) {
        this.mostrarNotificacion("Por favor ingresa un ID", "warning");
        return;
      }

      this.prepararEliminacion(id);
    });

    // Enter en campo de eliminación
    document.getElementById("delete-id")?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        document.getElementById("delete-btn").click();
      }
    });

    // Confirmar eliminación
    document.getElementById("confirm-delete")?.addEventListener("click", () => {
      this.confirmarEliminacion();
    });

    // Cancelar eliminación
    document.getElementById("cancel-delete")?.addEventListener("click", () => {
      this.cancelarEliminacion();
    });
  }
}

// ========== INICIALIZACIÓN ==========

let empleadosCRUD;

document.addEventListener("DOMContentLoaded", () => {
  empleadosCRUD = new EmpleadosCRUD();

  console.log("✅ Sistema UPDATE/DELETE iniciado");
  console.log("📊 Empleados cargados:", empleadosCRUD.empleados.length);

  // Mostrar mensaje de bienvenida
  setTimeout(() => {
    empleadosCRUD.mostrarNotificacion(
      "Sistema de UPDATE y DELETE cargado exitosamente",
      "success"
    );
  }, 500);
});

// Función global para acceso desde HTML
window.empleadosCRUD = empleadosCRUD;
