document.getElementById("paragraph").textContent = "Esta es una prueba del uso del DOM";
console.log(document.body)

let element = document.createElement("p");
element.textContent = "Creación de un Elemento a través de JS usando el DOM";
document.body.appendChild(element); 

window.alert('Prueba del Windows Alert')
let edad = prompt('Digite un número: ')
console.log(edad)

let result = window.confirm('mensaje de confirmación')
console.log(result)

let canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400

let ctx = canvas.getContext('2d')
ctx.font = '30px Cursive'
ctx.fillText('Esta es una prueba',50,50)
document.body.appendChild(canvas)

let svg = document.createElementNS('http://www.w3.org/2000/svg', "svg");
svg.width = 500;
svg.height = 50;
let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
text.setAttribute("x", "0");
text.setAttribute("y", "50");
text.style.fontFamily = "Times New Roman";
text.style.fontSize = "45";
text.textContent = "Prueba de SVG";
svg.appendChild(text);
document.body.appendChild(svg);

let img = new Image();
img.src = "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg";
document.body.appendChild(img);


