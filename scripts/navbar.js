const menuIcon = document.querySelector(".menu-icon");
const close = document.querySelector(".close");
const navMenu = document.querySelector("#navbarMenu");
let isMenuVisible = false;

// Clicking will show menu or hide it
menuIcon.addEventListener("click", () => {
  if (!isMenuVisible) {
    navMenu.style.height = "144px";
    close.style.display = "inline-block";
    menuIcon.style.display = "none";
    isMenuVisible = true;
  } else {
    navMenu.style.height = "0";
    close.style.display = "none";
    menuIcon.style.display = "inline-block";
    isMenuVisible = false;
  }
});
close.addEventListener("click", () => {
  navMenu.style.height = "0";
  close.style.display = "none";
  menuIcon.style.display = "inline-block";
  isMenuVisible = false;
});
