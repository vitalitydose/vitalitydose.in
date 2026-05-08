const nav = document.getElementById('topnav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('sticky', scrollY > 60);
  const backTop = document.getElementById('back-top');
  if (backTop) backTop.classList.toggle('show', scrollY > 400);
});
const mob = document.getElementById('mob-nav');
const hamburger = document.getElementById('hamburger');
const mobClose = document.getElementById('mob-close');
if (hamburger && mob) hamburger.addEventListener('click', () => mob.classList.add('open'));
if (mobClose && mob) mobClose.addEventListener('click', () => mob.classList.remove('open'));
if (mob) mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

/* ── REVEAL ON SCROLL ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => io.observe(el));

/* ── GUIDE EXPAND ── */
function toggleGuide(btn) {
  const content = btn.nextElementSibling;
  btn.classList.toggle('open');
  content.classList.toggle('open');
}

/* ── FAQ ── */
function toggleFAQ(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}