
/* Todo en JavaScript esta conectado en el document, 
la forma de moverse entre los diferentes elementos
se le conoce como Traversing the DOM, ir recorriendolo..
*/

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

/* Cada elemento en la navegación los diferentes elementos se les conoce como Nodos... 
y se pueden listar...
console.log(navegacion.childNodes);
*/

// también existe algo llamado Children
console.log(navegacion.children)

/* La diferencia es que childNodes muestra todo,
te muestra solo los elementos...
*/

// Hay mucha información aqui...
console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un eleemnto
console.log(navegacion.children[0].nodeName) // Que etiqueta es...

// Por ejemplo
const card = document.querySelector('.card');
console.log('card',card)
console.log(card.nodeType);
console.log(card.nodeName);

/* 
  1 - Elemento
  2 - Atributo
  3 - Text node
  8 - Commentario
  9 - Documento
 10 doctype
*/
/*
 En JS se puede seleccionar un elemento y navegar en sus diferentes elementos... 
por ejemplo el card...
*/

console.log(card.children);

// Se quiere acceder al div con la clase de info ...
console.log(card.children[1]);

// Se quieree acceder a los elementos hijos de info...
console.log(card.children[1].children[1]);

// Acceder al titulo
console.log(card.children[1].children[1].textContent);

// Modificar ese titulo 
card.children[1].children[1].textContent = 'Cambiando el Texto con ...'


// Como acceder a la imagen...
console.log(card.children);
console.log(card.children[3]);
console.log(card.children[3].children[0].currentSrc);

/* Children es una buena forma de acceder a los elementos por su posición,
pero se quiere al primer o último enlace...
*/

console.log(navegacion.lastChild);
console.log(navegacion.lastElementChild);


// Acceder al primero
console.log(navegacion.firstChild)
console.log(navegacion.firstElementChild);

// Cambiar el primer texto...
//navegacion.firstElementChild.textContent = 'Nuevo Enlace...'


// Se avanza hacia la derecha, igual hacia la izquierda
const enlace = document.querySelector('#menuprincipal');
console.log('enlace',enlace);

// Hay diferente formas...

console.log(enlace.parentNode)
console.log(enlace.parentElement)

// También se puede ir al padre del padre...
console.log(enlace.parentElement.parentElement)


// En JavaScript también es posible de hacer traversing a elementos que estan en el mismo nivel , digamos el vecino aunque en javascript se les conoce como hermanos...

console.log('sibling',enlace.nextElementSibling);
console.log(enlace.nextElementSibling.nextElementSibling);
console.log(card.nextElementSibling);


// También hay una forma de ir digamos en la otra dirección...


const ultimoCard = document.querySelector('li:nth-child(2)');
console.log(ultimoCard)

console.log(ultimoCard.previousElementSibling);