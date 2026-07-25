// Mouseover Event & Mouseleave Event

const button = document.querySelector(".btn");

button.addEventListener("mouseover", function(){
    console.log("Mouse is over the button");
});

button.addEventListener("mouseleave", function(){
    console.log("Mouse left the button");
});