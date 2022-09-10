const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

window.addEventListener("load", () => {
  overlay.classList.add("showPopup");
  popup.childNodes[1].classList.add("showPopup");
  popup.childNodes[3].classList.add("showPopup");
});

document.querySelector("#close").addEventListener("click", function () {
  overlay.classList.remove("showPopup");
  popup.childNodes[1].classList.remove("showPopup");
  popup.childNodes[3].classList.remove("showPopup");
});

document.querySelector(".txt-close").addEventListener("click", function () {
  overlay.classList.remove("showPopup");
  popup.childNodes[1].classList.remove("showPopup");
  popup.childNodes[3].classList.remove("showPopup");
});
