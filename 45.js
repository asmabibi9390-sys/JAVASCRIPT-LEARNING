// Hoisting with var
console.log(firstName);

var firstName = "Asma";

console.log(firstName);

// // Hoisting with let
// console.log(age);
// let age = 20;

// // Hoisting with const
// console.log(city);
// const city = "Peshawar";

// Function Declaration Hoisting

greet();
function greet() {
    console.log("Hello");
}

// Function Expression Hoisting
greet();
const greet = function () {
    console.log("Hello");
};

