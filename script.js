const button = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

button.addEventListener('click', () => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });
});
