// Ejemplo 1: Información de usuario
function mostrarInfoUsuario() {
  const userInfo = document.getElementById("userInfo");
  const info = `
                ID: ${userInfo.dataset.id}
                Nombre: ${userInfo.dataset.name}
                Edad: ${userInfo.dataset.age}
                Ciudad: ${userInfo.dataset.city}
            `;
  alert(info);
}

// Ejemplo 2: Galería de imágenes
let currentImageIndex = 0;
function cambiarImagen() {
  const img = document.getElementById("galleryImage");
  const images = JSON.parse(img.dataset.images);
  currentImageIndex = (currentImageIndex + 1) % images.length;
  img.src = images[currentImageIndex];
}

// Ejemplo 3: Tooltips personalizados
document.querySelectorAll("[data-tooltip]").forEach((element) => {
  element.addEventListener("mouseover", function (e) {
    const tooltip = document.createElement("div");
    tooltip.textContent = this.dataset.tooltip;
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "black";
    tooltip.style.color = "white";
    tooltip.style.padding = "5px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
    document.body.appendChild(tooltip);

    this.addEventListener("mouseout", () => tooltip.remove(), { once: true });
  });
});

// Ejemplo 4: Filtrado de elementos
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", function () {
    const filter = this.dataset.filter;
    document.querySelectorAll("#listaAlimentos li").forEach((item) => {
      if (filter === "todos" || item.dataset.category === filter) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Ejemplo 5: Formulario dinámico
function validarFormulario() {
  const form = document.getElementById("dynamicForm");
  const errorsDiv = document.getElementById("formErrors");
  errorsDiv.innerHTML = "";
  let isValid = true;

  form.querySelectorAll("[data-validate]").forEach((input) => {
    if (input.dataset.validate === "required" && !input.value) {
      mostrarError(input);
      isValid = false;
    } else if (
      input.dataset.validate === "email" &&
      !/\S+@\S+\.\S+/.test(input.value)
    ) {
      mostrarError(input);
      isValid = false;
    }
  });

  if (isValid) {
    alert("Formulario válido!");
  }
}

function mostrarError(input) {
  const errorsDiv = document.getElementById("formErrors");
  const errorMessage = document.createElement("p");
  errorMessage.textContent = input.dataset.errorMessage;
  errorsDiv.appendChild(errorMessage);
}
