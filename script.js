// Scroll para cambiar fondo del navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll a la card
function scrollToCard() {
  document.getElementById("card").scrollIntoView({ behavior: "smooth" });
}

// Burger menu funcional
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });

  // Cerrar si se hace clic fuera del menú (opcional)
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove("open");
    }
  });
});

burger.addEventListener("click", () => {
  console.log("burger clicado"); // prueba visual
  mobileMenu.classList.add("open");
});

