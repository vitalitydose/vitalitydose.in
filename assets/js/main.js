/* ============================================================
   Vitality Dose — main.js
   Global UI: navigation, scroll reveal, guide expand, FAQ
   ============================================================ */

/* ── NAV ── */
const nav = document.getElementById('topnav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('sticky', scrollY > 60);
  document.getElementById('back-top').classList.toggle('show', scrollY > 400);
});
const mob = document.getElementById('mob-nav');
document.getElementById('hamburger').addEventListener('click', () => mob.classList.add('open'));
document.getElementById('mob-close').addEventListener('click', () => mob.classList.remove('open'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

/* ── REVEAL ON SCROLL ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => io.observe(el));


const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => io.observe(el));

/* ── TOOL TABS ── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
  });

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
