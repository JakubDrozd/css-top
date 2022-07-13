const track = document.querySelector(".carousel__track");
let slides = document.querySelectorAll(".carousel__slide");
slides = Array.from(slides);

const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");

let dots = document.querySelectorAll(".carousel__indicator");
dots = Array.from(dots);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);
