// const slides = [
//   {
//     authorName: "Abbie",
//     imgSrc: "assets/media/testimonial/abbie.png",
//     description:
//       "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
//   },
//   {
//     authorName: "Tom",
//     imgSrc: "assets/media/testimonial/tom.png",
//     description:
//       "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
//   },
//   {
//     authorName: "Taylor",
//     imgSrc: "assets/media/testimonial/taylor.png",
//     description:
//       "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
//   },
// ];
// // Constants
// const SLIDE_INTERVAL = 5000;
// const SWIPE_THRESHOLD = 50;

// // Elements
// const slider = document.querySelector("#slider-list");
// const sliderNavigation = document.querySelector(".slider-navigation");
// const nextBtn = document.querySelector("#next");
// const prevBtn = document.querySelector("#prev");

// // Variables
// let currentSlideIndex = 0;
// let slideInterval;
// let touchStartX = 0;
// let touchEndX = 0;
// let isDragging = false;
// let startX = 0;
// let endX = 0;

// // Utility Functions
// const createSlide = (slide, index) => {
//   const { authorName, imgSrc, description } = slide;
//   const li = document.createElement("li");
//   li.classList.add("slider-item", `slide-${index}`);
//   li.innerHTML = `
//     <img src="${imgSrc}" alt="${authorName}" class="story-author-avatar">
//     <div class="author-story">
//       <cite class="story-author">${authorName}</cite>
//       <blockquote><p>${description}</p></blockquote>
//       <img src="assets/media/icons/quote.svg" alt="Quotation Icon" class="quote-icon">
//     </div>`;
//   return li;
// };

// const setActiveSlide = (index) => {
//   const activeSlide = document.querySelector(`.slide-${index}`);
//   document
//     .querySelectorAll(".slider-item.active-slide")
//     .forEach((slide) => slide.classList.remove("active-slide"));
//   activeSlide.classList.add("active-slide");

//   const activeDot = document.querySelector(
//     `.slider-navigation circle[id="${index}"]`
//   );
//   document
//     .querySelectorAll(".slider-navigation circle.active-dot")
//     .forEach((dot) => dot.classList.remove("active-dot"));
//   activeDot.classList.add("active-dot");
// };

// const navigateSlide = (index) => {
//   const lastIndex = slides.length - 1;
//   const translateX = -(index * 100);
//   slider.style.transition = "transform 0.5s ease-in-out"; // Add transition effect
//   slider.style.transform = `translateX(${translateX}%)`;
//   currentSlideIndex = index;
//   setActiveSlide(currentSlideIndex);
//   stopSlideInterval();
//   startSlideInterval();
// };

// // Update nextSlide and prevSlide functions accordingly
// const nextSlide = () => {
//   currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//   if (currentSlideIndex === 0) {
//     const firstSlide = slides.shift();
//     slides.push(firstSlide);
//     showSlider(); // Update slider with new order
//   }
//   navigateSlide(currentSlideIndex);
// };

// const prevSlide = () => {
//   currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//   if (currentSlideIndex === slides.length - 1) {
//     const lastSlide = slides.pop();
//     slides.unshift(lastSlide);
//     showSlider(); // Update slider with new order
//   }
//   navigateSlide(currentSlideIndex);
// };

// const startSlideInterval = () => {
//   slideInterval = setInterval(nextSlide, SLIDE_INTERVAL);
// };

// const stopSlideInterval = () => {
//   clearInterval(slideInterval);
// };

// // Event Listeners
// nextBtn.addEventListener("click", nextSlide);
// prevBtn.addEventListener("click", prevSlide);
// sliderNavigation.addEventListener("click", (e) => {
//   if (e.target.nodeName === "circle") {
//     const index = +e.target.id;
//     navigateSlide(index);
//   }
// });

// slider.addEventListener("touchstart", (e) => {
//   touchStartX = e.touches[0].clientX;
// });

// slider.addEventListener("touchmove", (e) => {
//   touchEndX = e.touches[0].clientX;
// });

// slider.addEventListener("touchend", () => {
//   const touchDiff = touchEndX - touchStartX;
//   if (touchDiff > SWIPE_THRESHOLD) {
//     prevSlide(); // Swipe right
//   } else if (touchDiff < -SWIPE_THRESHOLD) {
//     nextSlide(); // Swipe left
//   }
// });

// slider.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   startX = e.clientX;
// });

// slider.addEventListener("mousemove", (e) => {
//   if (isDragging) {
//     endX = e.clientX;
//   }
// });

// slider.addEventListener("mouseup", () => {
//   if (isDragging) {
//     const mouseDiff = endX - startX;
//     if (mouseDiff > SWIPE_THRESHOLD) {
//       prevSlide(); // Swipe right
//     } else if (mouseDiff < -SWIPE_THRESHOLD) {
//       nextSlide(); // Swipe left
//     }
//     isDragging = false;
//   }
// });

// // Initialize Slider
// const initSlider = () => {
//   showSlider();
//   setActiveSlide(currentSlideIndex);
//   startSlideInterval();
// };

// // Show Slider Function
// const showSlider = () => {
//   slides.forEach((slide, index) => slider.append(createSlide(slide, index)));
// };

// // Initialize Slider
// initSlider();

// Access the Images
let slideImages = document.querySelectorAll(".slide");
// Access the next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
// Access the indicators
let dots = document.querySelectorAll(".dot");

var counter = 0;

// Code for next button
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

// Code for prev button
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

// Auto slideing
function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);

// Add and remove active class from the indicators
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  dots[counter].className += " active-dot";
}

// Add click event to the indicator
function switchImage(currentImage) {
  currentImage.classList.add("active-slide");
  var imageId = currentImage.getAttribute("attr");
  if (imageId > counter) {
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageId;
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (imageId == counter) {
    return;
  } else {
    slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = imageId;
    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  indicators();
}
