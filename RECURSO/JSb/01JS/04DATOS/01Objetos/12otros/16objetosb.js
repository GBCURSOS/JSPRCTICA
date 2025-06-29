{
  let objeto = {
    nombre: "silla",
    color: "blanco",
    material: "madera",
    cantidad: 10,
  };

  console.log(typeof objeto);
  console.log(objeto);
  console.log(objeto.nombre);
  console.log(objeto["nombre"]);

  console.log(objeto.precio);
  objeto.precio = 100;
  console.log(objeto);
  delete objeto.nombre;
  console.log(objeto);
}

{
  function creaEmpleado(name, salary) {
    return {
      name: name,
      salary: salary,
      salario: function (percent) {
        this.salary *= 1 + percent / 100;
      },
    };
  }

  const pedro = creaEmpleado("Pedro", 90000);
  const luis = creaEmpleado("Luis", 100000);
  console.log("pedro:", pedro);
  console.log("luis:", luis);
  console.log(pedro === luis)
  let dodo = pedro
  console.log(pedro === dodo)
  console.log(pedro.salario === luis.salario);

  console.log(pedro.name);
  console.log(luis.name);
}

{
  class Empleado {
    name;
    salary;

    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }

    salario(percent) {
      this.salary *= 1 + percent / 100;
    }
  }

  const empleado = new Empleado("Pedro", 90000);
  empleado.salario(5);
  const maria = new Empleado("Maria", 100000);
  console.log("pedro:", empleado);
  console.log("maria:", maria);
}
