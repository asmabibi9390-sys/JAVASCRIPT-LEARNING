// Old syntax
// const user1 = {
//     firstName: "Harshit",
//     age: 22,
//     about: function () {
//      console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//     }
// };
// user1.about();

// ES6 Short Syntax
const user1 = {
    firstName: "Harshit",
    age: 22,
    about() {
      console.log(`Person name is ${this.firstName} and age is ${this.age}`);
    }
};
user1.about();