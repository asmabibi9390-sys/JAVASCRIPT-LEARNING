// Function Returning Function
function myFunc() {
 function hello() {
 console.log("Hello World");
 }
 return hello;
}
const ans = myFunc();
ans();

// Return Anonymous Function
function myFunc() {
 return function () {
 console.log("JavaScript");
 };
}
const result = myFunc();
result();

// Return Arrow Function
function myFunc() {
 return () => {
 console.log("Learning JS");
 };
}
const answer = myFunc();
answer();