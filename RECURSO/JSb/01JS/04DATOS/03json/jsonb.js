// Creando un ejemplo de JSON
let session = {
  screens: [],
  state: true,
};

session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Convirte el JSON string con JSON.stringify()
// entonces guarda con localStorage con el nombre de la sesión
// localStorage.setItem("session", JSON.stringify(session));

// Ejemplo de como transformar el String generado usando
// JSON.stringify() y guardándolo en localStorage como objeto JSON otra vez
let restoredSession = JSON.parse(localStorage.getItem("session"));

// Ahora la variable restoredSession contiene el objeto que fue guardado
// en localStorage
console.log(restoredSession);
