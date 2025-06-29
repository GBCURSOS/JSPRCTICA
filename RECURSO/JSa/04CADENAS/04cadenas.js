let s = "uno, dos, tres, cuatro, cinco";
console.log('separa: ',s.split(", "));
console.log("separa: ", typeof s.split(", "));
console.log('une: ',s.split(", ").join("-"))
console.log("une: ", typeof s.split(", ").join("--"));

let aString = "una cadena";
let anInt = 5;
let anObj = {};
console.log(typeof aString === "string");
console.log(typeof anInt === "string");
console.log(typeof anObj === "string");

let aStringObj = new String("una cadena");
console.log(aStringObj instanceof String);

let b10 = 12;
let b16 = b10.toString(16); 
console.log('representación de números en base 16:',b16);
b10 = parseInt(b16, 16);
console.log(b10)

let string = "Hello, World!";
console.log(string.indexOf("o")); 
console.log(string.indexOf("foo"));

console.log(string.lastIndexOf("o"));
console.log(string.lastIndexOf("foo"));

console.log(string.includes("Hello")); 
console.log(string.includes("foo"));

string = "Hello, World!";
string = string.replace("Hello", "Bye");
console.log(string); 

