export function updateImage(index) {
  const currentImage = document.querySelector(".selected");
  const selectedButton = document.querySelector(".selected-button").firstChild;

  if (index === 5) {
    index = 0;
  }
  if (index === -1) {
    index = 5;
  }

  console.log(index);

  const imageList = document.querySelector(".image-slider");
  const nextImage = imageList.children[index];

  const buttonList = document.querySelector(".positional-buttons");
  const nextButton = buttonList.children[index].firstChild;

  currentImage.classList.remove("selected");
  nextImage.classList.add("selected");

  selectedButton.src = "./svgs/radio-unchecked.svg";
  selectedButton.parentElement.classList.remove("selected-button");
  nextButton.src = "./svgs/radio-checked.svg";
  nextButton.parentElement.classList.add("selected-button");
}
