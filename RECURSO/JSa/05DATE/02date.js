console.log("----------------------------");
let fecha = new Date();
let fechaString = fecha.toString();
console.log(fechaString); // Ej: "Tue Sep 24 2024 00:00:00 GMT+0000 (Coordinated Universal Time)"

fecha = new Date();
let opciones = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
fechaString = fecha.toLocaleString("es-ES", opciones);
console.log(fechaString); // Ej: "24/09/2024, 00:00:00"

fecha = new Date();
fechaString = fecha.toISOString();
console.log(fechaString); // Ej: "2024-09-24T00:00:00.000Z"

fecha = new Date();
fechaString = fecha.toLocaleString();
console.log(fechaString); // Ej: "24/9/2024, 0:00:00"

fecha = new Date();
opciones = { year: "numeric", month: "2-digit", day: "2-digit" };
fechaString = fecha.toLocaleDateString("es-ES", opciones);
console.log(fechaString); // Ej: "24/09/2024"

console.log("----------------------------");
let fechaInicial = new Date("2023-05-15");
let diasAIncremental = 10;
let fechaFinal = new Date(
  fechaInicial.getTime() + diasAIncremental * 24 * 60 * 60 * 1000
);
console.log(fechaInicial);
console.log(fechaFinal); // Output: Tue May 25 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

fechaInicial = new Date("2023-05-15");
mesesAIncremental = 9;
fechaFinal = new Date(
  fechaInicial.getFullYear(),
  fechaInicial.getMonth() + mesesAIncremental,
  fechaInicial.getDate()
);
console.log(fechaInicial);
console.log(fechaFinal); // Output: Fri Aug 15 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

fechaInicial = new Date("2023-05-15");
añosAIncremental = 2;
fechaFinal = new Date(
  fechaInicial.getFullYear() + añosAIncremental,
  fechaInicial.getMonth(),
  fechaInicial.getDate()
);
console.log(fechaInicial);
console.log(fechaFinal); // Output: Thu May 15 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

console.log("----------------------------");
function compararFechas(fecha1, fecha2) {
  if (fecha1 > fecha2) {
    return 1;
  } else if (fecha1 < fecha2) {
    return -1;
  } else {
    return 0;
  }
}

// Ejemplos de uso:
let fecha1 = new Date("2023-05-15");
let fecha2 = new Date("2023-05-30");
let fecha3 = new Date("2023-05-15");

console.log(fecha1);
console.log(fecha2);
console.log(compararFechas(fecha1, fecha2)); // Output: -1
console.log(compararFechas(fecha2, fecha1)); // Output: 1
console.log(compararFechas(fecha1, fecha3)); // Output: 0

console.log(0 && 'hello');      // Output: 0
console.log('' && 'world');     // Output: ''
console.log(null && 42);        // Output: null
console.log(undefined && true); // Output: undefined
console.log(1 && 'foo');        // Output: 'foo'

console.log(0 || 'hello');      // Output: 'hello'
console.log('' || 'world');     // Output: 'world'
console.log(null || 42);        // Output: 42
console.log(undefined || true); // Output: true
console.log(1 || 'foo');        // Output: 1

console.log(!0);       // Output: true
console.log(!'');      // Output: true
console.log(!null);     // Output: true
console.log(!undefined); // Output: true
console.log(!1);       // Output: false
console.log(!'hello'); // Output: false

console.log(!!0);       // Output: false
console.log(!!'');      // Output: false
console.log(!!null);     // Output: false
console.log(!!undefined); // Output: false
console.log(!!1);       // Output: true
console.log(!!'hello'); // Output: true


