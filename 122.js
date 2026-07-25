// Event Bubbling
const box = document.querySelector(".box");
const text = document.querySelector(".text");
text.addEventListener("click", function () {
 console.log("Paragraph");
});
box.addEventListener("click", function () {
    console.log("Div");
});