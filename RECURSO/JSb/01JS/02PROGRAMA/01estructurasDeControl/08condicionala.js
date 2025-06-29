let elDato = prompt("Digite un número");
let elNumero = Number(elDato);

if (!Number.isNaN(elNumero)) {
    if (elNumero < 100) {
        console.log("el número es menor que 100");
    } else if (elNumero < 1000) {
        console.log("el número está entre 101 y 999");
    } else {
        console.log("el número es mayor a 1000");
    }
} else {
    console.log("Entrada incorrecta: ",elDato)
}

/*
if (elNumero < 100){
    console.log()
} else {
    if(elNumero < 1000){
        console.log()
    } else {
        console.log()
    }
}
*/