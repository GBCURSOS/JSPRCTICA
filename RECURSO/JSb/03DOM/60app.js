const form = document.getElementById("form");
const name = document.getElementById("nombre");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("data forma enviada");
  console.log(nombre.value);
  console.log(password.value);
});
