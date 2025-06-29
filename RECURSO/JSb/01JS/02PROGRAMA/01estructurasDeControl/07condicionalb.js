
let elNumero = Number(prompt("Digite un número"));

if (!Number.isNaN(elNumero)) {
    console.log("Tu número es la raíz cuadrada de " +
    elNumero * elNumero);
} else {
    console.log("Entrada incorrecta: ",elNumero)
}


