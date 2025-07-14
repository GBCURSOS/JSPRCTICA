// ========================================
// DOM BLOQUE C3 - EVENTOS DE FORMULARIOS
// Hora 5: Interacciones con formularios
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
// SECCIÓN 1: Inputs y Validación
// ========================================

function initInputValidation() {
  const nombreInput = document.getElementById("nombre-input");
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const bioTextarea = document.getElementById("bio-textarea");

  const resultDisplay = document.getElementById("result-display");
  const btnValidateForm = document.getElementById("btn-validate-form");
  const btnClearForm = document.getElementById("btn-clear-form");

  // Validación en tiempo real para nombre
  nombreInput.addEventListener("input", (e) => {
    const value = e.target.value;
    const formGroup = e.target.parentElement;
    const message = formGroup.querySelector(".validation-message");

    if (value.length >= 2) {
      formGroup.classList.remove("invalid");
      formGroup.classList.add("valid");
      message.textContent = "✓ Nombre válido";
      message.className = "validation-message success";
    } else {
      formGroup.classList.remove("valid");
      formGroup.classList.add("invalid");
      message.textContent = "✗ El nombre debe tener al menos 2 caracteres";
      message.className = "validation-message error";
    }

    showCode(`
// Validación en tiempo real con evento 'input'
nombreInput.addEventListener('input', (e) => {
    const value = e.target.value;
    
    if (value.length >= 2) {
        // Nombre válido
        formGroup.classList.add('valid');
        showSuccessMessage('✓ Nombre válido');
    } else {
        // Nombre inválido
        formGroup.classList.add('invalid');
        showErrorMessage('✗ Mínimo 2 caracteres');
    }
});
        `);
  });

  // Validación para email
  emailInput.addEventListener("blur", (e) => {
    const value = e.target.value;
    const formGroup = e.target.parentElement;
    const message = formGroup.querySelector(".validation-message");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
      formGroup.classList.remove("invalid");
      formGroup.classList.add("valid");
      message.textContent = "✓ Email válido";
      message.className = "validation-message success";
    } else {
      formGroup.classList.remove("valid");
      formGroup.classList.add("invalid");
      message.textContent = "✗ Formato de email inválido";
      message.className = "validation-message error";
    }

    showCode(`
// Validación con evento 'blur' (al perder foco)
emailInput.addEventListener('blur', (e) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    
    if (emailRegex.test(e.target.value)) {
        showSuccessMessage('✓ Email válido');
    } else {
        showErrorMessage('✗ Formato inválido');
    }
});
        `);
  });

  // Validación de contraseña
  passwordInput.addEventListener("input", (e) => {
    const value = e.target.value;
    const formGroup = e.target.parentElement;
    const message = formGroup.querySelector(".validation-message");

    const hasLength = value.length >= 6;
    const hasNumber = /\d/.test(value);
    const hasLetter = /[a-zA-Z]/.test(value);

    if (hasLength && hasNumber && hasLetter) {
      formGroup.classList.remove("invalid");
      formGroup.classList.add("valid");
      message.textContent = "✓ Contraseña segura";
      message.className = "validation-message success";
    } else {
      formGroup.classList.remove("valid");
      formGroup.classList.add("invalid");
      message.textContent = "✗ Mínimo 6 caracteres, incluir número y letra";
      message.className = "validation-message error";
    }

    showCode(`
// Validación compleja de contraseña
passwordInput.addEventListener('input', (e) => {
    const value = e.target.value;
    
    const hasLength = value.length >= 6;
    const hasNumber = /\\d/.test(value);
    const hasLetter = /[a-zA-Z]/.test(value);
    
    if (hasLength && hasNumber && hasLetter) {
        showSuccessMessage('✓ Contraseña segura');
    } else {
        showErrorMessage('✗ Requisitos no cumplidos');
    }
});
        `);
  });

  // Contador de caracteres para textarea
  bioTextarea.addEventListener("input", (e) => {
    const value = e.target.value;
    const maxLength = 200;
    const remaining = maxLength - value.length;
    const formGroup = e.target.parentElement;
    let message = formGroup.querySelector(".char-counter");

    if (!message) {
      message = document.createElement("div");
      message.className = "char-counter";
      formGroup.appendChild(message);
    }

    message.textContent = `${value.length}/${maxLength} caracteres`;
    message.style.color = remaining < 20 ? "#ef4444" : "#6b7280";

    showCode(`
// Contador de caracteres en textarea
bioTextarea.addEventListener('input', (e) => {
    const value = e.target.value;
    const maxLength = 200;
    const remaining = maxLength - value.length;
    
    charCounter.textContent = \`\${value.length}/\${maxLength} caracteres\`;
    
    if (remaining < 20) {
        charCounter.style.color = '#ef4444'; // Rojo
    }
});
        `);
  });

  // Validar formulario completo
  btnValidateForm.addEventListener("click", () => {
    const formData = {
      nombre: nombreInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      bio: bioTextarea.value,
    };

    const isValid =
      formData.nombre.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.password.length >= 6 &&
      /\d/.test(formData.password) &&
      /[a-zA-Z]/.test(formData.password);

    resultDisplay.textContent = JSON.stringify(
      {
        datos: formData,
        valido: isValid,
        mensaje: isValid
          ? "Formulario válido ✓"
          : "Hay errores en el formulario ✗",
      },
      null,
      2
    );

    showCode(`
// Validación completa del formulario
btnValidateForm.addEventListener('click', () => {
    const formData = {
        nombre: nombreInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        bio: bioTextarea.value
    };
    
    const isValid = validateAllFields(formData);
    
    if (isValid) {
        console.log('Formulario válido, enviando...');
        submitForm(formData);
    } else {
        console.log('Errores encontrados');
        showErrors();
    }
});
        `);
  });

  // Limpiar formulario
  btnClearForm.addEventListener("click", () => {
    nombreInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    bioTextarea.value = "";

    // Limpiar clases de validación
    document.querySelectorAll(".form-group").forEach((group) => {
      group.classList.remove("valid", "invalid");
    });

    // Limpiar mensajes
    document.querySelectorAll(".validation-message").forEach((msg) => {
      msg.style.display = "none";
    });

    resultDisplay.textContent = "";

    showCode(`
// Limpiar formulario y validaciones
btnClearForm.addEventListener('click', () => {
    // Limpiar valores
    form.reset();
    
    // Limpiar clases de validación
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('valid', 'invalid');
    });
    
    // Limpiar mensajes
    clearValidationMessages();
});
        `);
  });
}

