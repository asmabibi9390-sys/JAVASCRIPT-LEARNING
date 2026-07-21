// Arrow Functions and this
// Normal function
// const user = {
//     firstName: "Harshit",
//     about: function () {
//       console.log(this.firstName);
//   }
// };
// user.about();


// Arrow Function
const user = {
    firstName: "Harshit",
    about: () => {
      console.log(this.firstName);
 }
};
user.about();