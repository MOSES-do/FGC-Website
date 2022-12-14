"use strict";

const nav = document.querySelector(".navbar");
const socialNav = document.querySelector(".navigation");

const navOpen = document.querySelector("#menu-btn");
const navClose = document.querySelector("#close-btn");

const openNav = () => {
  navOpen.style.display = "none";
  navClose.style.display = "inline-block";
  nav.style.display = "flex";
};

navOpen.addEventListener("click", openNav);

const closeNav = () => {
  navOpen.style.display = "inline-block";
  navClose.style.display = "none";
  nav.style.display = "none";
};

navClose.addEventListener("click", closeNav);

//Close navbar onclick
if (document.body.clientWidth < 1200) {
  nav.querySelectorAll("li a").forEach((navLink) => {
    navLink.addEventListener("click", closeNav);
  });
}

//Respond to keyboard events (Global events)
document.addEventListener("keydown", function (e) {
  if (document.body.clientWidth < 1200 && e.key === "Escape") {
    navOpen.style.display = "inline-block";
    navClose.style.display = "none";
    nav.style.display = "none";
  }
});

//change nav style on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector(".nav-menu")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//SWIPER JS (gallery section)

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    // pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  zoom: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // effect:"cube",
  // mousewheel: {
  //   // invert: false,
  // },

  breakpoints: {
    // phones
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  },
});

//Count down timer

let endDateElm = "18 December 2022 07:30 am";
let countDownItem = Array.from(document.querySelectorAll(".count_down"));



function countDown() {
  let endDate = new Date(endDateElm);
  let newDate = new Date();
  let dateDiff = (endDate - newDate) / 1000;
  if (dateDiff > 0) {
    let day = Math.floor(dateDiff / 3600 / 24);
    let hour = Math.floor(dateDiff / 3600) % 24;
    let min = Math.floor(dateDiff / 60) % 60;
    let sec = Math.floor(dateDiff % 60);
    countDownItem[0].textContent = day;
    countDownItem[1].textContent = hour;
    countDownItem[2].textContent = min;
    countDownItem[3].textContent = sec;
  } else {
    clearInterval(stop);
    //hideupcoming called
    hideUpcomingSection();
  }
}
let stop = setInterval(() => {
  countDown();
}, 1000);


//Once count down item is complete hide the section
const hideUpcoming = document.querySelector(".up-coming");

function hideUpcomingSection() {
  hideUpcoming.classList.toggle("hide");
}

