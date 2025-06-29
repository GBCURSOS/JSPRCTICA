let control = 3
let i = 1
while (i <= control){
    let elDato = prompt("Digite el número",i);
    let elNumero = Number(elDato);
    if (!Number.isNaN(elNumero)) {
        if (elNumero < 100) {
            console.log("el número",elNumero,"es menor que 100");
        } else if (elNumero < 1000) {
            console.log("el número ",elNumero," está entre 101 y 999");
        } else {
            console.log("el número",elNumero,"es mayor a 1000");
        }
    } else {
        console.log("Entrada incorrecta: ",elDato)
    }
    i++;
}
