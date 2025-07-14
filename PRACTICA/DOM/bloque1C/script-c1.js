// ========================================
// DOM BLOQUE C1 - EVENTOS DE MOUSE
// Hora 5: Interacciones con mouse
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
// SECCIÓN 1: Eventos de Click
// ========================================

function initClickEvents() {
  const btnClick = document.getElementById("btn-click");
  const btnDblClick = document.getElementById("btn-dblclick");
  const clickTarget = document.getElementById("click-target");
  const clickCountDisplay = document.getElementById("click-count");
  const dblClickCountDisplay = document.getElementById("dblclick-count");
  const btnResetClicks = document.getElementById("btn-reset-clicks");

  let clickCount = 0;
  let dblClickCount = 0;

  // Evento click en botón
  btnClick.addEventListener("click", (e) => {
    e.target.style.background = "#059669";
    e.target.style.color = "white";

    setTimeout(() => {
      e.target.style.background = "transparent";
      e.target.style.color = "#059669";
    }, 200);

    showCode(`
// Evento click en botón
btnClick.addEventListener('click', (e) => {
    // Cambiar estilo temporalmente
    e.target.style.background = '#059669';
    e.target.style.color = 'white';
    
    // Restaurar después de 200ms
    setTimeout(() => {
        e.target.style.background = 'transparent';
        e.target.style.color = '#059669';
    }, 200);
});
        `);
  });

  // Evento doble click en botón
  btnDblClick.addEventListener("dblclick", (e) => {
    e.target.style.transform = "scale(1.2)";
    e.target.style.background = "#7c3aed";
    e.target.style.color = "white";

    setTimeout(() => {
      e.target.style.transform = "scale(1)";
      e.target.style.background = "transparent";
      e.target.style.color = "#059669";
    }, 300);

    showCode(`
// Evento doble click en botón
btnDblClick.addEventListener('dblclick', (e) => {
    // Escalar y cambiar colores
    e.target.style.transform = 'scale(1.2)';
    e.target.style.background = '#7c3aed';
    e.target.style.color = 'white';
    
    // Restaurar después de 300ms
    setTimeout(() => {
        e.target.style.transform = 'scale(1)';
        e.target.style.background = 'transparent';
        e.target.style.color = '#059669';
    }, 300);
});
        `);
  });

  // Click en área target
  clickTarget.addEventListener("click", (e) => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;

    // Efecto visual
    clickTarget.style.background = "linear-gradient(135deg, #a7f3d0, #6ee7b7)";
    setTimeout(() => {
      clickTarget.style.background =
        "linear-gradient(135deg, #ecfdf5, #d1fae5)";
    }, 150);

    showCode(`
// Click en área target
clickTarget.addEventListener('click', (e) => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
    
    // Efecto visual temporal
    clickTarget.style.background = 'linear-gradient(135deg, #a7f3d0, #6ee7b7)';
    setTimeout(() => {
        clickTarget.style.background = 'linear-gradient(135deg, #ecfdf5, #d1fae5)';
    }, 150);
});
        `);
  });

  // Doble click en área target
  clickTarget.addEventListener("dblclick", (e) => {
    dblClickCount++;
    dblClickCountDisplay.textContent = dblClickCount;

    // Efecto visual más intenso
    clickTarget.style.background = "linear-gradient(135deg, #059669, #10b981)";
    clickTarget.style.color = "white";
    clickTarget.style.transform = "scale(1.05)";

    setTimeout(() => {
      clickTarget.style.background =
        "linear-gradient(135deg, #ecfdf5, #d1fae5)";
      clickTarget.style.color = "#374151";
      clickTarget.style.transform = "scale(1)";
    }, 300);

    showCode(`
// Doble click en área target
clickTarget.addEventListener('dblclick', (e) => {
    dblClickCount++;
    dblClickCountDisplay.textContent = dblClickCount;
    
    // Efecto visual intenso
    clickTarget.style.background = 'linear-gradient(135deg, #059669, #10b981)';
    clickTarget.style.color = 'white';
    clickTarget.style.transform = 'scale(1.05)';
    
    // Restaurar después de 300ms
    setTimeout(() => {
        clickTarget.style.background = 'linear-gradient(135deg, #ecfdf5, #d1fae5)';
        clickTarget.style.color = '#374151';
        clickTarget.style.transform = 'scale(1)';
    }, 300);
});
        `);
  });

  // Resetear contadores
  btnResetClicks.addEventListener("click", () => {
    clickCount = 0;
    dblClickCount = 0;
    clickCountDisplay.textContent = "0";
    dblClickCountDisplay.textContent = "0";

    showCode(`
// Resetear contadores
btnResetClicks.addEventListener('click', () => {
    clickCount = 0;
    dblClickCount = 0;
    clickCountDisplay.textContent = '0';
    dblClickCountDisplay.textContent = '0';
});
        `);
  });
}

