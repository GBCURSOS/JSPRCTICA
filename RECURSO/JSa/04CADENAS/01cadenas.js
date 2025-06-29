let hello = "Hello";
let world = "world";
let helloW = `Hello World`;  // template

let intString1 = String(32); 
let booleanString1 = String(true); 
let nullString = String(null); 

let intString2 = (5232).toString(); 
let booleanString2 = (false).toString(); 
let objString = ({}).toString(); 

console.log(hello)
console.log(world)
console.log(helloW)

console.log(intString1)
console.log(booleanString1)
console.log(nullString)

console.log(intString2)
console.log(booleanString2)
console.log(objString)

String.fromCharCode(104, 101, 108, 108, 111);

let objectString = new String("Es una cadena como objeto");
console.log(objectString)
console.log(typeof objectString);
console.log(typeof objectString.valueOf());
console.log(typeof hello);
console.log(typeof hello.valueOf());