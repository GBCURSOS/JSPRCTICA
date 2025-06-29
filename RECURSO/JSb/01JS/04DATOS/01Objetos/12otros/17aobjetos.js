/*
function creaObjeto(nombre, color, material) {
  return {
    nombre: nombre,
    color: color,
    material: material,
  };
}

function generaAleatorioEnteroEnRango(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

let nombre = ["silla", "mesa", "alfombra", "sofá"];
let color = ["blanco", "azul", "amarillo", "verde", "rojo", "café"];
let material = ["madera", "plástico", "metálico"];

let cantidad = 5;
let catalogo = [];

for (let i = 0; i < cantidad; i++) {

  let inombre = generaAleatorioEnteroEnRango(0, nombre.length);
  let icolor = generaAleatorioEnteroEnRango(0, color.length);
  let imaterial = generaAleatorioEnteroEnRango(0, material.length);

  console.log("indices:", inombre, ":", icolor, ":", imaterial);

  let objeto = creaObjeto(nombre[inombre], color[icolor], material[imaterial]);

  catalogo.push(objeto);
}

console.log(catalogo);
console.log(catalogo[0].nombre);
console.log(catalogo[2].color);
console.log(catalogo[1].material);
// catalogo[1] = null;
console.log(catalogo);

console.log("\nof indica objeto");
for (let indice of catalogo) {
  console.log(` en la posición ${indice}`);
}

console.log("\nof muestra informacion");
for (let [indice, objeto] of catalogo.entries()) {
  console.log(
    `${objeto.nombre} : ${objeto.color} : ${objeto.material} en la posición ${indice}`
  );
}


const persona = {
  nombre: "Laura",
  edad: 25,
  profesion: "Arquitecta",
};

console.log("\nPropiedades del objeto persona:");
for (const propiedad in persona) {
  console.log(propiedad + ":", persona[propiedad]);
}

console.log("\nin");
//for( let [indice, objeto] of catalogo.entries())
for (let dodo of catalogo.entries()) {
 
  console.log('iterativo:',typeof dodo, dodo);
  console.log('indice:',dodo[0])
  console.log("objeto:", dodo[1]);

  let objeto = dodo[1]
  for (let propiedad in objeto) {
    console.log(": ", propiedad + ":", objeto[propiedad]); 
  }
}


for (let indice of catalogo.entries()) {
  console.log("indice:", indice[0]);
  console.log("objeto:", indice[1]);
}
*/


let personas = [
  { name: "nombre1", edad: 21, cargo: "cargo1" },
  { name: "nombre2", edad: 22, cargo: "cargo2" },
  { name: "nombre3", edad: 23, cargo: "cargo3" },
  { name: "nombre4", edad: 24, cargo: "cargo4" },
  { name: "nombre5", edad: 25, cargo: "cargo5" },
  { name: "nombre6", edad: 26, cargo: "cargo6" },
  { name: "nombre7", edad: 27, cargo: "cargo7" },
  { name: "nombre8", edad: 28, cargo: "cargo8" },
  { name: "nombre9", edad: 29, cargo: "cargo9" },
];
console.log(typeof personas[0]);

personas.forEach((elemento) => console.log(elemento.cargo.toUpperCase()));

console.log('personas:',personas)
let otrasPersonas = personas.map((elemento) => (
    {
    ...elemento,
    salary: elemento.edad * 2500,
    }
  )
);
console.log('otras personas:',otrasPersonas);


console.log(typeof otrasPersonas[0]);

const total1 = otrasPersonas.reduce(function (acumulador, elemento) {
  console.log(`Valor del Objeto: ${elemento.salary}`);
  console.log(`Acumulado ${acumulador}`);
  acumulador += elemento.salary;
  return acumulador;
}, 0);

const total2 = otrasPersonas.reduce((acumulador, elemento) => acumulador + elemento.salary, 0);


console.log(total1);
console.log(total2);

