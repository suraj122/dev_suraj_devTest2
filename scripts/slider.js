const slides = [
  {
    authorName: "Abbie",
    imgSrc: "assets/media/testimonial/abbie.png",
    description:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
  },
  {
    authorName: "Tom",
    imgSrc: "assets/media/testimonial/tom.png",
    description:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
  },
  {
    authorName: "Taylor",
    imgSrc: "assets/media/testimonial/taylor.png",
    description:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.",
  },
];

const slider = document.querySelector("#slider-list");
const sliderNavigation = document.querySelector(".slider-navigation");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let currentSlide = 0;
let slideInterval;

function showSlider() {
  slides.map((slide, index) => slider.append(createSlide(slide, index)));
}

function createSlide(slide, index) {
  const li = document.createElement("li");
  li.classList.add("slider-item");
  li.classList.add(`slide-${index}`);
  const img = document.createElement("img");
  img.classList.add("story-author-avatar");
  img.src = slide.imgSrc;
  img.alt = slide.authorName;
  const storyDiv = document.createElement("div");
  const cite = document.createElement("cite");
  cite.classList.add("story-author");
  cite.innerText = slide.authorName;
  const blockquote = document.createElement("blockquote");
  const p = document.createElement("p");
  p.innerText = slide.description;
  const quoteIcon = document.createElement("img");
  quoteIcon.src = "assets/media/icons/quote.svg";
  quoteIcon.alt = "Quotation Icon";
  quoteIcon.classList.add("quote-icon");
  blockquote.append(p);
  storyDiv.classList.add("author-story");
  storyDiv.append(cite, blockquote, quoteIcon);
  li.append(img, storyDiv);
  return li;
}

function setActiveSlide(index) {
  const activeSlide = document.querySelector(`.slide-${index}`);
  const allSlides = document.querySelectorAll(".slider-item");

  // Remove active class from all slides
  allSlides.forEach((slide) => {
    slide.classList.remove("active-slide");
  });

  // Add active class to the current slide
  if (activeSlide) {
    activeSlide.classList.add("active-slide");
  }
  // Remove active class from all slider navigation items
  const allSliderNavItems = document.querySelectorAll(
    ".slider-navigation circle"
  );
  allSliderNavItems.forEach((item) => {
    item.classList.remove("active-dot");
  });

  // Add active class to the slider navigation item corresponding to the current slide
  const currentSliderNavItem = document.querySelector(
    `.slider-navigation circle[id="${index}"]`
  );
  if (currentSliderNavItem) {
    currentSliderNavItem.classList.add("active-dot");
  }
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
    nextSlide();
    setActiveSlide(currentSlide);
  }, 5000);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

// Slider Navigation
sliderNavigation.addEventListener("click", (e) => {
  if (e.target.nodeName === "circle") {
    const id = +e.target.id;
    slider.style.transform = `translateX(-${id * 100}%)`;
    currentSlide = id;
    setActiveSlide(currentSlide);
    stopSlideInterval();
  }
});

// Slider Next and Previous button
next.addEventListener("click", () => {
  nextSlide();
  setActiveSlide(currentSlide);
});
prev.addEventListener("click", () => {
  prevSlide();
  setActiveSlide(currentSlide);
});

function nextSlide() {
  const nextIndex = currentSlide + 1;
  const nextSlideIndex =
    nextIndex >= slides.length ? nextIndex - slides.length : nextIndex;
  currentSlide = nextSlideIndex;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  setActiveSlide(currentSlide);
  stopSlideInterval();
  startSlideInterval();
}
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide = currentSlide - 1;
  } else {
    currentSlide = slides.length - 1; // Go to the last slide
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  setActiveSlide(currentSlide);
  stopSlideInterval();
  startSlideInterval();
}

showSlider();
setActiveSlide(currentSlide);
startSlideInterval();
