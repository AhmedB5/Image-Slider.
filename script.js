let next = document.querySelector(".next");
let focus = document.querySelector(".focus");
let previous = document.querySelector(".previous");

let currentImageIndex = 0;

let imageSources = [
  "img//img1.jpg",
  "img//img2.jpg",
  "img//img3.jpg",
  "img//img4.jpg",
  "img//img5.jpg",
  "img//img6.jpg",
  "img//img7.jpg",
  "img//img9.jpg",
  "img//img10.jpg",
  "img//img11.jpg",
  "img//img12.jpg",
  "img//img13.jpg",
  "img//img14.jpg",
  "img//img15.jpg",
  "img//img16.jpg",
  "img//img17.jpg",
  "img//img18.jpg",
  "img//img19.jpg",
  "img//img20.jpg",
];

next.addEventListener("click", function () {
  if (currentImageIndex < imageSources.length - 1) {
    currentImageIndex++;
    focus.src = imageSources[currentImageIndex];
  } else if (currentImageIndex >= imageSources.length - 1) {
    currentImageIndex = 0;
    focus.src = imageSources[currentImageIndex];
  }
});

previous.addEventListener("click", function () {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    focus.src = imageSources[currentImageIndex];
  } else {
    currentImageIndex = imageSources.length - 1;
    focus.src = imageSources[currentImageIndex];
  }
});
