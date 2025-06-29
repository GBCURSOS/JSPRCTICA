'use strict'

// declaración de una función 
function sumar() {
    console.log(2 + 2);
}

sumar(); 

// Expresión de una función
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}\n`);

// Funciones Arrow
const aprendiendo = () =>  {
    console.log('Esta es una prueba');
}

// una linea no requiere llaves
const aprendiendo1 = () => console.log('Esta es una prueba 1');

// retornar un valor
const aprendiendo2 = () => 'Esta es una prueba 2';

console.log(aprendiendo2());

const aprendiendo3 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo3('JavaScript');

// si es un solo parmetro no se coloca el parentesis
const aprendiendo4 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo4('Java');

// multiples parametros si requieren parentesis
const aprendiendo5 = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo5('JS', 'ES');

