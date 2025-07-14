// Configuración JSONBin.io
let JSONBIN_CONFIG = {
  API_KEY: null,
  BASE_URL: "https://api.jsonbin.io/v3/b",
};

let users = [];
let binId = null;
let isEditing = false;

const elements = {
  configButton: document.getElementById("config-button"),
  newBin: document.getElementById("new-bin"),
  clearConfig: document.getElementById("clear-config"),
  configModal: document.getElementById("config-modal"),
  configForm: document.getElementById("config-form"),
  cancelConfig: document.getElementById("cancel-config"),
  masterKey: document.getElementById("master-key"),
  binIdInput: document.getElementById("bin-id"),
  fetchUsers: document.getElementById("fetch-users"),
  loadUsers: document.getElementById("load-users"),
  saveUsers: document.getElementById("save-users"),
  userForm: document.getElementById("user-form"),
  formTitle: document.getElementById("form-title"),
  editIndex: document.getElementById("edit-index"),
  cancelEdit: document.getElementById("cancel-edit"),
  usersContainer: document.getElementById("users-container"),
  totalUsers: document.getElementById("total-users"),
  confirmModal: document.getElementById("confirm-modal"),
  confirmMessage: document.getElementById("confirm-message"),
  confirmYes: document.getElementById("confirm-yes"),
  confirmNo: document.getElementById("confirm-no"),
  logContainer: document.getElementById("log-container"),
};

// Inicialización
window.addEventListener("DOMContentLoaded", () => {
  loadConfig();
  setupEventListeners();
  updateConfigButton();
});

function loadConfig() {
  JSONBIN_CONFIG.API_KEY = localStorage.getItem("jsonbin_api_key");
  binId = localStorage.getItem("jsonbin_user_bin_id");
}

function saveConfig() {
  if (JSONBIN_CONFIG.API_KEY) {
    localStorage.setItem("jsonbin_api_key", JSONBIN_CONFIG.API_KEY);
  }
  if (binId) {
    localStorage.setItem("jsonbin_user_bin_id", binId);
  }
}

function clearConfig() {
  showConfirm(
    "¿Estás seguro de que quieres limpiar la configuración? Se perderá la conexión con JSONBin.",
    () => {
      localStorage.removeItem("jsonbin_api_key");
      localStorage.removeItem("jsonbin_user_bin_id");
      JSONBIN_CONFIG.API_KEY = null;
      binId = null;
      users = [];
      updateConfigButton();
      renderUsers();
      addLog("🗑️ Configuración limpiada", "warning");
    }
  );
}

function showConfigModal() {
  elements.masterKey.value = JSONBIN_CONFIG.API_KEY || "";
  elements.binIdInput.value = binId || "";
  elements.configModal.style.display = "flex";
}

function hideConfigModal() {
  elements.configModal.style.display = "none";
  elements.configForm.reset();
}

function handleConfigSubmit(e) {
  e.preventDefault();
  const apiKey = elements.masterKey.value.trim();
  const inputBinId = elements.binIdInput.value.trim();
  if (!apiKey) {
    addLog("❌ La Master Key es obligatoria", "error");
    return;
  }
  JSONBIN_CONFIG.API_KEY = apiKey;
  binId = inputBinId || null;
  saveConfig();
  updateConfigButton();
  hideConfigModal();
  addLog("✅ Configuración guardada exitosamente", "success");
}

function updateConfigButton() {
  if (JSONBIN_CONFIG.API_KEY) {
    elements.configButton.textContent = `✅ Configurado${
      binId ? ` (${binId.substring(0, 8)}...)` : ""
    }`;
    elements.configButton.className = "btn-config configured";
  } else {
    elements.configButton.textContent = "⚙️ Configurar JSONBin";
    elements.configButton.className = "btn-config not-configured";
  }
}

function setupEventListeners() {
  elements.configButton.addEventListener("click", showConfigModal);
  elements.newBin.addEventListener("click", createNewBin);
  elements.clearConfig.addEventListener("click", clearConfig);
  elements.configForm.addEventListener("submit", handleConfigSubmit);
  elements.cancelConfig.addEventListener("click", hideConfigModal);
  elements.fetchUsers.addEventListener("click", fetchRandomUsers);
  elements.loadUsers.addEventListener("click", loadUsersFromBin);
  elements.saveUsers.addEventListener("click", saveUsersToBin);
  elements.userForm.addEventListener("submit", handleFormSubmit);
  elements.cancelEdit.addEventListener("click", cancelEdit);
  elements.confirmYes.addEventListener("click", hideConfirm);
  elements.confirmNo.addEventListener("click", hideConfirm);
}

