
// declaracion estandar de la funcion
function cuadrado(x){
    let y = x*x
    return y;
}

// funcion anonima
const cuadrado = function (x){
    return x*x
}

const cuadrado0 = (x) => {
    return x*x
}

const cuadrado1 = (x) => { return x*x }

const cuadrado2 = x => x*x;

const sinParametros = () => console.log("ejemplo de función sin parametros")

console.log(cuadrado0(2))
console.log(cuadrado1(4))
console.log(cuadrado2(8))
sinParametros()

const redondea = (n, step=1) => {
    let resto = n % step;
    return n - resto + (resto < (step / 2) ? 0 : step);
};

console.log(redondea(23,10)) //20
console.log(redondea(23))    //23