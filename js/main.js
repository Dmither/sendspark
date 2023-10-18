let menu = document.querySelector(".header__menu");
let burger = document.querySelector(".header__burger");
let body = document.body;

burger.addEventListener("click", function(event) {
  console.log("burger click")
  menu.classList.toggle("active")
  burger.classList.toggle("active")
  body.classList.toggle("frozen")
})