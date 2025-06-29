{
//41**. Programa en JavaScript para Eliminar una Propiedad de un Objeto:**
const persona = {
    nombre: "Ana",
    edad: 28,
    profesion: "Diseñadora"
};

delete persona.edad;
console.log("Objeto después de eliminar la propiedad 'edad':", persona);
}

{
//42. Programa en JavaScript para Verificar si una Cadena Empieza y Termina con Ciertos Caracteres:
const cadena = "Hola, mundo!";
const empiezaCon = "Hola";
const terminaCon = "!";

const empiezaCorrecto = cadena.startsWith(empiezaCon);
const terminaCorrecto = cadena.endsWith(terminaCon);

console.log("La cadena empieza con", empiezaCon + ":", empiezaCorrecto);
console.log("La cadena termina con", terminaCon + ":", terminaCorrecto);
}

{
//43**. Programa en JavaScript para Verificar si una Clave Existe en un Objeto:**

const persona = {
    nombre: "Luis",
    edad: 32,
    profesion: "Instructor"
};

const clave = "nombre";
if (clave in persona) {
    console.log("La clave", clave, "existe en el objeto");
} else {
    console.log("La clave", clave, "no existe en el objeto");
}
}

{
//44**. Programa en JavaScript para Clonar un Objeto:**

const objetoOriginal = {
    propiedad1: "valor1",
    propiedad2: "valor2"
};

const objetoClonado = {...objetoOriginal};
console.log("Objeto original:", objetoOriginal);
console.log("Objeto clonado:", objetoClonado);
}

{
//45**. Programa en JavaScript para Recorrer un Objeto:**

const persona = {
    nombre: "Laura",
    edad: 25,
    profesion: "Arquitecta"
};

console.log("Propiedades del objeto persona:");
for (const propiedad in persona) {
    console.log(propiedad + ":", persona[propiedad]);
}
}

{
//46**. Programa en JavaScript para Combinar Propiedades de Dos Objetos:**

const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };

const objetoCombinado = { ...objeto1, ...objeto2 };
console.log("Objeto combinado:", objetoCombinado);
}

{
//47**. Programa en JavaScript para Contar el Número de Claves/Propiedades en un Objeto:**

const objeto = { a: 1, b: 2, c: 3 };

const numeroClaves = Object.keys(objeto).length;
console.log("Número de claves en el objeto:", numeroClaves);
}

{
//48**. Programa en JavaScript para Agregar un Par Clave/Valor a un Objeto:**

const persona = { nombre: "María", edad: 30 };

persona.profesion = "Ingeniera";
console.log("Objeto después de agregar una propiedad:", persona);
}

{
//49. Programa en JavaScript para Reemplazar Todas las Ocurrencias de una Cadena:

const cadena = "Hola, mundo! Hola, universo!";
const nuevaCadena = cadena.replace(/Hola/g, "Adiós");
console.log("Cadena original:", cadena);
console.log("Nueva cadena:", nuevaCadena);
}

{
//50. Programa en JavaScript para Crear Cadenas Multilínea:

const multilinea = `Esta es una cadena
que ocupa múltiples líneas
en el código.`;

console.log(multilinea);
}

{
//51. Programa en JavaScript para Formatear Números como Cadenas de Moneda:

const precio = 1500.75;
const precioFormateado = precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
console.log("Precio formateado:", precioFormateado);
}

{
//52. Programa en JavaScript para Generar una Cadena Aleatoria:

function generarCadenaAleatoria(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let cadena = "";

    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        cadena += caracteres.charAt(indice);
    }

    return cadena;
}

const cadenaAleatoria = generarCadenaAleatoria(10);
console.log("Cadena aleatoria:", cadenaAleatoria);
}

{
//53. Programa en JavaScript para Verificar si una Cadena Comienza con Otra Cadena:

const cadena = "JavaScript es genial!";
const comienzaCon = "JavaScript";

const comienzaCorrecto = cadena.startsWith(comienzaCon);
console.log("La cadena comienza con", comienzaCon + ":", comienzaCorrecto);
}

{
//54. Programa en JavaScript para Recortar una Cadena:

const cadena = "    ¡Hola, mundo!    ";
const cadenaRecortada = cadena.trim();
console.log("Cadena original:", cadena);
console.log("Cadena recortada:", cadenaRecortada);
}

{
//55. Programa en JavaScript para Convertir Objetos a Cadenas:

const objeto = { a: 1, b: 2, c: 3 };
const cadena = JSON.stringify(objeto);

console.log("Objeto:", objeto);
console.log("Cadena:", cadena);
}

{
//56. Programa en JavaScript para Verificar si una Cadena Contiene una Subcadena:

const cadena = "JavaScript es genial!";
const subcadena = "genial";

const contieneSubcadena = cadena.includes(subcadena);
console.log("La cadena contiene la subcadena", subcadena + ":", contieneSubcadena);
}

{
//57. Programa en JavaScript para Comparar Dos Cadenas:

const cadena1 = "Hola";
const cadena2 = "hola";

if (cadena1 === cadena2) {
    console.log("Las cadenas son iguales");
} else {
    console.log("Las cadenas son diferentes");
}
}

{
//58.Programa en JavaScript para Codificar una Cadena en Base64:
const cadena = "Hola, mundo!";
const cadenaCodificada = btoa(cadena);
console.log("Cadena original:", cadena);
console.log("Cadena codificada:", cadenaCodificada);
}

{
//59. Programa en JavaScript para Reemplazar Todas las Instancias de un Carácter en una Cadena:

const cadena = "javascript";
const caracterOriginal = "a";
const caracterNuevo = "A";

const nuevaCadena = cadena.replace(new RegExp(caracterOriginal, "g"), caracterNuevo);
console.log("Cadena original:", cadena);
console.log("Nueva cadena:", nuevaCadena);
}

{
//60. Programa en Javascript para Calcular el Area de un Triángulo
const base = 5;
const altura = 8;
const area = 0.5 * base * altura;
console.log("Área del triángulo:", area);
}