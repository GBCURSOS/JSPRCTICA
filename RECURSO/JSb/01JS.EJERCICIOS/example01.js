
//1. Programa en JavaScript para Imprimir
console.log("¡Hola, Prueba en la consola!");

{
//2. Programa en JavaScript para Sumar Dos Números: 
    const num1 = 5;
    const num2 = 10;
    const suma = num1 + num2;
    console.log("Suma:", suma);
}

{
//3. Programa en JavaScript para Encontrar la Raíz Cuadrada: 
    const numero = 25;
    const raizCuadrada = Math.sqrt(numero);
    console.log("Raíz cuadrada:", raizCuadrada);
}

{
//4. Programa en JavaScript para Calcular el Área de un Triángulo: 
    const base = 5;
    const altura = 8;
    const area = 0.5 * base * altura;
    console.log("Área del triángulo:", area);
}

{
//5. Programa en JavaScript para Intercambiar Dos Variables: 
    let a = 5;
    let b = 10;
    console.log("Antes del intercambio: a =", a, "b =", b);

    let temp = a;
    a = b;
    b = temp;
    console.log("Después del intercambio: a =", a, "b =", b);

    [ a, b ] = [b, a]
    console.log("Después de la extracción: a =", a, "b =", b);
    }

{
//6. Programa en JavaScript para Resolver una Ecuación Cuadrática: 
    const a = 2;
    const b = -7;
    const c = 3;
    const discriminante = b * b - 4 * a * c;
    const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log("Raíz 1:", raiz1);
    console.log("Raíz 2:", raiz2);
}

{
//7. Programa en JavaScript para Convertir Kilómetros a Millas: 
    const kilometros = 10;
    const millas = kilometros * 0.621371;
    console.log(kilometros + " kilómetros =", millas + " millas");
}

{
//8. Programa en JavaScript para Convertir Grados Celsius a Fahrenheit: 
    const celsius = 30;
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C =", fahrenheit + "°F");
}

{
//9. Programa en JavaScript para Generar un Número Aleatorio: 
    const numAleatorio = Math.random(); // Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
    console.log("Número aleatorio:", numAleatorio);
}

{
//10. Programa en JavaScript para Verificar si un número es Positivo, Negativo o Cero: 
    const numero = 5;
    if (numero > 0) {
        console.log("El número es positivo");
    } else if (numero < 0) {
        console.log("El número es negativo");
    } else {
        console.log("El número es cero");
    }
}

{
//11. Programa en JavaScript para Verificar si un Número es Par o Impar: 
    const numero = 10;
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

{
//12. Programa en JavaScript para Encontrar el Mayor entre Tres Números: 
    const num1 = 5;
    const num2 = 10;
    const num3 = 8;
    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    }

    console.log("El número mayor es:", mayor);
}

{
//13. Programa en JavaScript para Verificar si un Número es Primo: 
    const numero = 7;
    let esPrimo = true;

    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    if (esPrimo) {
        console.log("El número ",numero," es primo");
    } else {
        console.log("El número no es primo");
    }
}

{
//14. Programa en JavaScript para Imprimir Todos los Números Primos en un Intervalo: 
    const inicio = 10;
    const fin = 50;

    for (let numero = inicio; numero <= fin; numero++) {
        let esPrimo = true;

        if (numero === 1) {
            esPrimo = false;
        } else {

            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }
        if (esPrimo) {
            console.log(numero);
        }
    }
}

{
//15. Programa en JavaScript para Encontrar el Factorial de un Número: 
    const numero = 5;
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log("El factorial de", numero, "es:", factorial);
}

{
//16. Programa en JavaScript para Mostrar la Tabla de Multiplicar: 
    const numero = 7;
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " =", numero * i);
    }
}

{
//17. Programa en JavaScript para Imprimir la Secuencia de Fibonacci: 
    const n = 10;
    let a = 0, b = 1;
    console.log("Secuencia de Fibonacci:");
    for (let i = 1; i <= n; i++) {
        console.log(a);
        const temp = a + b;
        a = b;
        b = temp;
    }
}

{
//18. Programa en JavaScript para Verificar si un Número es un Número Armstrong: 
/*
Un número de n dígitos es un número de Armstrong si es igual a la suma de las n-ésimas potencias de sus dígitos. 
Por ejemplo, 371, 8208 y 4210818 son números de Armstrong ya que
       371 = 3^3 + 7 + 1³ y  
      8208 = 8^4 + 2^4 + 0^4 + 8^4 
   4210818 = 4^7 + 2^7 + 1^7 + 0^7 + 8^7 + 1^7 + 8^7
*/
    const numero = 153;
    let numOriginal = numero;
    let suma = 0;

    while (numOriginal > 0) {
        const digito = numOriginal % 10;
        suma += digito ** 3;
        numOriginal = Math.floor(numOriginal / 10);
    }
    if (suma === numero) {
        console.log("El número es un número Armstrong");
    } else {
        console.log("El número no es un número Armstrong");
    }
}

{
//19. Programa en JavaScript para Encontrar los Números Armstrong en un Intervalo: 
    const inicio = 100;
    const fin = 1000;
    console.log("Números Armstrong en el intervalo", inicio, "a", fin + ":");
    for (let numero = inicio; numero <= fin; numero++) {
        let numOriginal = numero;
        let suma = 0;
        const n = String(numero).length;
        while (numOriginal > 0) {
            const digito = numOriginal % 10;
            suma += digito ** n;
            numOriginal = Math.floor(numOriginal / 10);
        }
        if (suma === numero) {
            console.log(numero);
        }
    }
}

{
//20. Programa en JavaScript para Crear una Calculadora Simple: 
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const operacion = prompt("Ingresa la operación (+, -, *, /):");
    let resultado;
    switch (operacion) {
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
            resultado = num1 / num2; 
        break;
        default:
            console.log("Operación no válida");
    }
    console.log("Resultado:", resultado);
}


