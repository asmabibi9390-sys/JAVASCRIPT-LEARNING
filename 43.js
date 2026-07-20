// Basic Function Expression
const sayHello = function () {
console.log("Hello Everyone!");
};
sayHello();

// Function Expression with Parameters
const addNumbers = function (num1, num2) {
 console.log(num1 + num2);
};
addNumbers(15, 25);


// Function Expression with Return
const square = function (number) {
return number * number;
};
const result = square(6);
console.log(result);


// Function Expression with String
const greetUser = function (name) {
 return "Welcome " + name;
};
console.log(greetUser("Asma"));


// Function Expression Called Multiple Times
const multiply = function (a, b) {
 console.log(a * b);
};
multiply(2, 5);
multiply(4, 6);
multiply(10, 3);

