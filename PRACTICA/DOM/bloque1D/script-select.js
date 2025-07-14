// Usamos el mismo arreglo de fotos que en script-fotos.js
const fotos = [
  {
    archivo: "fotos/undraw_dreamer_gb41.svg",
    nombre: "Dreamer",
    descCorta: "Ilustración de una persona soñando.",
  },
  {
    archivo: "fotos/undraw_images_of1m.svg",
    nombre: "Images",
    descCorta: "Imágenes y recuerdos.",
  },
  {
    archivo: "fotos/undraw_landscape-mode_z2v5.svg",
    nombre: "Landscape Mode",
    descCorta: "Modo paisaje en dispositivos.",
  },
  {
    archivo: "fotos/undraw_photo_895y.svg",
    nombre: "Photo",
    descCorta: "Tomando una foto.",
  },
  {
    archivo: "fotos/undraw_photograph_gwbm.svg",
    nombre: "Photograph",
    descCorta: "Fotografía artística.",
  },
  {
    archivo: "fotos/undraw_photos_09tf.svg",
    nombre: "Photos",
    descCorta: "Colección de fotos.",
  },
  {
    archivo: "fotos/undraw_polaroid_qqdz.svg",
    nombre: "Polaroid",
    descCorta: "Foto tipo polaroid.",
  },
  {
    archivo: "fotos/undraw_quiet-street_v45k.svg",
    nombre: "Quiet Street",
    descCorta: "Calle tranquila.",
  },
  {
    archivo: "fotos/undraw_tree-swing_5010.svg",
    nombre: "Tree Swing",
    descCorta: "Columpio en un árbol.",
  },
];

const seleccionadas = [];
const fotosMain = document.getElementById("fotos-main");
const seleccionadasList = document.getElementById("seleccionadas-list");

function renderGaleria() {
  fotosMain.innerHTML = "";
  fotos.forEach((foto, idx) => {
    const fotoDiv = document.createElement("div");
    fotoDiv.className = "foto-item";
    fotoDiv.innerHTML = `
      <img src="${foto.archivo}" alt="${foto.nombre}" class="foto-img" />
      <h3>${foto.nombre}</h3>
      <p>${foto.descCorta}</p>
      <button class="btn-select" data-idx="${idx}">${
      seleccionadas.includes(idx) ? "Quitar" : "Seleccionar"
    }</button>
    `;
    fotoDiv
      .querySelector(".btn-select")
      .addEventListener("click", () => toggleSeleccion(idx));
    fotosMain.appendChild(fotoDiv);
  });
}

function renderSeleccionadas() {
  seleccionadasList.innerHTML = "";
  if (seleccionadas.length === 0) {
    seleccionadasList.innerHTML = "<p>No hay fotos seleccionadas.</p>";
    return;
  }
  seleccionadas.forEach((idx) => {
    const foto = fotos[idx];
    const item = document.createElement("div");
    item.className = "seleccion-item";
    item.innerHTML = `<img src="${foto.archivo}" alt="${foto.nombre}" class="mini-img" /> <span>${foto.nombre}</span>`;
    seleccionadasList.appendChild(item);
  });
}

function toggleSeleccion(idx) {
  const pos = seleccionadas.indexOf(idx);
  if (pos === -1) {
    seleccionadas.push(idx);
  } else {
    seleccionadas.splice(pos, 1);
  }
  renderGaleria();
  renderSeleccionadas();
}

// Inicializar
renderGaleria();
renderSeleccionadas();
