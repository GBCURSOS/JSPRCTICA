// Array de fotos demo (simula leer la carpeta fotos)
const fotos = [
  {
    archivo: "fotos/undraw_dreamer_gb41.svg",
    nombre: "Dreamer",
    descCorta: "Ilustración de una persona soñando.",
    descLarga:
      "Esta imagen representa a una persona en actitud soñadora, ideal para temas de creatividad y metas personales.",
  },
  {
    archivo: "fotos/undraw_images_of1m.svg",
    nombre: "Images",
    descCorta: "Imágenes y recuerdos.",
    descLarga:
      "Ilustración que simboliza la importancia de las imágenes y recuerdos en la vida cotidiana.",
  },
  {
    archivo: "fotos/undraw_landscape-mode_z2v5.svg",
    nombre: "Landscape Mode",
    descCorta: "Modo paisaje en dispositivos.",
    descLarga:
      "Representa el uso de dispositivos en modo horizontal, útil para explicar diseño responsivo.",
  },
  {
    archivo: "fotos/undraw_photo_895y.svg",
    nombre: "Photo",
    descCorta: "Tomando una foto.",
    descLarga:
      "Ilustración de una persona tomando una fotografía, perfecta para temas de fotografía y recuerdos.",
  },
  {
    archivo: "fotos/undraw_photograph_gwbm.svg",
    nombre: "Photograph",
    descCorta: "Fotografía artística.",
    descLarga:
      "Imagen que muestra el arte de la fotografía y la captura de momentos especiales.",
  },
  {
    archivo: "fotos/undraw_photos_09tf.svg",
    nombre: "Photos",
    descCorta: "Colección de fotos.",
    descLarga:
      "Ilustración de una colección de fotografías, ideal para galerías y álbumes.",
  },
  {
    archivo: "fotos/undraw_polaroid_qqdz.svg",
    nombre: "Polaroid",
    descCorta: "Foto tipo polaroid.",
    descLarga:
      "Representa el estilo clásico de las fotos polaroid, evocando nostalgia y recuerdos.",
  },
  {
    archivo: "fotos/undraw_quiet-street_v45k.svg",
    nombre: "Quiet Street",
    descCorta: "Calle tranquila.",
    descLarga:
      "Ilustración de una calle tranquila, ideal para temas de paz y tranquilidad urbana.",
  },
  {
    archivo: "fotos/undraw_tree-swing_5010.svg",
    nombre: "Tree Swing",
    descCorta: "Columpio en un árbol.",
    descLarga:
      "Imagen que muestra un columpio en un árbol, evocando juegos y naturaleza.",
  },
];

// Renderizar galería de fotos
const fotosMain = document.getElementById("fotos-main");
const listadoFotos = document.getElementById("listado-fotos");
fotos.forEach((foto, idx) => {
  // Foto en galería
  const fotoDiv = document.createElement("div");
  fotoDiv.className = "foto-item";
  fotoDiv.innerHTML = `<img src="${foto.archivo}" alt="${foto.nombre}" class="foto-img" /><h3>${foto.nombre}</h3><p>${foto.descCorta}</p>`;
  fotoDiv.addEventListener("click", () => mostrarModal(idx));
  fotosMain.appendChild(fotoDiv);
  // Nombre en listado
  const nombreDiv = document.createElement("div");
  nombreDiv.className = "foto-nombre";
  nombreDiv.textContent = foto.nombre;
  nombreDiv.addEventListener("click", () => mostrarModal(idx));
  listadoFotos.appendChild(nombreDiv);
});

// Modal
const modal = document.getElementById("modal-foto");
const closeModal = document.getElementById("close-modal");
function mostrarModal(idx) {
  const foto = fotos[idx];
  document.getElementById("modal-img").src = foto.archivo;
  document.getElementById("modal-nombre").textContent = foto.nombre;
  document.getElementById("modal-desc-corta").textContent = foto.descCorta;
  document.getElementById("modal-desc-larga").textContent = foto.descLarga;
  modal.classList.remove("oculto");
}
closeModal.addEventListener("click", () => {
  modal.classList.add("oculto");
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("oculto");
});
