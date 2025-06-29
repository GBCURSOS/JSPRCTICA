// File API, Blobs y FileReaders en JavaScript

// 1. Leer un archivo como string
function leerComoString(archivo) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();
    lector.onload = (evento) => resolve(evento.target.result);
    lector.onerror = (error) => reject(error);
    lector.readAsText(archivo);
  });
}

// 2. Leer un archivo como dataURL
function leerComoDataURL(archivo) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader();
    lector.onload = (evento) => resolve(evento.target.result);
    lector.onerror = (error) => reject(error);
    lector.readAsDataURL(archivo);
  });
}

// 3. Dividir (slice) un archivo
function dividirArchivo(archivo, inicio, fin) {
  return archivo.slice(inicio, fin);
}

// 4. Obtener las propiedades del archivo
function obtenerPropiedadesArchivo(archivo) {
  return {
    nombre: archivo.name,
    tipo: archivo.type,
    tamaño: archivo.size,
    ultimaModificacion: archivo.lastModified,
  };
}

// 5. Seleccionar múltiples archivos y restringir tipos de archivo
// (Este código iría en tu HTML)
/*
<input type="file" id="selectorArchivos" multiple accept=".txt,.pdf,.doc,.docx">
*/

// En tu JavaScript:
const selectorArchivos = document.getElementById("selectorArchivos");
selectorArchivos.addEventListener("change", (evento) => {
  const archivos = Array.from(evento.target.files);
  archivos.forEach((archivo) => {
    console.log(obtenerPropiedadesArchivo(archivo));
  });
});

// 6. Descarga del lado del cliente de un CSV usando Blob
function descargarCSV(datos, nombreArchivo) {
  const csv = datos.map((fila) => fila.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (navigator.msSaveBlob) {
    // Para IE 10+
    navigator.msSaveBlob(blob, nombreArchivo);
  } else {
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", nombreArchivo);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Ejemplo de uso:
// leerComoString
const archivoTexto = new File(["Hola, mundo!"], "ejemplo.txt", {
  type: "text/plain",
});
leerComoString(archivoTexto).then((contenido) => console.log(contenido));

// leerComoDataURL
const archivoImagen = new File(["contenido de imagen"], "imagen.png", {
  type: "image/png",
});
leerComoDataURL(archivoImagen).then((dataURL) => console.log(dataURL));

// dividirArchivo
const archivoGrande = new File(["Contenido muy largo..."], "grande.txt", {
  type: "text/plain",
});
const fragmento = dividirArchivo(archivoGrande, 0, 10);
console.log(fragmento);

// obtenerPropiedadesArchivo
console.log(obtenerPropiedadesArchivo(archivoTexto));

// descargarCSV
const datosCSV = [
  ["Nombre", "Edad", "Ciudad"],
  ["Juan", "30", "Madrid"],
  ["María", "25", "Barcelona"],
];
descargarCSV(datosCSV, "usuarios.csv");
