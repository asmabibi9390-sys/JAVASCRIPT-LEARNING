// Iterate Objects
// for...in Loop
const person = {
name: "Harshit",
age: 22,
 city: "Delhi"
};
for (let key in person) {
    console.log(key);
}

// Print Object Values
const mobile = {
brand: "Samsung",
 model: "S24",
color: "Black"
};
for (let key in mobile) {
 console.log(mobile[key]);
}

// Print Both Keys and Values
const student = {
 name: "Asma",
 semester: 5,
department: "Computer Science"
};
for (let key in student) {
    console.log(key, ":", student[key]);
}

// Object.keys() Method
const car = {
 brand: "Toyota",
 model: "Corolla",
 year: 2024
};
console.log(Object.keys(car));

// Object.keys() Returns an Array
const book = {
 title: "JavaScript",
 author: "Harshit"
};
console.log(Array.isArray(Object.keys(book)));
