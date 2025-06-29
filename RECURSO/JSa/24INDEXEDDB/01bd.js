// Abrir o crear la base de datos
let db;
const request = indexedDB.open("TiendaDB", 1);

// Manejar errores al abrir la base de datos
request.onerror = function (event) {
  console.error("Error al abrir la base de datos:", event.target.errorCode);
};

// Manejar el evento de éxito al abrir la base de datos
request.onsuccess = function (event) {
  db = event.target.result;
  console.log("Base de datos abierta con éxito");
};

// Crear las tablas (almacenes de objetos) cuando se necesita actualizar la base de datos
request.onupgradeneeded = function (event) {
  db = event.target.result;

  // Crear almacén de clientes
  const storeClientes = db.createObjectStore("clientes", { keyPath: "id" });
  storeClientes.createIndex("nombre", "nombre", { unique: false });

  // Crear almacén de productos
  const storeProductos = db.createObjectStore("productos", { keyPath: "id" });
  storeProductos.createIndex("nombre", "nombre", { unique: false });

  // Crear almacén de pedidos
  const storePedidos = db.createObjectStore("pedidos", { keyPath: "id" });
  storePedidos.createIndex("clienteId", "clienteId", { unique: false });
  storePedidos.createIndex("productoId", "productoId", { unique: false });

  console.log("Almacenes creados");
};

// Función para agregar un cliente
function agregarCliente(cliente) {
  const transaction = db.transaction(["clientes"], "readwrite");
  const objectStore = transaction.objectStore("clientes");
  const request = objectStore.add(cliente);

  request.onsuccess = function () {
    console.log("Cliente agregado:", cliente);
  };

  request.onerror = function (event) {
    console.error("Error al agregar cliente:", event.target.error);
  };
}

// Función para agregar un producto
function agregarProducto(producto) {
  const transaction = db.transaction(["productos"], "readwrite");
  const objectStore = transaction.objectStore("productos");
  const request = objectStore.add(producto);

  request.onsuccess = function () {
    console.log("Producto agregado:", producto);
  };

  request.onerror = function (event) {
    console.error("Error al agregar producto:", event.target.error);
  };
}

// Función para agregar un pedido
function agregarPedido(pedido) {
  const transaction = db.transaction(["pedidos"], "readwrite");
  const objectStore = transaction.objectStore("pedidos");
  const request = objectStore.add(pedido);

  request.onsuccess = function () {
    console.log("Pedido agregado:", pedido);
  };

  request.onerror = function (event) {
    console.error("Error al agregar pedido:", event.target.error);
  };
}

// Ejemplo de uso
request.onsuccess = function (event) {
  db = event.target.result;

  // Agregar algunos clientes
  agregarCliente({ id: 1, nombre: "Juan Pérez" });
  agregarCliente({ id: 2, nombre: "Ana Gómez" });

  // Agregar algunos productos
  agregarProducto({ id: 1, nombre: "Laptop", precio: 1200 });
  agregarProducto({ id: 2, nombre: "Teléfono", precio: 800 });

  // Agregar un pedido (relacionando cliente y producto)
  agregarPedido({ id: 1, clienteId: 1, productoId: 1 }); // Juan compra una Laptop
};
