
const first = document.querySelector('.first');
console.log('first',first)
console.log('next1',first.nextSibling)
console.log("next2", first.nextSibling.nextSibling);
const second = (first.nextSibling.nextSibling.
    style.color = 'red');
console.log('segundo',second);
const third1 = (first.
    nextSibling.
    nextSibling.
    nextSibling.
    nextSibling.
    style.color = "green");
console.log("next3", first.nextSibling.
    nextSibling.nextSibling);
console.log("next4", first.nextSibling.nextSibling.
    nextSibling.nextSibling);

const last = document.querySelector('#last');
console.log('last',last);
const third2 = last.previousSibling.previousSibling;
console.log('third',third2);
console.log("last next1", last.nextSibling);
console.log('last next2',last.nextSibling.nextSibling);
