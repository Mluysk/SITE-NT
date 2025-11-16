const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const buttons = document.querySelectorAll('[data-scroll]');
const accordion = document.querySelector('[data-accordion]');
const slider = document.querySelector('[data-slider]');
const yearEl = document.querySelector('[data-year]');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const selector = btn.getAttribute('data-scroll');
    if (!selector) return;
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  });
});

if (accordion) {
  accordion.querySelectorAll('article').forEach((item) => {
    const trigger = item.querySelector('button');
    trigger?.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

if (slider) {
  const cards = Array.from(slider.children);
  let index = 0;
  setInterval(() => {
    cards.forEach((card, i) => {
      card.style.opacity = i === index ? '1' : '0.4';
      card.style.transform =
        i === index ? 'translateY(0)' : 'translateY(8px) scale(0.98)';
    });
    index = (index + 1) % cards.length;
  }, 5000);
}

yearEl && (yearEl.textContent = new Date().getFullYear());
