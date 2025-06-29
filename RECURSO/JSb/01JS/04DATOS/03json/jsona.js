"use strict";
console.log("\nCadena JSON JavaScript Object Notation");
let mascota1 = JSON.parse(
  '{ "nombre": "Poker", "edad": 4, "color": [17, 29], "rescatado": false }'
);
console.log(typeof mascota1)
console.log("mascotas:", mascota1); // { nombre: 'Poker', edad: 42, color: [17, 29], rescatado: false }


// Convertir un objeto JS en JSON
console.log("\nNo se puede dejar nada indefinido en un JSON");
// Propiedades sin definir son eliminadas
// Elementos en un arreglo sin definir se convierten en null

/*Restricciones:
  Los valores son objetos, arreglos, cadenas, punto flotante, true, false y null.
  Todas las cadenas están delimitadas por comillas, no apóstrofes.
  Todos los nombres de propiedades van entre comillas.
  No hay comas finales ni elementos omitidos.
  Consulte www.json.org para una descripción formal de la notación.
*/

let str = JSON.stringify({
  nombre: ["Poker", undefined, "Azul"],
  edad: undefined,
});

console.log(typeof str);
console.log("str:", str); // {"nombre":["Poker",null,"Azul"]}
console.log("Edad no está:");
console.log(`mascotas=${mascota1}`);

console.log('-----------------------------');

console.log("Cambiado a JSON:");
console.log(`mascotas=${JSON.stringify(mascota1)}`);

console.log("Alternativa:");
const mascota2 = { nombre: "Lee" };
console.log("mascotas1=", mascota1, "mascotas2=", mascota2);

console.log("igual y más fácil:");
console.log({ mascota1, mascota2 }); // Logs los objetos { mascota1: {. . .}, mascota2:{. . .}}
