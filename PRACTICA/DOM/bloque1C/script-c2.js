// ========================================
// DOM BLOQUE C2 - EVENTOS DE TECLADO
// Hora 5: Interacciones con teclado
// ========================================

// Variable global para mostrar código
let codeDisplay;

// Variables para el juego de teclas especiales
let playerPosition = { x: 50, y: 50 };
let isJumping = false;

// Función para mostrar código ejecutado
function showCode(code) {
  if (codeDisplay) {
    codeDisplay.textContent = code;
  }
}

// ========================================
// SECCIÓN 1: Eventos Básicos de Teclado
// ========================================

function initBasicKeyboardEvents() {
  const textInput = document.getElementById("text-input");
  const lastKeyDisplay = document.getElementById("last-key");
  const keyCodeDisplay = document.getElementById("key-code");
  const keyEventDisplay = document.getElementById("key-event");
  const btnClearInput = document.getElementById("btn-clear-input");
  const btnFocusInput = document.getElementById("btn-focus-input");

  // Evento keydown
  textInput.addEventListener("keydown", (e) => {
    lastKeyDisplay.textContent = e.key; // Muestra la tecla presionada
    keyCodeDisplay.textContent = e.code; // Muestra el código físico de la tecla
    keyEventDisplay.textContent = "keydown";
    keyEventDisplay.style.color = "#ef4444";

    showCode(`
// Evento keydown - Se dispara al presionar tecla
textInput.addEventListener('keydown', (e) => {
    console.log('Tecla presionada:', e.key); // Valor de la tecla
    console.log('Código físico:', e.code); // Código físico de la tecla
    console.log('Event type:', e.type);
    // Información disponible:
    // e.key: '${e.key}'
    // e.code: ${e.code}
    // e.shiftKey: ${e.shiftKey}
    // e.ctrlKey: ${e.ctrlKey}
    // e.altKey: ${e.altKey}
});
        `);
  });

  // Evento keyup
  textInput.addEventListener("keyup", (e) => {
    keyEventDisplay.textContent = "keyup";
    keyEventDisplay.style.color = "#10b981";

    showCode(`
// Evento keyup - Se dispara al soltar tecla
textInput.addEventListener('keyup', (e) => {
    console.log('Tecla soltada:', e.key);
    
    // Útil para detectar cuando termina la pulsación
    // Ideal para shortcuts o combinaciones
});
        `);
  });

  // Evento input
  textInput.addEventListener("input", (e) => {
    keyEventDisplay.textContent = "input";
    keyEventDisplay.style.color = "#7c3aed";

    showCode(`
// Evento input - Se dispara cuando cambia el valor
textInput.addEventListener('input', (e) => {
    console.log('Valor actual:', e.target.value);
    console.log('Longitud:', e.target.value.length);
    
    // Se dispara en cada cambio del input
    // Ideal para validación en tiempo real
});
        `);
  });

  // Eventos especiales
  textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.target.style.borderColor = "#10b981";
      setTimeout(() => {
        e.target.style.borderColor = "#ddd6fe";
      }, 500);

      showCode(`
// Detectar tecla Enter
if (e.key === 'Enter') {
    console.log('Enter presionado - Enviar formulario');
    // Aquí se podría enviar un formulario
}
            `);
    }

    if (e.key === "Escape") {
      e.target.blur();
      e.target.style.borderColor = "#ef4444";
      setTimeout(() => {
        e.target.style.borderColor = "#ddd6fe";
      }, 500);

      showCode(`
// Detectar tecla Escape
if (e.key === 'Escape') {
    console.log('Escape presionado - Cancelar acción');
    e.target.blur(); // Quitar foco
}
            `);
    }
  });

  // Controles
  btnClearInput.addEventListener("click", () => {
    textInput.value = "";
    textInput.focus();

    showCode(`
// Limpiar input y enfocar
textInput.value = '';
textInput.focus();
        `);
  });

  btnFocusInput.addEventListener("click", () => {
    textInput.focus();
    textInput.select();

    showCode(`
// Enfocar input y seleccionar todo el texto
textInput.focus();
textInput.select();
        `);
  });
}

// ========================================
// SECCIÓN 2: Teclas Especiales
// ========================================

