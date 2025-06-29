
const diaNombre = require("./33nombresDia.js");

let ahora = new Date();
let dia = ahora.getDay();
/* console.log(dia);
console.log(typeof dia); */
const diaHoy = diaNombre(dia);
console.log(`Hoy es ${diaHoy}`);
