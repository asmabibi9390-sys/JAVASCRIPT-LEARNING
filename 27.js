// Primitive Data Type

let num1 = 6;
let num2 = num1;

console.log("Before Increment");
console.log(num1);
console.log(num2);

num1++;

console.log("After Increment");
console.log(num1);
console.log(num2);

// Reference Data Type

let array1 = ["item1", "item2"];
let array2 = array1;

console.log("Before Push");
console.log(array1);
console.log(array2);

array1.push("item3");

console.log("After Push");
console.log(array1);
console.log(array2);

// Another Reference Example

let fruits1 = ["Apple"];
let fruits2 = fruits1;

fruits2.push("Mango");

console.log(fruits1);
console.log(fruits2);


