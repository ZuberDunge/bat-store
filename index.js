var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

btn1.onclick = function () {
  slide.style.transform = "translateX(0px)";
  btn1.classList.add("slider-active");
  btn2.classList.remove("slider-active");
  btn3.classList.remove("slider-active");
  btn4.classList.remove("slider-active");
};
btn2.onclick = function () {
  slide.style.transform = "translateX(-100vw)";
  btn1.classList.remove("slider-active");
  btn2.classList.add("slider-active");
  btn3.classList.remove("slider-active");
  btn4.classList.remove("slider-active");
};
btn3.onclick = function () {
  slide.style.transform = "translateX(-200vw)";
  btn1.classList.remove("slider-active");
  btn2.classList.remove("slider-active");
  btn3.classList.add("slider-active");
  btn4.classList.remove("slider-active");
};
btn4.onclick = function () {
  slide.style.transform = "translateX(-300vw)";
  btn1.classList.remove("slider-active");
  btn2.classList.remove("slider-active");
  btn3.classList.remove("slider-active");
  btn4.classList.add("slider-active");
};

let clickedMenu = true;
document.querySelector(".menu-icon").addEventListener("click", () => {
  console.log("hey");
  if (clickedMenu) {
    document.querySelector(".category-list").classList.add("show-cat");
    console.log("hey yes");
  } else {
    document.querySelector(".category-list").classList.remove("show-cat");
  }
  clickedMenu = !clickedMenu;
});
