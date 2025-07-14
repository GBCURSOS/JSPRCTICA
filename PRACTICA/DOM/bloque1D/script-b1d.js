// Mostrar/Ocultar la sección lateral
const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggle-sidebar");
if (sidebar && toggleSidebarBtn) {
  toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("oculto");
  });
}

// Navegación entre secciones
const navBtns = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    sections.forEach((sec) => {
      sec.classList.remove("active");
    });
    const activeSection = document.getElementById(target);
    if (activeSection) {
      activeSection.classList.add("active");
      activeSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
