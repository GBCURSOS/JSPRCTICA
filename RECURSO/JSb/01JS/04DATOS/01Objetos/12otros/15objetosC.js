const producto1 = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log('\n Congela producto1, NO se puede modificar en nada')
Object.freeze(producto1)

producto1.disponible = false
delete producto1.precio

console.log(producto1)
console.log(Object.isFrozen(producto1))

const producto2 = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log('\n Sella producto2, NO se pueden adicionar ó remover propiedades')
Object.seal(producto2)

producto2.disponible = false
delete producto2.precio

console.log(producto2)
console.log(Object.isSealed(producto2))
