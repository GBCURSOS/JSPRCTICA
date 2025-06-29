let elDato = prompt("Digite un número");
console.log("digitado:", elDato);
let elNumero = Number(elDato);
console.log("convertido a numero:", elNumero);
console.log("funcion:", Number.isNaN(elNumero));

if (!(Number.isNaN(elNumero))) {
  console.log("Tu número es la raíz cuadrada de " + elNumero * elNumero);
} else {
  console.log("Entrada incorrecta: ", elDato);
}
