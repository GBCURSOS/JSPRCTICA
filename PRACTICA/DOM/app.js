/* ===== PROYECTO FINAL - LISTA DE TAREAS ===== */
/* JavaScript con DOM + LocalStorage + Fetch API */

// ===== VARIABLES GLOBALES =====
let tasks = [];
let currentFilter = 'todas';
let editingTaskId = null;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Aplicación de Lista de Tareas iniciada');
    
    // Cargar tareas desde LocalStorage
    loadTasksFromLocalStorage();
    
    // Si no hay tareas, cargar datos iniciales desde JSONPlaceholder
    if (tasks.length === 0) {
        loadInitialDataFromAPI();
    }
    
    // Inicializar eventos
    initializeEventListeners();
    
    // Renderizar interfaz
    renderTasks();
    updateStats();
});

// ===== CARGA DE DATOS =====
function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        console.log(`📂 Cargadas ${tasks.length} tareas desde LocalStorage`);
    }
}

async function loadInitialDataFromAPI() {
    try {
        console.log('🌐 Cargando datos iniciales desde JSONPlaceholder...');
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        // Convertir posts en tareas y tomar solo los primeros 5
        tasks = posts.slice(0, 5).map((post, index) => ({
            id: Date.now() + index,
            title: post.title,
            description: post.body.substring(0, 100) + '...',
            priority: ['baja', 'media', 'alta'][Math.floor(Math.random() * 3)],
            completed: false,
            createdAt: new Date().toISOString()
        }));
        
        saveTasksToLocalStorage();
        renderTasks();
        updateStats();
        
        console.log('✅ Datos iniciales cargados correctamente');
        
    } catch (error) {
        console.error('❌ Error al cargar datos iniciales:', error);
        
        // Crear una tarea de ejemplo si falla la API
        tasks = [{
            id: Date.now(),
            title: 'Bienvenido a tu Lista de Tareas',
            description: 'Esta es una tarea de ejemplo. ¡Puedes editarla o eliminarla!',
            priority: 'media',
            completed: false,
            createdAt: new Date().toISOString()
        }];
        
        saveTasksToLocalStorage();
        renderTasks();
        updateStats();
    }
}

// ===== ALMACENAMIENTO =====
function saveTasksToLocalStorage() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
    console.log('💾 Tareas guardadas en LocalStorage');
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Formulario principal
    document.getElementById('taskForm').addEventListener('submit', handleAddTask);
    
    // Formulario de edición
    document.getElementById('editTaskForm').addEventListener('submit', handleEditTask);
    
    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilterChange);
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeEditModal();
        }
    });
}

// ===== MANEJO DE TAREAS =====
function handleAddTask(e) {
    e.preventDefault();
    
    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const priority = document.getElementById('taskPriority').value;
    
    if (!title) {
        alert('⚠️ Por favor ingresa un título para la tarea');
        return;
    }
    
    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        priority: priority,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.unshift(newTask); // Agregar al inicio
    saveTasksToLocalStorage();
    renderTasks();
    updateStats();
    
    // Limpiar formulario
    document.getElementById('taskForm').reset();
    
    console.log('✅ Nueva tarea agregada:', title);
}

function toggleTaskComplete(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage();
        renderTasks();
        updateStats();
        
        console.log(`🔄 Tarea ${task.completed ? 'completada' : 'pendiente'}:`, task.title);
    }
}

function deleteTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task && confirm(`¿Estás seguro de eliminar "${task.title}"?`)) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasksToLocalStorage();
        renderTasks();
        updateStats();
        
        console.log('🗑️ Tarea eliminada:', task.title);
    }
}

function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        editingTaskId = taskId;
        
        // Llenar formulario de edición
        document.getElementById('editTaskId').value = taskId;
        document.getElementById('editTaskTitle').value = task.title;
        document.getElementById('editTaskDescription').value = task.description;
        document.getElementById('editTaskPriority').value = task.priority;
        
        // Mostrar modal
        document.getElementById('editModal').style.display = 'flex';
        
        console.log('✏️ Editando tarea:', task.title);
    }
}

function handleEditTask(e) {
    e.preventDefault();
    
    const taskId = parseInt(document.getElementById('editTaskId').value);
    const title = document.getElementById('editTaskTitle').value.trim();
    const description = document.getElementById('editTaskDescription').value.trim();
    const priority = document.getElementById('editTaskPriority').value;
    
    const task = tasks.find(t => t.id === taskId);
    if (task && title) {
        task.title = title;
        task.description = description;
        task.priority = priority;
        
        saveTasksToLocalStorage();
        renderTasks();
        updateStats();
        closeEditModal();
        
        console.log('✅ Tarea actualizada:', title);
    }
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    editingTaskId = null;
}

