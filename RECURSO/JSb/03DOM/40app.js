
const result = document.querySelector('#result');
console.log('result:',result)

// result.style.fontSize = 'x-large'
result.style.backgroundColor = "green";
result.style.color = "white";

const item = document.querySelector('.special');
console.log('item:',item);

const lastItem = document.querySelector('li:last-child');
console.log('last:',lastItem);

const list = document.querySelectorAll('.special');
console.log('specialAll:',list)

list.forEach(function(item) {
  console.log('forEach:',item);
  item.style.color = 'yellow';
});
