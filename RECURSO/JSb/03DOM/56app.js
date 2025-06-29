
// preventDefault() - previene comportamiento por defecto

const btn = document.querySelector(".btn");
const heading = document.querySelector('h1');
const link = document.getElementById('link');

btn.addEventListener('click', function(event) {
  console.log("btn tipo de evento", event.type);
  console.log("btn this", this);
  console.log("btn objetivo",event.currentTarget);
  event.currentTarget.classList.add("blue");
  console.log('objeto evento',event)
});

heading.addEventListener("click", (event) => {
  console.log("h1 objetivo", event.currentTarget);
  console.log("h1 this", this);
});

function someFunc(e) {
  e.preventDefault();
  console.log("a objetivo", e.currentTarget);
  console.log("someF this", this);
}
  
  

link.addEventListener('click', someFunc);
