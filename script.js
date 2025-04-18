// Toggle dark mode
const toggleDark = document.getElementById("toggle-dark");
const body = document.body;
toggleDark.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Reveal sections on scroll
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});


const form = document.getElementById('contatti');
const messaggio = document.getElementById('conferma-messaggio');

form.addEventListener('invia', function (e) {
  setTimeout(() => {
    form.reset();
    messaggio.style.display = 'block';
  }, 1000);
});

// --- Invia form ---
// document.getElementById("contatti").addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Grazie per avermi contattato! Ti risponderò presto.");
//     this.reset();
//   });