function initSpecialKeys() {
  const gameArea = document.getElementById("game-area");
  const player = document.getElementById("player");
  const arrowStatus = document.getElementById("arrow-status");
  const spaceStatus = document.getElementById("space-status");
  const enterStatus = document.getElementById("enter-status");
  const escapeStatus = document.getElementById("escape-status");

  // Mover jugador
  function movePlayer(direction) {
    const gameRect = gameArea.getBoundingClientRect();
    const playerSize = 50; // Tamaño aproximado del emoji

    switch (direction) {
      case "ArrowUp":
        playerPosition.y = Math.max(5, playerPosition.y - 5);
        arrowStatus.textContent = "↑ Arriba";
        break;
      case "ArrowDown":
        playerPosition.y = Math.min(85, playerPosition.y + 5);
        arrowStatus.textContent = "↓ Abajo";
        break;
      case "ArrowLeft":
        playerPosition.x = Math.max(5, playerPosition.x - 5);
        arrowStatus.textContent = "← Izquierda";
        break;
      case "ArrowRight":
        playerPosition.x = Math.min(85, playerPosition.x + 5);
        arrowStatus.textContent = "→ Derecha";
        break;
    }

    player.style.left = playerPosition.x + "%";
    player.style.top = playerPosition.y + "%";
  }

  // Eventos globales de teclado
  document.addEventListener("keydown", (e) => {
    // Prevenir scroll de página con flechas
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)
    ) {
      e.preventDefault();
    }

    // Manejar flechas
    if (e.key.startsWith("Arrow")) {
      movePlayer(e.key);

      showCode(`
// Detectar teclas de flecha
if (e.key.startsWith('Arrow')) {
    console.log('Flecha presionada:', e.key);
    movePlayer(e.key);
}

// Prevenir comportamiento por defecto
e.preventDefault(); // Evita scroll de página
            `);
    }

    // Manejar espacio
    if (e.key === " " && !isJumping) {
      isJumping = true;
      spaceStatus.textContent = "🚀 Saltando";
      spaceStatus.style.color = "#10b981";
      player.classList.add("jumping");

      setTimeout(() => {
        isJumping = false;
        spaceStatus.textContent = "No presionado";
        spaceStatus.style.color = "#374151";
        player.classList.remove("jumping");
      }, 500);

      showCode(`
// Detectar tecla Espacio
if (e.key === ' ' && !isJumping) {
    isJumping = true;
    player.classList.add('jumping');
    
    // Animación de salto por 500ms
    setTimeout(() => {
        isJumping = false;
        player.classList.remove('jumping');
    }, 500);
}
            `);
    }

    // Manejar Enter
    if (e.key === "Enter") {
      enterStatus.textContent = "✨ Acción especial";
      enterStatus.style.color = "#7c3aed";

      // Efecto visual
      player.style.transform = "translate(-50%, -50%) scale(1.5)";
      setTimeout(() => {
        player.style.transform = "translate(-50%, -50%) scale(1)";
        enterStatus.textContent = "No presionado";
        enterStatus.style.color = "#374151";
      }, 300);

      showCode(`
// Detectar tecla Enter
if (e.key === 'Enter') {
    console.log('Acción especial activada');
    
    // Efecto visual temporal
    player.style.transform = 'translate(-50%, -50%) scale(1.5)';
    setTimeout(() => {
        player.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 300);
}
            `);
    }

    // Manejar Escape
    if (e.key === "Escape") {
      escapeStatus.textContent = "🔄 Reseteando";
      escapeStatus.style.color = "#ef4444";

      // Reset posición
      playerPosition = { x: 50, y: 50 };
      player.style.left = "50%";
      player.style.top = "50%";

      setTimeout(() => {
        escapeStatus.textContent = "No presionado";
        escapeStatus.style.color = "#374151";
        arrowStatus.textContent = "Ninguna";
      }, 500);

      showCode(`
// Detectar tecla Escape
if (e.key === 'Escape') {
    console.log('Reseteando posición del jugador');
    
    // Volver a posición inicial
    playerPosition = { x: 50, y: 50 };
    player.style.left = '50%';
    player.style.top = '50%';
}
            `);
    }
  });

  // Reset al salir del foco
  document.addEventListener("keyup", (e) => {
    if (e.key.startsWith("Arrow")) {
      setTimeout(() => {
        arrowStatus.textContent = "Ninguna";
      }, 1000);
    }
  });
}

// ========================================
// SECCIÓN 3: Combinaciones de Teclas
// ========================================

