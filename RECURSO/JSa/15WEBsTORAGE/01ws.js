// Ejemplo 1: localStorage con input
var localInput = document.getElementById("localInput");
localInput.value = localStorage.getItem("user-value") || "";
localInput.oninput = function () {
  localStorage.setItem("user-value", localInput.value);
};

// Ejemplo 2: Escuchar cambios en localStorage
window.addEventListener("storage", function (event) {
  if (event.key === "user-value") {
    document.getElementById("localOutput").textContent =
      "Valor actualizado: " + event.newValue;
  }
});

// Funciones para localStorage
function guardarLocal() {
  // Guardar primitiva
  localStorage.setItem("nombre", "Juan");

  // Guardar array
  let frutas = ["manzana", "pera", "uva"];
  localStorage.setItem("frutas", JSON.stringify(frutas));

  // Guardar objeto
  let persona = { nombre: "María", edad: 30 };
  localStorage.setItem("persona", JSON.stringify(persona));

  alert("Datos guardados en localStorage");
}

function obtenerLocal() {
  // Obtener primitiva
  let nombre = localStorage.getItem("nombre");

  // Obtener array
  let frutas = JSON.parse(localStorage.getItem("frutas"));

  // Obtener objeto
  let persona = JSON.parse(localStorage.getItem("persona"));

  document.getElementById("localOutput").innerHTML = `Nombre: ${nombre}<br>
                Frutas: ${frutas.join(", ")}<br>
                Persona: ${persona.nombre}, ${persona.edad} años`;
}

function eliminarLocal() {
  localStorage.removeItem("nombre");
  alert("Nombre eliminado de localStorage");
}

function limpiarLocal() {
  localStorage.clear();
  alert("localStorage limpiado");
}

// Funciones para sessionStorage
function guardarSession() {
  sessionStorage.setItem(
    "sesion",
    document.getElementById("sessionInput").value
  );
  alert("Dato guardado en sessionStorage");
}

function obtenerSession() {
  let sesion = sessionStorage.getItem("sesion");
  document.getElementById("sessionOutput").textContent =
    "Valor de sesión: " + sesion;
}
