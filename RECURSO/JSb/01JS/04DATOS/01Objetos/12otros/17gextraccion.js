function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

console.log(calculate(4, 7));
const [add, subtract, multiply, divide] = calculate(4, 7);
console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);
