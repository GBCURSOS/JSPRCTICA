/*

# Propiedades comunes de los nodos en el DOM

## Propiedades generales (disponibles en todos los tipos de nodos)

1. `nodeType`: Devuelve un número que indica el tipo de nodo.
   - 1: Nodo Elemento
   - 2: Nodo Atributo
   - 3: Nodo Texto
   - 8: Nodo Comentario
   - 9: Nodo Documento
   - 10: Nodo DocumentType

2. `nodeName`: Devuelve el nombre del nodo.
   - Para elementos: el nombre de la etiqueta en mayúsculas (ej. "DIV", "P")
   - Para atributos: el nombre del atributo
   - Para nodos de texto: "#text"
   - Para nodos de comentario: "#comment"

3. `nodeValue`: Devuelve o establece el valor del nodo.
   - Para nodos de texto y comentarios: el contenido del texto
   - Para atributos: el valor del atributo
   - Para la mayoría de los otros tipos de nodos: null

## Propiedades de relación

4. `parentNode`: Devuelve el nodo padre.

5. `childNodes`: Devuelve una NodeList de todos los nodos hijos.

6. `firstChild`: Devuelve el primer nodo hijo.

7. `lastChild`: Devuelve el último nodo hijo.

8. `previousSibling`: Devuelve el nodo hermano anterior.

9. `nextSibling`: Devuelve el siguiente nodo hermano.

## Propiedades específicas de elementos

10. `innerHTML`: Obtiene o establece el contenido HTML dentro del elemento.

11. `outerHTML`: Obtiene o establece el HTML del elemento, incluyendo el elemento mismo.

12. `textContent`: Obtiene o establece el contenido de texto del nodo y sus descendientes.

13. `attributes`: Devuelve un NamedNodeMap de los atributos del elemento.

14. `classList`: Devuelve un DOMTokenList con las clases del elemento.

15. `className`: Obtiene o establece el valor del atributo class.

16. `id`: Obtiene o establece el valor del atributo id.

17. `tagName`: Devuelve el nombre de la etiqueta del elemento (en mayúsculas).

## Propiedades de dimensiones y posición

18. `clientWidth` y `clientHeight`: El ancho y alto del elemento, incluyendo el padding pero excluyendo bordes, márgenes y barras de desplazamiento.

19. `offsetWidth` y `offsetHeight`: El ancho y alto total del elemento, incluyendo bordes.

20. `scrollWidth` y `scrollHeight`: El ancho y alto del contenido del elemento, incluyendo el contenido no visible debido al desbordamiento.

21. `offsetLeft` y `offsetTop`: La distancia del elemento desde el borde izquierdo y superior del elemento offsetParent más cercano.

## Propiedades específicas del documento

22. `documentElement`: Devuelve el elemento raíz del documento (el elemento <html>).

23. `body`: Devuelve el elemento <body> del documento.

24. `head`: Devuelve el elemento <head> del documento.

25. `title`: Obtiene o establece el título del documento.

*/

// Obtener el tipo de nodo
console.log(document.body.nodeType); // 1 (Nodo Elemento)

// Obtener el nombre del nodo
console.log(document.body.nodeName); // "BODY"

// Acceder a nodos hijos
let primerHijo = document.body.firstChild;
let todosLosHijos = document.body.childNodes;

// Modificar contenido
document.getElementById('miElemento').textContent = 'Nuevo texto';

// Trabajar con clases
let elemento = document.getElementById('miElemento');
elemento.classList.add('nuevaClase');

// Obtener dimensiones
let ancho = elemento.clientWidth;
let alto = elemento.clientHeight;