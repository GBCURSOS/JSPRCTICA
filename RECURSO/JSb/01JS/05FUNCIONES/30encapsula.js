function dias(name) {
  return `buenos días ${name.toUpperCase()}`;
}

function tardes(name) {
  return `buenas tardes ${name.toLowerCase()}`;
}

function saludo(name, hora) {
  let nombre = "ramiro";
  console.log('saludo name',name);
  console.log(`${hora(name)}, mi nombre es ${nombre}`);
}

saludo("pablo", dias);
saludo("pedro", tardes);
console.log("------------------------------------------------");

{
  function mayorQue(n) {
    console.log('mayorQue n',n);
    return (m) => {
      console.log('mayorQue m',m); 
      return m > n};
  }

  let mayorQue10 = mayorQue(10);
  console.log(mayorQue10(11));
  console.log(mayorQue10(9));
  console.log(mayorQue(10)(9));
}
console.log("------------------------------------------------");
{
  function argumentos(f) {
    return (...args) => {
      console.log("llamando con", args);
      let resultado = f(...args); // Math.min(1,2,10) Math.max(1,2,10)
      console.log("llamado con", args, ", devolvió", resultado);
      return resultado;
    };
  }
  argumentos(Math.min)(1, 2, 10);
  argumentos(Math.max)(30, 22, 110);
}
console.log("------------------------------------------------");

function aMenosQue(prueba, entonces) {
  console.log('aMenosQue prueba', prueba);
  if (!prueba) entonces();
}

function repetir(n, accion) {
  console.log('repetir n',n);
  for (let i = 0; i < n; i++) {
    accion(i);
  }
}

repetir(5, console.log);

console.log("#################################################");

repetir(5, (n) => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, "es par");
  });
});

console.log("#################################################");

let labels = [];
repetir(5, (i) => {
  labels.push(`Unidad ${i + 1}`);
});
console.log(labels);

console.log("#################################################");

["a", "b", "c", "d", "e"].forEach((elemento) => console.log("arreglo:", elemento));

console.log("------------------------------------------------");

function reduce(array, funcion, inicio) {
  let actual = inicio;
  for (let elemento of array) {
    console.log('array',array,'actual:',actual,',elemento',elemento)
    actual = funcion(actual, elemento);
  }
  return actual;
}

console.log(
  "reducir:",
  reduce([10, 20, 30, 40], (a, b) => a + b, 0)
);

console.log('reduce de arreglo:',[10, 20, 30, 40].reduce((acumula, elemento) => acumula + elemento));

console.log("------------------------------------------------");

function promedio(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log("promedio:", promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
