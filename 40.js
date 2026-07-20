// Object inside array
const users = [
{ name: "Asma", age: 20 },
{ name: "Ali", age: 22 },
{ name: "Sara", age: 19 }
];
console.log(users);

// Access Object Data

const books = [
 {
  title: "JavaScript",
  price: 800
},
 {
  title: "HTML",
  price: 500
 },
 {
 title: "CSS",
 price: 600
}
];
console.log(books[0].title);
console.log(books[1].price);
console.log(books[2].title);

// for...of Loop
const fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Grapes", color: "Green" }
];
for (let fruit of fruits) {
    console.log(fruit.name);
}

// Print Multiple Properties
const employees = [
    { name: "Ahmed", department: "HR" },
    { name: "Sara", department: "IT" },
    { name: "Ali", department: "Finance" }
];
for (let employee of employees) {
    console.log(employee.name, "-", employee.department);
}