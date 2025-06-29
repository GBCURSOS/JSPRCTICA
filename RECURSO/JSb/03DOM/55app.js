
const nameInput = document.getElementById('name');

nameInput.addEventListener('keypress', function() {
   console.log('tecla presionada');
});

nameInput.addEventListener('keydown', function() {
   console.log('tecla liberada');
});

nameInput.addEventListener('keyup', function() {
  console.log(nameInput.value);
});
