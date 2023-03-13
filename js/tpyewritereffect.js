//1

// const typeWriter = function (txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// //3
// //Type Method
// typeWriter.prototype.type = function () {
//     // console.log('hello');
//     //Current index of word
//     const current = this.wordIndex % this.words.length;

//     //Get full text of current word
//     const fullTxt = this.words[current];

//     //Check if deleting
//     if (this.isDeleting) {
//         //Remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);

//     } else {
//         //Add char
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     //Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

//     //Initial Type speed
//     let typeSpeed = 300;

//     if (this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     //If word is complete
//     if (!this.isDeleting && this.txt === fullTxt) {
//         //Pause at end
//         typeSpeed = this.wait;
//         //Set delet to true
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         //Move to the next word
//         this.wordIndex++;
//         //Pause before start typing
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed)

// }

// //2
// //Init on Dom load

// document.addEventListener('DOMContentLoaded', init);

// //Init App
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');

//     //Init Typewriter
//     new typeWriter(txtElement, words, wait);
// }

//ES6 class

class typeWriter {
  constructor(txtElement, words, wait = 500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // console.log('hello');
    //Current index of word
    const current = this.wordIndex % this.words.length;

    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if deleting
    if (this.isDeleting) {
      //Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial Type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //Pause at end
      typeSpeed = this.wait;
      //Set delet to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //Move to the next word
      this.wordIndex++;
      //Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init on Dom load

document.addEventListener("DOMContentLoaded", init);

//Init App Welcome section
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //Init Typewriter
  new typeWriter(txtElement, words, wait);
}




document.addEventListener("DOMContentLoaded", initNew);


//Init App Upcoming section

function initNew() {
  const txtElement = document.querySelector(".txt-typed");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //Init Typewriter
  new typeWriter(txtElement, words, wait);
}