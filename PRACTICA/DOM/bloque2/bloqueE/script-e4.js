// Bloque E4: CRUD con JSONBin.io
// Objetivo: Implementar operaciones CRUD completas con API REST real

// Configuración de JSONBin.io
const API_CONFIG = {
  baseUrl: "https://api.jsonbin.io/v3",
  accountId: "6872bd7cc01c78519e5074c0",
  masterKey: "$2a$10$hRy3UlOroFFbiHzeJkzAauUCxieJ19toMGhlT1sENNLoOeJSAdygu",
  binId: null, // Se obtendrá dinámicamente
};

// Referencias a elementos DOM
const elements = {
  // Status
  apiStatus: document.getElementById("api-status"),
  binId: document.getElementById("bin-id"),
  totalUsers: document.getElementById("total-users"),

  // Read section
  readBtn: document.getElementById("read-btn"),
  usersCount: document.getElementById("users-count"),
  usersList: document.getElementById("users-list"),

  // Create section
  createName: document.getElementById("create-name"),
  createEmail: document.getElementById("create-email"),
  createAge: document.getElementById("create-age"),
  createCountry: document.getElementById("create-country"),
  createBtn: document.getElementById("create-btn"),
  clearFormBtn: document.getElementById("clear-form-btn"),
  createResult: document.getElementById("create-result"),

  // Update section
  updateId: document.getElementById("update-id"),
  updateName: document.getElementById("update-name"),
  updateEmail: document.getElementById("update-email"),
  updateAge: document.getElementById("update-age"),
  updateCountry: document.getElementById("update-country"),
  loadUserBtn: document.getElementById("load-user-btn"),
  updateBtn: document.getElementById("update-btn"),
  clearUpdateBtn: document.getElementById("clear-update-btn"),
  updateResult: document.getElementById("update-result"),

  // Delete section
  deleteId: document.getElementById("delete-id"),
  previewDeleteBtn: document.getElementById("preview-delete-btn"),
  deletePreview: document.getElementById("delete-preview"),
  deleteBtn: document.getElementById("delete-btn"),
  clearDeleteBtn: document.getElementById("clear-delete-btn"),
  deleteResult: document.getElementById("delete-result"),
};

// Variable global para almacenar usuarios
let currentUsers = [];

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  console.log("🗄️ Bloque E4: CRUD con JSONBin.io");
  console.log("🔧 Configurando conexión...");

  initializeApp();
  setupEventListeners();
});

/**
 * Inicializa la aplicación
 */
async function initializeApp() {
  try {
    await initializeOrCreateBin();
    updateStatus("✅ Conectado", "success");
  } catch (error) {
    console.error("❌ Error inicializando:", error);
    updateStatus("❌ Error de conexión", "error");
  }
}

/**
 * Inicializa o crea un bin para usuarios
 */
async function initializeOrCreateBin() {
  try {
    // Intentar obtener bins existentes
    const bins = await getBins();
    let userBin = bins.find((bin) => bin.name === "usuarios-crud");

    if (!userBin) {
      // Crear nuevo bin si no existe
      userBin = await createBin();
    }

    API_CONFIG.binId = userBin.id;
    elements.binId.textContent = userBin.id;

    console.log("📦 Bin configurado:", userBin.id);

    // Cargar usuarios iniciales
    await loadUsers();
  } catch (error) {
    console.error("Error configurando bin:", error);
    throw error;
  }
}

/**
 * Obtiene la lista de bins
 */
async function getBins() {
  const response = await fetch(`${API_CONFIG.baseUrl}/c/bins`, {
    headers: {
      "X-Master-Key": API_CONFIG.masterKey,
    },
  });

  if (!response.ok) {
    throw new Error(`Error obteniendo bins: ${response.status}`);
  }

  const data = await response.json();
  return data.record || [];
}

/**
 * Crea un nuevo bin para usuarios
 */
