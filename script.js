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

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { Accept: 'application/json' },
  }).then(response => {
    if (response.ok) {
      alert("Mensaje enviado correctamente. ¡Gracias!");
      form.reset();
    } else {
      alert("Error al enviar. Intenta más tarde.");
    }
  });
  return false;
}


const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("form-mensaje");

formulario.addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = new FormData(formulario);

  const res = await fetch(formulario.action, {
    method: formulario.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (res.ok) {
    formulario.reset();
    mensaje.style.display = "block";
  } else {
    alert("Hubo un error. Intenta nuevamente más tarde.");
  }
});



