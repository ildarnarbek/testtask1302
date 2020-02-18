(function(){
const slides = document.querySelectorAll(".slider-container__slide"),
  points = document.querySelectorAll(".points-container__points"),
  arrow = document.querySelector(".slider__arrow-container"),
  arrowLeft = document.querySelector(".slider__arrow--left"),
  arrowRight = document.querySelector(".slider__arrow--right");
let currentSlide = 0,
  roundCounter = 0;

function changeStyle(array, style, step) {
  array[currentSlide].classList.remove(style);
  array[currentSlide + step].classList.add(style);
}

function changeStyleArrow(step) {
  changeStyle(points, "points-container__points--active", step);
  changeStyle(slides, "slider-container__slide--show", step);
  if (step == 1) {
    currentSlide++;
  } else {
    currentSlide--;
  }
}

function turnArrow(side) {
  if (side == "right") {
    roundCounter = 0;
    arrowRight.classList.add("slider__arrow--show");
    arrowLeft.classList.remove("slider__arrow--show");
  } else {
    roundCounter = 1;
    arrowLeft.classList.add("slider__arrow--show");
    arrowRight.classList.remove("slider__arrow--show");
  }
}

arrow.addEventListener("click", function() {
  if (roundCounter === 0) {
    changeStyleArrow(1);
    if (currentSlide == slides.length - 1) {
      turnArrow("left");
    }
  } else {
    changeStyleArrow(-1);
    if (currentSlide == 0) {
      turnArrow("right");
    }
  }
});

let arrayPoints = [];

function pointChangeStyle(e, array, style) {
  array.forEach(function(item) {
    item.classList.remove(style);
  });
  array[arrayPoints.indexOf(e.target)].classList.add(style);
}

points.forEach(function(item) {
  arrayPoints.push(item);
  item.addEventListener("click", function(e) {
    pointChangeStyle(e, points, "points-container__points--active");
    pointChangeStyle(e, slides, "slider-container__slide--show");

    currentSlide = arrayPoints.indexOf(e.target);
    if (arrayPoints.indexOf(e.target) == 3) {
      turnArrow("left");
    }
    if (arrayPoints.indexOf(e.target) == 0) {
      turnArrow("right");
    }
  });
});
})();