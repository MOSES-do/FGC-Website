const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");
const wrapper = document.querySelector(".wrapper");

const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const companyName = companyNameEl.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
    document.querySelector(".name-error").classList.add("error");
    document.querySelector(".name-error").innerText =
      "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
    }
  }
  if (email === "") {
    document.querySelector(".name-error").classList.add("error");
    document.querySelector(".name-error").innerText =
      "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}

// On page load
const load = document.querySelector(".contain");
const closed = document.querySelector("#closed");
const messenger = document.querySelector(".messenger");

window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    load.classList.add("pop");
  }, 17000);
});

closed.addEventListener("click", () => {
  load.classList.remove("pop");
});

messenger.addEventListener("click", () => {
  load.classList.toggle("pop");
});

const mediaQuery = window.matchMedia("(maxwidth: 600px)");

if (mediaQuery) {
  load.classList.add("pop");
}
