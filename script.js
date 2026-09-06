// Update the footer automatically each year.
document.querySelector('#year').textContent = new Date().getFullYear();

// Enable the collapsible navigation only when JavaScript is available.
const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
nav.classList.add('menu-ready');
menuButton.hidden = false;

function closeMenu() {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Escape closes the mobile menu and returns keyboard focus to its button.
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!nav.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);

// Highlight the section currently being read without changing the URL.
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll('a').forEach(link => {
        const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', isCurrent);
        if (isCurrent) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => {
    sectionObserver.observe(section);
  });
}
