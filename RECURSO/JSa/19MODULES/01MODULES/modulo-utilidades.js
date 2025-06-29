// utilidades.js - Módulo para importar completo

export function mayusculas(texto) {
    return texto.toUpperCase();
}

export function minusculas(texto) {
    return texto.toLowerCase();
}

export function contarPalabras(texto) {
    return texto.split(' ').length;
}
