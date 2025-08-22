

  // Mobile nav (simple toggle)
const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (burger) {
  burger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.gap = '14px';
    navLinks.style.background = '#0f172a';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.right = '4%';
    navLinks.style.padding = '14px 16px';
    navLinks.style.borderRadius = '12px';
    navLinks.style.boxShadow = '0 10px 25px rgba(0,0,0,.25)';
  });
}

// Reveal-on-scroll (no typing/scrolling text under the name)
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
