document.addEventListener('DOMContentLoaded',()=>{
/* ── NAV sticky ── */
const nav = document.getElementById('topnav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('sticky', scrollY > 60);
  document.getElementById('back-top').classList.toggle('show', scrollY > 400);
});

/* ── Mobile nav ── */
const mob = document.getElementById('mob-nav');
document.getElementById('hamburger').addEventListener('click', () => mob.classList.add('open'));
document.getElementById('mob-close').addEventListener('click', () => mob.classList.remove('open'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

/* ── Reveal on scroll ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── Filter buttons ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const allCards = document.querySelectorAll('.prod-card');
const allSections = document.querySelectorAll('.product-section');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    if (filter === 'all') {
      allCards.forEach(c => c.style.display = '');
      allSections.forEach(s => s.style.display = '');
      return;
    }

    // show/hide individual cards
    allCards.forEach(card => {
      const cats = (card.dataset.cat || '').split(' ');
      card.style.display = cats.includes(filter) ? '' : 'none';
    });

    // hide sections where all cards are hidden
    allSections.forEach(section => {
      const cards = section.querySelectorAll('.prod-card');
      const anyVisible = [...cards].some(c => c.style.display !== 'none');
      section.style.display = anyVisible ? '' : 'none';
    });
  });
});

/* ── Smooth scroll for filter bar anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 120;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
});
