// Arrow Functions
const sayHello = () => {
 console.log("Hello Everyone!");
};
sayHello();

// Arrow Function with Parameters
const add = (num1, num2) => {
 console.log(num1 + num2);
};
add(15, 10);

// Arrow Function with Return
const square = (number) => {
 return number * number;
};
const result = square(6);
console.log(result);


// Single Parameter (No Parentheses)
const greet = name => {
 console.log("Welcome " + name);
};
greet("Asma");

// One Line Arrow Function (Implicit Return)
const multiply = (a, b) => a * b;

console.log(multiply(5, 4));