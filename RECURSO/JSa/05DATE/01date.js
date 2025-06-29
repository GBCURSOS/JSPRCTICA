let hoy = new Date();
console.log(hoy); // Output: Tue Sep 24 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

let fechaPersonalizada = new Date(2023, 4, 15, 14, 30, 0);
console.log(fechaPersonalizada); // Output: Mon May 15 2023 14:30:00 GMT+0000 (Coordinated Universal Time)

let fechaTexto = new Date("2023-05-15T14:30:00Z");
console.log(fechaTexto); // Output: Mon May 15 2023 14:30:00 GMT+0000 (Coordinated Universal Time)

fechaTexto = new Date("2023-05-15T14:30:00Z");
console.log(fechaTexto); // Output: Mon May 15 2023 14:30:00 GMT+0000 (Coordinated Universal Time)

let milisegundos = 1684156800000; // 15 de mayo de 2023 a las 14:00:00 UTC
let fechaMillisegundos = new Date(milisegundos);
console.log(fechaMillisegundos); // Output: Mon May 15 2023 14:00:00 GMT+0000 (Coordinated Universal Time)

function calcularDiferenciaFechas(fecha1, fecha2) {
  // Convertir las fechas a milisegundos
  const diferenciaMilisegundos = Math.abs(fecha2 - fecha1);

  // Calcular la diferencia en días
  const diasDiferencia = Math.floor(
    diferenciaMilisegundos / (1000 * 60 * 60 * 24)
  );

  return diasDiferencia;
}

// Ejemplo de uso
let fecha1 = new Date("2023-05-01");
let fecha2 = new Date("2023-05-15");

let diferenciaEnDias = calcularDiferenciaFechas(fecha1, fecha2);
console.log(`La diferencia entre las fechas es de ${diferenciaEnDias} días.`);

function calcularAnosMesesDias(diasDiferencia) {
  const años = Math.floor(diasDiferencia / 365);
  const meses = Math.floor((diasDiferencia % 365) / 30);
  const dias = Math.floor((diasDiferencia % 365) % 30);

  return {
    años: años,
    meses: meses,
    dias: dias,
  };
}

// Ejemplo de uso
fecha1 = new Date("2023-05-01");
fecha2 = new Date("2024-08-15");

diferenciaEnDias = calcularDiferenciaFechas(fecha1, fecha2);
const resultadoDiferenciaEnAnnosMesesDias =
  calcularAnosMesesDias(diferenciaEnDias);

console.log(
  `La diferencia entre las fechas es de ${resultadoDiferenciaEnAnnosMesesDias.años} años, ${resultadoDiferenciaEnAnnosMesesDias.meses} meses y ${resultadoDiferenciaEnAnnosMesesDias.dias} días.`
);
