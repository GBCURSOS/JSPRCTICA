let listaDeNumeros = [20, 30, 50, 70, 110];
console.log(listaDeNumeros.length);
console.log(listaDeNumeros[2]);
console.log(listaDeNumeros[0]);
console.log(listaDeNumeros[5 - 2]);
let indice = 4;
console.log(listaDeNumeros[indice]);
console.log(listaDeNumeros[--indice]);
console.log(listaDeNumeros[indice--]);
console.log(listaDeNumeros.length);

let cadena = "Esta es una prueba";
console.log(typeof cadena.toUpperCase);
console.log(cadena.toUpperCase());
console.log(cadena.length);
console.log(cadena.charAt(0));
console.log(cadena.charAt(17));

let secuencia = [1, 2, 3];
secuencia.push(4);
secuencia.push(5);
console.log(secuencia);
console.log(secuencia.pop());
console.log(secuencia);

secuencia.shift();
console.log(secuencia);
secuencia.unshift(10);
console.log(secuencia);

for (let i = 0; i < secuencia.length; i++) {
  console.log(`${secuencia[i]} posición ${i}`);
}

for (let i = secuencia.length - 1; i >= 0; i--) {
  console.log(`${secuencia[i]} posición ${i}`);
}

for (const [index, value] of listaDeNumeros.entries()) {
  console.log(`${value} posición ${index}`);
}
