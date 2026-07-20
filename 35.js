// Dot Notation
const person = {
 name: "Asma",
 age: 20,
 city: "Peshawar"
};
console.log(person.name);
console.log(person.age);

// Bracket Notation
const book = {
 title: "JavaScript",
 author: "Harshit",
 pages: 300
};
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);

// Variable with bracket notation
const student = {
 name: "Asma",
 age: 20
};
let key = "city";
student[key] = "Peshawar";
console.log(student);

// Key with space
const employee = {
 "full name": "Ali Khan",
 age: 25,
city: "Lahore"
};
console.log(employee["full name"]);
console.log(employee["city"]);