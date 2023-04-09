"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
btnScrollTo.addEventListener("click", function (e) {
  // const s1coords = section1.getBoundingClientRect();
  //scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,

  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});
////////////////////////////
// Page navgation
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//1. add event listener to common  parent
// 2. determine what element origunated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

let allTabs = document.querySelectorAll(".operations__tab");
let TabsContainer = document.querySelector(".operations__tab-container");
let allTextCont = document.querySelectorAll(".operations__content");

//event delegation
TabsContainer.addEventListener("click", function (e) {
  let clicked = e.target.closest(".operations__tab");
  //guard clause
  if (!clicked) return;
  // console.log(clicked);
  allTabs.forEach((tab) => tab.classList.remove("operations__tab--active"));

  clicked.classList.add("operations__tab--active");

  allTextCont.forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  allTextCont[+clicked.dataset.tab - 1].classList.add(
    "operations__content--active"
  );
});
//menu fade animation
const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
let nav = document.querySelector(".nav");
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
// sticky nav
// const initCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   if (this.window.scrollY > initCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });
//
let stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});
headerObserver.observe(header);

// Reveal Sections
const allsections = document.querySelectorAll(".section");
const revealSection = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observe.unobserve(entry.target);
  // console.log(entry);
};
const SectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
  // rootMargin: '200px',
});
allsections.forEach((section) => {
  SectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", () =>
    entry.target.classList.remove("lazy-img")
  );
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.15,
});
imgTargets.forEach((img) => imgObserver.observe(img));
//slider
const slider=function(){
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
let curSlide = 0;
const maxSlide = slides.length;

//function
const creatDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

//next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  dotActiveHandel(curSlide);
};

const prevslide = function () {
  curSlide == 0 ? (curSlide = maxSlide - 1) : curSlide--;
  goToSlide(curSlide);
  dotActiveHandel(curSlide);
};

let dotActiveHandel = function (slide) {
  let dots = [...dotContainer.children];
  dots.forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const init = function () {
  creatDots();
  goToSlide(0);
  dotActiveHandel(0);
};
init();
//event handeler
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevslide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  else if (e.key === "ArrowLeft") prevslide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    dotActiveHandel(slide);
    goToSlide(slide);
  }
})
}
slider();
// window.addEventListener("DOMContentLoaded",function(e){
// console.log("html parsed and bom tree built!",e)
// })
// window.addEventListener("load",function(e){
//   console.log("page fully loaded",e);
// })
// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue ="ddddd";
// })
