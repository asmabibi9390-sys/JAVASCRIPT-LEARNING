// Basic Object Destructuring
// const employee = {
//  name: "Ahmed",
//  salary: 50000
// };
// const { name, salary } = employee;
// console.log(name);
// console.log(salary);

// Rename Variables
const mobile = {
 brand: "Samsung",
 model: "S24"
};
const { brand: company, model: phoneModel } = mobile;
console.log(company);
console.log(phoneModel);

// Missing Property (undefined)
 const player = {
 name: "Babar Azam",
team: "Pakistan"
};
const { name, jerseyNumber } = player;
console.log(name);
console.log(jerseyNumber);


// Default value
const book = {
title: "JavaScript Basics"
};
const { title, author = "Harshit" } = book;
console.log(title);
console.log(author);

// Rest Operator with Object
const car = {
 brand: "Toyota",
 model: "Corolla",
 year: 2024
};
const { brand, ...details } = car;
console.log(brand);
console.log(details);