// ===== FILTROS Y BÚSQUEDA =====
function handleFilterChange(e) {
    // Remover clase active de todos los botones
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Agregar clase active al botón clickeado
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.filter;
    renderTasks();
    
    console.log('🔍 Filtro cambiado a:', currentFilter);
}

function handleSearch(e) {
    renderTasks();
}

function getFilteredTasks() {
    let filteredTasks = [...tasks];
    
    // Filtrar por estado
    if (currentFilter === 'completadas') {
        filteredTasks = filteredTasks.filter(task => task.completed);
    } else if (currentFilter === 'pendientes') {
        filteredTasks = filteredTasks.filter(task => !task.completed);
    }
    
    // Filtrar por búsqueda
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    if (searchTerm) {
        filteredTasks = filteredTasks.filter(task => 
            task.title.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm)
        );
    }
    
    return filteredTasks;
}

// ===== RENDERIZADO =====
function renderTasks() {
    const container = document.getElementById('tasksContainer');
    const emptyMessage = document.getElementById('emptyMessage');
    const filteredTasks = getFilteredTasks();
    
    if (filteredTasks.length === 0) {
        container.innerHTML = '';
        emptyMessage.style.display = 'block';
        return;
    }
    
    emptyMessage.style.display = 'none';
    
    container.innerHTML = filteredTasks.map(task => createTaskHTML(task)).join('');
}

function createTaskHTML(task) {
    const date = new Date(task.createdAt).toLocaleDateString('es-ES');
    const priorityIcon = {
        'baja': '🟢',
        'media': '🟡', 
        'alta': '🔴'
    };
    
    return `
        <div class="task-item ${task.completed ? 'completed' : ''}">
            <div class="task-header">
                <div style="flex-grow: 1;">
                    <h3 class="task-title ${task.completed ? 'completed' : ''}">${task.title}</h3>
                    ${task.description ? `<p class="task-description">${task.description}</p>` : ''}
                </div>
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    ${task.completed ? 'checked' : ''} 
                    onchange="toggleTaskComplete(${task.id})"
                >
            </div>
            
            <div class="task-meta">
                <span class="task-priority priority-${task.priority}">
                    ${priorityIcon[task.priority]} ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
                <span class="task-date">📅 ${date}</span>
            </div>
            
            <div class="task-actions">
                <button class="btn-edit" onclick="editTask(${task.id})">
                    ✏️ Editar
                </button>
                <button class="btn-danger" onclick="deleteTask(${task.id})">
                    🗑️ Eliminar
                </button>
            </div>
        </div>
    `;
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    
    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;
}

// ===== FUNCIONES ADICIONALES =====

// Limpiar todas las tareas completadas
function clearCompletedTasks() {
    if (confirm('¿Eliminar todas las tareas completadas?')) {
        tasks = tasks.filter(task => !task.completed);
        saveTasksToLocalStorage();
        renderTasks();
        updateStats();
        console.log('🧹 Tareas completadas eliminadas');
    }
}

// Marcar todas como completadas
function markAllComplete() {
    tasks.forEach(task => task.completed = true);
    saveTasksToLocalStorage();
    renderTasks();
    updateStats();
    console.log('✅ Todas las tareas marcadas como completadas');
}

// Exportar tareas a JSON
function exportTasks() {
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mis-tareas.json';
    link.click();
    
    console.log('📤 Tareas exportadas');
}

// Demostración de Fetch API para aprendizaje
async function demoFetchAPI() {
    try {
        console.log('🌐 Demostración de Fetch API...');
        
        // GET - Obtener datos
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('GET Response:', data);
        
        // POST - Enviar datos
        const newPost = {
            title: 'Mi nueva tarea',
            body: 'Descripción de la tarea',
            userId: 1
        };
        
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost)
        });
        
        const postData = await postResponse.json();
        console.log('POST Response:', postData);
        
    } catch (error) {
        console.error('Error en demostración:', error);
    }
}

console.log('📝 Lista de Tareas cargada correctamente');
console.log('💡 Funciones disponibles: demoFetchAPI(), exportTasks(), clearCompletedTasks()');
