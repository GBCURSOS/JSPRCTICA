// Objeto original
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

// 1. Shallow cloning
const personaClonada = { ...persona };
console.log('persona Clonada:',personaClonada);

// 2. Freeze
Object.freeze(persona);
// persona.edad = 31; // Esto no funcionará

// 4. Properties iteration
for (let prop in persona) {
  console.log(`${prop}: ${persona[prop]}`);
}

// 5. Assign
const personaExtendida = Object.assign({}, persona, {
  profesion: "Desarrollador",
});
console.log('Persona Extendida:', personaExtendida);

// 6. Rest/Spread
const { nombre, ...resto } = persona;
console.log('nombre:',nombre)
console.log('resto:',resto)

// 7. defineProperty
Object.defineProperty(personaClonada, "fechaNacimiento", {
  value: "1990-01-01"
});
console.log('persona Clonada Fecha:',personaClonada.fechaNacimiento)

// 8. get and set
const cuenta = {
  _saldo: 1000,
  get saldo() {
    return this._saldo;
  },
  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this._saldo = nuevoSaldo;
    }
  },
};
console.log("Cuenta:", cuenta);
console.log("Saldo de la cuenta:", cuenta.saldo);
cuenta.saldo = 2000;
console.log("Saldo de la cuenta:", cuenta.saldo);


// 9. Dynamic / variable property names
const propiedad = "colorFavorito";
personaExtendida[propiedad] = "azul";
console.log('Persona Extendida:', personaExtendida);

// 10. Seal
Object.seal(personaExtendida);
// personaExtendida.nuevaPropiedad = "valor"; // Esto no funcionará

// 11. Convertir valores de los objetos a arreglos
const valoresPersona = Object.values(persona);
console.log('Valores:',valoresPersona)

// 13. Descriptors and named properties
const descriptor = Object.getOwnPropertyDescriptor(persona, "nombre");
console.log('Descriptor:',descriptor)

// 14. Keys
const propiedadesPersona = Object.keys(persona);
console.log('Propiedades:', propiedadesPersona);

// 16. entries()
const entradasPersona = Object.entries(persona);
console.log('Entradas:', entradasPersona);

