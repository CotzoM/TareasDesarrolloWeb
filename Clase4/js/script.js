/* script.js - interactividad simple: menú móvil y animaciones suaves + marca link activo */
document.addEventListener("DOMContentLoaded", () => {
  // menú móvil toggle
  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  btn && btn.addEventListener("click", () => {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "12px";
    }
  });

  // marcar link activo automáticamente
  const links = document.querySelectorAll(".nav-links a");
  const current = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(a => {
    const href = a.getAttribute("href");
    if (href === current) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });

  // animación de entrada para cards
  const cards = document.querySelectorAll(".card-item, .hero .card");
  cards.forEach((c, i) => {
    c.style.opacity = 0;
    c.style.transform = "translateY(12px)";
    setTimeout(() => {
      c.style.transition = "opacity .6s ease, transform .6s ease";
      c.style.opacity = 1;
      c.style.transform = "translateY(0)";
    }, 120 * i);
  });
});