// ========================================
// SECCIÓN 2: Checkbox y Radio
// ========================================

function initCheckboxRadioEvents() {
  const checkboxes = document.querySelectorAll('input[name="hobbies"]');
  const radioButtons = document.querySelectorAll('input[name="plan"]');
  const checkboxInfo = document.getElementById("checkbox-info");
  const radioInfo = document.getElementById("radio-info");

  // Eventos para checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const selectedHobbies = Array.from(checkboxes)
        .filter((cb) => cb.checked)
        .map((cb) => cb.value);

      checkboxInfo.innerHTML = `
                <strong>Hobbies seleccionados:</strong><br>
                ${
                  selectedHobbies.length > 0
                    ? selectedHobbies.join(", ")
                    : "Ninguno"
                }
                <br><small>Total: ${selectedHobbies.length}</small>
            `;

      showCode(`
// Eventos de checkbox - Selección múltiple
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const selectedHobbies = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        console.log('Hobbies seleccionados:', selectedHobbies);
        
        // e.target.checked: ${e.target.checked}
        // e.target.value: '${e.target.value}'
        // Total seleccionados: ${selectedHobbies.length}
    });
});
            `);
    });
  });

  // Eventos para radio buttons
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) {
        const planData = {
          plan: e.target.value,
          precio: e.target.getAttribute("data-price"),
          descripcion: e.target.getAttribute("data-desc"),
        };

        radioInfo.innerHTML = `
                    <strong>Plan seleccionado:</strong> ${planData.plan}<br>
                    <strong>Precio:</strong> ${planData.precio}<br>
                    <strong>Descripción:</strong> ${planData.descripcion}
                `;

        showCode(`
// Eventos de radio button - Selección única
radioButtons.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.checked) {
            const planData = {
                plan: e.target.value,
                precio: e.target.getAttribute('data-price'),
                descripcion: e.target.getAttribute('data-desc')
            };
            
            console.log('Plan seleccionado:', planData);
            
            // Solo un radio button puede estar seleccionado
            // e.target.checked: ${e.target.checked}
            // e.target.value: '${e.target.value}'
        }
    });
});
                `);
      }
    });
  });
}

// ========================================
// SECCIÓN 3: Select y Eventos
// ========================================

