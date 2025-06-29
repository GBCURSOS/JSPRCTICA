

'use strict'
// Las llaves  { . . . } aislan las declaraciones de las variables
console.log('sin extraccion:')
{
  let pair = [1, 2]
  let first = pair[0]
  let second = pair[1]
  console.log('first:', first) // 1
  console.log('second:', second) // 2
}

console.log('\ncon extraccion:')
{
  let pair = [1, 2]
  let [first, second] = pair
  console.log('first:', first) // 1
  console.log('second:', second) // 2
}

console.log('\nOtro ejemplo:')
{
  let [first, [second, third]] = [1, [2, 3]]
  console.log('first:', first) 
  console.log('second:', second) 
  console.log('third:', third) 
}
console.log('\nelementos que no coincidan son ignorados')
{
  let [first, second] = [1, 2, 3]
  console.log('first:', first) 
  console.log('second:', second) 
}
console.log('\nvariables que no coincidan quedan indefinidas')
{
  let [first, second] = [1]
  console.log('first:', first) 
  console.log('second:', second) 
}
console.log('\nestructura con variables declaradas')
{
  
  /*
  OJO con el punto y coma (;) en la línea 65
      En JavaScript, algunas instrucciones deben terminar con punto y coma. Las más comunes son 
      las declaraciones de variables, las expresiones y el flujo de control no lineal (break, continue, return, throw).
      Sin embargo, JavaScript inserta el punto y coma por el programamdor: La regla básica es sencilla, al procesar una sentencia,
      el analizador sintáctico incluye cada token hasta que encuentra un punto y coma o un "token infractor" (algo que no puede
      formar parte de la sentencia). Si el token infractor va precedido por un terminador de línea, o es un }, o es el final de la
      entrada, el analizador añade un punto y coma. 
      Un ejemplo:
        línea 1 let a = x +
        línea 2   someComplicatedFunctionCall();
        línea 3 let b = y
      No se añade punto y coma después de la primera línea. La dirección + al principio de la segunda línea no es "infractor".
      Pero el let al principio de la tercera línea es "infractor". No podría haber parte de la primera declaración de variable. 
      Como el token infractor viene después de un terminador de línea, se inserta un punto y coma:
        let a = x
          + someComplicatedFunctionCall();
        let b = y
  */

  let first = 1
  let second = 2;

  [first, second] = [4, 5]
  console.log('first:', first) // 4
  console.log('second:', second) // 5
}

console.log('\nIntercambiando dos variables')
{
  let x = 6
  let y = 7;
  
  //con javascript
  [x, y] = [y, x]

  // de la forma estándar
  {
    let temporal = x 
    x = y
    y = temporal
  }

  console.log('x:', x) // 7
  console.log('y:', y) // 6
}

console.log('\nOtros casos')
{
  const numeros = []
  const elemento = { nombre: 'Nombre Apellido' };
  [numeros[0], elemento.edad] = [13, 42] // numeros[0] = 13; elemento.edad = 42
  console.log('numeros:', numeros) 
  console.log('elemento:', elemento) 
}

console.log('\nUso de los nombres de propiedades con la extracción de un objeto')
{
  let uno = { 
    nombre: 'NombreUno',
    edad: 42 }

  let { nombre: unoNombre, edad: unoEdad } = uno
  /*
    Este fragmento de código declara dos variables unoNombre y unoEdad y las inicializa con los valores de las propiedades
    nombre y edad del objeto del lado derecho. Hay que tener en cuenta que el lado izquierdo NO es un objeto literal. Es un
    patrón para que muestra cómo se emparejan las variables con el objeto de la derecha.
  */
  console.log('unoNombre:', unoNombre) 
  console.log('unoEdad:', unoEdad) 
}
console.log('\nPropiedades y nombres pueden ser lo mismo')
{
  let dos = { 
    nombre: 'NombreDos',
    edad: 42,
  }
  let { nombre, edad } = dos
  /*
    La estructuración con objetos funciona más fácil cuando la propiedad tiene el mismo nombre que la variable. En ese caso, 
    se puede omitir el nombre de la propiedad y los dos puntos. Esta sentencia declara dos variables nombre y edad y se 
    inicializan con las propiedades de nombre idéntico del objeto del lado derecho.
  */
  console.log('nombre:', nombre) 
  console.log('edad:', edad) 
}
console.log('\nUso de paréntesis para inicializar variables')
{
  let nombre = undefined
  let edad = undefined

  const tres = { 
    nombre: 'NombreTres', 
    edad: 28,
  };

  //Se requiere punto y coma, como también paréntesis
  
  ({nombre, edad} = tres)
  console.log('nombre:', nombre) 
  console.log('edad:', edad) 
}
