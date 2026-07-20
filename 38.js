// Copy objects
const student = {
 name: "Asma",
 age: 20
};

const newStudent = {
 ...student
};
console.log(newStudent);

// copy+add new property
const laptop = {
 company: "Dell",
processor: "Core i7"
};
const newLaptop = {
...laptop,
ram: "16GB"
};
console.log(newLaptop);

// Merge Two Objects
const obj1 = {
firstName: "Asma"
};
const obj2 = {
 lastName: "Khan"
};
const fullName = {
 ...obj1,
...obj2
};
console.log(fullName);

// Same Key Behavior
const mobile1 = {
 brand: "Samsung",
 color: "Black"
};
const mobile2 = {
 color: "Blue",
 price: 120000
};
const mobile = {
 ...mobile1,
 ...mobile2
};
console.log(mobile);


// spread with string
const letters = {
..."Hello"
};
console.log(letters);

