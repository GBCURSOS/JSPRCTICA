import { diaNombre } from "./32modulosNombresDia.js";
let ahora = new Date();
console.log(`Hoy es ${diaNombre(ahora.getDay())}`);
