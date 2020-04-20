const foo = document.querySelector(".footer");
const navMenu = document.querySelector(".navbar__menu ");
const navIcons = document.querySelector(".navbar__icons");

foo.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navIcons.classList.toggle("active");
});
console.log(foo);
