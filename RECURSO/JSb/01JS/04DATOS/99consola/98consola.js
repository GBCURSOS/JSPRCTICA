"use strict";


let x = 1;
console.log(x);

x = 1;
console.log("x:", x);

x = 1;
let y = 2;
let z = 3;
console.log("x:", x, "y:", y, "z:", z);

x = 1;
y = 2;
z = 3;
console.log({ x, y, z });

let usuario = {
  nombre: "Pedro",
  contacto: {
    correoElectronico: "combariza@gmail.com",
  },
};


console.log('variable',usuario);
console.log('como objeto',{ usuario });

console.log('--------------------------------------')

console.log("%s tiene %d años de edad.", "Pablo", 29);

console.log("Consola de Registro");
console.info("Consola de Informacion");
console.warn("Consola de Aviso");
console.error("Consola de Error");

console.log("--------------------------------------");

for (let i = 0; i < 10; i++) {
  console.count();
}

for (let i = 0; i < 10; i++) {
  console.count("Cuenta: ");
}

console.countReset();

function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.trace();
}
one();

let dispositivo = [
  {
    nombre: "iPhone",
    marca: "Apple",
  },
  {
    nombre: "Galaxy",
    marca: "Samsung",
  },
];

console.table(dispositivo);
