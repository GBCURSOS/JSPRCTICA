let arreglo = [
  "s",
  "t",
  "a",
  34,
  "K",
  "o",
  "v",
  "E",
  "r",
  "2",
  "4",
  "o",
  "W",
  -1,
  "-4",
];

console.log(arreglo.sort());

arreglo = [
  "s",
  "t",
  "a",
  "c",
  "K",
  "o",
  "v",
  "E",
  "r",
  "f",
  "l",
  "W",
  "2",
  "1",
];

console.log(
  arreglo.sort((a, b) => {
    return a.localeCompare(b);
  })
);

arreglo = ["s", "t", "a", "c", "K", 1, "v", "E", "r", "f", "l", "o", "W"];
console.log(
  arreglo.sort((a, b) => {
    return a.toString().localeCompare(b);
  })
);

arreglo = ["cebras", "perros", "elefantes", "pinguinos"];
console.log(
  arreglo.sort(function (a, b) {
    return a.length - b.length;
  })
);

arreglo = [100, 1000, 10, 10000, 1];
console.log(
  arreglo.sort(function (a, b) {
    return a - b;
  })
);

arreglo = [
  new Date(2007, 11, 10),
  new Date(2014, 2, 21),
  new Date(2009, 6, 11),
  new Date(2016, 7, 23),
];

console.log(
  arreglo.sort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  })
);