async function fetchRandomUsers() {
  try {
    addLog("🔄 Obteniendo usuarios de Random User API...", "info");
    elements.fetchUsers.disabled = true;
    elements.fetchUsers.textContent = "⏳ Cargando...";
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    users = data.results.map((user) => ({
      nombre: `${user.name.first} ${user.name.last}`,
      edad: user.dob.age,
      email: user.email,
      sitio: `https://github.com/${user.login.username}`,
    }));
    renderUsers();
    addLog(`✅ ${users.length} usuarios obtenidos exitosamente`, "success");
  } catch (error) {
    addLog(`❌ Error al obtener usuarios: ${error.message}`, "error");
  } finally {
    elements.fetchUsers.disabled = false;
    elements.fetchUsers.textContent = "👥 Obtener 10 Usuarios";
  }
}

async function saveUsersToBin() {
  if (!JSONBIN_CONFIG.API_KEY) {
    addLog(
      "❌ No hay API Key configurada. Configura JSONBin primero.",
      "error"
    );
    showConfigModal();
    return;
  }
  if (users.length === 0) {
    addLog("⚠️ No hay usuarios para guardar", "warning");
    return;
  }
  try {
    addLog("🔄 Guardando usuarios en JSONBin...", "info");
    elements.saveUsers.disabled = true;
    elements.saveUsers.textContent = "⏳ Guardando...";
    let url = JSONBIN_CONFIG.BASE_URL;
    let method = "POST";
    if (binId && binId.length > 10) {
      url = `${JSONBIN_CONFIG.BASE_URL}/${binId}`;
      method = "PUT";
    }
    addLog(`📍 URL: ${url}, Método: ${method}`, "info");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": JSONBIN_CONFIG.API_KEY,
      },
      body: JSON.stringify({ usuarios: users }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      if (
        response.status === 400 &&
        errorText.includes("Invalid Bin Id") &&
        method === "PUT"
      ) {
        addLog("⚠️ Bin ID inválido, creando nuevo bin...", "warning");
        binId = null;
        return saveUsersToBin();
      }
      addLog(`❌ Error ${response.status}: ${errorText}`, "error");
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
    const result = await response.json();
    if (result.metadata && result.metadata.id && method === "POST") {
      binId = result.metadata.id;
      saveConfig();
      updateConfigButton();
      addLog(`🆔 Bin ID creado: ${binId}`, "success");
    }
    addLog(`✅ ${users.length} usuarios guardados en JSONBin`, "success");
  } catch (error) {
    addLog(`❌ Error al guardar en JSONBin: ${error.message}`, "error");
  } finally {
    elements.saveUsers.disabled = false;
    elements.saveUsers.textContent = "💾 Guardar en JSONBin";
  }
}

