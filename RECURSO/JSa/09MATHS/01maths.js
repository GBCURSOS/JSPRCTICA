// 1. Constants
const PI = Math.PI;
const E = Math.E;

// 2. Remainder / Modulus (%)
const remainder = 17 % 5; // 2

// 3. Rounding
const rounded = Math.round(3.7); // 4

// 4. Trigonometry
const sinValue = Math.sin(PI / 2); // 1
const cosValue = Math.cos(0); // 1
const tanValue = Math.tan(PI / 4); // ~1

// 5. Bitwise operators
const bitwiseAND = 5 & 3; // 1
const bitwiseOR = 5 | 3; // 7
const bitwiseXOR = 5 ^ 3; // 6

// 6. Incrementing (++)
let num = 5;
num++; // num is now 6

// 7. Exponentiation
const squared = Math.pow(2, 3); // 8
// Or using the ** operator
const cubed = 2 ** 3; // 8

// 8. Random integers and floats
const randomFloat = Math.random(); // Between 0 and 1
const randomInt = Math.floor(Math.random() * 10); // Integer between 0 and 9

// 9. Addition (+)
const sum = 5 + 3; // 8

// 10. Get random between two numbers
function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
const randomBetween = getRandomBetween(10, 20);

// 11. Simulating events with different probabilities
function simulateEvent(probability) {
  return Math.random() < probability;
}
const eventOccurred = simulateEvent(0.7); // 70% chance of being true

// 12. Subtraction
const difference = 10 - 7; // 3

// 13. Multiplication
const product = 4 * 6; // 24

// 14. Getting maximum and minimum
const max = Math.max(5, 2, 9, 1); // 9
const min = Math.min(5, 2, 9, 1); // 1

// 15. Restrict numbers to Min/Max range
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
const clampedValue = clamp(15, 0, 10); // 10

// 16. Ceiling and floor
const ceiling = Math.ceil(3.2); // 4
const floor = Math.floor(3.8); // 3

// 17. Division
const quotient = 15 / 4; // 3.75

// 18. Decrementing
let num2 = 5;
num2--; // num2 is now 4

// Ejemplos de uso
console.log("PI:", PI);
console.log("Remainder of 17 / 5:", remainder);
console.log("Rounded 3.7:", rounded);
console.log("Sin(π/2):", sinValue);
console.log("Bitwise AND of 5 & 3:", bitwiseAND);
console.log("2^3:", squared);
console.log("Random float:", randomFloat);
console.log("Random integer (0-9):", randomInt);
console.log("Random between 10 and 20:", randomBetween);
console.log("Event occurred (70% probability):", eventOccurred);
console.log("Max of [5, 2, 9, 1]:", max);
console.log("Clamped value of 15 between 0 and 10:", clampedValue);
console.log("Ceiling of 3.2:", ceiling);
console.log("Floor of 3.8:", floor);
