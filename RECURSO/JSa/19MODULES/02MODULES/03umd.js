// Universal Module Definition (UMD)

// Definición del módulo UMD
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        root.miModuloUMD = factory(root.jQuery);
    }
}(typeof self !== 'undefined' ? self : this, function ($) {
    // Aquí va tu módulo
    return {
        saludar: function (nombre) {
            return '¡Hola ' + nombre + ' desde UMD!';
        },
        colorearFondo: function (color) {
            $('body').css('background-color', color);
        }
    };
}));

// Uso en diferentes entornos:

// 1. En un navegador sin un cargador de módulos:
console.log(miModuloUMD.saludar('María')); // "¡Hola María desde UMD!"
miModuloUMD.colorearFondo('lightblue');

// 2. En un entorno AMD (por ejemplo, usando RequireJS):
define(['miModuloUMD'], function(miModuloUMD) {
    console.log(miModuloUMD.saludar('Carlos')); // "¡Hola Carlos desde UMD!"
    miModuloUMD.colorearFondo('lightgreen');
});

// 3. En Node.js:
const miModuloUMD = require('./miModuloUMD');
console.log(miModuloUMD.saludar('Ana')); // "¡Hola Ana desde UMD!"
// Nota: La función colorearFondo no funcionaría en Node.js ya que depende de jQuery y del DOM