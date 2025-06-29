

const headings = document.getElementsByTagName("h2");
console.log(headings.length);
console.log(headings);
headings[0].style.color = "orange";
headings[1].style.color = "blue";

const items = document.getElementsByTagName("li");
console.log("item:", items);

items[2].style.color = "orange";

const betterItems = [...items];
betterItems.forEach(function (item) {
  console.log("forEach", item);
});


console.log(items);
console.log(betterItems);

