// ============================================
// CONDICIONALES EN JAVASCRIPT
// Estructuras de control para tomar decisiones
// ============================================

console.log("=== CONDICIONALES EN JAVASCRIPT ===");

// ============================================
// 1. CONDICIONAL IF BÁSICO
// ============================================
console.log("\n--- 1. IF BÁSICO ---");

// El programador define una variable para la edad
let edad = 18;
console.log("Edad del usuario:", edad);

// La estructura if evalúa una condición
if (edad >= 18) {
    console.log("El usuario es mayor de edad");
}

// Ejemplo con variable booleana
let esMayorDeEdad = edad >= 18;
console.log("¿Es mayor de edad?", esMayorDeEdad);

if (esMayorDeEdad) {
    console.log("Puede votar en las elecciones");
}

// ============================================
// 2. CONDICIONAL IF-ELSE
// ============================================
console.log("\n--- 2. IF-ELSE ---");

let temperatura = 25;
console.log("Temperatura actual:", temperatura + "°C");

// El programador usa if-else para dos opciones
if (temperatura > 20) {
    console.log("Hace calor, se recomienda ropa ligera");
} else {
    console.log("Hace frío, se recomienda abrigarse");
}

// Ejemplo con número negativo
let saldo = -150;
console.log("Saldo de la cuenta:", saldo);

if (saldo >= 0) {
    console.log("La cuenta tiene fondos disponibles");
} else {
    console.log("La cuenta está en números rojos");
}

// ============================================
// 3. CONDICIONAL IF-ELSE IF-ELSE
// ============================================
console.log("\n--- 3. IF-ELSE IF-ELSE ---");

let calificacion = 85;
console.log("Calificación del estudiante:", calificacion);

// El sistema evalúa múltiples rangos
if (calificacion >= 90) {
    console.log("Calificación: A - Excelente");
} else if (calificacion >= 80) {
    console.log("Calificación: B - Muy bueno");
} else if (calificacion >= 70) {
    console.log("Calificación: C - Bueno");
} else if (calificacion >= 60) {
    console.log("Calificación: D - Suficiente");
} else {
    console.log("Calificación: F - Insuficiente");
}

// Ejemplo con día de la semana
let diaSemana = 3;
console.log("Día de la semana (número):", diaSemana);

if (diaSemana === 1) {
    console.log("Hoy es Lunes");
} else if (diaSemana === 2) {
    console.log("Hoy es Martes");
} else if (diaSemana === 3) {
    console.log("Hoy es Miércoles");
} else if (diaSemana === 4) {
    console.log("Hoy es Jueves");
} else if (diaSemana === 5) {
    console.log("Hoy es Viernes");
} else if (diaSemana === 6) {
    console.log("Hoy es Sábado");
} else if (diaSemana === 7) {
    console.log("Hoy es Domingo");
} else {
    console.log("Día inválido");
}

// ============================================
// 4. OPERADORES DE COMPARACIÓN
// ============================================
console.log("\n--- 4. OPERADORES DE COMPARACIÓN ---");

let a = 10;
let b = 20;
let c = "10";

console.log("a =", a);
console.log("b =", b);
console.log("c =", c, "(string)");

// Igual (==) - compara valor, no tipo
console.log("a == c:", a == c); // true
console.log("a === c:", a === c); // false (estricto)

// Diferente
console.log("a != b:", a != b); // true
console.log("a !== c:", a !== c); // true (estricto)

// Mayor y menor
console.log("a > b:", a > b); // false
console.log("a < b:", a < b); // true
console.log("a >= 10:", a >= 10); // true
console.log("b <= 20:", b <= 20); // true

// El programador usa comparaciones en condicionales
if (a === parseInt(c)) {
    console.log("a y c son iguales en valor y tipo después de conversión");
}

// ============================================
// 5. OPERADORES LÓGICOS
// ============================================
console.log("\n--- 5. OPERADORES LÓGICOS ---");

let usuario = "admin";
let contraseña = "12345";
let esActivo = true;

console.log("Usuario:", usuario);
console.log("Contraseña:", contraseña);
console.log("Está activo:", esActivo);

// AND (&&) - ambas condiciones deben ser verdaderas
if (usuario === "admin" && contraseña === "12345") {
    console.log("Credenciales correctas");
}

// OR (||) - al menos una condición debe ser verdadera
if (usuario === "admin" || usuario === "moderator") {
    console.log("El usuario tiene privilegios");
}

// NOT (!) - invierte el valor booleano
if (!esActivo) {
    console.log("El usuario está inactivo");
} else {
    console.log("El usuario está activo");
}

// Combinación de operadores lógicos
let edadUsuario = 25;
let tienePermiso = true;

if ((edadUsuario >= 18 && edadUsuario <= 65) && tienePermiso) {
    console.log("El usuario puede acceder al sistema");
} else {
    console.log("Acceso denegado");
}

