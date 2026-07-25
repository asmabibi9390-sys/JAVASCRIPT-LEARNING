// Event Delegation
const fruits = document.querySelector(".fruits");
fruits.addEventListener("click", function(event){
    console.log(event.target.innerText);
});