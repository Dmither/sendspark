let menu = document.querySelector(".header__menu");
let burger = document.querySelector(".header__burger");
let body = document.body;

burger.addEventListener("click", function(event) {
  body.classList.toggle("frozen")
})

let progresses = document.querySelectorAll(".connect__progress");
progresses.forEach(progress => {
  progress.children[0].style.width = progress.dataset.fill + "%"
});

let spoilerBlock = document.querySelector(".connect__content");
let spoilersList = document.querySelectorAll(".connect__content .connect__item");

spoilersList.forEach(spoilerItem => {
  console.log(spoilerItem)
  spoilerItem.setAttribute("tabindex", "0");
  if (!spoilerItem.classList.contains("_opened")) {
    spoilerItem.children[1].style.height = 0 + "px";
  } else {
    spoilerItem.children[1].style.height = spoilerItem.children[1].children[0].offsetHeight + "px";
  }
  spoilerItem.addEventListener("focus", function(event){
    console.log(event)
    if (!spoilerItem.classList.contains("_opened")) {
      spoilersList.forEach(item => {
        item.classList.remove("_opened");
        item.children[1].style.height = 0 + "px";
      })
      spoilerItem.classList.add("_opened");
      spoilerItem.children[1].style.height = spoilerItem.children[1].children[0].offsetHeight + "px";
    }
  })
});

const passBtn = document.querySelector(".form-show-pass")
if (passBtn) {
  passBtn.removeAttribute("hidden")
  const passInput = passBtn.parentElement.querySelector("input");
  passBtn.addEventListener("click", function(event) {
    if (passInput.getAttribute("type") === "password") {
      passInput.setAttribute("type", "text");
      passBtn.classList.add("active")
    } else {
      passInput.setAttribute("type", "password");
      passBtn.classList.remove("active")
    }
  })
}
