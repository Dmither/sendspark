import { InitSpoiler } from "./onlyOneSpoiler";

let menu = document.querySelector(".header__menu");
let burger = document.querySelector(".header__burger");
let body = document.body;

burger.addEventListener("click", function(event) {
  console.log("burger click")
  menu.classList.toggle("active")
  burger.classList.toggle("active")
  body.classList.toggle("frozen")
})

let spoilersList = document.querySelectorAll(".connect__content .connect__item");
console.log(spoilersList)
InitSpoiler(spoilersList);

let progresses = document.querySelectorAll(".connect__progress");
progresses.forEach(progress => {
  progress.children[0].style.width = progress.dataset.fill + "%"
});