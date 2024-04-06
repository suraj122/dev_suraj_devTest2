const allSlide = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let counter = 0;

next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

function slideNext() {
  allSlide[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= allSlide.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  allSlide[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

function slidePrev() {
  allSlide[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = allSlide.length - 1;
  } else {
    counter--;
  }
  allSlide[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

const container = document.querySelector(".slide-container");
const dotsContainer = document.querySelector(".dotsContainer");
function addMouseOverOutListeners(element) {
  element.addEventListener("mouseover", function () {
    clearInterval(deletInterval);
  });

  element.addEventListener("mouseout", autoSliding);
}

addMouseOverOutListeners(container);
addMouseOverOutListeners(dotsContainer);

function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  dots[counter].className += " active-dot";
}

function switchSlide(currentSlide) {
  currentSlide.classList.add("active-slide");
  let imageId = currentSlide.getAttribute("attr");
  if (imageId > counter) {
    allSlide[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageId;
    allSlide[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (imageId == counter) {
    return;
  } else {
    allSlide[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = imageId;
    allSlide[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  indicators();
}

// Swipe logic for touch devices
container.addEventListener("touchstart", handleTouchStart);
container.addEventListener("touchend", handleTouchEnd);

// Swipe logic for desktop
container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);

function handleTouchStart(event) {
  touchstartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchendX = event.changedTouches[0].clientX;
  handleGesture();
}

function handleMouseDown(event) {
  touchstartX = event.clientX;
  container.addEventListener("mousemove", handleMouseMove);
}

function handleMouseMove(event) {
  touchendX = event.clientX;
}

function handleMouseUp(event) {
  container.removeEventListener("mousemove", handleMouseMove);
  handleGesture();
}

function handleGesture() {
  const touchDiff = touchendX - touchstartX;
  if (touchDiff > 50) {
    slidePrev();
  } else if (touchDiff < -50) {
    slideNext();
  }
}
