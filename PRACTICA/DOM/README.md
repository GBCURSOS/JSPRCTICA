# 📝 Lista de Tareas - Proyecto Final DOM

## 🎯 Descripción del Proyecto

Este es el **proyecto final integrador** de la clase de 12 horas sobre DOM + Fetch API + JSON + LocalStorage. 

La aplicación es una **Lista de Tareas completa** que demuestra todos los conceptos aprendidos en clase.

## ✨ Características Principales

### 🔧 Funcionalidades CRUD
- ✅ **Crear** nuevas tareas con título, descripción y prioridad
- ✅ **Leer** y mostrar todas las tareas 
- ✅ **Actualizar** tareas existentes (editar)
- ✅ **Eliminar** tareas con confirmación

### 🎨 Interfaz de Usuario
- ✅ **Diseño moderno** y responsivo
- ✅ **Filtros**: Todas, Pendientes, Completadas
- ✅ **Búsqueda** en tiempo real
- ✅ **Estadísticas** dinámicas
- ✅ **Modal** para editar tareas

### 💾 Persistencia de Datos
- ✅ **LocalStorage** para guardado permanente
- ✅ **JSONPlaceholder** para datos iniciales (solo la primera vez)
- ✅ **Funciona offline** completamente

### 🌐 Fetch API (Para Aprendizaje)
- ✅ Carga datos iniciales desde JSONPlaceholder
- ✅ Demuestra GET, POST, PUT, DELETE
- ✅ Manejo de errores y promesas

## 🗂️ Estructura de Archivos

```
PRACTICA/DOM/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos CSS modernos y responsivos
├── app.js          # Lógica JavaScript completa
└── README.md       # Esta documentación
```

## 🚀 Cómo Usar

### 1. Abrir la Aplicación
- Abrir `index.html` en un navegador moderno
- O usar Live Server en VS Code

### 2. Agregar Tareas
1. Llenar el formulario "Agregar Nueva Tarea"
2. Seleccionar prioridad (Baja, Media, Alta)
3. Hacer clic en "Agregar Tarea"

### 3. Gestionar Tareas
- **Completar**: Marcar checkbox
- **Editar**: Clic en botón "Editar"
- **Eliminar**: Clic en botón "Eliminar"

### 4. Filtrar y Buscar
- Usar botones de filtro: Todas, Pendientes, Completadas
- Buscar en tiempo real con la caja de búsqueda

## 💻 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con Grid y Flexbox
- **JavaScript ES6+**: Lógica de la aplicación

### APIs y Almacenamiento
- **LocalStorage**: Persistencia local
- **Fetch API**: Peticiones HTTP
- **JSONPlaceholder**: API de prueba

## 🎓 Conceptos Demostrados

### DOM Manipulation
```javascript
// Selección de elementos
document.getElementById('taskForm')
document.querySelectorAll('.filter-btn')

// Modificación de contenido
container.innerHTML = filteredTasks.map(task => createTaskHTML(task)).join('');

// Eventos
document.addEventListener('DOMContentLoaded', function() {...})
```

### LocalStorage
```javascript
// Guardar datos
localStorage.setItem('todoTasks', JSON.stringify(tasks));

// Cargar datos
const savedTasks = localStorage.getItem('todoTasks');
tasks = JSON.parse(savedTasks);
```

### Fetch API
```javascript
// GET Request
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();

// POST Request
const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## 🔍 Funciones de Depuración

Abrir la consola del navegador y probar:

```javascript
// Demostración de Fetch API
demoFetchAPI();

// Exportar tareas a JSON
exportTasks();

// Limpiar tareas completadas
clearCompletedTasks();
```

## 📱 Responsivo

La aplicación es completamente responsiva y funciona en:
- 💻 **Desktop** (1200px+)
- 📱 **Tablet** (768px - 1199px)
- 📱 **Móvil** (320px - 767px)

## 🎯 Objetivos de Aprendizaje Cumplidos

### ✅ DOM Manipulation
- Selección de elementos
- Modificación de contenido
- Manejo de eventos
- Creación dinámica de elementos

### ✅ Fetch API
- Peticiones GET
- Peticiones POST
- Manejo de promesas
- Async/await

### ✅ JSON
- Manipulación de objetos JSON
- stringify() y parse()

### ✅ LocalStorage
- Guardar datos
- Cargar datos
- Persistencia local

### ✅ Proyecto Integrador
- CRUD completo
- Interfaz moderna
- Deploy ready (GitHub Pages)

## 🚀 Deploy

Para subir a GitHub Pages:

1. Crear repositorio en GitHub
2. Subir todos los archivos
3. Activar GitHub Pages en Settings
4. ¡La app funciona online!

## 📚 Recursos de Aprendizaje

- [MDN - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

**Proyecto creado para la clase de 12 horas: DOM + Fetch API + JSON + APIs**

🎓 **¡Felicidades por completar el proyecto final!** 🎉
