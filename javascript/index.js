let burguer = document.getElementById("burger-menu");
let nav = document.getElementById("nav");

burguer.addEventListener("click", function () {
  if (nav.classList.contains("fadeInLeft")) {
    nav.classList.remove("fadeInLeft");
    nav.classList.add("hideMenu");
  } else {
    nav.classList.add("fadeInLeft");
    nav.classList.remove("hideMenu");
  }
});
// SLIDER
let sliderContent = document.getElementById("sliderContent");
let imageSlider = document.getElementById("sliderImage");
let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");

let images = [
  "./images/fachada.jpg",
  "./images/loby.jpg",
  "./images/lobby2.jpg",
  "./images/recepcion.jpg",
  "./images/poollight.jpg",
  "./images/hab1.jpg",
  "./images/hab3.jpg",
  "./images/hab4.jpg",
  "./images/hab5.jpg",
  "./images/hab6.jpg",
  "./images/hab7.jpg",
  "./images/room2.jpg",
];

let indice = 0;

function slide() {
  imageSlider.src = images[indice];
  if (indice < images.length - 1) {
    indice++;
    console.log(indice);
  } else {
    images[0];
    indice = 0;
  }
}
setInterval(slide, 2000);

leftArrow.addEventListener("click", () => {
  indice--;
  imageSlider.src = images[indice];
  if (indice <= 0) {
    indice = 0;
  }
});

rightArrow.addEventListener("click", () => {
  indice++;
  imageSlider.scr = images[indice];
});
