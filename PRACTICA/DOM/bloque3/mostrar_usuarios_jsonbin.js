// Configura tu clave y nombre de bin aquí
const X_Master_Key =
  "$2a$10$hRy3UlOroFFbiHzeJkzAauUCxieJ19toMGhlT1sENNLoOeJSAdygu";
const X_Bin_Name = "usuarios-demo";
const USUARIOS_KEY = "usuarios_jsonbin_id";
const USUARIOS = "usuarios_jsonbin";

async function obtenerUsuariosRandom() {
  const response = await fetch("https://randomuser.me/api/?results=5");
  const data = await response.json();
  // Extraer solo nombre, apellido, celular y foto
  return data.results.map((u) => ({
    nombre: u.name.first,
    apellido: u.name.last,
    celular: u.cell,
    foto: u.picture.large,
  }));
}

async function guardarEnJsonBin(usuarios) {
  const res = await fetch("https://api.jsonbin.io/v3/b", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": X_Master_Key,
      "X-Bin-Name": X_Bin_Name,
    },
    body: JSON.stringify(usuarios),
  });
  const data = await res.json();
  if (data && data.metadata && data.metadata.id) {
    localStorage.setItem(USUARIOS_KEY, data.metadata.id);
    return data.metadata.id;
  }
  throw new Error("No se pudo guardar en JSONBin");
}

async function leerDeJsonBin(binId) {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
    method: "GET",
    headers: {
      "X-Master-Key": X_Master_Key,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data.record;
}

async function putEnJsonBin(binId, usuarios) {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": X_Master_Key,
    },
    body: JSON.stringify(usuarios),
  });
  const data = await res.json();
  return data;
}

async function borrarBin(binId) {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
    method: "DELETE",
    headers: {
      "X-Master-Key": X_Master_Key,
    },
  });
  if (res.ok) {
    // Borra también la información en localStorage
    localStorage.removeItem(USUARIOS_KEY);
    document.getElementById("usuarios").innerHTML =
      "<em>Bin y datos locales borrados.</em>";
  } else {
    alert("No se pudo borrar el bin.");
  }
}

function toggleCase(str) {
  return str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase();
}

function mostrarUsuarios(usuarios, binId) {
  const cont = document.getElementById("usuarios");
  if (!usuarios || !usuarios.length) {
    cont.innerHTML = "<em>No hay usuarios para mostrar.</em>";
    return;
  }
  cont.innerHTML = usuarios
    .map(
      (u, idx) => `
    <div class="usuario">
      <img src="${u.foto}" alt="Foto de ${u.nombre} ${u.apellido}">
      <div class="info">
        <div class="nombre">${u.nombre} ${u.apellido}</div>
        <div class="celular">${u.celular}</div>
        <button class="toggle-case" data-idx="${idx}">Toggle Mayúsculas/Minúsculas</button>
      </div>
    </div>
  `
    )
    .join("");
  // Listeners para los botones toggle
  cont.querySelectorAll(".toggle-case").forEach((btn) => {
    btn.addEventListener("click", async function () {
      const i = +btn.dataset.idx;
      usuarios[i].nombre = toggleCase(usuarios[i].nombre);
      usuarios[i].apellido = toggleCase(usuarios[i].apellido);
      localStorage.setItem(USUARIOS, JSON.stringify(usuarios));
      await putEnJsonBin(binId, usuarios);
      mostrarUsuarios(usuarios, binId);
    });
  });
}

function agregarBotonBorrado(binId) {
  let btn = document.getElementById("borrar-bin");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "borrar-bin";
    btn.textContent = "Borrado de bin";
    btn.style.margin = "20px 0";
    document.body.insertBefore(btn, document.getElementById("usuarios"));
  }
  btn.onclick = () => {
    if (confirm("¿Seguro que quieres borrar el bin y los datos locales?")) {
      borrarBin(binId);
    }
  };
}

// Modifica flujoPrincipal para agregar el botón después de mostrar usuarios
async function flujoPrincipal() {
  let binId = localStorage.getItem(USUARIOS_KEY);
  let usuarios;
  if (!binId) {
    usuarios = await obtenerUsuariosRandom();
    binId = await guardarEnJsonBin(usuarios);
  }
  usuarios = await leerDeJsonBin(binId);
  localStorage.setItem(USUARIOS, JSON.stringify(usuarios));
  mostrarUsuarios(usuarios, binId);
  agregarBotonBorrado(binId);
}

document.addEventListener("DOMContentLoaded", flujoPrincipal);
