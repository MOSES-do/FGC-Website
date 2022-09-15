const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Javascript code for added div not using the same styling as the first three.

// const button = document.querySelector(".btn-reveal");
// const home = document.querySelector(".operations__content_home");
// const tab3 = document.querySelector(".operations__content--3");
// const tab1 = document.querySelector(".operations__tab--1");
// const tab2 = document.querySelector(".operations__tab--2");
// const tab3b = document.querySelector(".operations__tab--3");

// const buttonReveal = () => {
//   home.style.display = "flex";
//   tab3.classList.toggle("operations__content--active");
//   console.log("hello");
//   console.log(home);
//   console.log(button);
//   console.log(tab3);
// };

// button.addEventListener("click", buttonReveal);

// tab1.addEventListener("click", function () {
//   home.style.display = "none";
// });

// tab2.addEventListener("click", function () {
//   home.style.display = "none";
// });

// tab3b.addEventListener("click", function () {
//   home.style.display = "none";
// });
