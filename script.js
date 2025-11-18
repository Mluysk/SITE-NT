const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
const yearEl = document.getElementById('year');
let currentSlide = 0;
let intervalId;

const updateSlide = (index) => {
  currentSlide = index;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
};

const nextSlide = () => {
  const next = (currentSlide + 1) % slides.length;
  updateSlide(next);
};

const startSlider = () => {
  intervalId = setInterval(nextSlide, 5000);
};

const resetSlider = () => {
  clearInterval(intervalId);
  startSlider();
};

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    updateSlide(Number(dot.dataset.slide));
    resetSlider();
  });
});

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

startSlider();
