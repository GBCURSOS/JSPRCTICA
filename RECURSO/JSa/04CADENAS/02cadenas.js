let foo = "Foo";
let bar = "Bar";
console.log(foo + bar);

console.log(foo + " " + bar);

foo.concat(bar);

"a".concat("b", " ", "d");

let string = "string";
let number = 32;
let boolean = true;
console.log(string + number + boolean);

let greeting = `Hello`;
let place = `World`;
let greet = `Hello ${place}!`;
console.log(greet);
console.log(`a\\b`);
console.log(String.raw`a\\b`);

function reverseString(str) {
  console.log(str.split(""));
  console.log(str.split("").reverse());
  return str.split("").reverse().join("");
}
console.log(reverseString("cadena al revés"));

function strcmp(a, b) {
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
  return -1;
}

console.log(strcmp("hello", "world")); 
console.log(strcmp("hello", "hello")); 
console.log(strcmp("world", "hello"));

let a = "hello";
let b = "world";
console.log(a.localeCompare(b)); 

let arr = ["bananas", "cranberries", "apples"];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(arr);

string = "Hello, World!";
console.log(string.charAt(4));
string = "Hello, World!";
console.log(string[4]); 
string = "Hello, World!";
console.log(string.charCodeAt(4));

let text = 'L\'albero sginifica árbol en italiano';
console.log( text ); 
text = "Esta es una expresión entre comillas: \"high\"";
console.log( text ); 

let content = "<p class=\"specialUno\">Hello World!</p>";
document.getElementById("uno").innerHTML = content;
console.log(content);
hello  = '<p class="specialDos">Esta es una prueba en template: \' apóstrofe</p>'; 
document.getElementById("dos").innerHTML = hello;
console.log(hello);
let hi  = "<p class='specialTres'>Otro ejemplo: ' apóstrofe &quot; comillas &quot;</p>"; 
document.getElementById("tres").innerHTML = hi;
console.log(hi);
hello = '<p class="specialCuatro">Otro ejemplo: &apos; apóstrofe</p>';
document.getElementById("cuatro").innerHTML = hello;
console.log(hello);
 