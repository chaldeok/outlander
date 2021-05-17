"use strict";

setTimeout(function () {
  console.log('babel works');
}, 1000);
"use strict";

function burgerMenu() {
  var menu = document.querySelector('.burger-menu'),
      button = document.querySelector('.burger-menu__button'),
      links = document.querySelector('.burger-menu__link'),
      overlay = document.querySelector('.burger-menu__overlay');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
  /*links.addEventListener('click', (e) => {
    toggleMenu();
  });*/

  overlay.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });

  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');
    /*if (menu.classList.contains('burger-menu_active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }*/
  }
}

burgerMenu();