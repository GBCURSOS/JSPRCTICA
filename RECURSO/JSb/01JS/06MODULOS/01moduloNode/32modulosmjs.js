import { diaNombre, diaNumero } from "./32nombresDia.mjs";

let ahora = new Date();
console.log('ahora:',ahora.getDay());
let nombre = diaNombre(ahora.getDay());
console.log(`Hoy es ${diaNombre(ahora.getDay())}`);
console.log(`Hoy es ${diaNumero(nombre)}`);
