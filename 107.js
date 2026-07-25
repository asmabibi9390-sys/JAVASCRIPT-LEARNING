// ClassList (Add, Remove, Contains)
const sectionTodo = document.querySelector(".container");

console.log(sectionTodo.classList);

// Add class
sectionTodo.classList.add("bg-dark");

// Remove class
// sectionTodo.classList.remove("bg-dark");

// Check class
console.log(sectionTodo.classList.contains("container"));
console.log(sectionTodo.classList.contains("bg-dark"));