// map()
// const numbers = [3, 4, 6, 1, 8];
// function square(number) {
//  return number * number;
// }
// const squareNumbers = numbers.map(square);
// console.log(squareNumbers);

// Arrow Function
const numbers = [3, 4, 6, 1, 8];
const squareNumbers = numbers.map((number) => {
 return number * number;
});
console.log(squareNumbers);


// map() with Objects
const users = [
 { firstName: "Harshit", age: 22 },
 { firstName: "Mohit", age: 21 },
{ firstName: "Nitish", age: 20 }
];
const userNames = users.map((user) => {
 return user.firstName;
});
console.log(userNames);
