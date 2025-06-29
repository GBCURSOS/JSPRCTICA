
const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');
const text = document.querySelector('p');

btn.addEventListener('click', function() {
  if (heading.classList.contains('blue')) {
    heading.classList.remove('blue');
  } else {
    heading.classList.add('blue');
  }
});

text.addEventListener("mouseenter", function () {
  text.classList.add("red");
});

text.addEventListener("mouseleave", function () {
  text.classList.remove("red");
});

