let array = [3,4,1,2,20,1,3,4,5,8,9,11,6,7,8,9,10]

console.log(array.length)
/*
Recorre el array y retorna un nuevo array con aquellos elementos
 que cumplan una determinada condición.
*/
let arrayResult = array.filter(elemento => elemento >= 3 && elemento < 8)
console.log('filter:',arrayResult)

/*
Permite iterar el contenido de un array. Recibe una funcion que toma como
parámetro el elemento actual de la iteración y el indice del mismo.
*/
arrayResult = array.forEach((elemento,i) => {
    console.log(`${elemento} índice ${i}`)
})

/*
Recorre el array y retorna la primera coincidencia del elemento que se busca.
*/
arrayResult = array.find(elemento => elemento > 5)
console.log('find:',arrayResult)

/*
Ordena los elementos del array y retorna el arreglo ordenado.
Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.
*/
arrayDescendente = array.sort((a,b) => a > b ? -1 : 1)
console.log('descendente:',arrayDescendente)

arrayAscendente = array.sort((a,b) => a > b ? 1 : -1)
console.log('ascendente:',arrayAscendente)

/*
Itera el array y retorna un booleano si como mínimo uno de los elementos 
presentes en el array pasa una condición determinada. 
Recibe una función que se encarga de preguntar aquello que se requiere dentro del array.
*/
arrayResult = array.some(elemento => elemento > 4)
console.log('some:',arrayResult)

arrayResult = array.some(elemento => elemento < 0)
console.log('some:',arrayResult)

/*
Es similar al some(), ya que itera el array y retorna un booleano. 
Pero esta vez, para que dicho booleano sea true todos los elementos
del array deberán pasar la condición dada
*/
arrayResult = array.every(elemento => elemento > 0)
console.log('every:',arrayResult)

arrayResult = array.every(elemento => elemento < 10)
console.log('every:',arrayResult)

/*
Se utiliza para unir dos o más arrays. 
Este método no cambia los arrays existentes, 
sino que devuelve un nuevo array.
*/
let array1 = ['a','b','c']
let array2 = ['d','e','f']
arrayResult = array1.concat(array2)
console.log('concat:',arrayResult)
arrayResult = array2.concat(array1);
console.log("concat:", arrayResult);

/*
Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
*/
console.log('includes:',array.includes(5))
console.log('includes:',array.includes(50))

/*
Une todos los elementos de un array en una cadena. 
Podemos pasarle como parámetro el carácter de separación
 que debe agregar entre los elementos.
*/
console.log('join:',arrayResult.join(' '))
console.log('join:',arrayResult.join('.'))
console.log('join:',arrayResult.join(' - '))

/*
Aplica una función a un acumulador y a cada valor de una array
(de izquierda a derecha) para reducirlo a un único valor
*/
arrayResult = array.reduce((acumula,elemento) => acumula + elemento,0)/array.length
console.log('reduce:',arrayResult)

/*
Retorna el primer índice en el que se puede encontrar un elemento dado en el array, 
ó retorna -1 si el elemento no esta presente.
*/
console.log(array)
console.log('indexOf:',array.indexOf(8))
console.log('indexOf:',array.indexOf(800))

/*
Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. 
Retorna -1 si el elemento no se encontrara.
*/
console.log('lastIndexOf:',array.lastIndexOf(8))

/*
Retorna el índice del primer elemento de un array que cumpla con la 
función de prueba proporcionada. 
En caso contrario devuelve -1.
*/
console.log('findIndex:',array.findIndex(elemento => elemento > 10))
console.log('findIndex:',array.findIndex(elemento => elemento > 10000))

/*
Cambia todos los elementos de un array por un valor estático,
desde el índice de inicio hasta el índice final. Retorna el array modificado.
*/

array = [4,3,5,2,6,1]
console.log('antes del fill:',array)
console.log('fill:',array.fill(10,3))
console.log('despues del fill',array)
console.log('fill:',array.fill(8,2,5))

/*
Devuelve una copia de una parte del array dentro de un nuevo array
empezando por inicio hasta fin (fin no incluido).
El array original no se modificará.
*/
console.log(array)
console.log('slice:',array.slice(1,4))

/*
Invierte el orden de los elementos de un array. 
El primer elemento pasa a ser el último y 
el último pasa a ser el primero.
*/
console.log('reverse:',array.reverse())

/*
Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
*/
console.log(array)
console.log('spliceAntes:',array[2])
console.log('splice1:',array.splice(1,1,-5))
console.log('spliceDespues:',array[2])
console.log(array)

/*
Crea una nueva instancia de Array a partir de un objeto iterable.
*/
console.log('from:',Array.from('código de prueba'))

/*
Permite recorrer el array y modificar los elementos presentes en él, 
retornando un nuevo array con la misma longitud que el original.
*/
console.log(array)
arrayResult = array.map(elemento => elemento * 10)
console.log('map:',arrayResult)

