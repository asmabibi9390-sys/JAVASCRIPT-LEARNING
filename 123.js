// Event Capturing
const card = document.querySelector(".card");
const button = document.querySelector(".btn");
card.addEventListener("click", function () {
 console.log("Card Clicked");
}, true);
button.addEventListener("click", function () {
 console.log("Button Clicked");
});