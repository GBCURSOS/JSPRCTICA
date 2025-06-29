/*
    valores booleanos: true & false
    operadores lógicos: AND (&&), OR (||), NOT (!)

    AND Lógico (&&)
    expr1 && expr2	Devuelve expr1 si se puede convertir a false;
    de lo contrario, devuelve expr2. 
    Por lo tanto, cuando se usa con valores booleanos, 
    && devuelve true si ambos operandos son true; 
    de lo contrario, devuelve false.

    OR lógico (||)
    expr1 || expr2 Devuelve expr1 si se puede convertir a true;
    de lo contrario, devuelve expr2. 
    Por lo tanto, cuando se usa con valores booleanos, 
    || devuelve true si alguno de los operandos es true; 
    si ambos son falsos, devuelve false.

    NOT lógico (!)
    Devuelve false si su único operando se puede convertir a true; 
    de lo contrario, devuelve true

    Operador Ternario
    condition ? val1 : val2
    Si condition es true, el operador tiene el valor de val1. 
    De lo contrario, tiene el valor de val2. 
    Puedes utilizar el operador condicional en cualquier lugar
    donde normalmente utilizas un operador estándar.

    COMPARACION
        >= (mayor o igual que), 
        <= (menor o igual que), 
        == (igual a),
        != (no igual a).

    El operador ?? se asemeja a ||, pero devuelve el valor de la derecha solo si
    el de la izquierda es null o undefined, no si es algún otro valor que se pueda
    convertir en false. A menudo, este comportamiento es preferible al de ||.
        
*/

console.log("&& ------------")
console.log(true && true)      // t && t devuelve true
console.log(true && false)     // t && f devuelve false
console.log(false && true)     // f && t devuelve false
console.log(false && false)    // f && f devuelve false
console.log("------------")
console.log(true && 3 == 4)  
console.log("Cat" && "Dog") 
console.log(false && "Cat")
console.log(true && "Cat")
console.log("Cat" && false)
console.log("------------")
console.log("------------")
console.log("|| ------------")
console.log(true || true)      // t || t devuelve true
console.log(true || false)     // t || f devuelve true
console.log(false || true)     // f || t devuelve true
console.log(false || false)    // f || f devuelve false
console.log("------------")
console.log(true || 3 == 4)  
console.log("Cat" || "Dog") 
console.log(false || "Cat")
console.log(true || "Cat")
console.log("Cat" || false)
console.log("------------")
console.log("------------")
console.log("! ------------")
console.log(!true)              // !t devuelve false
console.log(!false)             // !f devuelve true
console.log(!"Cat")             
console.log("------------")
console.log("------------")
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
console.log("------------")
console.log("------------")
console.log("Conversión automática de tipos");
/*
Cuando no se desea que ocurran conversiones de tipo, hay dos operadores adicionales: === y !==. 
El primero prueba si un valor es precisamente igual al otro, y el segundo prueba si no es precisamente igual. 
Por lo tanto, "" === false es falso como se espera.
*/
console.log(8 * null)
console.log("5" - 1)
console.log("5" + 1)
console.log("five" * 2)
console.log(false == 0)
console.log(false === 0);
console.log("------------");
console.log("------------");
console.log("Otras situaciones de operadores lógicos")
/*
El operador ||, devolverá el valor de su izquierda cuando ese valor pueda convertirse en true y 
devolverá el valor de su derecha de lo contrario. 
El operador && funciona de manera similar pero en sentido contrario. 
Cuando el valor a su izquierda es algo que se convierte en false, devuelve ese valor, 
y de lo contrario devuelve el valor de su derecha.
Las reglas para convertir cadenas y números en valores Booleanos establecen que 0, NaN, null y 
la cadena vacía ("") cuentan como false, mientras que todos los demás valores cuentan como true. 
*/
console.log(null || "usuario")
console.log("agnes" || "usuario")
console.log(0 || 100);
console.log("------------");
console.log(null && "usuario");
console.log("agnes" && "usuario");
console.log(0 && 100);
/*
El operador ?? se asemeja a ||, pero devuelve el valor de la derecha solo si el de la izquierda es null o ,
 no si es algún otro valor que se pueda convertir en falseundefined
*/
console.log("------------");
console.log(0 ?? 100);
console.log(null ?? 100);
console.log("agnes" ?? "usuario");





