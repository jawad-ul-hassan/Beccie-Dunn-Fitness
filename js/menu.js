const headerHamburgerBtn = document.querySelector('.header-hamburger-icon');

const headerNavbarMenu = document.querySelector('.header-navbar-mobile-links');

headerHamburgerBtn.addEventListener('click', () => {
  headerNavbarMenu.classList.toggle('active');
  headerHamburgerBtn.classList.toggle('fa-times');
});

const scriptURL_consultation =
  'https://script.google.com/macros/s/AKfycbzilU8R_57IInY8IO8_bysS5HhYdEV0katvl1gBQh7Ou-yzgzQIrpPyWWFUvNzqWDv4WQ/exec';
const consultation_form = document.forms['book-consultation'];

consultation_form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL_consultation, {
    method: 'POST',
    body: new FormData(consultation_form),
  })
    .then((response) =>
      alert('Thanks for Contacting us..! We Will Contact You Soon...'),
    )
    .catch((error) => console.error('Error!', error.message));
});

const scriptURL_contact =
  'https://script.google.com/macros/s/AKfycbwDMM6n1KHvbRSZMJwpvcGTwSBuhdXgeXqsj9OwfWNt-CRWpiKsxF5fYfNFEK_q_RMc/exec';
const contact_form = document.forms['contact-me'];

contact_form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL_contact, { method: 'POST', body: new FormData(contact_form) })
    .then((response) =>
      alert('Thanks for Contacting us..! We Will Contact You Soon...'),
    )
    .catch((error) => console.error('Error!', error.message));
});
