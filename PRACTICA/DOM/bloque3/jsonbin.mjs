import fs from "fs";
let X_Master_Key =
  "$2a$10$hRy3UlOroFFbiHzeJkzAauUCxieJ19toMGhlT1sENNLoOeJSAdygu";
let Content_Type = "application/json";
let X_Bin_Name = "practica-bloque3";
let usuarios = [];
let jsonBinId = null;

function guardarEnArchivo(nombreArchivo, datos) {
  fs.writeFileSync(nombreArchivo, JSON.stringify(datos, null, 2));
  console.log(`Datos guardados en ${nombreArchivo}`);
}

async function getUsuarios(cantidad) {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${cantidad}`
    );
    const data = await response.json();
    usuarios = data.results;
    guardarEnArchivo("./PRACTICA/DOM/bloque3/usuarios.json", usuarios); // Guardar usuarios en archivo
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    usuarios = [];
    guardarEnArchivo("./PRACTICA/DOM/bloque3/usuarios.json", []);
  }
}

async function postToJsonBin(datos) {
  try {
    const response = await fetch("https://api.jsonbin.io/v3/b", {
      method: "POST",
      headers: {
        "Content-Type": Content_Type,
        "X-Master-Key": X_Master_Key,
        "X-Bin-Name": X_Bin_Name,
      },
      body: JSON.stringify(datos),
    });
    const result = await response.json();
    if (result && result.metadata && result.metadata.id) {
      jsonBinId = result.metadata.id;
      guardarEnArchivo("./PRACTICA/DOM/bloque3/jsonbin_id.json", { jsonBinId }); // Guardar ID en archivo
      console.log("ID de JSONBin guardado en archivo:", jsonBinId);
    }
    console.log("Respuesta de JSONBin:", result);
  } catch (error) {
    console.error("Error al hacer POST a JSONBin:", error);
  }
}

async function leerDeJsonBin(binId) {
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${binId}/latest`,
      {
        method: "GET",
        headers: {
          "X-Master-Key": X_Master_Key,
          "Content-Type": Content_Type,
        },
      }
    );
    const result = await response.json();
    console.log("Datos leídos de JSONBin:", result.record);
    return result.record;
  } catch (error) {
    console.error("Error al leer datos de JSONBin:", error);
    return null;
  }
}

// Ejemplo de uso con async/await
async function leerUsuariosCrearJsonBin() {
  await getUsuarios(2);
  // Ahora usuarios tiene los datos
  let dataRelevante = usuarios.map((u) => ({
    nombre: `${u.name.first} ${u.name.last}`,
    celular: u.cell,
    foto: u.picture.large,
  }));
  console.log("Datos relevantes:", dataRelevante);
  await postToJsonBin(dataRelevante);
}

leerUsuariosCrearJsonBin();

// Leer jsonBinId guardado desde archivo
const idGuardado = JSON.parse(
  fs.readFileSync("./PRACTICA/DOM/bloque3/jsonbin_id.json", "utf-8")
).jsonBinId;
console.log("ID leído:", idGuardado);

leerDeJsonBin(idGuardado);
