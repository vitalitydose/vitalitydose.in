// Interactivity & Reveal logic
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('on');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.rev').forEach(el => observer.observe(el));

// Sticky Nav
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.background = window.scrollY > 50 ? '#111' : 'rgba(26,26,26,0.9)';
});
