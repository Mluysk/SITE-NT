const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const year = document.getElementById('year');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.scroll);
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

year.textContent = new Date().getFullYear();
