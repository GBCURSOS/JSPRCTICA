
const result = document.querySelector('#result');
const first = document.querySelector('.red');

// create empty element
const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('body div');
bodyDiv.appendChild(text);

document.body.insertBefore(bodyDiv, result);

const heading = document.createElement('h2');
const headingText = document.createTextNode('heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`small heading text`);
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);

document.body.appendChild(smallHeading)
document.body.replaceChild(smallHeading, bodyDiv);
console.log(result.children);
