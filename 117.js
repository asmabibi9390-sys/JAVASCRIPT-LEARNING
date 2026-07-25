// Behind the Scenes: How Event Listeners Work
const button = document.querySelector(".btn");
button.addEventListener("click", function(){
console.log("Hello");
});
console.log("Program End");