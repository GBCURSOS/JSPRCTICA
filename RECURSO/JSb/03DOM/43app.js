// nodeValue
// textContent

const item = document.getElementById('special');
console.log('item',item)
console.log("firstChild", item.firstChild);
console.log('prueba1',item.value)
console.log("prueba2", item.nodeValue);
const value = item.firstChild.nodeValue;
console.log('value',value)
const easyValue = item.textContent;
console.log('easy',easyValue);
