// Animaciones al hacer scroll
const elementos = document.querySelectorAll('.animar');

function animarScroll() {
  const altura = window.innerHeight;
  elementos.forEach(el => {
    if (el.getBoundingClientRect().top < altura - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);

// Modo oscuro
function toggleModo() {
  document.body.classList.toggle('oscuro');
}