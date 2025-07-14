// ========================================
// DOM BLOQUE C4 - EVENTOS AVANZADOS
// Hora 5: Conceptos avanzados de eventos
// ========================================

// Variable global para mostrar código
let codeDisplay;

// Variables para logs
let actionLog = [];
let eventHistory = [];
let propagationLog = [];

// Contadores
let celebrationCount = 0;
let notificationCount = 0;
let customCount = 0;

// Función para mostrar código ejecutado
function showCode(code) {
    if (codeDisplay) {
        codeDisplay.textContent = code;
    }
}

// Función para mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ========================================
// SECCIÓN 1: Eventos de Ventana
// ========================================

function initWindowEvents() {
    const scrollContainer = document.getElementById('scroll-container');
    const scrollYDisplay = document.getElementById('scroll-y');
    const windowSizeDisplay = document.getElementById('window-size');
    const lastEventDisplay = document.getElementById('last-event');
    
    // Evento scroll en el contenedor
    scrollContainer.addEventListener('scroll', (e) => {
        const scrollY = e.target.scrollTop;
        scrollYDisplay.textContent = `${scrollY}px`;
        lastEventDisplay.textContent = 'scroll';
        
        showCode(`
// Evento scroll en contenedor
scrollContainer.addEventListener('scroll', (e) => {
    const scrollY = e.target.scrollTop;
    console.log('Scroll Y:', scrollY);
    
    // e.target.scrollTop: ${scrollY}px
    // e.target.scrollHeight: ${e.target.scrollHeight}px
    // e.target.clientHeight: ${e.target.clientHeight}px
});
        `);
    });
    
    // Evento resize de ventana
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        windowSizeDisplay.textContent = `${width}x${height}`;
        lastEventDisplay.textContent = 'resize';
        
        showCode(`
// Evento resize de ventana
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    console.log('Nueva ventana:', width + 'x' + height);
    
    // window.innerWidth: ${width}px
    // window.innerHeight: ${height}px
    // window.outerWidth: ${window.outerWidth}px
    // window.outerHeight: ${window.outerHeight}px
});
        `);
    });
    
    // Mostrar tamaño inicial
    windowSizeDisplay.textContent = `${window.innerWidth}x${window.innerHeight}`;
}

// ========================================
// SECCIÓN 2: Event Delegation
// ========================================

function initEventDelegation() {
    const buttonContainer = document.getElementById('button-container');
    const addButton = document.getElementById('add-button');
    const removeButton = document.getElementById('remove-button');
    const actionLogDisplay = document.getElementById('action-log');
    
    // Event delegation en el contenedor
    buttonContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dynamic-btn')) {
            const action = e.target.dataset.action;
            const timestamp = new Date().toLocaleTimeString();
            
            // Ejecutar acción según el tipo
            switch (action) {
                case 'alert':
                    showNotification('¡Alerta activada!', 'warning');
                    break;
                case 'success':
                    showNotification('¡Operación exitosa!', 'success');
                    break;
                case 'warning':
                    showNotification('¡Advertencia!', 'warning');
                    break;
                case 'error':
                    showNotification('¡Error detectado!', 'error');
                    break;
            }
            
            // Agregar al log
            actionLog.unshift(`[${timestamp}] Acción: ${action} (${e.target.textContent})`);
            if (actionLog.length > 10) actionLog = actionLog.slice(0, 10);
            
            updateActionLog();
            
            showCode(`
// Event Delegation - Un listener para todos los botones
buttonContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dynamic-btn')) {
        const action = e.target.dataset.action;
        
        // Información del evento:
        // e.target.tagName: ${e.target.tagName}
        // e.target.className: ${e.target.className}
        // e.target.dataset.action: ${action}
        // e.currentTarget.id: ${e.currentTarget.id}
        
        executeAction(action);
    }
});

// Ventajas:
// ✅ Un solo listener maneja todos los botones
// ✅ Funciona con botones agregados dinámicamente
// ✅ Mejor rendimiento y menos memoria
            `);
        }
    });
    
    function updateActionLog() {
        if (actionLog.length === 0) {
            actionLogDisplay.innerHTML = '<p>Sin acciones aún...</p>';
        } else {
            actionLogDisplay.innerHTML = actionLog.map(entry => 
                `<div class="log-entry">${entry}</div>`
            ).join('');
        }
    }
    
    // Agregar botón dinámico
    addButton.addEventListener('click', () => {
        const actions = ['alert', 'success', 'warning', 'error'];
        const icons = ['🚨', '✅', '⚠️', '❌'];
        const names = ['Alerta', 'Éxito', 'Advertencia', 'Error'];
        
        const randomIndex = Math.floor(Math.random() * actions.length);
        const action = actions[randomIndex];
        const icon = icons[randomIndex];
        const name = names[randomIndex];
        
        const newButton = document.createElement('button');
        newButton.className = 'dynamic-btn';
        newButton.dataset.action = action;
        newButton.textContent = `${icon} ${name} ${Date.now() % 1000}`;
        
        buttonContainer.appendChild(newButton);
        
        showNotification('Botón agregado dinámicamente', 'success');
        
        showCode(`
// Agregar botón dinámico
const newButton = document.createElement('button');
newButton.className = 'dynamic-btn';
newButton.dataset.action = '${action}';
newButton.textContent = '${newButton.textContent}';

buttonContainer.appendChild(newButton);

// El nuevo botón automáticamente funciona
// con el listener delegado existente
// ¡No necesita configuración adicional!
        `);
    });
    
    // Remover último botón
    removeButton.addEventListener('click', () => {
        const buttons = buttonContainer.querySelectorAll('.dynamic-btn');
        if (buttons.length > 4) { // Mantener al menos los 4 originales
            const lastButton = buttons[buttons.length - 1];
            lastButton.remove();
            showNotification('Botón eliminado', 'warning');
            
            showCode(`
// Remover último botón dinámico
const buttons = buttonContainer.querySelectorAll('.dynamic-btn');
const lastButton = buttons[buttons.length - 1];
lastButton.remove();

// El listener delegado sigue funcionando
// sin necesidad de limpiar event listeners
            `);
        } else {
            showNotification('No se pueden eliminar más botones', 'error');
        }
    });
}

