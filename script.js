let slides = document.querySelectorAll(".slider-container__slide"),
  points = document.querySelectorAll(".points-container__points"),
  arrow = document.querySelector(".slider__arrow-container"),
  arrowLeft = document.querySelector(".slider__arrow--left"),
  arrowRight = document.querySelector(".slider__arrow--right"),
  currentSlide = 0,
  roundCounter = 0;

function changeStyle(elementName, style, n) {
  return (
    elementName[currentSlide].classList.remove(style),
    elementName[currentSlide + n].classList.add(style)
  );
}
function turnArrow(add, remove) {
  return (
    add.classList.add("slider__arrow--show"),
    remove.classList.remove("slider__arrow--show")
  );
}

arrow.onclick = function() {
    if (roundCounter === 0) {
      changeStyle(points, "points-container__points--active", 1);
      changeStyle(slides, "slider-container__slide--show", 1);
      currentSlide++;
      if (currentSlide == slides.length - 1) {
        roundCounter = 1;
        turnArrow(arrowLeft, arrowRight);
      }
    } else {
      changeStyle(points, "points-container__points--active", -1);
      changeStyle(slides, "slider-container__slide--show", -1);
      currentSlide--;
      if (currentSlide == 0) {
        roundCounter = 0;
        turnArrow(arrowRight, arrowLeft);
      }
    }
  };

