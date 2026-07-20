// Problem Without Optional Chaining
// const user = {
//  firstName: "anam",
//  address: {
//       houseNumber: "1234"
//     }
// };
// console.log(user.firstName);
// console.log(user.address.houseNumber);

// Optional Chaining
// const user = {
//  firstName: "Harshit"
// };
// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);

// Nested Object
const user = {
 firstName: "Harshit",
 address: {
   houseNumber: "1234"
  }
};
console.log(user?.address?.houseNumber);

