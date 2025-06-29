// innerHTML
// textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log('div',div.textContent);
console.log('inner',list.innerHTML);
console.log('text',list.textContent);

const firstValue = 'esta es una prueba';

const ul = document.createElement('ul');
ul.innerHTML = `
<li class="item">${firstValue}</li>
<li>list item1</li> 
<li>list item2</li>
`;
document.body.appendChild(ul);

div.textContent = 
`<li class="item">${firstValue}</li>
<li>list item</li>
<li>list item</li>
`;
