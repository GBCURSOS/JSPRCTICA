

/* Crear un nuevo enlace...
 primero es crear el elemento HTML
*/

const enlace = document.createElement('a');

// Segundo paso: crear el texto del enlace

enlace.textContent = 'Nuevo Enlace';

// Se asigna una ruta 
enlace.href = '/nuevo-enlace';

// Se agrega el enlace donde se requiere...

enlace.classList.add('enlace');

enlace.setAttribute('data-enlace', 'nuevo-enlace')

const navegacion = document.querySelector('.lista');
navegacion.appendChild(enlace);

console.log(enlace);

