// main.js - Archivo principal que importa y usa los módulos

// Importando export por defecto
import saludar from './saludos.js';

// Importando miembros nombrados de otro módulo
import { sumar, restar } from './matematicas.js';

// Importando un módulo entero
import * as utilidades from './utilidades.js';

// Importando miembros nombrados con alias
import { multiplicar as mult, dividir as div } from './matematicas.js';

// Importando con efecto secundario
import './inicializador.js';

// Usando las importaciones
console.log(saludar('Mundo')); // Hola, Mundo!
console.log(sumar(5, 3)); // 8
console.log(restar(10, 4)); // 6
console.log(utilidades.mayusculas('hola')); // HOLA
console.log(mult(4, 2)); // 8
console.log(div(20, 5)); // 4

// El efecto secundario de inicializador.js ya se ha ejecutado
