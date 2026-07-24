// DOM Tree Traversal – parentNode, parentElement, 
// children, firstElementChild, lastElementChild

const heading = document.getElementById("main-heading");

const parent = heading.parentElement;

console.log(parent);

console.log(parent.children);

console.log(parent.firstElementChild);

console.log(parent.lastElementChild);

parent.style.backgroundColor = "black";
parent.style.color = "white";