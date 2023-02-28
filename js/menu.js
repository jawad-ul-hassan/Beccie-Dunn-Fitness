const headerHamburgerBtn = document.querySelector('.header-hamburger-icon');

const headerNavbarMenu = document.querySelector('.header-navbar-mobile-links');

headerHamburgerBtn.addEventListener('click', () => {
  headerNavbarMenu.classList.toggle('active');
  headerHamburgerBtn.classList.toggle('fa-times');
});
