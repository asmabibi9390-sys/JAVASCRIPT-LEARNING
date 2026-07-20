// Without Parameter Destructuring
const person = {
 firstName: "Harshit",
 gender: "male"
};
function printDetails(obj) {
 console.log(obj.firstName);
 console.log(obj.gender);
}
printDetails(person);

// Parameter Destructuring
// const person = {
//  firstName: "Harshit",
//  gender: "male"
// };
// function printDetails({ firstName, gender }) {
//  console.log(firstName);
//   console.log(gender);
// }
// printDetails(person);


// Different Example
const student = {
 name: "Asma",
 age: 20
};
function showStudent({ name, age }) {
 console.log(name);
 console.log(age);
}
showStudent(student);