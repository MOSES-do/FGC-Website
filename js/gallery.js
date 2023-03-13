const swiper = new Swiper(".mySwiper", {
  loop: true,
  //   autoplay: {
  //     delay: 3000,
  //     // pauseOnMouseEnter: true,
  //     disableOnInteraction: false,
  //   },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   speed: 1000,

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
  // mousewheel: {
  //   // invert: false,
  // },

  breakpoints: {
    // phones
    slidesPerView: 1,
    spaceBetween: 10,
  },
});
