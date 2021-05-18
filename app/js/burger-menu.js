function burgerMenu() {
  const menu = document.querySelector('.burger-menu'),
    button = document.querySelector('.burger-menu__button'),
    menuBody = document.querySelector(('.menu__body')),
    overlay = document.querySelector('.burger-menu__overlay');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  /*links.addEventListener('click', (e) => {
    toggleMenu();
  });*/

  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');
    button.classList.toggle('burger-menu__button--active');
    menuBody.classList.toggle('menu__body--active');
    /*if (menu.classList.contains('burger-menu_active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }*/
  }
}

burgerMenu();
