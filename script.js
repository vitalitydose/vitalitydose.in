// Fade-in animation logic
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('on');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.rev').forEach(el => observer.observe(el));