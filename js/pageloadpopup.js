const header3 = document.querySelector(".navigation");

const message = document.createElement("div");

message.classList.add("cookie-message");

message.innerHTML =
  "<marquee><b>MARCH - THEME: IN JESUS NAME </b></marquee><button class='btn--close--cookie'><span class='material-symbols-rounded'>close</span></button>";

header3.prepend(message);
// header3.append(message); //overrides the prepend
// header.prepend(message.cloneNode(true)); //creates a copy of element in desired area

header3.before(message);
// header3.after(message);

//Delete elements
document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", () => message.remove());

// const cookie = document.querySelector(".cookie-message");
// document
//   .querySelector(".btn--close--cookie")
//   .addEventListener("scroll", () => cookie.remove());

// style
document.querySelector(".btn--close--cookie").style.cursor = "pointer";
document.querySelector(".btn--close--cookie").style.background = "transparent";
document.querySelector(".btn--close--cookie").style.color = "white";