// ========================================
// SECCIÓN 3: Eventos Personalizados
// ========================================

function initCustomEvents() {
    const emitCelebration = document.getElementById('emit-celebration');
    const emitNotification = document.getElementById('emit-notification');
    const emitCustom = document.getElementById('emit-custom');
    const celebrationCountDisplay = document.getElementById('celebration-count');
    const notificationCountDisplay = document.getElementById('notification-count');
    const customCountDisplay = document.getElementById('custom-count');
    const eventHistoryDisplay = document.getElementById('event-history');
    const clearHistory = document.getElementById('clear-history');
    
    // Función para crear eventos personalizados
    function createCustomEvent(type, data) {
        return new CustomEvent(type, {
            detail: data,
            bubbles: true,
            cancelable: true
        });
    }
    
    function updateEventHistory() {
        if (eventHistory.length === 0) {
            eventHistoryDisplay.innerHTML = '<p>Sin eventos personalizados aún...</p>';
        } else {
            eventHistoryDisplay.innerHTML = eventHistory.slice(-5).map(entry => 
                `<div class="history-entry">${entry}</div>`
            ).join('');
        }
    }
    
    // Listeners para eventos personalizados
    document.addEventListener('celebration', (e) => {
        celebrationCount++;
        celebrationCountDisplay.textContent = celebrationCount;
        
        const timestamp = new Date().toLocaleTimeString();
        eventHistory.unshift(`[${timestamp}] 🎉 Celebration: ${e.detail.message}`);
        if (eventHistory.length > 10) eventHistory = eventHistory.slice(0, 10);
        
        updateEventHistory();
        showNotification('🎉 ¡Celebración activada!', 'success');
        
        showCode(`
// Listener para evento 'celebration'
document.addEventListener('celebration', (e) => {
    console.log('Evento celebration recibido');
    console.log('Datos:', e.detail);
    
    // Información del evento:
    // e.type: '${e.type}'
    // e.detail.message: '${e.detail.message}'
    // e.detail.timestamp: '${e.detail.timestamp}'
    // e.bubbles: ${e.bubbles}
    // e.cancelable: ${e.cancelable}
    
    processCelebration(e.detail);
});
        `);
    });
    
    document.addEventListener('notification', (e) => {
        notificationCount++;
        notificationCountDisplay.textContent = notificationCount;
        
        const timestamp = new Date().toLocaleTimeString();
        eventHistory.unshift(`[${timestamp}] 📢 Notification: ${e.detail.title}`);
        if (eventHistory.length > 10) eventHistory = eventHistory.slice(0, 10);
        
        updateEventHistory();
        showNotification('📢 Notificación enviada', 'warning');
        
        showCode(`
// Listener para evento 'notification'
document.addEventListener('notification', (e) => {
    console.log('Evento notification recibido');
    console.log('Título:', e.detail.title);
    console.log('Prioridad:', e.detail.priority);
    
    // Procesar notificación según prioridad
    if (e.detail.priority === 'high') {
        showUrgentNotification(e.detail);
    } else {
        showNormalNotification(e.detail);
    }
});
        `);
    });
    
    document.addEventListener('customEvent', (e) => {
        customCount++;
        customCountDisplay.textContent = customCount;
        
        const timestamp = new Date().toLocaleTimeString();
        eventHistory.unshift(`[${timestamp}] ✨ Custom: ${e.detail.action}`);
        if (eventHistory.length > 10) eventHistory = eventHistory.slice(0, 10);
        
        updateEventHistory();
        showNotification('✨ Evento personalizado ejecutado', 'success');
        
        showCode(`
// Listener para evento personalizado
document.addEventListener('customEvent', (e) => {
    console.log('Evento customEvent recibido');
    console.log('Acción:', e.detail.action);
    console.log('Datos:', e.detail.data);
    
    // Procesar evento según el tipo de acción
    switch(e.detail.action) {
        case 'user_interaction':
            handleUserInteraction(e.detail.data);
            break;
        case 'system_update':
            handleSystemUpdate(e.detail.data);
            break;
    }
});
        `);
    });
    
    // Botones para emitir eventos
    emitCelebration.addEventListener('click', () => {
        const celebrationData = {
            message: '¡Operación completada con éxito!',
            timestamp: new Date().toISOString(),
            type: 'success',
            confetti: true
        };
        
        const customEvent = createCustomEvent('celebration', celebrationData);
        document.dispatchEvent(customEvent);
        
        showCode(`
// Emitir evento de celebración
emitCelebration.addEventListener('click', () => {
    const celebrationData = {
        message: '¡Operación completada con éxito!',
        timestamp: new Date().toISOString(),
        type: 'success',
        confetti: true
    };
    
    const customEvent = new CustomEvent('celebration', {
        detail: celebrationData,
        bubbles: true,
        cancelable: true
    });
    
    document.dispatchEvent(customEvent);
});
        `);
    });
    
    emitNotification.addEventListener('click', () => {
        const notificationData = {
            title: 'Nueva notificación del sistema',
            message: 'Tu acción ha sido procesada correctamente',
            priority: Math.random() > 0.5 ? 'high' : 'normal',
            timestamp: Date.now(),
            sender: 'Sistema'
        };
        
        const customEvent = createCustomEvent('notification', notificationData);
        document.dispatchEvent(customEvent);
        
        showCode(`
// Emitir evento de notificación
emitNotification.addEventListener('click', () => {
    const notificationData = {
        title: 'Nueva notificación del sistema',
        message: 'Tu acción ha sido procesada correctamente',
        priority: '${notificationData.priority}',
        timestamp: ${notificationData.timestamp},
        sender: 'Sistema'
    };
    
    const customEvent = new CustomEvent('notification', {
        detail: notificationData,
        bubbles: true,
        cancelable: true
    });
    
    document.dispatchEvent(customEvent);
});
        `);
    });
    
    emitCustom.addEventListener('click', () => {
        const actions = ['user_interaction', 'system_update', 'data_sync', 'cache_clear'];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        
        const customData = {
            action: randomAction,
            data: {
                id: Math.floor(Math.random() * 1000),
                value: Math.random() * 100,
                color: '#' + Math.floor(Math.random() * 16777215).toString(16)
            },
            metadata: {
                source: 'user_action',
                timestamp: Date.now(),
                session: 'session_' + Math.floor(Math.random() * 100)
            }
        };
        
        const customEvent = createCustomEvent('customEvent', customData);
        document.dispatchEvent(customEvent);
        
        showCode(`
// Emitir evento completamente personalizado
emitCustom.addEventListener('click', () => {
    const customData = {
        action: '${randomAction}',
        data: {
            id: ${customData.data.id},
            value: ${customData.data.value.toFixed(2)},
            color: '${customData.data.color}'
        },
        metadata: {
            source: '${customData.metadata.source}',
            timestamp: ${customData.metadata.timestamp},
            session: '${customData.metadata.session}'
        }
    };
    
    const customEvent = new CustomEvent('customEvent', {
        detail: customData,
        bubbles: true,
        cancelable: true
    });
    
    document.dispatchEvent(customEvent);
    
    // Los eventos personalizados permiten:
    // ✅ Comunicación entre componentes
    // ✅ Arquitecturas event-driven
    // ✅ Desacoplar código
    // ✅ APIs más limpias y modulares
});
        `);
    });
    
    // Limpiar historial
    clearHistory.addEventListener('click', () => {
        eventHistory = [];
        celebrationCount = 0;
        notificationCount = 0;
        customCount = 0;
        
        celebrationCountDisplay.textContent = '0';
        notificationCountDisplay.textContent = '0';
        customCountDisplay.textContent = '0';
        
        updateEventHistory();
        showNotification('Historial limpiado', 'warning');
        
        showCode(`
// Limpiar historial de eventos personalizados
clearHistory.addEventListener('click', () => {
    eventHistory = [];
    celebrationCount = 0;
    notificationCount = 0;
    customCount = 0;
    
    updateCountersDisplay();
    updateEventHistory();
});
        `);
    });
}

