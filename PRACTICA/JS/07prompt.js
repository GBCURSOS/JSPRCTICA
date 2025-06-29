/* PROMPT EN JAVASCRIPT */
// Interacción con el usuario mediante prompt, alert y confirm

console.log("=== PROMPT EN JAVASCRIPT ===");

// NOTA: prompt() solo funciona en navegadores, no en Node.js
// Para probar estos ejemplos, ejecuta el código en un navegador

// 1. PROMPT BÁSICO
console.log("\n--- PROMPT BÁSICO ---");
// let nombre = prompt("¿Cuál es tu nombre?");
// console.log("Hola", nombre);

// Simulación para Node.js/Quokka (descomentar las líneas de arriba para navegador)
let nombre = "Juan"; // Simulamos entrada del usuario
console.log("Entrada simulada:", nombre);
console.log("Hola", nombre);

// 2. PROMPT CON VALOR POR DEFECTO
console.log("\n--- PROMPT CON VALOR POR DEFECTO ---");
// let edad = prompt("¿Cuál es tu edad?", "18");
let edad = "25"; // Simulación
console.log("Edad ingresada:", edad);
console.log("Tipo de edad:", typeof edad); // Siempre string

// 3. CONVERSIÓN DE TIPOS
console.log("\n--- CONVERSIÓN DE TIPOS ---");
// let edadNumero = parseInt(prompt("Ingresa tu edad:"));
let edadNumero = parseInt("25"); // Simulación
console.log("Edad como número:", edadNumero);
console.log("Tipo:", typeof edadNumero);

// let precio = parseFloat(prompt("Precio del producto:"));
let precio = parseFloat("19.99"); // Simulación
console.log("Precio:", precio);

// 4. VALIDACIÓN DE ENTRADA
console.log("\n--- VALIDACIÓN DE ENTRADA ---");
function pedirEdadValida() {
    let edadInput;
    do {
        // edadInput = prompt("Ingresa tu edad (18-100):");
        edadInput = "25"; // Simulación - en navegador sería un bucle real
        edadInput = parseInt(edadInput);
    } while (isNaN(edadInput) || edadInput < 18 || edadInput > 100);
    
    return edadInput;
}

let edadValida = pedirEdadValida();
console.log("Edad válida ingresada:", edadValida);

// 5. PROMPT CON VALIDACIÓN DE EMAIL
console.log("\n--- VALIDACIÓN DE EMAIL ---");
function pedirEmail() {
    let email;
    let esValido = false;
    
    do {
        // email = prompt("Ingresa tu email:");
        email = "test@example.com"; // Simulación
        esValido = email && email.includes("@") && email.includes(".");
        
        if (!esValido) {
            console.log("Email inválido, intenta de nuevo");
        }
    } while (!esValido);
    
    return email;
}

let emailValido = pedirEmail();
console.log("Email válido:", emailValido);

// 6. MENÚ INTERACTIVO
console.log("\n--- MENÚ INTERACTIVO ---");
function mostrarMenu() {
    let opcion;
    
    do {
        let menu = `
Selecciona una opción:
1. Saludar
2. Calcular
3. Salir
        `;
        
        // opcion = prompt(menu);
        opcion = "1"; // Simulación
        
        switch(opcion) {
            case "1":
                // let nombreUsuario = prompt("¿Cómo te llamas?");
                let nombreUsuario = "María"; // Simulación
                console.log(`¡Hola ${nombreUsuario}!`);
                break;
            case "2":
                // let num1 = parseFloat(prompt("Primer número:"));
                // let num2 = parseFloat(prompt("Segundo número:"));
                let num1 = 10; // Simulación
                let num2 = 5;  // Simulación
                console.log(`${num1} + ${num2} = ${num1 + num2}`);
                break;
            case "3":
                console.log("¡Hasta luego!");
                break;
            default:
                console.log("Opción inválida");
        }
    } while (opcion !== "3");
}

// mostrarMenu(); // Descomenta para ejecutar en navegador

// 7. CALCULADORA SIMPLE
console.log("\n--- CALCULADORA SIMPLE ---");
function calculadoraSimple() {
    // let num1 = parseFloat(prompt("Primer número:"));
    // let operador = prompt("Operador (+, -, *, /):");
    // let num2 = parseFloat(prompt("Segundo número:"));
    
    // Simulación
    let num1 = 15;
    let operador = "*";
    let num2 = 3;
    
    let resultado;
    
    switch(operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                console.log("Error: División por cero");
                return;
            }
            break;
        default:
            console.log("Operador inválido");
            return;
    }
    
    console.log(`${num1} ${operador} ${num2} = ${resultado}`);
}

calculadoraSimple();

