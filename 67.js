// Function Inside Object
// function personInfo() {
//  console.log(`Person name is ${this.firstName} and age is ${this.age}`);
// }
// const person1 = {
//  firstName: "Harshit",
//  age: 22,
// about: personInfo
// };
// const person2 = {
//  firstName: "Mohit",
//  age: 21,
// about: personInfo
// };
// person1.about();
// person2.about();


// // Method Inside Object
const person = {
 firstName: "Harshit",
 age: 22,
 about: function () {
  console.log(`Person name is ${this.firstName} and age is ${this.age}`);
 }
};
person.about();


// Same Function for Multiple Objects
function personInfo() {
 console.log(this.firstName);
}
const user1 = {
 firstName: "Ali",
 about: personInfo
};
const user2 = {
 firstName: "Asma",
 about: personInfo
};
user1.about();
user2.about();