// ============================================
// 6. SWITCH STATEMENT
// ============================================
console.log("\n--- 6. SWITCH STATEMENT ---");

let mes = 3;
console.log("Mes (número):", mes);

// El programador usa switch para múltiples opciones exactas
switch (mes) {
    case 1:
        console.log("Enero - Invierno");
        break;
    case 2:
        console.log("Febrero - Invierno");
        break;
    case 3:
        console.log("Marzo - Primavera");
        break;
    case 4:
        console.log("Abril - Primavera");
        break;
    case 5:
        console.log("Mayo - Primavera");
        break;
    case 6:
        console.log("Junio - Verano");
        break;
    case 7:
        console.log("Julio - Verano");
        break;
    case 8:
        console.log("Agosto - Verano");
        break;
    case 9:
        console.log("Septiembre - Otoño");
        break;
    case 10:
        console.log("Octubre - Otoño");
        break;
    case 11:
        console.log("Noviembre - Otoño");
        break;
    case 12:
        console.log("Diciembre - Invierno");
        break;
    default:
        console.log("Mes inválido");
}

// Switch con agrupación de casos
let tipoVehiculo = "carro";
console.log("Tipo de vehículo:", tipoVehiculo);

switch (tipoVehiculo) {
    case "carro":
    case "auto":
    case "automóvil":
        console.log("Vehículo de 4 ruedas para pasajeros");
        break;
    case "moto":
    case "motocicleta":
        console.log("Vehículo de 2 ruedas");
        break;
    case "bicicleta":
        console.log("Vehículo sin motor");
        break;
    default:
        console.log("Tipo de vehículo no reconocido");
}

// ============================================
// 7. OPERADOR TERNARIO
// ============================================
console.log("\n--- 7. OPERADOR TERNARIO ---");

let puntuacion = 750;
console.log("Puntuación del jugador:", puntuacion);

// Sintaxis: condición ? valor_si_verdadero : valor_si_falso
let mensaje = puntuacion >= 500 ? "¡Has ganado!" : "Intenta de nuevo";
console.log("Mensaje:", mensaje);

// El programador puede anidar operadores ternarios
let categoria = puntuacion >= 800 ? "Experto" : 
               puntuacion >= 500 ? "Intermedio" : "Principiante";
console.log("Categoría del jugador:", categoria);

// Operador ternario en asignación de variables
let descuento = puntuacion >= 1000 ? 0.2 : 0.1;
console.log("Descuento aplicado:", descuento * 100 + "%");

// ============================================
// 8. VALIDACIONES COMUNES
// ============================================
console.log("\n--- 8. VALIDACIONES COMUNES ---");

// Validación de números
let numero = 42;
console.log("Número a validar:", numero);

if (typeof numero === "number" && !isNaN(numero)) {
    console.log("Es un número válido");
    
    if (numero > 0) {
        console.log("Es un número positivo");
    } else if (numero < 0) {
        console.log("Es un número negativo");
    } else {
        console.log("Es cero");
    }
} else {
    console.log("No es un número válido");
}

// Validación de strings
let texto = "JavaScript";
console.log("Texto a validar:", texto);

if (typeof texto === "string" && texto.length > 0) {
    console.log("Es un string válido y no está vacío");
    
    if (texto.length >= 5) {
        console.log("El texto tiene suficiente longitud");
    }
} else {
    console.log("String inválido o vacío");
}

// Validación de arrays
let lista = [1, 2, 3, 4, 5];
console.log("Array a validar:", lista);

if (Array.isArray(lista) && lista.length > 0) {
    console.log("Es un array válido con elementos");
    console.log("Cantidad de elementos:", lista.length);
} else {
    console.log("No es un array válido o está vacío");
}

// ============================================
// 9. CONDICIONALES ANIDADOS
// ============================================
console.log("\n--- 9. CONDICIONALES ANIDADOS ---");

let esEstudiante = true;
let edadEstudiante = 20;
let promedioNotas = 8.5;

console.log("¿Es estudiante?", esEstudiante);
console.log("Edad:", edadEstudiante);
console.log("Promedio de notas:", promedioNotas);

// El programador anida condicionales para lógica compleja
if (esEstudiante) {
    console.log("La persona es estudiante");
    
    if (edadEstudiante >= 18) {
        console.log("Es estudiante universitario");
        
        if (promedioNotas >= 9.0) {
            console.log("Estudiante con honores - Beca completa");
        } else if (promedioNotas >= 8.0) {
            console.log("Buen estudiante - Beca parcial");
        } else if (promedioNotas >= 7.0) {
            console.log("Estudiante regular - Sin beca");
        } else {
            console.log("Estudiante en riesgo académico");
        }
    } else {
        console.log("Es estudiante de secundaria");
    }
} else {
    console.log("La persona no es estudiante");
}

