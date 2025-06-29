

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const heading = document.querySelector('.heading');
console.log(heading);

function mensaje() {
  console.log('mensaje función encabezado');
}

btn.addEventListener('click', function() {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `Lorem ipsum dolor sit amet.`;
  container.appendChild(element);
});

container.addEventListener('click', function(e) {
  if (e.target.classList.contains('heading')) {
    console.log('mensaje contenedor');
  }
});

heading.addEventListener('click', mensaje);
