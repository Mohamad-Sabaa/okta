// var demoButtons;

console.log("Hello world!");

const myName = "Jonas Schmedtmann";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// set year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// function start() {
//   // Add event "click" to "demo buttons"
//   demoButtons = document.querySelectorAll(".js-modify");
//   for (var i = 0; i < demoButtons.length; i++) {
//     demoButtons[i].addEventListener("click", toggleEffect);
//   }

//   // Add event "click" to "save buttons"
//   var saveButtons = document.querySelectorAll(".js-save");
//   for (var i = 0; i < saveButtons.length; i++) {
//     saveButtons[i].addEventListener("click", toggleActive);
//   }
// }

// // Toggle "effect" classes
// function toggleEffect() {
//   var target = document.querySelector(this.dataset.target);
//   target.dataset.effect = this.dataset.effect;

//   for (var i = 0; i < demoButtons.length; i++) {
//     demoButtons[i].classList.remove("active");
//   }

//   toggleActive.call(this);
// }

// // Toggle "active" class
// function toggleActive() {
//   this.classList.toggle("active");
// }

// // Invoke "start ()" function
// window.addEventListener("load", start);
