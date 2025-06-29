// Interfaz antigua
class OldPrinter {
  printOld(text) {
    console.log("Impresora antigua: " + text);
  }
}

// Nueva interfaz que el cliente espera
class NewPrinter {
  print(text) {
    console.log("Impresora nueva: " + text);
  }
}

// Adaptador
class PrinterAdapter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter;
  }

  print(text) {
    this.oldPrinter.printOld(text);
  }
}

// Código cliente
function clientCode(printer) {
  printer.print("Hola, mundo!");
}

// Uso
const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

console.log("Cliente: Puedo trabajar con la nueva interfaz de impresora:");
clientCode(new NewPrinter());

console.log(
  "\nCliente: Y también puedo trabajar con la impresora antigua a través del adaptador:"
);
clientCode(adapter);
