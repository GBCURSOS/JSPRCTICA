
// Crear una cards... 

// crear los 3 parrafos.

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// Tercer parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = './images/02dos.jpg';

// Crear el Card..
const card = document.createElement('div');
card.classList.add('cardNueva');

// Se asigna la imagen al card...
card.appendChild(imagen);

// y el info
card.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.navegacion');
console.log(contenedor)
contenedor.appendChild(card); // al inicio info

console.log(parrafo1);
console.log(parrafo2);
console.log(card)
