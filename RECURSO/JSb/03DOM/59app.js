
const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function propagacion(e) {
  stopPropogation(e);
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
  if (e.target.classList.contains("link")) {
    console.log("link target", e.srcElement.innerText);
    console.log("click on link");
  }
  
}

function stopPropogation(e) {
  console.log('stop')
  e.stopPropagation();
}

list.addEventListener("click", 
  propagacion, { capture: true });
container.addEventListener("click", 
  propagacion, { capture: false });

/*
document.addEventListener('click', propagacion, { capture: true });
window.addEventListener("click", propagacion, { capture: true });
*/