async function createBin() {
  const initialData = {
    users: [],
    metadata: {
      created: new Date().toISOString(),
      version: "1.0",
      description: "CRUD de usuarios para curso JavaScript",
    },
  };

  const response = await fetch(`${API_CONFIG.baseUrl}/b`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_CONFIG.masterKey,
      "X-Bin-Name": "usuarios-crud",
    },
    body: JSON.stringify(initialData),
  });

  if (!response.ok) {
    throw new Error(`Error creando bin: ${response.status}`);
  }

  const data = await response.json();
  console.log("✅ Nuevo bin creado:", data.metadata.id);

  return { id: data.metadata.id, name: "usuarios-crud" };
}

/**
 * Configura event listeners
 */
function setupEventListeners() {
  // Read
  elements.readBtn.addEventListener("click", loadUsers);

  // Create
  elements.createBtn.addEventListener("click", createUser);
  elements.clearFormBtn.addEventListener("click", clearCreateForm);

  // Update
  elements.loadUserBtn.addEventListener("click", loadUserForUpdate);
  elements.updateBtn.addEventListener("click", updateUser);
  elements.clearUpdateBtn.addEventListener("click", clearUpdateForm);

  // Delete
  elements.previewDeleteBtn.addEventListener("click", previewDelete);
  elements.deleteBtn.addEventListener("click", deleteUser);
  elements.clearDeleteBtn.addEventListener("click", clearDeleteForm);
}

/**
 * Actualiza el estado de la conexión
 */
function updateStatus(message, type) {
  elements.apiStatus.textContent = message;
  elements.apiStatus.className = `status-value ${type}`;
}

/**
 * OPERACIÓN READ - Cargar usuarios
 */
