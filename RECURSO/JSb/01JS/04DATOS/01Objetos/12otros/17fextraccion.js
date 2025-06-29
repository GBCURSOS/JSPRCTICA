'use strict'

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

let resultado = Object.assign(producto, medidas);

console.log('resultado1',resultado);

// Spread Operator o Rest Operator

resultado = { ...producto, ...medidas};
console.log('resultado2',resultado);