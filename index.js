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
