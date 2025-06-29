

/* childNodes - retorna todos los childNodes incluyendo espacio en blanco el cual es tratado como
                un nodo texto.

 children
 firstChild
 lastChild
*/

const result = document.querySelector('#result');
console.log('result',result)
const allChildren = result.childNodes;
console.log('All',allChildren);

const children = result.children;
console.log('child',children);

console.log('first',result.firstChild);
console.log('last',result.lastChild);
