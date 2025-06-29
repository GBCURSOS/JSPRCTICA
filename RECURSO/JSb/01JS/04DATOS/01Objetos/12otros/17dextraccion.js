
'use strict'
{
  console.log('\nSe puede trabajar con objetos enlazados')
  const uno = { nombre: 'Pedro', cumple: { dia: 14, mes: 3, anno: 2000 } }
  let dos = { nombre: 'Pablo', cumple: { dia: 14, mes: 3, anno: 2020 } }
  let arreglo = [uno, dos]
  let { cumple: { anno: unoCumple } } = arreglo[0]
    // Declara la variable unoCumple e inicializa a 2000
  console.log('unoCumple:', unoCumple) 
  console.log('uno: ',uno.cumple.anno)
}

console.log('\n También se pueden usar nombres variables')
const uno = { nombre: "Pedro", cumple: { dia: 14, mes: 3, anno: 2000 } };
const dos = { nombre: 'Pablo', edad: 42 };

let variable = 'EDAD';
let { [variable.toLowerCase()]: dosEdad } = dos;
let { [variable.toLowerCase()]: arreglo1 } = dos;
variable = "NOMBRE";
let { [variable.toLowerCase()]: dosNombre } = dos;
let { [variable.toLowerCase()]: arreglo2 } = dos;
// Inicializa a dosEdad a dos[field.toLowerCase()] dos['edad']
console.log('dosEdad:', dosEdad) // 42
console.log("dosNombre:", dosNombre);
console.log('arreglo',arreglo1)

console.log('\n Extracciones se pueden emplear en los arreglos')
{
  const numeros = [1, 7, 2, 9, 10, 20]
  let [primero, segundo, ...otros] = numeros
    // primero = 1, segundo =s 7, y otros es [2, 9, 10, 20]
  console.log('primero:', primero) 
  console.log('segundo:', segundo) 
  console.log('otros:', otros) 
}

console.log('\n Si no hay suficientes elementos, el resto es una arreglo vacío')
{
  let [primero, segundo, ...otros] = [42]
    // primero es 42, segundo es undefined, y otros es []
  console.log('primero:', primero) 
  console.log('segundo:', segundo) 
  console.log('otros:', otros) 
}

console.log('\n otras declaraciones que trabajan con objetos')
{
  dos.sexo='M'
  console.log('dos',dos);
  let { nombre, ...todoElResto } = dos
    // todoElResto es { age: 42 sexo:'M'}
  console.log('nombre:', nombre) 
  console.log("todoElResto:", typeof todoElResto);
  console.log('todoElResto:', todoElResto) // ...
}

console.log('\n Un valor por defecto es usado si el valor deseado está ausente')
{
  let [primero, segundo = 0] = [42, 60];
  let [primeroA, segundoA = 0] = [60];
  // primero es 42, segundo es 0, dado que no hay suficientes valores
  let { apodo = "None" } = uno;
  // apodo = 'None' dado que el objeto NO TIENE esa propiedad
  console.log("primero:", primero); // 42
  console.log("segundo:", segundo); // 60
  console.log("segundo:", segundoA); // 0
  console.log("apodo:", apodo); // None
}

console.log('\n los valores por defecto pueden estar basados en otras variables')
{
  let [primero, segundo = primero] = [42]
  let { nombre, apodo = nombre } = dos
    // Ambos nombre y apodo están inicializados con la propiedad nombre de uno
  console.log('nombre:', nombre) // Pablo
  console.log('apodo:', apodo) // Pablo
}

console.log('\n otro ejemplo')
{
  let configurado = { separador: '; ' }
  const { separador = ',', limiteIzquierdo = '[', limiteDerecho = ']' } = configurado
  console.log('separador:', separador) // ;
  console.log('limiteIzquierdo:', limiteIzquierdo) // [
  console.log('limiteDerecho:', limiteDerecho) // ]
}

