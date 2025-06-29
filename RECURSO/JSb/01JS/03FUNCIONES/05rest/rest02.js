// ------------------------------------------------------------------------------

const items = ["uno dos", "tres", , , , , , "cuatro cinco seis siete"];
const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>`;

console.log("\n Primero separa los elementos, luego los junta");
const htmlEscape = (str) =>
  [...str].map((c) => (c === "<" ? "&lt;" : c === "&" ? "&amp;" : c)).join("");
listItems = items.map(htmlEscape).map((i) => enclose("li", i));
console.log("listItems htmlEscape:", listItems);

console.log("\n El sistema completo para generar una lista en HTML");
let list = enclose(
  "ul",
  items
    .map(htmlEscape)
    .map((i) => enclose("li", i))
    .join(" ")
);
console.log("list sin filtro:", list);

console.log("\n Filtros retienen elementos que determina el predicado");
list = enclose(
  "ul",
  items
    .filter((i) => i.trim() !== "")
    .map(htmlEscape)
    .map((i) => enclose("li", i))
    .join(" ")
);
console.log("list con filtro:", list);
