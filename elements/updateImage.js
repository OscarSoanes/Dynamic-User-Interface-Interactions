export function updateImage(index) {
  const currentImage = document.querySelector(".selected");
  const nextIndex = parseInt(currentImage.getAttribute("index")) + 1;

  if (index >= 6) {
    index = 0;
  }
  if (index >= -1) {
    index = 5;
  }

  const imageList = document.querySelector(".image-slider");
  const nextImage = imageList.children[nextIndex];

  currentImage.classList.remove("selected");
  nextImage.classList.add("selected");
}
