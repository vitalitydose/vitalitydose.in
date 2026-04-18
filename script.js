// Sticky Header
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', window.scrollY > 50);
});
// Example for your WhatsApp buttons
const whatsappNumber = "917019890619";
const emailAddress = "adailyvitalitydose@gmail.com";

// Mobile Menu Logic
const mob = document.getElementById('mob');
const burger = document.getElementById('burger');
const mobX = document.getElementById('mobX');

burger.addEventListener('click', () => mob.classList.add('open'));
mobX.addEventListener('click', () => mob.classList.remove('open'));

// Close mobile menu on link click
mob.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mob.classList.remove('open'));
});

// Scroll Reveal Observer
const revealOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, revealOptions);

document.querySelectorAll('.rev').forEach(el => observer.observe(el));
