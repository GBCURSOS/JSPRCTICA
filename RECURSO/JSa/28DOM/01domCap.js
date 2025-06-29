/*
# Capítulo 1: Introducción al DOM

## 1.1 ¿Qué es el DOM?

El DOM (Document Object Model) es una interfaz de programación para documentos HTML y XML. Representa la estructura de un documento como un árbol jerárquico de objetos, donde cada parte del documento es un nodo.

Características clave del DOM:
- Proporciona una representación estructurada del documento
- Define métodos para acceder y manipular la estructura del documento
- Es independiente del lenguaje, aunque comúnmente se utiliza con JavaScript
- Conecta las páginas web con scripts o lenguajes de programación

Ejemplo básico:
*/
```javascript
// Acceder a un elemento del DOM
let titulo = document.getElementById('titulo-principal');
// Modificar su contenido
titulo.textContent = '¡Bienvenido al mundo del DOM!';
```
/*
## 1.2 Historia y evolución del DOM

- **Orígenes (1995-1997)**: Surgió durante las "guerras de navegadores" entre Netscape y Microsoft.
- **DOM Nivel 0**: No era un estándar oficial, sino una referencia a las primeras implementaciones del DOM.
- **DOM Nivel 1 (1998)**: Primer estándar W3C, definió la estructura core del DOM.
- **DOM Nivel 2 (2000)**: Introdujo el modelo de eventos y soporte para espacios de nombres XML.
- **DOM Nivel 3 (2004)**: Añadió soporte para carga y guardado de documentos, y validación de documentos.
- **DOM4 (2015)**: Unificó especificaciones anteriores y añadió nuevas funcionalidades.
- **Especificación Living Standard**: Actualmente, el DOM es mantenido por WHATWG como un estándar vivo.

## 1.3 Importancia del DOM en el desarrollo web

El DOM es fundamental en el desarrollo web moderno por varias razones:

1. **Interactividad**: Permite crear páginas web dinámicas e interactivas.
2. **Manipulación en tiempo real**: Facilita la actualización del contenido sin recargar la página.
3. **Accesibilidad**: Proporciona una estructura que los lectores de pantalla pueden interpretar.
4. **Base para frameworks**: Muchos frameworks y librerías JavaScript se basan en el DOM.
5. **Rendimiento**: Comprender el DOM es crucial para optimizar el rendimiento de las aplicaciones web.
6. **Compatibilidad entre navegadores**: Ofrece una interfaz estándar que funciona en diferentes navegadores.

## 1.4 Relación entre HTML, CSS y el DOM

El DOM está estrechamente relacionado con HTML y CSS:

1. **HTML**: 
   - Define la estructura inicial del documento.
   - El navegador parsea el HTML para crear el DOM.
   - Cambios en el DOM se reflejan en la representación visual del HTML.

2. **CSS**: 
   - Define el estilo y layout de los elementos del DOM.
   - Los estilos se aplican a los nodos del DOM.
   - Cambios en el CSS afectan la presentación de los elementos del DOM.

3. **JavaScript y el DOM**:
   - JavaScript puede modificar tanto la estructura (DOM) como el estilo (CSS) de la página.
   - Permite crear, eliminar y modificar elementos HTML y sus atributos.
   - Puede cambiar estilos CSS dinámicamente.

Ejemplo de interacción:
*/
```javascript
// Crear un nuevo elemento (DOM)
let nuevoParrafo = document.createElement('p');

// Añadir contenido (HTML)
nuevoParrafo.textContent = 'Este es un nuevo párrafo.';

// Aplicar estilos (CSS)
nuevoParrafo.style.color = 'blue';
nuevoParrafo.className = 'destacado';

// Añadir al documento (DOM)
document.body.appendChild(nuevoParrafo);
```
/*
Esta interacción entre HTML, CSS y el DOM es lo que permite crear páginas web dinámicas y altamente interactivas.
*/
