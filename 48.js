// Problem Without Default Parameter
function addTwo(a, b) {
  return a + b;
}
console.log(addTwo(4, 5));
console.log(addTwo(4));

// Old Way (Before ES6)
function addTwo(a, b) {
  if (typeof b === "undefined") {
  b = 0;
}
 return a + b;
}
console.log(addTwo(4));
console.log(addTwo(4, 6));

// ES6 Default Parameter
function addTwo(a, b = 0) {
 return a + b;
}
console.log(addTwo(4));
console.log(addTwo(4, 6));

