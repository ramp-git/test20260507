const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const reserveForm = document.querySelector('.reserve-form');

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navMenu?.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

navMenu?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle?.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  }
});

reserveForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = reserveForm.querySelector('button');
  if (!button) return;

  const originalLabel = button.textContent;
  button.textContent = 'お問い合わせありがとうございます';
  button.setAttribute('disabled', 'true');

  window.setTimeout(() => {
    button.textContent = originalLabel;
    button.removeAttribute('disabled');
    reserveForm.reset();
  }, 2600);
});
