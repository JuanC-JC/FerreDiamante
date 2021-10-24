const sliderContainer = document.querySelector(".partners");
const slider = document.getElementById("partnertsSlider");

const partnersImgs = slider.querySelectorAll("img");

let scrollPos = -43.75;

function scrollUpdate() {
  scrollPos -= 6.25;

  //quedan las ultimas 3 para mostrar

  if (sliderContainer.clientWidth >= 1024) {
    if (scrollPos <= -75) {
      slider.style.transform = `translateX(${scrollPos}%)`;

      setTimeout(() => {
        scrollPos = -25;
        slider.style.transition = "transform 0s";
        slider.style.transform = `translateX(${scrollPos}%)`;
      }, 500);
    } else {
      slider.style.transform = `translateX(${scrollPos}%)`;
      slider.style.transition = "transform 0.5s";
    }
  } else {
    if (scrollPos <= -81.25) {
      slider.style.transform = `translateX(${scrollPos}%)`;

      setTimeout(() => {
        scrollPos = -31.25;
        slider.style.transition = "transform 0s";
        slider.style.transform = `translateX(${scrollPos}%)`;
      }, 500);
    } else {
      slider.style.transform = `translateX(${scrollPos}%)`;
      slider.style.transition = "transform 0.5s";
    }
  }
}

// scrollUpdate()
let timer = setInterval(() => {
  scrollUpdate();
}, 2000);