// ============================================
// 10. TRUTHY Y FALSY VALUES
// ============================================
console.log("\n--- 10. VALORES TRUTHY Y FALSY ---");

// El programador debe conocer los valores falsy en JavaScript
let valoresFalsy = [false, 0, -0, 0n, "", null, undefined, NaN];
console.log("Valores falsy en JavaScript:", valoresFalsy);

// Prueba de valores falsy
valoresFalsy.forEach((valor, index) => {
    if (valor) {
        console.log(`Valor ${index + 1} (${valor}) es truthy`);
    } else {
        console.log(`Valor ${index + 1} (${valor}) es falsy`);
    }
});

// Ejemplos prácticos con truthy/falsy
let nombreUsuario = "";
if (nombreUsuario) {
    console.log("Bienvenido,", nombreUsuario);
} else {
    console.log("Por favor, ingrese su nombre");
}

let listaCompras = [];
if (listaCompras.length) {
    console.log("Hay", listaCompras.length, "elementos en la lista");
} else {
    console.log("La lista de compras está vacía");
}

// ============================================
// 11. SHORT-CIRCUIT EVALUATION
// ============================================
console.log("\n--- 11. EVALUACIÓN DE CORTOCIRCUITO ---");

let config = null;
let valorPorDefecto = "Configuración predeterminada";

// OR (||) - devuelve el primer valor truthy
let configuracion = config || valorPorDefecto;
console.log("Configuración:", configuracion);

// AND (&&) - devuelve el último valor si todos son truthy
let usuario2 = { nombre: "Juan", activo: true };
let saludo = usuario2 && usuario2.activo && "Hola, " + usuario2.nombre;
console.log("Saludo:", saludo);

// Nullish coalescing (??) - solo considera null y undefined como falsy
let valor1 = 0;
let valor2 = null;
console.log("Con ||:", valor1 || "Por defecto"); // "Por defecto"
console.log("Con ??:", valor1 ?? "Por defecto"); // 0

console.log("Con ||:", valor2 || "Por defecto"); // "Por defecto"
console.log("Con ??:", valor2 ?? "Por defecto"); // "Por defecto"

// ============================================
// 12. EJERCICIOS PRÁCTICOS
// ============================================
console.log("\n--- 12. EJERCICIOS PRÁCTICOS ---");

// Ejercicio 1: Sistema de calificaciones
function evaluarCalificacion(nota) {
    console.log(`Evaluando nota: ${nota}`);
    
    if (nota < 0 || nota > 100) {
        return "Nota inválida";
    } else if (nota >= 90) {
        return "A - Excelente";
    } else if (nota >= 80) {
        return "B - Muy bueno";
    } else if (nota >= 70) {
        return "C - Bueno";
    } else if (nota >= 60) {
        return "D - Suficiente";
    } else {
        return "F - Reprobado";
    }
}

console.log(evaluarCalificacion(95));
console.log(evaluarCalificacion(75));
console.log(evaluarCalificacion(45));

// Ejercicio 2: Calculadora de descuentos
function calcularDescuento(precio, categoria) {
    console.log(`Calculando descuento para: $${precio}, categoría: ${categoria}`);
    
    let descuento = 0;
    
    switch (categoria.toLowerCase()) {
        case "estudiante":
            descuento = 0.15;
            break;
        case "senior":
            descuento = 0.20;
            break;
        case "empleado":
            descuento = 0.25;
            break;
        case "vip":
            descuento = 0.30;
            break;
        default:
            descuento = 0;
    }
    
    let precioFinal = precio * (1 - descuento);
    return {
        precioOriginal: precio,
        descuento: descuento * 100 + "%",
        descuentoMonto: precio * descuento,
        precioFinal: precioFinal
    };
}

console.log(calcularDescuento(100, "estudiante"));
console.log(calcularDescuento(50, "vip"));

// Ejercicio 3: Validador de contraseñas
function validarContraseña(password) {
    console.log("Validando contraseña...");
    
    let esValida = true;
    let errores = [];
    
    if (password.length < 8) {
        esValida = false;
        errores.push("Debe tener al menos 8 caracteres");
    }
    
    if (!/[A-Z]/.test(password)) {
        esValida = false;
        errores.push("Debe contener al menos una mayúscula");
    }
    
    if (!/[a-z]/.test(password)) {
        esValida = false;
        errores.push("Debe contener al menos una minúscula");
    }
    
    if (!/[0-9]/.test(password)) {
        esValida = false;
        errores.push("Debe contener al menos un número");
    }
    
    return {
        esValida: esValida,
        errores: errores,
        mensaje: esValida ? "Contraseña válida" : "Contraseña inválida"
    };
}

console.log(validarContraseña("123"));
console.log(validarContraseña("MiContraseña123"));

console.log("\n=== FIN DE EJEMPLOS DE CONDICIONALES ===");