async function loadUsers() {
  try {
    setButtonLoading(elements.readBtn, true);
    showMessage(elements.usersList, "🔄 Cargando usuarios...", "loading");

    const response = await fetch(
      `${API_CONFIG.baseUrl}/b/${API_CONFIG.binId}/latest`,
      {
        headers: {
          "X-Master-Key": API_CONFIG.masterKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    currentUsers = data.record.users || [];

    displayUsers(currentUsers);
    updateUserCount(currentUsers.length);

    console.log("✅ Usuarios cargados:", currentUsers.length);
  } catch (error) {
    console.error("❌ Error cargando usuarios:", error);
    showMessage(elements.usersList, "❌ Error cargando usuarios", "error");
  } finally {
    setButtonLoading(elements.readBtn, false);
  }
}

/**
 * OPERACIÓN CREATE - Crear usuario
 */
async function createUser() {
  try {
    // Validar formulario
    const userData = {
      name: elements.createName.value.trim(),
      email: elements.createEmail.value.trim(),
      age: parseInt(elements.createAge.value) || 0,
      country: elements.createCountry.value.trim(),
    };

    if (!userData.name || !userData.email) {
      showResult(
        elements.createResult,
        "⚠️ Nombre y email son obligatorios",
        "warning"
      );
      return;
    }

    setButtonLoading(elements.createBtn, true);
    showResult(elements.createResult, "🔄 Creando usuario...", "loading");

    // Generar ID único
    const nextId =
      currentUsers.length > 0
        ? Math.max(...currentUsers.map((u) => u.id)) + 1
        : 1;
    userData.id = nextId;
    userData.created = new Date().toISOString();

    // Agregar a la lista actual
    currentUsers.push(userData);

    // Actualizar en JSONBin
    await updateBinData();

    // Limpiar formulario y mostrar éxito
    clearCreateForm();
    showResult(
      elements.createResult,
      `✅ Usuario creado con ID: ${userData.id}`,
      "success"
    );

    // Actualizar vista
    displayUsers(currentUsers);
    updateUserCount(currentUsers.length);

    console.log("✅ Usuario creado:", userData);
  } catch (error) {
    console.error("❌ Error creando usuario:", error);
    showResult(elements.createResult, "❌ Error creando usuario", "error");
  } finally {
    setButtonLoading(elements.createBtn, false);
  }
}

/**
 * OPERACIÓN UPDATE - Cargar usuario para editar
 */
async function loadUserForUpdate() {
  try {
    const userId = parseInt(elements.updateId.value);

    if (!userId) {
      showResult(elements.updateResult, "⚠️ Ingresa un ID válido", "warning");
      return;
    }

    const user = currentUsers.find((u) => u.id === userId);

    if (!user) {
      showResult(elements.updateResult, "❌ Usuario no encontrado", "error");
      return;
    }

    // Cargar datos en el formulario
    elements.updateName.value = user.name;
    elements.updateEmail.value = user.email;
    elements.updateAge.value = user.age;
    elements.updateCountry.value = user.country;

    showResult(
      elements.updateResult,
      `✅ Datos cargados para: ${user.name}`,
      "success"
    );
  } catch (error) {
    console.error("Error cargando usuario:", error);
    showResult(elements.updateResult, "❌ Error cargando usuario", "error");
  }
}

/**
 * OPERACIÓN UPDATE - Actualizar usuario
 */
async function updateUser() {
  try {
    const userId = parseInt(elements.updateId.value);

    if (!userId) {
      showResult(elements.updateResult, "⚠️ Ingresa un ID válido", "warning");
      return;
    }

    const userIndex = currentUsers.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      showResult(elements.updateResult, "❌ Usuario no encontrado", "error");
      return;
    }

    setButtonLoading(elements.updateBtn, true);
    showResult(elements.updateResult, "🔄 Actualizando usuario...", "loading");

    // Actualizar datos
    const updatedData = {
      name: elements.updateName.value.trim(),
      email: elements.updateEmail.value.trim(),
      age: parseInt(elements.updateAge.value) || 0,
      country: elements.updateCountry.value.trim(),
    };

    if (!updatedData.name || !updatedData.email) {
      showResult(
        elements.updateResult,
        "⚠️ Nombre y email son obligatorios",
        "warning"
      );
      return;
    }

    // Mantener datos originales importantes
    currentUsers[userIndex] = {
      ...currentUsers[userIndex],
      ...updatedData,
      updated: new Date().toISOString(),
    };

    // Actualizar en JSONBin
    await updateBinData();

    // Limpiar formulario y mostrar éxito
    clearUpdateForm();
    showResult(
      elements.updateResult,
      `✅ Usuario ${userId} actualizado correctamente`,
      "success"
    );

    // Actualizar vista
    displayUsers(currentUsers);

    console.log("✅ Usuario actualizado:", currentUsers[userIndex]);
  } catch (error) {
    console.error("❌ Error actualizando usuario:", error);
    showResult(elements.updateResult, "❌ Error actualizando usuario", "error");
  } finally {
    setButtonLoading(elements.updateBtn, false);
  }
}

/**
 * OPERACIÓN DELETE - Vista previa de eliminación
 */
function previewDelete() {
  try {
    const userId = parseInt(elements.deleteId.value);

    if (!userId) {
      showResult(elements.deleteResult, "⚠️ Ingresa un ID válido", "warning");
      elements.deletePreview.innerHTML = "";
      return;
    }

    const user = currentUsers.find((u) => u.id === userId);

    if (!user) {
      showResult(elements.deleteResult, "❌ Usuario no encontrado", "error");
      elements.deletePreview.innerHTML = "";
      return;
    }

    // Mostrar vista previa
    elements.deletePreview.innerHTML = `
            <div class="user-preview">
                <h4>⚠️ Usuario a eliminar:</h4>
                <div class="user-details">
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Nombre:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Edad:</strong> ${user.age}</p>
                    <p><strong>País:</strong> ${user.country}</p>
                </div>
                <p class="warning-text">⚠️ Esta acción no se puede deshacer</p>
            </div>
        `;

    elements.deletePreview.className = "delete-preview show";
    showResult(elements.deleteResult, "", "");
  } catch (error) {
    console.error("Error en vista previa:", error);
    showResult(
      elements.deleteResult,
      "❌ Error cargando vista previa",
      "error"
    );
  }
}

/**
 * OPERACIÓN DELETE - Eliminar usuario
 */
async function deleteUser() {
  try {
    const userId = parseInt(elements.deleteId.value);

    if (!userId) {
      showResult(elements.deleteResult, "⚠️ Ingresa un ID válido", "warning");
      return;
    }

    const userIndex = currentUsers.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      showResult(elements.deleteResult, "❌ Usuario no encontrado", "error");
      return;
    }

    setButtonLoading(elements.deleteBtn, true);
    showResult(elements.deleteResult, "🔄 Eliminando usuario...", "loading");

    // Eliminar usuario del array
    const deletedUser = currentUsers.splice(userIndex, 1)[0];

    // Actualizar en JSONBin
    await updateBinData();

    // Limpiar formulario y mostrar éxito
    clearDeleteForm();
    showResult(
      elements.deleteResult,
      `✅ Usuario "${deletedUser.name}" eliminado correctamente`,
      "success"
    );

    // Actualizar vista
    displayUsers(currentUsers);
    updateUserCount(currentUsers.length);

    console.log("✅ Usuario eliminado:", deletedUser);
  } catch (error) {
    console.error("❌ Error eliminando usuario:", error);
    showResult(elements.deleteResult, "❌ Error eliminando usuario", "error");
  } finally {
    setButtonLoading(elements.deleteBtn, false);
  }
}

/**
 * Actualiza los datos en JSONBin
 */
async function updateBinData() {
  const dataToSave = {
    users: currentUsers,
    metadata: {
      updated: new Date().toISOString(),
      totalUsers: currentUsers.length,
      version: "1.0",
    },
  };

  const response = await fetch(`${API_CONFIG.baseUrl}/b/${API_CONFIG.binId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_CONFIG.masterKey,
    },
    body: JSON.stringify(dataToSave),
  });

  if (!response.ok) {
    throw new Error(`Error actualizando datos: ${response.status}`);
  }

  console.log("💾 Datos guardados en JSONBin");
}

/**
 * Muestra la lista de usuarios
 */
function displayUsers(users) {
  if (users.length === 0) {
    elements.usersList.innerHTML =
      '<p class="empty-message">No hay usuarios registrados</p>';
    return;
  }

  const usersHtml = users
    .map(
      (user) => `
        <div class="user-card">
            <div class="user-header">
                <span class="user-id">ID: ${user.id}</span>
                <span class="user-name">${user.name}</span>
            </div>
            <div class="user-details">
                <p>📧 ${user.email}</p>
                <p>🎂 ${user.age} años</p>
                <p>🌍 ${user.country}</p>
                ${
                  user.created
                    ? `<p class="timestamp">📅 Creado: ${new Date(
                        user.created
                      ).toLocaleDateString()}</p>`
                    : ""
                }
                ${
                  user.updated
                    ? `<p class="timestamp">✏️ Actualizado: ${new Date(
                        user.updated
                      ).toLocaleDateString()}</p>`
                    : ""
                }
            </div>
        </div>
    `
    )
    .join("");

  elements.usersList.innerHTML = usersHtml;
}

/**
 * Actualiza el contador de usuarios
 */
function updateUserCount(count) {
  elements.usersCount.textContent = count;
  elements.totalUsers.textContent = count;
}

/**
 * Funciones de limpieza de formularios
 */
function clearCreateForm() {
  elements.createName.value = "";
  elements.createEmail.value = "";
  elements.createAge.value = "";
  elements.createCountry.value = "";
  elements.createResult.innerHTML = "";
}

function clearUpdateForm() {
  elements.updateId.value = "";
  elements.updateName.value = "";
  elements.updateEmail.value = "";
  elements.updateAge.value = "";
  elements.updateCountry.value = "";
  elements.updateResult.innerHTML = "";
}

function clearDeleteForm() {
  elements.deleteId.value = "";
  elements.deletePreview.innerHTML = "";
  elements.deletePreview.className = "delete-preview";
  elements.deleteResult.innerHTML = "";
}

/**
 * Funciones utilitarias
 */
function setButtonLoading(button, loading) {
  if (loading) {
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    button.textContent = "🔄 Procesando...";
  } else {
    button.disabled = false;
    button.textContent = button.dataset.originalText || button.textContent;
  }
}

function showResult(element, message, type) {
  element.innerHTML = message;
  element.className = `result-message ${type}`;
}

function showMessage(element, message, type) {
  element.innerHTML = `<p class="message ${type}">${message}</p>`;
}

// Log de inicialización
console.log("🔧 Script E4 cargado - CRUD con JSONBin.io");
