"use strict";

console.log("\n Mensaje en 10 segundos");
setTimeout(() => console.log("Mensaje en 10"), 10000);

console.log("\n Provee parámetros para el texto y el temporizador");
const masTarde = (text, when) => {
  let task = () => console.log(text);
  setTimeout(task, when);
};

console.log("\n Dos llamadas");
masTarde("Mensaje en 1", 1000);
masTarde("Mensaje en 15 masTarde", 15000);

console.log(
  " El valor de la variable capturada puede ser cambiada después de la llamada"
);
let text = "Mensaje Inicial";
setTimeout(() => console.log(text), 20000);
text = "Mensaje Final";
