
const first = document.querySelector('.first');
console.log('first',first)
const idValue = first.getAttribute('id');
console.log('idValue',idValue);

const link = document.getElementById('link');
console.log('link',link)
const showLink = link.getAttribute('href');
console.log('showLink',showLink);
const showBase = link.attributes.href.textContent
console.log("showBase", showBase);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'se le asignó la clase first';
console.log('last',last);

const links = document.querySelectorAll('.first');
console.log('links',links);