// ========================================
// SECCIÓN 4: Propagación de Eventos
// ========================================

function initEventPropagation() {
    const bubbleOuter = document.getElementById('bubble-outer');
    const bubbleMiddle = document.getElementById('bubble-middle');
    const bubbleInner = document.getElementById('bubble-inner');
    const bubbleTarget = document.getElementById('bubble-target');
    const stopPropagationCheckbox = document.getElementById('stop-propagation');
    const preventDefaultCheckbox = document.getElementById('prevent-default');
    const propagationLogDisplay = document.getElementById('propagation-log');
    const clearPropagation = document.getElementById('clear-propagation');
    
    function addToPropagationLog(message, phase, element) {
        const timestamp = new Date().toLocaleTimeString();
        propagationLog.unshift(`[${timestamp}] ${phase}: ${message} (${element})`);
        if (propagationLog.length > 10) propagationLog = propagationLog.slice(0, 10);
        updatePropagationLog();
    }
    
    function updatePropagationLog() {
        if (propagationLog.length === 0) {
            propagationLogDisplay.innerHTML = '<p>Haz click en el botón para ver la propagación...</p>';
        } else {
            propagationLogDisplay.innerHTML = propagationLog.map(entry => 
                `<div class="log-entry">${entry}</div>`
            ).join('');
        }
    }
    
    // Event listeners con diferentes fases
    
    // Contenedor externo
    bubbleOuter.addEventListener('click', (e) => {
        addToPropagationLog('Click detectado', 'BUBBLE', 'Contenedor Externo');
        
        if (stopPropagationCheckbox.checked) {
            e.stopPropagation();
            addToPropagationLog('Propagación detenida', 'STOP', 'Contenedor Externo');
        }
        
        showCode(`
// Event Propagation - Contenedor Externo (Bubble)
bubbleOuter.addEventListener('click', (e) => {
    console.log('Contenedor externo clickeado');
    
    // Información del evento:
    // e.target.id: ${e.target.id} (elemento original clickeado)
    // e.currentTarget.id: ${e.currentTarget.id} (elemento con este listener)
    // e.eventPhase: ${e.eventPhase} (1=capture, 2=target, 3=bubble)
    
    ${stopPropagationCheckbox.checked ? 'e.stopPropagation(); // Propagación detenida aquí' : '// Propagación continúa hacia arriba'}
});
        `);
    });
    
    // Contenedor medio
    bubbleMiddle.addEventListener('click', (e) => {
        addToPropagationLog('Click detectado', 'BUBBLE', 'Contenedor Medio');
        
        if (stopPropagationCheckbox.checked) {
            e.stopPropagation();
            addToPropagationLog('Propagación detenida', 'STOP', 'Contenedor Medio');
        }
        
        showCode(`
// Event Propagation - Contenedor Medio (Bubble)
bubbleMiddle.addEventListener('click', (e) => {
    console.log('Contenedor medio clickeado');
    
    // El evento llega aquí después del target
    // e.target sigue siendo: ${e.target.id}
    // e.currentTarget ahora es: ${e.currentTarget.id}
    
    ${stopPropagationCheckbox.checked ? 'e.stopPropagation(); // Detener aquí' : '// Continúa hacia el contenedor externo'}
});
        `);
    });
    
    // Contenedor interno
    bubbleInner.addEventListener('click', (e) => {
        addToPropagationLog('Click detectado', 'BUBBLE', 'Contenedor Interno');
        
        if (stopPropagationCheckbox.checked) {
            e.stopPropagation();
            addToPropagationLog('Propagación detenida', 'STOP', 'Contenedor Interno');
        }
        
        showCode(`
// Event Propagation - Contenedor Interno (Bubble)
bubbleInner.addEventListener('click', (e) => {
    console.log('Contenedor interno clickeado');
    
    // Primer elemento padre del botón
    // e.target: ${e.target.id}
    // e.currentTarget: ${e.currentTarget.id}
    
    ${stopPropagationCheckbox.checked ? 'e.stopPropagation(); // No llega a más padres' : '// Sigue burbujeando hacia arriba'}
});
        `);
    });
    
    // Botón target
    bubbleTarget.addEventListener('click', (e) => {
        addToPropagationLog('Click en target', 'TARGET', 'Botón');
        
        if (preventDefaultCheckbox.checked) {
            e.preventDefault();
            addToPropagationLog('Acción por defecto prevenida', 'PREVENT', 'Botón');
        }
        
        if (stopPropagationCheckbox.checked) {
            e.stopPropagation();
            addToPropagationLog('Propagación detenida', 'STOP', 'Botón');
        }
        
        showCode(`
// Event Propagation - Botón Target
bubbleTarget.addEventListener('click', (e) => {
    console.log('Botón clickeado - ELEMENTO TARGET');
    
    // Este es el elemento original clickeado
    // e.target === e.currentTarget: ${e.target === e.currentTarget}
    // e.eventPhase: ${e.eventPhase} (2 = AT_TARGET)
    
    ${preventDefaultCheckbox.checked ? 'e.preventDefault(); // Prevenir acción por defecto' : '// Acción por defecto permitida'}
    ${stopPropagationCheckbox.checked ? 'e.stopPropagation(); // No burbujea a los padres' : '// El evento burbujea hacia los padres'}
    
    // Después de este handler, el evento burbujea:
    // Botón → Contenedor Interno → Contenedor Medio → Contenedor Externo
});
        `);
    });
    
    // También agregar listeners en fase de captura para demostración completa
    bubbleOuter.addEventListener('click', (e) => {
        addToPropagationLog('Click detectado', 'CAPTURE', 'Contenedor Externo');
    }, true); // true = useCapture
    
    bubbleMiddle.addEventListener('click', (e) => {
        addToPropagationLog('Click detectado', 'CAPTURE', 'Contenedor Medio');
    }, true);
    
    bubbleInner.addEventListener('click', (e) => {
        addToPropagationLog('Click detectado', 'CAPTURE', 'Contenedor Interno');
    }, true);
    
    // Limpiar log de propagación
    clearPropagation.addEventListener('click', () => {
        propagationLog = [];
        updatePropagationLog();
        
        showCode(`
// Limpiar log de propagación
clearPropagation.addEventListener('click', () => {
    propagationLog = [];
    updatePropagationLog();
    
    // El log se limpia pero los event listeners
    // siguen activos y funcionando
});
        `);
    });
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar referencia al panel de código
    codeDisplay = document.getElementById('code-display');
    
    // Inicializar todas las secciones
    initWindowEvents();
    initEventDelegation();
    initCustomEvents();
    initEventPropagation();
    
    // Mensaje inicial
    showCode(`
// DOM Bloque C4 - Eventos Avanzados
// Hora 5: Conceptos avanzados de eventos
console.log('¡Bloque C4 inicializado!');
console.log('Secciones disponibles:');
console.log('- Eventos de ventana (scroll, resize)');
console.log('- Event Delegation');
console.log('- Eventos personalizados (CustomEvent)');
console.log('- Propagación de eventos (capture/bubble)');
console.log('- stopPropagation() y preventDefault()');
    `);
    
    console.log('🚀 DOM Bloque C4 inicializado correctamente');
    console.log('Eventos avanzados cargados:', {
        'Window Events': '✅',
        'Event Delegation': '✅',
        'Custom Events': '✅',
        'Event Propagation': '✅'
    });
});
