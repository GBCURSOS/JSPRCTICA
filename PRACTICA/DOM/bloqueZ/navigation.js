/**
 * Script de navegación para el Bloque 1 - DOM Manipulation
 * Funcionalidades comunes para todos los ejercicios
 */

// Navegación suave entre secciones
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll para enlaces internos
  const enlaces = document.querySelectorAll('a[href^="#"]');
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Resaltar sección activa en la navegación
  function actualizarNavegacionActiva() {
    const secciones = document.querySelectorAll(".time-block");
    const enlaces = document.querySelectorAll(".topic-list a");

    let seccionActiva = null;
    const scrollPos = window.scrollY + 100;

    secciones.forEach((seccion) => {
      const top = seccion.offsetTop;
      const bottom = top + seccion.offsetHeight;

      if (scrollPos >= top && scrollPos <= bottom) {
        seccionActiva = seccion.id;
      }
    });

    enlaces.forEach((enlace) => {
      enlace.classList.remove("active");
      if (enlace.getAttribute("href") === "#" + seccionActiva) {
        enlace.classList.add("active");
      }
    });
  }

  // Escuchar scroll para navegación activa
  window.addEventListener("scroll", actualizarNavegacionActiva);

  // Inicializar navegación
  actualizarNavegacionActiva();
});

// Funciones utilitarias comunes
const DOMUtils = {
  // Mostrar mensaje de éxito
  mostrarExito: function (mensaje, elemento = null) {
    const div = document.createElement("div");
    div.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(39, 174, 96, 0.3);
            z-index: 1000;
            font-weight: 600;
            animation: slideInRight 0.3s ease;
        `;

    div.textContent = mensaje;
    document.body.appendChild(div);

    if (elemento) {
      elemento.style.boxShadow = "0 0 10px rgba(39, 174, 96, 0.5)";
      elemento.style.transition = "box-shadow 0.3s ease";
      setTimeout(() => {
        elemento.style.boxShadow = "";
      }, 2000);
    }

    setTimeout(() => {
      div.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        document.body.removeChild(div);
      }, 300);
    }, 3000);
  },

  // Mostrar mensaje de error
  mostrarError: function (mensaje) {
    const div = document.createElement("div");
    div.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #e74c3c;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(231, 76, 60, 0.3);
            z-index: 1000;
            font-weight: 600;
            animation: slideInRight 0.3s ease;
        `;

    div.textContent = mensaje;
    document.body.appendChild(div);

    setTimeout(() => {
      div.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        document.body.removeChild(div);
      }, 300);
    }, 4000);
  },

  // Resaltar elemento temporalmente
  resaltar: function (elemento, color = "#f1c40f", duracion = 2000) {
    const estiloOriginal = elemento.style.backgroundColor;
    elemento.style.backgroundColor = color;
    elemento.style.transition = "background-color 0.3s ease";

    setTimeout(() => {
      elemento.style.backgroundColor = estiloOriginal;
    }, duracion);
  },

  // Animar entrada de elemento
  animarEntrada: function (elemento, tipo = "fadeIn") {
    const animaciones = {
      fadeIn: "opacity 0.5s ease",
      slideIn: "transform 0.5s ease",
      bounce: "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    };

    elemento.style.transition = animaciones[tipo] || animaciones.fadeIn;

    switch (tipo) {
      case "fadeIn":
        elemento.style.opacity = "0";
        setTimeout(() => {
          elemento.style.opacity = "1";
        }, 10);
        break;
      case "slideIn":
        elemento.style.transform = "translateY(20px)";
        setTimeout(() => {
          elemento.style.transform = "translateY(0)";
        }, 10);
        break;
      case "bounce":
        elemento.style.transform = "scale(0.3)";
        setTimeout(() => {
          elemento.style.transform = "scale(1)";
        }, 10);
        break;
    }
  },

  // Copiar código al portapapeles
  copiarCodigo: function (codigo) {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(codigo)
        .then(() => {
          this.mostrarExito("Código copiado al portapapeles");
        })
        .catch(() => {
          this.mostrarError("Error al copiar código");
        });
    } else {
      // Fallback para navegadores sin clipboard API
      const textarea = document.createElement("textarea");
      textarea.value = codigo;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        this.mostrarExito("Código copiado al portapapeles");
      } catch (err) {
        this.mostrarError("Error al copiar código");
      }
      document.body.removeChild(textarea);
    }
  },
};

