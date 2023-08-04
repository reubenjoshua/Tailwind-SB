const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");

});