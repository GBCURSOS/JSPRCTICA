// Primero se selecciona...

const encabezado = document.querySelector(".cabeceralogo");
console.log(encabezado);

// acceso al texto:
console.log('innerText:',encabezado.innerText); 
console.log('textContent:',encabezado.textContent);
console.log('innerHTML:',encabezado.innerHTML);

/* Diferencias: 
si se coloca ese elemento visibility: hidden; en el CSS, 
1.innerText no puede acceder a ese contenido...
2.TextContent va a ignorar las etiquetas HTML y traer solo el texto
3.innerhTML trae el HTML...
*/

// se puede hacer encadenamiento
const textoEncabezado =
  document.querySelector(".cabeceralogo h1").textContent;
console.log("encadena: ", textoEncabezado);

// modificar EL HTML...
document.querySelector(".cabeceralogo h1").textContent = "NUEVO ENCABEZADO 1";

// otra opción...
const nuevoTexto = "NUEVO ENCABEZADO 2";
document.querySelector(".cabeceralogo h1").textContent = nuevoTexto;

// Como acceder a una  imagen...
const imagen = document.querySelector(".card img");
console.log("inicial: ", imagen.src);
// Cambiar la imagen...
imagen.src = "./images/02dos.jpg";
console.log("final: ", imagen.src);
