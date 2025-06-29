let elDato = prompt("Digite un número");
let elNumero = Number(elDato);

if (!Number.isNaN(elNumero)) {
    switch(elNumero) {
        case 100:
            console.log("el número es 100");
            break;
        case 1000:
            console.log("el número es 1000");
            break;
        default:
            console.log("el número es:",elNumero);
            break;
    }
} else {
    console.log("Entrada incorrecta: ",elDato)
}