function initKeyboardCombinations() {
  const comboTarget = document.getElementById("combo-target");
  const comboList = document.getElementById("combo-list");
  const btnClearCombo = document.getElementById("btn-clear-combo");

  let comboHistory = [];

  function addComboToHistory(combo, description) {
    const timestamp = new Date().toLocaleTimeString();
    comboHistory.unshift({ combo, description, timestamp });

    if (comboHistory.length > 10) {
      comboHistory = comboHistory.slice(0, 10);
    }

    updateComboDisplay();
  }

  function updateComboDisplay() {
    if (comboHistory.length === 0) {
      comboList.innerHTML = "<p>Ninguna combinación detectada aún...</p>";
      return;
    }

    comboList.innerHTML = comboHistory
      .map(
        (item) => `
            <div class="combo-item">
                <strong>${item.combo}</strong> - ${item.description}
                <small style="float: right; opacity: 0.7;">${item.timestamp}</small>
            </div>
        `
      )
      .join("");
  }

  // Eventos de combinaciones
  document.addEventListener("keydown", (e) => {
    // Ctrl + S
    if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      comboTarget.style.background =
        "linear-gradient(135deg, #d1fae5, #a7f3d0)";
      addComboToHistory("Ctrl + S", "Guardar documento");

      setTimeout(() => {
        comboTarget.style.background =
          "linear-gradient(135deg, #fef3c7, #fbbf24)";
      }, 1000);

      showCode(`
// Combinación Ctrl + S
if (e.ctrlKey && e.key === 's') {
    e.preventDefault(); // Evitar guardar página
    console.log('Guardando documento...');
    
    // Aquí se ejecutaría la función de guardar
    saveDocument();
}
            `);
    }

    // Ctrl + Z
    if (e.ctrlKey && e.key === "z") {
      e.preventDefault();
      comboTarget.style.background =
        "linear-gradient(135deg, #fce7f3, #fbcfe8)";
      addComboToHistory("Ctrl + Z", "Deshacer última acción");

      setTimeout(() => {
        comboTarget.style.background =
          "linear-gradient(135deg, #fef3c7, #fbbf24)";
      }, 1000);

      showCode(`
// Combinación Ctrl + Z
if (e.ctrlKey && e.key === 'z') {
    e.preventDefault();
    console.log('Deshaciendo última acción...');
    
    // Aquí se ejecutaría la función de deshacer
    undoLastAction();
}
            `);
    }

    // Alt + H
    if (e.altKey && e.key === "h") {
      e.preventDefault();
      comboTarget.style.background =
        "linear-gradient(135deg, #e0f2fe, #bae6fd)";
      addComboToHistory("Alt + H", "Mostrar ayuda");

      setTimeout(() => {
        comboTarget.style.background =
          "linear-gradient(135deg, #fef3c7, #fbbf24)";
      }, 1000);

      showCode(`
// Combinación Alt + H
if (e.altKey && e.key === 'h') {
    e.preventDefault();
    console.log('Mostrando ayuda...');
    
    // Aquí se mostraría la ayuda
    showHelp();
}
            `);
    }
  });

  // Click con modificadores
  comboTarget.addEventListener("click", (e) => {
    if (e.shiftKey) {
      comboTarget.style.background =
        "linear-gradient(135deg, #fef3c7, #f59e0b)";
      addComboToHistory("Shift + Click", "Selección especial");

      setTimeout(() => {
        comboTarget.style.background =
          "linear-gradient(135deg, #fef3c7, #fbbf24)";
      }, 1000);

      showCode(`
// Shift + Click
comboTarget.addEventListener('click', (e) => {
    if (e.shiftKey) {
        console.log('Selección especial con Shift');
        
        // Aquí se manejaría la selección múltiple
        handleSpecialSelection();
    }
});
            `);
    }
  });

  // Limpiar historial
  btnClearCombo.addEventListener("click", () => {
    comboHistory = [];
    updateComboDisplay();

    showCode(`
// Limpiar historial de combinaciones
btnClearCombo.addEventListener('click', () => {
    comboHistory = [];
    updateComboDisplay();
});
        `);
  });
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar referencia al panel de código
  codeDisplay = document.getElementById("code-display");

  // Inicializar todas las secciones
  initBasicKeyboardEvents();
  initSpecialKeys();
  initKeyboardCombinations();

  // Mensaje inicial
  showCode(`
// DOM Bloque C2 - Eventos de Teclado
// Hora 5: Interacciones con teclado
console.log('¡Bloque C2 inicializado!');
console.log('Eventos disponibles: keydown, keyup, input');
console.log('Teclas especiales: Arrow keys, Space, Enter, Escape');
console.log('Combinaciones: Ctrl+S, Ctrl+Z, Alt+H, Shift+Click');
    `);

  console.log("⌨️ DOM Bloque C2 inicializado correctamente");
  console.log("Eventos de teclado cargados:", {
    "Basic keyboard events": "✅",
    "Special keys (arrows, space, etc.)": "✅",
    "Key combinations": "✅",
    "Game controls": "✅",
  });
});
