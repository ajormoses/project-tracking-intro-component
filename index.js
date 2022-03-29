const icon = document.querySelector(".icon-toggle");
const close = document.querySelector(".icon-close");
const hamburger = document.querySelector(".icon-hamburger");
const menu = document.querySelector(".mobile-nav-bar");

icon.addEventListener("click", () => {
  close.classList.toggle("show");
  hamburger.classList.toggle("show");
  menu.classList.toggle("show");
  console.log("moses");
});
