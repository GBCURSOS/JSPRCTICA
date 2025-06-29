

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

console.log('first',first)
const classValue1 = first.className;
console.log(classValue1);

second.className = 'colors text';

third.classList.add('text', 'colors');
console.log('antes',third.classList)
 
third.classList.remove('colors');
console.log("despues", third.classList);

let result = third.classList.contains('colors');
if (result) {
  console.log('tiene la clase colors');
} else {
  console.log("NO tiene la clase colors");
}

const classValue2 = third.classList;
console.log(classValue2);
