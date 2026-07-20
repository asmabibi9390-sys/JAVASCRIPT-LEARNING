// Basic Function Inside Function
function app() {
    function hello() {
     console.log("Hello");
    }
    hello();
}
app();

// Multiple Functions Inside One Function
function myApp() {
    function greet() {
        console.log("Good Morning");
    }
    function thankYou() {
        console.log("Thank You");
    }
    greet();
    thankYou();
}
myApp();

// Return Function
function calculator() {
function add(a, b) {
    return a + b;
 }
 console.log(add(10, 20));
}
calculator();


// Basic Lexical Scope

const city = "Peshawar";
function showCity() {
function printCity() {
 console.log(city);
}
 printCity();
}
showCity();

// Parent Variable Access
function outerFunction() {
    let firstName = "Asma";
    function innerFunction() {
     console.log(firstName);
    }
    innerFunction();
}
outerFunction();

