// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('is-open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('is-open')));
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Filter chips on products page
const filterBtns = document.querySelectorAll('.shop-filters button');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const cat = btn.dataset.category;
    document.querySelectorAll('[data-product-cat]').forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.productCat === cat) ? '' : 'none';
    });
  });
});

// Newsletter & contact form (visual only)
document.querySelectorAll('form[data-stub]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = 'Sent ✦';
    btn.disabled = true;
    form.reset();
    setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 2400);
  });
});
