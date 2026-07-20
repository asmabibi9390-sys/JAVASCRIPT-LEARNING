// Array Destructuring
let fruits = ["Apple", "Mango"];

let fruit1 = fruits[0];
let fruit2 = fruits[1];

console.log(fruit1);
console.log(fruit2);

// Rest Operator (...)

let numbers = [10, 20, 30, 40, 50, 60];

let [first, second, ...others] = numbers;

console.log(first);
console.log(second);
console.log(others);

// Skip values

let colors = ["Red", "Green", "Blue"];

let [color1, , color3] = colors;

console.log(color1);
console.log(color3);