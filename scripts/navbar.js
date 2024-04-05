const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".navbar-menu");
let isMenuVisible = true;

// Clicking will show menu or hide it
menuIcon.addEventListener("click", () => {
  if (isMenuVisible) {
    // navMenu.style.display = "inline-block";

    navMenu.style.height = "144px";
    // navMenu.style.opacity = "1";
    isMenuVisible = false;
  } else {
    navMenu.style.height = "0";
    // navMenu.style.opacity = "0";
    isMenuVisible = true;
  }
});