// ========================================
// SECCIÓN 2: Eventos de Movimiento
// ========================================

function initMovementEvents() {
  const mouseTracker = document.getElementById("mouse-tracker");
  const mouseXDisplay = document.getElementById("mouse-x");
  const mouseYDisplay = document.getElementById("mouse-y");
  const mouseStatusDisplay = document.getElementById("mouse-status");
  const hoverBoxes = document.querySelectorAll(".hover-box");

  // Seguimiento del mouse
  mouseTracker.addEventListener("mousemove", (e) => {
    const rect = mouseTracker.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    mouseXDisplay.textContent = x;
    mouseYDisplay.textContent = y;

    // Actualizar posición para el efecto radial
    mouseTracker.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    mouseTracker.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);

    showCode(`
// Seguimiento del mouse
mouseTracker.addEventListener('mousemove', (e) => {
    const rect = mouseTracker.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    mouseXDisplay.textContent = x;
    mouseYDisplay.textContent = y;
    
    // Actualizar posición para efectos CSS
    mouseTracker.style.setProperty('--mouse-x', x + 'px');
    mouseTracker.style.setProperty('--mouse-y', y + 'px');
});
        `);
  });

  // Entrar al área de seguimiento
  mouseTracker.addEventListener("mouseenter", () => {
    mouseStatusDisplay.textContent = "Dentro";
    mouseStatusDisplay.style.color = "#059669";

    showCode(`
// Mouse enter (entra sin incluir elementos hijos)
mouseTracker.addEventListener('mouseenter', () => {
    mouseStatusDisplay.textContent = 'Dentro';
    mouseStatusDisplay.style.color = '#059669';
});
        `);
  });

  // Salir del área de seguimiento
  mouseTracker.addEventListener("mouseleave", () => {
    mouseStatusDisplay.textContent = "Fuera";
    mouseStatusDisplay.style.color = "#ef4444";

    showCode(`
// Mouse leave (sale sin incluir elementos hijos)
mouseTracker.addEventListener('mouseleave', () => {
    mouseStatusDisplay.textContent = 'Fuera';
    mouseStatusDisplay.style.color = '#ef4444';
});
        `);
  });

  // Eventos en cajas de hover
  hoverBoxes.forEach((box, index) => {
    box.addEventListener("mouseenter", (e) => {
      e.target.style.transform = "translateY(-8px) scale(1.05)";

      showCode(`
// Hover en caja ${index + 1}
hoverBox.addEventListener('mouseenter', (e) => {
    e.target.style.transform = 'translateY(-8px) scale(1.05)';
});
            `);
    });

    box.addEventListener("mouseleave", (e) => {
      e.target.style.transform = "translateY(0) scale(1)";

      showCode(`
// Salir del hover en caja ${index + 1}
hoverBox.addEventListener('mouseleave', (e) => {
    e.target.style.transform = 'translateY(0) scale(1)';
});
            `);
    });
  });
}

// ========================================
// SECCIÓN 3: Arrastrar y Soltar
// ========================================

