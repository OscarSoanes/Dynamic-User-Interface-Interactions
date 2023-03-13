import {buildMenu} from "./elements/navbar.js";
import {updateImage} from "./elements/updateImage.js";

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

updateImage(1);
