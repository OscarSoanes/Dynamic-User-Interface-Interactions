import {createListElement} from "./list-item.js";
import {clear} from "./clear.js";

// Creates the navbar to be built, uses a List to create all elements.
export function buildMenu() {
  const navbar = document.querySelector("nav");
  clear(navbar);

  // List is used to store all the elements in navbar, a object is used if there is a sublist required.
  const list = [
    "Option 1",
    "Option 2",
    {name: "Settings", sublist: ["Option 1", "Option 2", "Option 3"]},
    "Option 4",
    {name: "More Settings", sublist: ["Option 1", "Option 2"]},
  ];

  const navMenu = document.createElement("ul");
  navMenu.classList.add("menu");

  // Creates the elements required, using list. Goes to List Item if there is a sublist.
  list.forEach((element) => {
    const item = document.createElement("li");
    if (typeof element === "object") {
      item.textContent = element.name;
      item.classList.add("drop-down");

      const dropDown = document.createElement("ul");
      dropDown.classList.add("drop-down-opts", "hidden");

      element.sublist.forEach((sublist) => {
        dropDown.appendChild(createListElement(sublist));
      });
      item.appendChild(dropDown);
    } else {
      item.textContent = element;
    }
    navMenu.appendChild(item);
  });
  navbar.appendChild(navMenu);
}
