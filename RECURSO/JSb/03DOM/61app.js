
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('apellido', 'Florez');
localStorage.setItem('trabajo', 'desarrollador');
localStorage.setItem('direccion', 'Cll 23 5 40');

const nombre = localStorage.getItem('nombre');
const apellido = localStorage.getItem("apellido");
console.log('nombre',nombre,apellido);

setTimeout(() => localStorage.removeItem('nombre'),
 8000);
const anotherName = localStorage.getItem('nombre');
console.log('ya no existe:',anotherName);
setTimeout(() => localStorage.clear(),15000);
