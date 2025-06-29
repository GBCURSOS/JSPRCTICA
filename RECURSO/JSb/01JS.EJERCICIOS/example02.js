
//21. Programa en JavaScript para Encontrar la Suma de Números Naturales: 
    
    let entrada = prompt("Ingresa un número natural:")
    const n = parseInt(entrada);
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    console.log("La suma de los primeros", n, "números naturales es:", suma);

    {
//22. Programa en JavaScript para Verificar si los Números Tienen el Mismo Último Dígito:const num1 = parseInt(prompt("Ingresa el primer número:"));
    const num1 = parseInt(prompt("Ingresa el primer número:"));
    const num2 = parseInt(prompt("Ingresa el segundo número:"));
    const ultimoDigito1 = num1 % 10;
    const ultimoDigito2 = num2 % 10;
    if (ultimoDigito1 === ultimoDigito2) {
        console.log("Los números tienen el mismo último dígito");
    } else {
        console.log("Los números no tienen el mismo último dígito");
    }
}

{
//23. Programa en JavaScript para Encontrar el MCD o MCM: 
    const num1 = parseInt(prompt("Ingresa el primer número:"));
    const num2 = parseInt(prompt("Ingresa el segundo número:"));
    let mcd, a, b;
    a = num1;
    b = num2;
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    mcd = a;
    const mcm = (num1 * num2) / mcd;
    console.log("MCD:", mcd);
    console.log("MCM:", mcm);
}

{
//24. Programa en JavaScript para Encontrar el MCM: 
    const num1 = parseInt(prompt("Ingresa el primer número:"));
    const num2 = parseInt(prompt("Ingresa el segundo número:"));
    let mcm;
    for (let i = Math.max(num1, num2); ; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            mcm = i;
            break;
        }
    }
    console.log("MCM:", mcm);
}

{
//25. Programa en JavaScript para Encontrar los Factores de un Número: 
    const numero = parseInt(prompt("Ingresa un número:"));
    console.log("Factores de", numero + ":");
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}

{
//ESTO NO.26. Programa en JavaScript para Encontrar la Suma de Números Naturales Usando Recursión: 
    function sumaNaturales(n) {
        if (n === 1) {
            return 1;
        } else {
            return n + sumaNaturales(n - 1);
        }
    }
    const num = parseInt(prompt("Ingresa un número natural:"));
    const suma = sumaNaturales(num);
    console.log("La suma de los primeros", num, "números naturales es:", suma);
}

{
//27. Programa en JavaScript para Adivinar un Número Aleatorio: 
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
    let intentoUsuario;
    do {
        intentoUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
        intentos++;
        if (intentoUsuario < numeroAleatorio) {
            console.log("El número es mayor");
        } else if (intentoUsuario > numeroAleatorio) {
            console.log("El número es menor");
        } else {
        console.log("¡Correcto! Adivinaste el número en", intentos, "intentos.");
        }
    } while (intentoUsuario != numeroAleatorio);
}

{
//28. Programa en JavaScript para Mezclar una Baraja de Cartas: 
    const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const palos = ["Corazones", "Diamantes", "Tréboles", "Picas"];
    const baraja = [];
    for (const palo of palos) {
        for (const valor of valores) {
            baraja.push(`${valor} de ${palo}`);
    }
    }
    console.log("Baraja de cartas mezclada:", baraja);
}

{
//ESTO NO.29. Programa en JavaScript para Mostrar la Secuencia de Fibonacci Usando Recursión: 
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    const num = parseInt(prompt("Ingresa un número para generar la secuencia de Fibonacci:"));
    console.log("Secuencia de Fibonacci:");
    for (let i = 0; i < num; i++) {
        console.log(fibonacci(i));
    }
}

{
//ESTO NO.30. Programa en JavaScript para Encontrar el Factorial de un Número Usando Recursión: 
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    const num = parseInt(prompt("Ingresa un número para encontrar su factorial:"));
    const resultado = factorial(num);
    console.log("Factorial de", num, "es:", resultado);
}

{
//31. Programa en JavaScript para Convertir un Número Decimal a Binario: 
    const decimal = parseInt(prompt("Ingresa un número decimal:"));
    const binario = decimal.toString(2);
    console.log("Número decimal", decimal, "en binario:", binario);
}

{
//32. Programa en JavaScript para Encontrar el Valor ASCII de un Carácter: 
    const caracter = prompt("Ingresa un carácter:");
    const codigoAscii = caracter.charCodeAt(0);
    console.log("El valor ASCII de", caracter, "es:", codigoAscii);
}

{
//33. Programa en JavaScript para Verificar si una Cadena es Palíndromo o No: 
    function esPalindromo(cadena) {
        const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");
        const cadenaReversa = cadenaLimpia.split("").reverse().join("");
        return cadenaLimpia === cadenaReversa;
    }
    const palabra = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");
    const esPalin = esPalindromo(palabra);
    if (esPalin) {
        console.log("La cadena es un palíndromo.");
    } else {
        console.log("La cadena no es un palíndromo.");
    }
}

{
//34. Programa en JavaScript para Ordenar Palabras en Orden Alfabético: 
    const palabras = prompt("Ingresa una lista de palabras separadas por comas:").split(",");
    palabras.sort();
    console.log("Palabras ordenadas:", palabras);
}

{
//35. Programa en JavaScript para Reemplazar Caracteres en una Cadena: 
    const cadena = "Hola, mundo!";
    const nuevaCadena = cadena.replace("Hola", "Adiós");
    console.log("Cadena original:", cadena);
    console.log("Nueva cadena:", nuevaCadena);
}

{
//36. Programa en JavaScript para Invertir una Cadena: 
    const cadena = "JavaScript";
    const cadenaInvertidaA = cadena.split("").reverse().join("");
    const cadenaInvertidaB = cadena.split("").reverse();
    console.log("Cadena original:", cadena);
    console.log("Cadena invertida:", cadenaInvertidaA);
    console.log("Cadena invertida:", cadenaInvertidaB);
}

{
//37. Programa en JavaScript para Crear Objetos de Diferentes Formas: 
    // Forma 1: Objeto Literal
    const persona1 = {
        nombre: "Juan",
        edad: 30,
        profesion: "Ingeniero"
    };

    // Forma 2: Constructor de Objeto
    function Persona(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    const persona2 = new Persona("María", 28, "Doctora");

    // Forma 3: Clases (ES6)
    class Persona {
        constructor(nombre, edad, profesion) {
            this.nombre = nombre;
            this.edad = edad;
            this.profesion = profesion;
        }
    }
    const persona3 = new Persona("Carlos", 25, "Abogado");
}

{
//38. Programa en JavaScript para Verificar el Número de Ocurrencias de un Carácter en una Cadena: 
    const cadena = "programación";
    const caracter = "a";
    const conteo = cadena.split(caracter).length - 1;
    console.log("Número de ocurrencias de", caracter, ":", conteo);
}

{
//39. Programa en JavaScript para Convertir la Primera Letra de una Cadena en Mayúscula: 
    const palabra = "javascript";
    const primeraLetraMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
    console.log("Palabra original:", palabra);
    console.log("Palabra con la primera letra en mayúscula:", primeraLetraMayuscula);
}

{
//40. Programa en JavaScript para Contar el Número de Vocales en una Cadena: 
    const cadena = "elefante";
    const vocales = cadena.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length : 0;
    console.log("Número de vocales en", cadena + ":", numeroVocales);
}
