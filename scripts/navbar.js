const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".navbar-menu");
let isMenuVisible = true;

menuIcon.addEventListener("click", () => {
  if (isMenuVisible) {
    navMenu.style.display = "inline-block";
    isMenuVisible = false;
  } else {
    navMenu.style.display = "none";
    isMenuVisible = true;
  }
});
