// Animação simples reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // <-- aqui a animação começa
        observer.unobserve(entry.target); // Para performance
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((reveal) => observer.observe(reveal));


// Botão de voltar ao topo
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle menu mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Tilt suave na imagem
document.addEventListener('mousemove', (e) => {
  const tilt = document.querySelector('.tilt');
  const { clientX: x, clientY: y } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const rotateX = (y - centerY) / 100;
  const rotateY = (x - centerX) / 100;

  tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);