const cuadrado = function(x) {
    return x * x;
};
console.log("cuadrado:",cuadrado(12)); //144
let dato = 15
console.log("cuadrado:",cuadrado(dato)); //144
    
const redondea = function(n, paso) {
    let resto = n % paso; 
    return n - resto + (resto < (paso / 2) ? 0 : paso);
};


console.log("redondea:",redondea(23, 10)); //20

function redondeaEstandar(numero, paso) {
    let resto = numero % paso;  
    return numero - resto + (resto < (paso / 2) ? 0 : paso);
           
};
  

console.log("redondea:",redondeaEstandar(27, 10)); //30
    