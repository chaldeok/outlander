const mainMenu = document.querySelector(".main-header__row--menu");

window.onscroll = () => {
  getStickyMenu()
};

let sticky = mainMenu.offsetTop;

function getStickyMenu() {
  if (window.pageYOffset > sticky) {
    mainMenu.classList.add("sticky");
  } else {
    mainMenu.classList.remove("sticky");
  }
}