function initSelectEvents() {
  const paisSelect = document.getElementById("pais-select");
  const ciudadSelect = document.getElementById("ciudad-select");
  const selectInfo = document.getElementById("select-info");

  // Datos de ciudades por país
  const ciudadesPorPais = {
    españa: ["Madrid", "Barcelona", "Valencia", "Sevilla"],
    mexico: ["Ciudad de México", "Guadalajara", "Monterrey", "Puebla"],
    argentina: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
    colombia: ["Bogotá", "Medellín", "Cali", "Barranquilla"],
  };

  // Evento change en select de país
  paisSelect.addEventListener("change", (e) => {
    const paisSeleccionado = e.target.value;

    // Limpiar select de ciudades
    ciudadSelect.innerHTML = '<option value="">Seleccione una ciudad</option>';

    if (paisSeleccionado && ciudadesPorPais[paisSeleccionado]) {
      ciudadSelect.disabled = false;

      // Agregar ciudades del país seleccionado
      ciudadesPorPais[paisSeleccionado].forEach((ciudad) => {
        const option = document.createElement("option");
        option.value = ciudad.toLowerCase().replace(/\s+/g, "-");
        option.textContent = ciudad;
        ciudadSelect.appendChild(option);
      });
    } else {
      ciudadSelect.disabled = true;
    }

    updateSelectInfo();

    showCode(`
// Select dependiente - Evento 'change'
paisSelect.addEventListener('change', (e) => {
    const paisSeleccionado = e.target.value;
    
    // Limpiar select dependiente
    ciudadSelect.innerHTML = '<option value="">Seleccione...</option>';
    
    if (paisSeleccionado && ciudadesPorPais[paisSeleccionado]) {
        // Habilitar y llenar select de ciudades
        ciudadSelect.disabled = false;
        
        ciudadesPorPais[paisSeleccionado].forEach(ciudad => {
            const option = new Option(ciudad, ciudad.toLowerCase());
            ciudadSelect.appendChild(option);
        });
    }
    
    // e.target.value: '${e.target.value}'
    // e.target.selectedIndex: ${e.target.selectedIndex}
    // e.target.options[e.target.selectedIndex].text: '${
      e.target.options[e.target.selectedIndex].text
    }'
});
        `);
  });

  // Evento change en select de ciudad
  ciudadSelect.addEventListener("change", (e) => {
    updateSelectInfo();

    showCode(`
// Select de ciudad - Evento 'change'
ciudadSelect.addEventListener('change', (e) => {
    const ciudadSeleccionada = e.target.value;
    
    console.log('Ciudad seleccionada:', ciudadSeleccionada);
    
    // Información del evento:
    // e.target.value: '${e.target.value}'
    // e.target.selectedIndex: ${e.target.selectedIndex}
    // Texto visible: '${e.target.options[e.target.selectedIndex].text}'
});
        `);
  });

  function updateSelectInfo() {
    const paisValue = paisSelect.value;
    const ciudadValue = ciudadSelect.value;
    const paisText = paisSelect.options[paisSelect.selectedIndex].text;
    const ciudadText =
      ciudadSelect.selectedIndex > 0
        ? ciudadSelect.options[ciudadSelect.selectedIndex].text
        : "Ninguna";

    selectInfo.innerHTML = `
            <h5>Información de selección:</h5>
            <p><strong>País:</strong> ${paisText} (valor: ${paisValue})</p>
            <p><strong>Ciudad:</strong> ${ciudadText} (valor: ${ciudadValue})</p>
            <p><strong>Índice país:</strong> ${paisSelect.selectedIndex}</p>
            <p><strong>Índice ciudad:</strong> ${ciudadSelect.selectedIndex}</p>
            <p><strong>Total opciones país:</strong> ${paisSelect.options.length}</p>
            <p><strong>Total opciones ciudad:</strong> ${ciudadSelect.options.length}</p>
        `;
  }
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar referencia al panel de código
  codeDisplay = document.getElementById("code-display");

  // Inicializar todas las secciones
  initInputValidation();
  initCheckboxRadioEvents();
  initSelectEvents();

  // Mensaje inicial
  showCode(`
// DOM Bloque C3 - Eventos de Formularios
// Hora 5: Interacciones con formularios
console.log('¡Bloque C3 inicializado!');
console.log('Eventos disponibles: input, blur, change');
console.log('Validaciones: tiempo real, regex, campos dependientes');
console.log('Elementos: input, textarea, checkbox, radio, select');
    `);

  console.log("📝 DOM Bloque C3 inicializado correctamente");
  console.log("Eventos de formularios cargados:", {
    "Input validation": "✅",
    "Checkbox/Radio events": "✅",
    "Select dependent options": "✅",
    "Real-time validation": "✅",
  });
});
