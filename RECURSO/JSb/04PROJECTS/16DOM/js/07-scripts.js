
// Vamos a cambiar el color de texto del h1
const heading = document.querySelector('h1');

console.log(heading.style);
// heading.style.backgroundColor = 'red'; //  Nota como las propiedades que le puedes pasar, son similares a las de CSS, con la diferencia de que el guion se elimina y la segunda palabra su primer letra es mayuscula.

// heading.style.textTransform = 'uppercase';
// heading.style.fontFamily = 'Arial';

/* Ahora no se recomienda que se use style, ya que tu archivo JS puede ser muy grande, 
otra desventaja es que la apariencia debe ser responsabilidad única del CSS,
pero lo que si puedes hacer es agregar o quitar classes...*/

/* se selecciona el primer card, se puede ver que tiene un parrafo con una categoria
llamada concierto, eso cambia el color:
*/ 
const card = document.querySelector('.card');
console.log(card);
console.log(card.classList); 
// Classlist permite listar las classes
card.classList.add('nueva-clase'); 
// te permitirá añadir una clase.. 

// ahora si deseas eliminar una clase utilizas.remove
card.classList.remove('card'); 
console.log(card);




// Con esto te puedes ir dando una idea de todo lo que es posible hacer con JavaScript...