// Agregar estilos para animaciones
const estilosAnimacion = document.createElement("style");
estilosAnimacion.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .topic-list a.active {
        background: linear-gradient(45deg, #2c3e50, #34495e) !important;
        box-shadow: 0 8px 25px rgba(44, 62, 80, 0.3) !important;
    }

    .code-copy-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #34495e;
        color: white;
        border: none;
        padding: 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8rem;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .code-example {
        position: relative;
    }

    .code-example:hover .code-copy-btn {
        opacity: 1;
    }

    .code-copy-btn:hover {
        background: #2c3e50;
    }
`;

document.head.appendChild(estilosAnimacion);

// Agregar botones de copiar a ejemplos de código
document.addEventListener("DOMContentLoaded", function () {
  const ejemplosCodigo = document.querySelectorAll(".code-example");

  ejemplosCodigo.forEach((ejemplo) => {
    const botonCopiar = document.createElement("button");
    botonCopiar.className = "code-copy-btn";
    botonCopiar.textContent = "Copiar";
    botonCopiar.onclick = function () {
      const codigo = ejemplo.querySelector("code").textContent;
      DOMUtils.copiarCodigo(codigo);
    };

    ejemplo.appendChild(botonCopiar);
  });
});

// Funciones de progreso del curso
const ProgresoBloque1 = {
  ejerciciosCompletados: JSON.parse(
    localStorage.getItem("bloque1-progreso") || "[]"
  ),

  marcarCompleto: function (ejercicio) {
    if (!this.ejerciciosCompletados.includes(ejercicio)) {
      this.ejerciciosCompletados.push(ejercicio);
      this.guardarProgreso();
      this.actualizarIndicadores();
      DOMUtils.mostrarExito(`¡Ejercicio ${ejercicio} completado!`);
    }
  },

  guardarProgreso: function () {
    localStorage.setItem(
      "bloque1-progreso",
      JSON.stringify(this.ejerciciosCompletados)
    );
  },

  obtenerProgreso: function () {
    const totalEjercicios = 6; // Total de ejercicios en Bloque 1
    const completados = this.ejerciciosCompletados.length;
    return Math.round((completados / totalEjercicios) * 100);
  },

  actualizarIndicadores: function () {
    const indicadores = document.querySelectorAll(".ejercicio-indicador");
    indicadores.forEach((indicador) => {
      const ejercicio = indicador.dataset.ejercicio;
      if (this.ejerciciosCompletados.includes(ejercicio)) {
        indicador.classList.add("completado");
        indicador.textContent = "✅";
      }
    });
  },

  reiniciarProgreso: function () {
    this.ejerciciosCompletados = [];
    this.guardarProgreso();
    this.actualizarIndicadores();
    DOMUtils.mostrarExito("Progreso reiniciado");
  },
};

// Inicializar progreso al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  ProgresoBloque1.actualizarIndicadores();

  // Agregar indicador de progreso general si estamos en la página principal
  if (document.querySelector(".navigation")) {
    const progreso = ProgresoBloque1.obtenerProgreso();
    const indicadorProgreso = document.createElement("div");
    indicadorProgreso.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(52, 152, 219, 0.9);
            color: white;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(52, 152, 219, 0.3);
            font-weight: 600;
            z-index: 1000;
        `;
    indicadorProgreso.innerHTML = `
            <div>📊 Progreso del Bloque 1</div>
            <div style="margin-top: 0.5rem;">${progreso}% completado</div>
        `;

    document.body.appendChild(indicadorProgreso);
  }
});

console.log("🚀 Sistema de navegación del Bloque 1 cargado");
console.log("Utilidades disponibles: DOMUtils, ProgresoBloque1");
