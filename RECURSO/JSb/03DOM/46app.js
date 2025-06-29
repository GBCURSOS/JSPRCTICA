

const result = document.querySelector('#result');

// Crea un elemento nuevo
const bodyDiv = document.createElement('div');
bodyDiv.classList.add('divNueva')
// crea texto del nodo
const text = document.createTextNode('división');
bodyDiv.appendChild(text);

document.body.appendChild(bodyDiv);

// Otro elemento
const heading = document.createElement('h2');
const headingText = document.
    createTextNode('Encabezado');
heading.classList.add("blue");
heading.appendChild(headingText);

result.appendChild(heading);

console.log('result',result.children);
const body1 = document.querySelector('body')
console.log('body1',body1.children);
