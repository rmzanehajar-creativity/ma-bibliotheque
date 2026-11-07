const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

const form = document.querySelector('.join');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // TODO: connect to your email service (Mailchimp, ConvertKit, ...)
  form.querySelector('.row').hidden = true;
  form.querySelector('.ok').hidden = false;
});
