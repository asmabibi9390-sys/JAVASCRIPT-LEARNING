// How to Get the Dimensions of the Elements
const box = document.querySelector(".box");

const dimensions = box.getBoundingClientRect();

console.log(dimensions);

console.log(dimensions.width);

console.log(dimensions.height);