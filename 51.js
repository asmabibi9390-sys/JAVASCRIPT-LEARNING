
// Basic Callback Function
function myFunc(callback) {
 console.log("Hello I am a function");
 callback();
}
function myFunc2() {
 console.log("Hello I am callback function");
}
myFunc(myFunc2);

// Callback with Parameters
function greet(callback) {
 console.log("Welcome");
 callback("Asma");
}
function showName(name) {
    console.log(name);
}
greet(showName);

// Anonymous Callback Function
function calculate(callback) {
 callback();
}
calculate(function () {
 console.log("Calculation Complete");
});

