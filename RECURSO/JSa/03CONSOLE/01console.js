const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}
console.clear()

console.log('---------------------------------------')
function greet(user) {
  console.count();
  return `hi ${user}`;
}

console.log(greet("Pedro"));
console.log(greet("Alicia"));
console.log(greet());
console.count();

console.log("---------------------------------------");
console.table(["apples", "oranges", "bananas"]);

console.log("---------------------------------------");
console.time("response uno");
console.time("response dos");
alert("Click para continuar");
console.timeEnd("response uno");
alert("Una vez más");
console.timeEnd("response dos");
console.log("---------------------------------------");

console.log('Ejemplo de formato  de texto: %s es una cadena, %d es un entero','esta es una cadena',110);

console.log("---------------------------------------");
let objeto = {
  "foo":{
    'bar':'data'  
  }
}
console.dir(objeto);
console.dirxml(objeto);
