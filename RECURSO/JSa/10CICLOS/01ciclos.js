// 1. for loop
console.log("1. for loop:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. for...of loop (para iterables como arrays)
console.log("\n2. for...of loop:");
const frutas = ["manzana", "banana", "naranja"];
for (const fruta of frutas) {
  console.log(fruta);
}

// 3. for...in loop (para enumerar propiedades de objetos)
console.log("\n3. for...in loop:");
const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}

// 4. while loop
console.log("\n4. while loop:");
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}

// 5. do...while loop
console.log("\n5. do...while loop:");
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// 6. continue
console.log("\n6. continue:");
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta la iteración cuando i es 2
  }
  console.log(i);
}

// 7. break
console.log("\n7. break:");
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Termina el ciclo cuando i es 3
  }
  console.log(i);
}

// 8. Etiquetas con break y continue
console.log("\n8. Etiquetas con break y continue:");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Rompe el ciclo exterior
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 9. break específico para ciclos anidados
console.log("\n9. break específico para ciclos anidados:");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break; // Rompe solo el ciclo interno
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 10. continue con etiquetas
console.log("\n10. continue con etiquetas:");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue outerLoop; // Salta a la siguiente iteración del ciclo exterior
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