// 8. JUEGO DE ADIVINANZA
console.log("\n--- JUEGO DE ADIVINANZA ---");
function juegoAdivinanza() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let adivinado = false;
    
    console.log("Piensa en un número del 1 al 100");
    
    while (!adivinado && intentos < 7) {
        // let intento = parseInt(prompt(`Intento ${intentos + 1}: ¿Qué número crees que es?`));
        
        // Simulación de intentos
        let intento = intentos === 0 ? 50 : 
                     intentos === 1 ? 75 : 
                     intentos === 2 ? 63 : numeroSecreto;
        
        intentos++;
        
        if (intento === numeroSecreto) {
            console.log(`¡Felicidades! Adivinaste en ${intentos} intentos`);
            adivinado = true;
        } else if (intento < numeroSecreto) {
            console.log("El número es mayor");
        } else {
            console.log("El número es menor");
        }
    }
    
    if (!adivinado) {
        console.log(`Se acabaron los intentos. El número era ${numeroSecreto}`);
    }
}

juegoAdivinanza();

// 9. VALIDACIÓN CON CONFIRM
console.log("\n--- USO DE CONFIRM ---");
function confirmarAccion() {
    // let confirmacion = confirm("¿Estás seguro de que quieres continuar?");
    let confirmacion = true; // Simulación
    
    if (confirmacion) {
        console.log("Acción confirmada");
    } else {
        console.log("Acción cancelada");
    }
    
    return confirmacion;
}

confirmarAccion();

// 10. ALERT PARA MOSTRAR INFORMACIÓN
console.log("\n--- USO DE ALERT ---");
function mostrarResultados(datos) {
    let mensaje = `
Resumen de datos:
Nombre: ${datos.nombre}
Edad: ${datos.edad}
Email: ${datos.email}
    `;
    
    // alert(mensaje); // En navegador
    console.log("ALERT:", mensaje); // Simulación para Node.js
}

mostrarResultados({
    nombre: "Ana",
    edad: 28,
    email: "ana@example.com"
});

// 11. FORMULARIO COMPLETO
console.log("\n--- FORMULARIO COMPLETO ---");
function recopilarDatos() {
    let datos = {};
    
    // Simulación de datos (en navegador serían prompts reales)
    datos.nombre = "Carlos"; // prompt("Nombre completo:");
    datos.edad = 30; // parseInt(prompt("Edad:"));
    datos.email = "carlos@test.com"; // prompt("Email:");
    datos.telefono = "123-456-7890"; // prompt("Teléfono:");
    
    // Mostrar resumen
    console.log("\n--- DATOS RECOPILADOS ---");
    for (let clave in datos) {
        console.log(`${clave}: ${datos[clave]}`);
    }
    
    // let confirmar = confirm("¿Los datos son correctos?");
    let confirmar = true; // Simulación
    
    if (confirmar) {
        console.log("Datos guardados exitosamente");
    } else {
        console.log("Proceso cancelado");
    }
    
    return datos;
}

let datosUsuario = recopilarDatos();

// 12. MANEJO DE ERRORES CON PROMPT
console.log("\n--- MANEJO DE ERRORES ---");
function entradaSegura(mensaje, validador) {
    let entrada;
    let esValida = false;
    let intentos = 0;
    const maxIntentos = 3;
    
    while (!esValida && intentos < maxIntentos) {
        try {
            // entrada = prompt(`${mensaje} (Intento ${intentos + 1}/${maxIntentos}):`);
            entrada = intentos === 0 ? "abc" : intentos === 1 ? "123" : "456"; // Simulación
            
            if (entrada === null) {
                throw new Error("Entrada cancelada");
            }
            
            esValida = validador(entrada);
            
            if (!esValida) {
                console.log("Entrada inválida");
            }
            
            intentos++;
        } catch (error) {
            console.error("Error:", error.message);
            break;
        }
    }
    
    return esValida ? entrada : null;
}

// Validador para números
function esNumero(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

let numeroValido = entradaSegura("Ingresa un número", esNumero);
console.log("Número válido ingresado:", numeroValido);

// 13. EJEMPLO PRÁCTICO: CONVERSOR DE TEMPERATURA
console.log("\n--- CONVERSOR DE TEMPERATURA ---");
function convertirTemperatura() {
    // let celsius = parseFloat(prompt("Temperatura en Celsius:"));
    let celsius = 25; // Simulación
    
    if (isNaN(celsius)) {
        console.log("Por favor ingresa un número válido");
        return;
    }
    
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    
    let resultado = `
${celsius}°C equivale a:
${fahrenheit.toFixed(2)}°F
${kelvin.toFixed(2)}K
    `;
    
    console.log(resultado);
    // alert(resultado); // En navegador
}

convertirTemperatura();

console.log("\n=== CÓDIGO PARA NAVEGADOR ===");
console.log(`
// Para usar en navegador, descomenta y usa:

let nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuál es tu edad?"));
let confirma = confirm("¿Estás seguro?");
alert("¡Hola " + nombre + "!");
`);

console.log("\n=== NOTAS IMPORTANTES ===");
console.log("• prompt() solo funciona en navegadores");
console.log("• Siempre retorna string o null");
console.log("• Usar parseInt/parseFloat para números");
console.log("• Validar siempre las entradas del usuario");
console.log("• confirm() retorna true/false");
console.log("• alert() solo muestra información");
console.log("• Considerar alternativas modernas como formularios HTML");