function initDragAndDrop() {
  const dragItems = document.querySelectorAll(".drag-item");
  const dropZones = document.querySelectorAll(".drop-zone");
  const btnResetDrag = document.getElementById("btn-reset-drag");

  let draggedElement = null;
  const originalParents = new Map();

  // Guardar posiciones originales
  dragItems.forEach((item) => {
    originalParents.set(item, item.parentElement);
  });

  // Eventos de arrastre para elementos
  dragItems.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      draggedElement = e.target;
      e.target.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.outerHTML);

      showCode(`
// Iniciar arrastre
item.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
});
            `);
    });

    item.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");

      showCode(`
// Terminar arrastre
item.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
});
            `);
    });
  });

  // Eventos de zona de soltar
  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      e.target.classList.add("drag-over");

      showCode(`
// Arrastrando sobre zona válida
zone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Permitir drop
    e.dataTransfer.dropEffect = 'move';
    e.target.classList.add('drag-over');
});
            `);
    });

    zone.addEventListener("dragleave", (e) => {
      e.target.classList.remove("drag-over");

      showCode(`
// Salir de zona de drop
zone.addEventListener('dragleave', (e) => {
    e.target.classList.remove('drag-over');
});
            `);
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      e.target.classList.remove("drag-over");

      if (draggedElement) {
        // Mover elemento a la zona
        const clone = draggedElement.cloneNode(true);
        e.target.appendChild(clone);
        draggedElement.remove();

        // Actualizar estado visual
        e.target.classList.add("has-item");

        // Reactivar eventos para el elemento clonado
        initDragForElement(clone);

        showCode(`
// Soltar elemento
zone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    if (draggedElement) {
        // Mover elemento a la zona
        const clone = draggedElement.cloneNode(true);
        e.target.appendChild(clone);
        draggedElement.remove();
        
        // Actualizar estado visual
        e.target.classList.add('has-item');
    }
});
                `);
      }
    });
  });

  // Función para inicializar eventos de arrastre en elementos nuevos
  function initDragForElement(element) {
    element.addEventListener("dragstart", (e) => {
      draggedElement = e.target;
      e.target.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.outerHTML);
    });

    element.addEventListener("dragend", (e) => {
      e.target.classList.remove("dragging");
    });
  }

  // Resetear posiciones
  btnResetDrag.addEventListener("click", () => {
    // Remover elementos de zonas de drop
    dropZones.forEach((zone) => {
      const items = zone.querySelectorAll(".drag-item");
      items.forEach((item) => item.remove());
      zone.classList.remove("has-item");
    });

    // Restaurar elementos originales
    dragItems.forEach((item) => {
      if (!document.body.contains(item)) {
        const originalParent = originalParents.get(item);
        if (originalParent) {
          originalParent.appendChild(item);
        }
      }
    });

    showCode(`
// Resetear posiciones de arrastre
btnResetDrag.addEventListener('click', () => {
    // Remover elementos de zonas de drop
    dropZones.forEach(zone => {
        const items = zone.querySelectorAll('.drag-item');
        items.forEach(item => item.remove());
        zone.classList.remove('has-item');
    });
    
    // Restaurar elementos originales
    dragItems.forEach(item => {
        if (!document.body.contains(item)) {
            const originalParent = originalParents.get(item);
            if (originalParent) {
                originalParent.appendChild(item);
            }
        }
    });
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
  initClickEvents();
  initMovementEvents();
  initDragAndDrop();

  // Mensaje inicial
  showCode(`
// DOM Bloque C1 - Eventos de Mouse
// Interacciones básicas con mouse
console.log('¡Bloque C1 inicializado!');
console.log('Eventos disponibles: click, dblclick, mouseover, mouseout, mousemove, drag & drop');
    `);

  console.log("🖱️ DOM Bloque C1 inicializado correctamente");
  console.log("Eventos de mouse cargados:", {
    "Click events": "✅",
    "Movement events": "✅",
    "Drag & drop events": "✅",
  });
});
