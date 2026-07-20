// clone array
// slice method

let array1 = ["item1", "item2"];

let array2 = array1.slice();

array1.push("item3");

console.log(array1 === array2);

console.log(array1);
console.log(array2);

// Clone Array using concat()

let fruits = ["Apple", "Mango", "Banana"];

let copyFruits = [].concat(fruits);

fruits.push("Orange");

console.log(fruits);
console.log(copyFruits);
console.log(fruits === copyFruits);

// Clone Array using Spread Operator

let colors = ["Red", "Green", "Blue"];

let copyColors = [...colors];

colors.push("Yellow");

console.log(colors);
console.log(copyColors);
console.log(colors === copyColors);

// Spread Operator + Add New Items

let vegetables = ["onion", "potato"];

let newvegetables = [...vegetables, "tomato", "carrot"];

console.log(vegetables);
console.log(newvegetables);

