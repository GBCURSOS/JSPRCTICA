

/* querySelector retorna máximo 1 elemento, 
si hay múltiples coincidencias solo va a retornar el primero...
*/

const card = document.querySelector('.card'); 
/* QuerySelctor utiliza una sintaxis como de selector de CSS, 
por lo tanto si se requiere seleccionar una clase, 
debe tener un punto al inicio...
*/

// aunque hay varias cards, solo selecciona una
console.log(card);

const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card... de hospedaje
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// seleccionar un ID
const formulario = document.querySelector('#formulario'); 
console.log(formulario);

// Si un selector no existe, 
const noExiste = document.querySelector('#no-existe');
console.log(noExiste);

// seleccionar etiquetas 
const nav = document.querySelector('nav');
console.log(nav);