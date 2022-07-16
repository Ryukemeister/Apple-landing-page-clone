"use strict";

const navItems = document.querySelectorAll(".nav-item");
const sliderOne = document.querySelector(".nav--1");

let count = 2;

const switchSlides = function () {
  navItems.forEach((child) => {
    // console.log(child.classList);
    // console.log(Object.values(child.classList));
    if (Object.values(child.classList).includes(`nav--${count}`)) {
      //console.log(child.classList);
      child.classList.add("nav--active");
    } else {
      child.classList.remove("nav--active");
    }
    // console.log(child);
  });

  if (count <= 11) {
    count++;
  } else {
    sliderOne.classList.add("nav--active");
    count = 2;
  }
};

// setInterval(switchSlides, 1000);

const slider = document.querySelectorAll(".slidessss");

const slides = function () {
  slider.forEach((slide) => {
    // console.table(getComputedStyle(slide).getPropertyValue("transform"));
    // console.log(slide.computedStyleMap().get("transform"));

    const transformation = slide.computedStyleMap().get("transform");
    const [CSSTranslate] = transformation;
    const { value } = CSSTranslate.x;

    if (value === 101) {
      const node = slide.children[0];
      slide.style.transform = `translateX(${value - 101}%)`;
      slide.style.filter = "opacity(1)";
      node.style.display = "flex";
      node.style.margin = "0 0 35px 68px";
      node.style.filter = "opacity(1)";
      node.style.transition = "all 1.2s";
      slide.style.transition = "all 1.5s";
    } else {
      const node = slide.children[0];
      slide.style.transform = `translateX(${value - 101}%)`;
      slide.style.filter = "opacity(0.3)";
      node.style.filter = "opacity(0)";
      node.style.transition = "all 1.2s";
      slide.style.transition = "all 1.5s";
    }
  });
};

// setInterval(switchSlides, 4000);
// setInterval(slides, 4000);