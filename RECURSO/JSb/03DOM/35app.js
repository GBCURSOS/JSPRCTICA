/*
    https://dom.spec.whatwg.org/
    https://www.w3schools.com/js/js_htmldom.asp
    El DOM es una representación completamente orientada al objeto de la página web y 
    puede ser modificado con un lenguaje de script como JavaScript.
*/

document.body.style.backgroundColor = "red";
document.body.style.color = "yellow";
document.getElementById("btn").style.color = "brown";

console.log(window)

const btn = document.getElementById('btn')
const nombre = btn.nodeName
const css = btn.style
console.log('objeto:',btn)
console.log('nodeName:',nombre);
console.log('estilo:',css);