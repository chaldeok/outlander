"use strict";

setTimeout(function () {
  console.log('babel works');
}, 1000);
"use strict";

var mainMenu = document.querySelector(".main-header__row--menu");

window.onscroll = function () {
  getStickyMenu();
};

var sticky = mainMenu.offsetTop;

function getStickyMenu() {
  if (window.pageYOffset > sticky) {
    mainMenu.classList.add("sticky");
  } else {
    mainMenu.classList.remove("sticky");
  }
}
"use strict";

function burgerMenu() {
  var menu = document.querySelector('.burger-menu'),
      button = document.querySelector('.burger-menu__button'),
      menuBody = document.querySelector('.menu__body'),
      links = document.querySelectorAll('.menu__link');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
  links.forEach(function (link) {
    link.addEventListener('click', function () {
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