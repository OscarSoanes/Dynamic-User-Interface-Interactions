export function createListElement(name) {
  const element = document.createElement("li");
  element.textContent = name;
  element.classList.add("drop-down-item");
  return element;
}
