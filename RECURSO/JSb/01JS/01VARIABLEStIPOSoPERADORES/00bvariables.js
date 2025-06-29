

{
    var a = 10
    var b = 10
}

{
    let a = 6
    let b = 7
}

{
    let a = 8
    //let b = 9
    console.log(a * b)
}
// toma a & b de var, las variables con let, NO existen
console.log(a * b)

let c = null
let d
const dodo = `esta es una ${c} prueba` + ' dodo '
console.log(':',dodo)
console.log(typeof dodo)
const symbol = Symbol('etiqueta')
console.log("tipo1: "+ typeof 42 )
console.log("tipo2: "+ typeof a )
console.log("tipo3: "+ typeof "cadena" )
console.log("tipo4: "+ typeof c + ":" + c)
console.log("tipo5: "+ typeof d )
console.log("tipo6: "+ typeof symbol)
let uno = { curso: "fullstack", nivel: 100 };
console.log("tipo7: "+ typeof {curso: "fullstack", nivel: "intermedio"})
console.log('tipo 8', typeof uno)
console.log("tipo 8", typeof uno.curso);
console.log("tipo 8", typeof uno.nivel);
console.log("tipo 8", uno);
uno.dodo = 'color'
console.log("tipo 8", uno);




