// important array methods

// ForEach
const numbers = [4, 2, 5, 8];

function myFunc(number, index) {
 console.log(`index is ${index} number is ${number}`);
}
numbers.forEach(myFunc);

// Anonymous function
// const numbers = [4, 2, 5, 8];

// numbers.forEach(function(number, index) {
//  console.log(`index is ${index} number is ${number}`);
// });


// Arrow Function
// const numbers = [4, 2, 5, 8];
// numbers.forEach((number, index) => {
// console.log(number * 2, index);
// });

// object array
// const users = [
//  { firstName: "Harshit", age: 22 },
//  { firstName: "Mohit", age: 21 },
//  { firstName: "Nitish", age: 20 }
// ];
// users.forEach(function(user) {
//     console.log(user.firstName);
// });