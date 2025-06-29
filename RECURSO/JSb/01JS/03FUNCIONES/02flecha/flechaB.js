/*
Las funciones arrow tienen la capacidad de capturar el objeto `this` del contexto 0
donde la arrow se ejecuta y así utilizarlo dentro de su bloque de sentencias.
Esta característica es muy útil cuando se trabaja con objetos. 
A continuación se presenta la solucion clásica, objetos antiguos, y la actual
*/

/* 
{
  // `this` Antes
  // Objeto Persona
  function Persona(nombre) {
    //El constructor Persona() define `this` como una instancia de él mismo
    this.nombre = nombre;
    this.edad = 0;

    setInterval(function () {
      //La función anónima define `this` como una instancia de ella misma.
      //OJO con ésto para las funciones anidadas
      this.edad++;
      console.log("festandar", this.edad, jon);
    }, 1000);
  }

  var jon = new Persona("Jonathan");
  console.log("Antes con Problema: ", jon); //Imprime la edad en 0 por cada segundo que pasa

}
 */
console.log(
  "---------------------------------------");
/*
{
  // solución al problema de `this` Antes
  function Persona(nombre) {
    //Se declara una variable self (algunos prefieren that) para guardar
    // el `this` del constructor Persona()
    var self = this;

    self.nombre = nombre;
    self.edad = 0;

    setInterval(function () {
      //La función anónima define `this` como una instancia de ella misma.
      //OJO con ésto para las funciones anidadas
      self.edad++;
      console.log("fanonima", self.edad, jon);
    }, 1000);


  }

  let jon = new Persona("Jonathan");
  console.log("Solucion de Antes: Objeto", jon); //Imprime el valor de edad más uno por cada segundo que pasa
   
}
 
console.log(
  "------------------------------------------------------------------------"
);
*/


{
  //solución al problema de `this` Ahora
  function Persona(nombre) {
    //El constructor Persona() define `this` como una instancia de él mismo
    this.nombre = nombre;
    this.edad = 0;

    setInterval(() => {
      //La función anónima define `this` como una instancia de ella misma.
      //OJO con ésto para las funciones anidadas
      this.edad++;
      console.log("farrow", this.edad, jon);
    }, 1000);


  }

  const jon = new Persona("Jonathan");
  console.log("Solución de Ahora: Objeto", jon); //Imprime el valor de edad más uno por cada segundo que pasa
}
