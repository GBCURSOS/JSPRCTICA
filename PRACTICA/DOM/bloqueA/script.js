// JavaScript para Hora 1-2: Seleccionar Elementos DOM

// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
  console.log("🎯 DOM cargado - Ejercicio de selección iniciado");

  // Obtener referencias a los botones
  const btnCaja1 = document.getElementById("btn-caja1");
  const btnCaja2 = document.getElementById("btn-caja2");
  const btnSeccion = document.getElementById("btn-seccion");
  const btnClaseAzul = document.getElementById("btn-clase-azul");
  const btnClaseVerde = document.getElementById("btn-clase-verde");
  const btnTodasCajas = document.getElementById("btn-todas-cajas");
  const btnLimpiar = document.getElementById("btn-limpiar");

  // Elemento donde mostrar el código
  const codigoMostrado = document.getElementById("codigo-mostrado");

  // Función para limpiar todas las selecciones
  function limpiarSelecciones() {
    const elementosSeleccionados = document.querySelectorAll(".seleccionado");
    elementosSeleccionados.forEach((elemento) => {
      console.log("Limpiando selección de:", elemento);
      elemento.classList.remove("seleccionado");
    });
  }

  // Función para mostrar código usado
  function mostrarCodigo(codigo) {
    codigoMostrado.textContent = codigo;
  }

  // Función para seleccionar y resaltar elemento
  function seleccionarElemento(elemento, codigo) {
    limpiarSelecciones();
    if (elemento) {
      elemento.classList.add("seleccionado");
      mostrarCodigo(codigo);
      console.log("Elemento seleccionado:", elemento);
    }
  }

  // Función para seleccionar múltiples elementos
  function seleccionarElementos(elementos, codigo) {
    limpiarSelecciones();
    if (elementos && elementos.length > 0) {
      elementos.forEach((elemento) => {
        elemento.classList.add("seleccionado");
      });
      mostrarCodigo(codigo);
      console.log("Elementos seleccionados:", elementos);
    }
  }

  // Event listeners para selección por ID
  btnCaja1.addEventListener("click", function () {
    const elemento = document.getElementById("caja1");
    const codigo = "const elemento = document.getElementById('caja1');";
    seleccionarElemento(elemento, codigo);
  });

  btnCaja2.addEventListener("click", function () {
    const elemento = document.getElementById("caja2");
    const codigo = "const elemento = document.getElementById('caja2');";
    seleccionarElemento(elemento, codigo);
  });

  btnSeccion.addEventListener("click", function () {
    const elemento = document.getElementById("contenedor-principal");
    const codigo =
      "const elemento = document.getElementById('contenedor-principal');";
    seleccionarElemento(elemento, codigo);
  });

  // Event listeners para selección por clase
  btnClaseAzul.addEventListener("click", function () {
    const elemento = document.querySelector(".caja-azul");
    const codigo = "const elemento = document.querySelector('.caja-azul');";
    seleccionarElemento(elemento, codigo);
  });

  btnClaseVerde.addEventListener("click", function () {
    const elemento = document.querySelector(".caja-verde");
    const codigo = "const elemento = document.querySelector('.caja-verde');";
    seleccionarElemento(elemento, codigo);
  });

  btnTodasCajas.addEventListener("click", function () {
    const elementos = document.querySelectorAll(".caja");
    const codigo = "const elementos = document.querySelectorAll('.caja');";
    seleccionarElementos(elementos, codigo);
  });

  // Event listener para limpiar
  btnLimpiar.addEventListener("click", function () {
    limpiarSelecciones();
    mostrarCodigo("// Selección limpiada");
    console.log("Selecciones limpiadas");
  });

  // Mostrar mensaje inicial
  mostrarCodigo(
    "// Haz clic en un botón para ver el código JavaScript utilizado"
  );

  console.log("📚 Métodos disponibles:");
  console.log("- getElementById(): Selecciona UN elemento por su ID");
  console.log("- querySelector(): Selecciona EL PRIMER elemento que coincida");
  console.log(
    "- querySelectorAll(): Selecciona TODOS los elementos que coincidan"
  );
});
