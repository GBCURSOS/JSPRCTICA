const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};


let {
  nombre,
  informacion,
  informacion: {
    medidas: { peso, medida },
  },
} = producto;

console.log("\nnombre", nombre);
console.log("info:", informacion);
console.log("peso", peso);
console.log("medida", medida);

const {
  informacion: {
    fabricacion,
    fabricacion: { pais },
  },
} = producto;

//let nombre, informacion
console.log("\n", nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
