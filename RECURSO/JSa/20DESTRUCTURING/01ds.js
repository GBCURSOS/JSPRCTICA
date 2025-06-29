// Ejemplos de Destructuring en JavaScript

// 1. Destructuring de objetos
console.log("1. Destructuring de objetos:");

const persona = {
  nombre: "Ana",
  edad: 28,
  ciudad: "Madrid",
  profesion: "Ingeniera",
};

// Destructuring básico
const { nombre, edad } = persona;
console.log(`Nombre: ${nombre}, Edad: ${edad}`);

// Asignando nuevos nombres a las variables
const { nombre: nombreCompleto, profesion: trabajo } = persona;
console.log(`Nombre completo: ${nombreCompleto}, Trabajo: ${trabajo}`);

// Valores por defecto
const { pais = "España" } = persona;
console.log(`País: ${pais}`);

// 2. Destructuring de arrays
console.log("\n2. Destructuring de arrays:");

const colores = ["rojo", "verde", "azul", "amarillo"];

// Destructuring básico de array
const [primerColor, segundoColor] = colores;
console.log(`Primer color: ${primerColor}, Segundo color: ${segundoColor}`);

// Saltando elementos
const [, , tercerColor] = colores;
console.log(`Tercer color: ${tercerColor}`);

// Usando el operador rest
const [color1, ...restoCores] = colores;
console.log(`Primer color: ${color1}, Resto de colores: ${restoCores}`);

// 3. Destructuring en parámetros de funciones
console.log("\n3. Destructuring en parámetros de funciones:");

function imprimirDatosPersona({ nombre, edad, ciudad = "Desconocida" }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);
}

imprimirDatosPersona(persona);

// 4. Destructuring anidado
console.log("\n4. Destructuring anidado:");

const empresa = {
  nombre: "TechCorp",
  ubicacion: {
    pais: "España",
    ciudad: "Barcelona",
  },
  empleados: ["Juan", "María", "Carlos"],
};

const {
  nombre: nombreEmpresa,
  ubicacion: { ciudad: ciudadEmpresa },
  empleados: [primerEmpleado],
} = empresa;
console.log(
  `Empresa: ${nombreEmpresa}, Ciudad: ${ciudadEmpresa}, Primer empleado: ${primerEmpleado}`
);

// 5. Destructuring para intercambiar variables
console.log("\n5. Destructuring para intercambiar variables:");

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`);

// 6. Destructuring en bucles
console.log("\n6. Destructuring en bucles:");

const personas = [
  { nombre: "Luis", edad: 30 },
  { nombre: "María", edad: 25 },
  { nombre: "Carlos", edad: 35 },
];

for (const { nombre, edad } of personas) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

// 7. Actualizando objetos con destructuring y spread
console.log("\n7. Actualizando objetos con destructuring y spread:");

const actualizarPersona = (persona, actualizaciones) => {
  return { ...persona, ...actualizaciones };
};

const personaActualizada = actualizarPersona(persona, {
  edad: 29,
  ciudad: "Barcelona",
});
console.log("Persona actualizada:", personaActualizada);

// 8. Destructuring con renombrado y valores por defecto
console.log("\n8. Destructuring con renombrado y valores por defecto:");

const opciones = { tamaño: "mediano", color: "rojo" };
const {
  tamaño: t = "pequeño",
  color: c = "azul",
  forma: f = "círculo",
} = opciones;
console.log(`Tamaño: ${t}, Color: ${c}, Forma: ${f}`);
