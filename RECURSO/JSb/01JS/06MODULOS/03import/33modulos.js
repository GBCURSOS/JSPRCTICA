import { nombresDia, diasHabiles } from "./33nombresDia.js";
import diaNombreDodo from "./33nombresDia.js";


let ahora = new Date();
let dia = ahora.getDay();
/* console.log(dia);
console.log(typeof dia); */
const diaHoy = diaNombre(dia);
console.log(`Hoy es ${diaHoy}`);
const diaHoyDodo = diaNombreDodo(dia);
console.log(`Hoy es ${diaHoyDodo}`);
console.log('\n',nombresDia)
console.log(diasHabiles);
