import {buildMenu} from "./elements/navbar.js";

buildMenu();
const navbar = document.querySelector("nav");
let expanded = false;

navbar.addEventListener("mouseover", (e) => {
  const target = e.target.closest("li");
  if (target === null || target.classList.contains("drop-down-item")) {
    return;
  }

  if (target.childNodes.length !== 1 && expanded === false) {
    target.children[0].classList.remove("hidden");
    expanded = true;
  } else {
    expanded = false;
    buildMenu();
  }
});
