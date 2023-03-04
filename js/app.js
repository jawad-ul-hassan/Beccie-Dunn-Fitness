// Mobile Hamburger Menu
const headerHamburgerBtn = document.querySelector('.header-hamburger-icon');
const headerNavbarMenu = document.querySelector('.header-navbar-mobile-links');

headerHamburgerBtn.addEventListener('click', () => {
  headerNavbarMenu.classList.toggle('active');
  headerHamburgerBtn.classList.toggle('fa-times');
});

// Consultation Form
const scriptURL_consultation =
  'https://script.google.com/macros/s/AKfycbzilU8R_57IInY8IO8_bysS5HhYdEV0katvl1gBQh7Ou-yzgzQIrpPyWWFUvNzqWDv4WQ/exec';
const consultation_form = document.forms['book-consultation'];

consultation_form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL_consultation, {
    method: 'POST',
    body: new FormData(consultation_form),
  })
    .then(
      response =>
        Swal.fire({
          title: 'Success!',
          text: 'Thanks for answering the questions. I will contact you soon!',
          icon: 'success',
          timer: 4000,
          showConfirmButton: false,
        }),
      setTimeout(() => {
        consultation_form.reset();
      }, 2300)
    )
    .catch(error => console.error('Error!', error.message));
});

//Contact Form
const scriptURL_contact =
  'https://script.google.com/macros/s/AKfycbwDMM6n1KHvbRSZMJwpvcGTwSBuhdXgeXqsj9OwfWNt-CRWpiKsxF5fYfNFEK_q_RMc/exec';
const contact_form = document.forms['contact-me'];

contact_form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL_contact, { method: 'POST', body: new FormData(contact_form) })
    .then(
      response =>
        Swal.fire({
          title: 'Success!',
          text: 'Thanks for contacting. I will get back to you soon!',
          icon: 'success',
          timer: 4000,
          showConfirmButton: false,
        }),
      setTimeout(() => {
        contact_form.reset();
      }, 2300)
    )
    .catch(error => console.error('Error!', error.message));
});

// Scroll To Top Button
document.addEventListener('scroll', handleScroll);

var scrollToTopBtn = document.querySelector('.scrollToTopBtn');

function handleScroll() {
  var scrollableHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.15;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    if (!scrollToTopBtn.classList.contains('showScrollBtn'))
      scrollToTopBtn.classList.add('showScrollBtn');
  } else {
    if (scrollToTopBtn.classList.contains('showScrollBtn'))
      scrollToTopBtn.classList.remove('showScrollBtn');
  }
}

scrollToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
