function multiplicador(factor) {
  console.log('factor',factor);
  return (numero) => {
    console.log('numero',numero)
    return numero * factor};
}

console.log(multiplicador(4)(3));

let dosVeces = multiplicador(2);
console.log("5", dosVeces(5)); //10
console.log("10", dosVeces(10)); //20

cincoVeces = multiplicador(5);
console.log("5*5", cincoVeces(5)); //25
console.log("10*5", cincoVeces(10)); //50

