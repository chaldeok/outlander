function burgerMenu() {
  const menu = document.querySelector('.burger-menu'),
    button = document.querySelector('.burger-menu__button'),
    menuBody = document.querySelector('.menu__body'),
    links = document.querySelectorAll('.menu__link');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  function toggleMenu() {
    menu.classList.toggle('burger-menu--active');
    button.classList.toggle('burger-menu__button--active');
    menuBody.classList.toggle('menu__body--active');
  }
}

burgerMenu();
