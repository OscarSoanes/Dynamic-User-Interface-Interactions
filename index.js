import {buildMenu} from "./elements/navbar.js";
import {updateImage} from "./elements/updateImage.js";

function getIndex() {
  const currentImage = document.querySelector(".selected");
  return parseInt(currentImage.getAttribute("index"));
}

buildMenu();
const navbar = document.querySelector("nav");
let expanded = false;

navbar.addEventListener("mouseover", (e) => {
  const target = e.target.closest("li");
  if (target === null || target.classList.contains("drop-down-item")) {
    return;
  }

  // Checks the targets children, and also checks if already expanded.
  if (target.childNodes.length !== 1 && expanded === false) {
    target.children[0].classList.remove("hidden");
    expanded = true;
  } else if (expanded === true) {
    expanded = false;
    buildMenu();
  }
});

navbar.addEventListener("mouseleave", () => {
  buildMenu();
});

const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

btnLeft.addEventListener("click", () => {
  updateImage(getIndex() - 1);
});

btnRight.addEventListener("click", () => {
  updateImage(getIndex() + 1);
});

const positionalButtons = document.querySelector(".positional-buttons");
positionalButtons.addEventListener("click", (e) => {
  const target = e.target.closest("button");
  updateImage(parseInt(target.getAttribute("index")));
});

function changeImage5s() {
  const currentImage = document.querySelector(".selected");
  const index = parseInt(currentImage.getAttribute("index"));

  updateImage(index + 1);
  setTimeout(changeImage5s, 5000);
}

changeImage5s();
