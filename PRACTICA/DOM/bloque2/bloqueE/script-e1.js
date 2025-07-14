// E1: Definiciones de Fetch API y REST
// Página conceptual sin demos complejos, solo definiciones claras

class DefinicionesManager {
  constructor() {
    this.init();
  }

  init() {
    this.mostrarMensajeBienvenida();
    this.actualizarCodigoResumen();
  }

  // ========== MENSAJES Y NOTIFICACIONES ==========

  mostrarMensajeBienvenida() {
    setTimeout(() => {
      this.mostrarNotificacion(
        "📡 ¡Aprende los conceptos fundamentales de APIs y Fetch!",
        "success"
      );
    }, 500);

    // Mensaje adicional después de unos segundos
    setTimeout(() => {
      this.mostrarNotificacion(
        "⚡ Próximo paso: Thunder Client para ver todo en acción",
        "info"
      );
    }, 3000);
  }

  actualizarCodigoResumen() {
    const codeDisplay = document.getElementById("code-display");
    if (codeDisplay) {
      // El código ya está en el HTML, pero podríamos cambiarlo dinámicamente
      console.log("📋 Conceptos cargados en el panel de código");
    }
  }

  // ========== UTILIDADES ==========

  mostrarNotificacion(mensaje, tipo = "info") {
    const notificacion = document.createElement("div");
    notificacion.className = `notificacion ${tipo}`;
    notificacion.textContent = mensaje;

    document.body.appendChild(notificacion);

    // Animación de entrada
    setTimeout(() => notificacion.classList.add("mostrar"), 100);

    // Remover después de 4 segundos (un poco más tiempo para leer)
    setTimeout(() => {
      notificacion.classList.remove("mostrar");
      setTimeout(() => {
        if (document.body.contains(notificacion)) {
          document.body.removeChild(notificacion);
        }
      }, 300);
    }, 4000);
  }
}

// ========== INICIALIZACIÓN ==========

let definicionesManager;

document.addEventListener("DOMContentLoaded", () => {
  definicionesManager = new DefinicionesManager();

  console.log("📡 Página de definiciones cargada");
  console.log("⚡ Fetch API: Herramienta para hacer requests HTTP");
  console.log("🌐 REST: Reglas para organizar endpoints de APIs");
  console.log("🚀 Próximo: Thunder Client para práctica visual");

  // Mostrar conceptos en consola para refuerzo
  setTimeout(() => {
    console.log("\n🎯 CONCEPTOS CLAVE:");
    console.log("• Fetch = fetch(url).then(res => res.json())");
    console.log("• REST = GET/POST/PUT/DELETE + URLs organizadas");
    console.log("• APIs reales = Datos del mundo real");
    console.log("• Thunder Client = Ver requests sin código\n");
  }, 1000);
});

// Variable global
window.definicionesManager = definicionesManager;
