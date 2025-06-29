// Cuando visitamos un sitio o aplicación web, existen una gran cantidad de eventos que pasan...

// Todos los eventos utilizan el método en el document de addEventListener, 

// este registra un evento en especifico, como puede ser un click en un enlace o imagen, submit a un formulario, o cuando el usuario escribe...

// Por lo tanto la sintaaxis es de la siguiente forma...

// document.addEventListener

// Seguido del evento que estamos escuchando...

// Uno que es muy común y utilizaras en todos tus proyectos es uno llamado DOMContentLoaded

console.log(1)
    document.addEventListener('DOMContentLoaded', () => {
        console.log(2);
    }) // Nota todos los eventos que hay disponibles
console.log(3);


