// Nested Destructuring
const users = [
   { userId: 1, firstName: "Harshit", gender: "male" },
   { userId: 2, firstName: "Asma", gender: "female" }
];
const [user1, user2] = users;
console.log(user1);
console.log(user2);

// Destructure Object Properties
const books = [
    { title: "JavaScript", price: 800 },
    { title: "HTML", price: 500 }
];
const [{ title }, { price }] = books;
console.log(title);
console.log(price);

// Rename Variables
const mobiles = [
    { brand: "Samsung", price: 120000 },
    { brand: "Apple", price: 250000 }
];
const [{ brand: mobile1 }, { brand: mobile2 }] = mobiles;
console.log(mobile1);
console.log(mobile2);

// Skip Values
const colors = [
    { color: "Red" },
    { color: "Blue" },
    { color: "Green" }
];

const [ , secondColor ] = colors;
console.log(secondColor);


// Nested Array + Object Destructuring
const students = [
    { name: "Ali", marks: 85 },
    { name: "Asma", marks: 92 }
];
const [{ name, marks }, { name: studentName, marks: studentMarks }] = students;

console.log(name);
console.log(marks);

console.log(studentName);
console.log(studentMarks);