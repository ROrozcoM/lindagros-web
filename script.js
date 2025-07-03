document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById('navbar');
  const logoImg = document.getElementById('logo-img');
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  // Scroll: cambia fondo del navbar + logo
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
      if (logoImg) logoImg.src = 'images/new.png';
    } else {
      navbar.classList.remove('scrolled');
      if (logoImg) logoImg.src = 'images/new.png';
    }
  });

  // Burger menú móvil
  if (burger && mobileMenu && closeBtn) {
    burger.addEventListener("click", () => {
      console.log("burger clicado"); // Para verificar funcionalidad
      mobileMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });

    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("open");
      }
    });
  }

  // Función opcional: scroll a la card si existe
  window.scrollToCard = function () {
    const card = document.getElementById("card");
    if (card) {
      card.scrollIntoView({ behavior: "smooth" });
    }
  };
});

