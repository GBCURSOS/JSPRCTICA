
let elemento;

elemento = document;
console.log(elemento)
elemento = document.querySelectorAll("*");
console.log(elemento);
elemento = document.querySelectorAll("*")[0];
console.log(elemento);

elemento = document.head;
console.log(elemento);
elemento = document.body;
console.log(elemento);
elemento = document.location;
console.log(elemento);
elemento = document.URL;
console.log(elemento);
elemento = document.characterSet;
console.log(elemento);
elemento = document.contentType;
console.log(elemento);

elemento = document.forms;
console.log(elemento);
elemento = document.forms[0];
console.log(elemento);

/*
elemento = document.forms[0].id;
console.log(elemento);
elemento = document.forms[0].method;
console.log(elemento);
elemento = document.forms[0].action;
console.log(elemento);
*/

elemento = document.links;
console.log(elemento);
elemento = document.images;
console.log(elemento);

elemento = document.scripts;
console.log(elemento);
elemento = document.scripts[0].getAttribute('src');
console.log(elemento);