async function loadUsersFromBin() {
  if (!JSONBIN_CONFIG.API_KEY) {
    addLog(
      "❌ No hay API Key configurada. Configura JSONBin primero.",
      "error"
    );
    showConfigModal();
    return;
  }
  if (!binId) {
    addLog("⚠️ No hay Bin ID configurado. Guarda datos primero.", "warning");
    return;
  }
  try {
    addLog("🔄 Cargando usuarios desde JSONBin...", "info");
    elements.loadUsers.disabled = true;
    elements.loadUsers.textContent = "⏳ Cargando...";
    const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}/${binId}/latest`, {
      headers: {
        "X-Master-Key": JSONBIN_CONFIG.API_KEY,
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      addLog(`❌ Error ${response.status}: ${errorText}`, "error");
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    users = data.record.usuarios || [];
    renderUsers();
    addLog(`✅ ${users.length} usuarios cargados desde JSONBin`, "success");
  } catch (error) {
    addLog(`❌ Error al cargar desde JSONBin: ${error.message}`, "error");
  } finally {
    elements.loadUsers.disabled = false;
    elements.loadUsers.textContent = "📥 Cargar desde JSONBin";
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  const userData = {
    nombre: document.getElementById("user-name").value.trim(),
    edad: parseInt(document.getElementById("user-age").value),
    email: document.getElementById("user-email").value.trim(),
    sitio: document.getElementById("user-site").value.trim(),
  };
  if (isEditing) {
    const index = parseInt(elements.editIndex.value);
    if (!isNaN(index) && index >= 0 && index < users.length) {
      users[index] = userData;
      addLog(`✏️ Usuario "${userData.nombre}" editado`, "info");
    }
    cancelEdit();
  } else {
    users = Array.isArray(users) ? users : [];
    users.push(userData);
    addLog(`➕ Usuario "${userData.nombre}" agregado`, "success");
  }
  elements.userForm.reset();
  renderUsers();
}

function editUser(index) {
  const user = users[index];
  document.getElementById("user-name").value = user.nombre;
  document.getElementById("user-age").value = user.edad;
  document.getElementById("user-email").value = user.email;
  document.getElementById("user-site").value = user.sitio;
  elements.editIndex.value = index;
  elements.formTitle.textContent = "✏️ Editar Usuario";
  elements.cancelEdit.style.display = "inline-block";
  isEditing = true;
  document
    .querySelector(".form-section")
    .scrollIntoView({ behavior: "smooth" });
}

function cancelEdit() {
  elements.userForm.reset();
  elements.editIndex.value = "";
  elements.formTitle.textContent = "➕ Agregar Nuevo Usuario";
  elements.cancelEdit.style.display = "none";
  isEditing = false;
}

function deleteUser(index) {
  const user = users[index];
  showConfirm(
    `¿Estás seguro de que quieres eliminar a "${user.nombre}"?`,
    () => {
      users.splice(index, 1);
      renderUsers();
      addLog(`🗑️ Usuario "${user.nombre}" eliminado`, "warning");
    }
  );
}

function createNewBin() {
  if (!JSONBIN_CONFIG.API_KEY) {
    addLog(
      "❌ No hay API Key configurada. Configura JSONBin primero.",
      "error"
    );
    showConfigModal();
    return;
  }
  showConfirm(
    "¿Crear un nuevo Bin? Esto creará un contenedor vacío y perderás la conexión con el Bin actual.",
    () => {
      binId = null;
      localStorage.removeItem("jsonbin_user_bin_id");
      updateConfigButton();
      addLog(
        "🆕 Preparado para crear nuevo Bin. Guarda usuarios para crearlo.",
        "info"
      );
    }
  );
}

function renderUsers() {
  elements.totalUsers.textContent = `Total: ${users.length}`;
  if (users.length === 0) {
    elements.usersContainer.innerHTML = `
            <div class="no-users">
                <p>🔍 No hay usuarios cargados</p>
                <p>Obtén usuarios de la API o carga desde JSONBin</p>
            </div>
        `;
    return;
  }
  elements.usersContainer.innerHTML = users
    .map(
      (user, index) => `
        <div class="user-card">
            <div class="user-header">
                <h4>${user.nombre}</h4>
                <div class="user-actions">
                    <button onclick="editUser(${index})" class="btn-edit" title="Editar">✏️</button>
                    <button onclick="deleteUser(${index})" class="btn-delete" title="Eliminar">🗑️</button>
                </div>
            </div>
            <div class="user-info">
                <p><strong>🎂 Edad:</strong> ${user.edad} años</p>
                <p><strong>📧 Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
                <p><strong>🌐 Sitio:</strong> <a href="${user.sitio}" target="_blank" rel="noopener">${user.sitio}</a></p>
            </div>
        </div>
    `
    )
    .join("");
}

function showConfirm(message, onConfirm) {
  elements.confirmMessage.textContent = message;
  elements.confirmModal.style.display = "flex";
  elements.confirmYes.onclick = () => {
    hideConfirm();
    onConfirm();
  };
}

function hideConfirm() {
  elements.confirmModal.style.display = "none";
}

function addLog(message, type = "info") {
  const timestamp = new Date().toLocaleTimeString();
  const logEntry = document.createElement("div");
  logEntry.className = `log-entry log-${type}`;
  logEntry.innerHTML = `
        <span class="timestamp">🕐 ${timestamp}</span>
        <span class="message">${message}</span>
    `;
  elements.logContainer.appendChild(logEntry);
  elements.logContainer.scrollTop = elements.logContainer.scrollHeight;
  while (elements.logContainer.children.length > 50) {
    elements.logContainer.removeChild(elements.logContainer.firstChild);
  }
}

window.addEventListener("click", (e) => {
  if (e.target === elements.confirmModal) hideConfirm();
  if (e.target === elements.configModal) hideConfigModal();
});
