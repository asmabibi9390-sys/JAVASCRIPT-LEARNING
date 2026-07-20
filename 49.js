// Basic Rest Parameter
function myFunc(...numbers) {
 console.log(numbers);
}
myFunc(1, 2, 3, 4, 5);

// Rest Parameter with Normal Parameters
function myFunc(a, b, ...numbers) {
 console.log(a);
 console.log(b);
 console.log(numbers);
}
myFunc(10, 20, 30, 40, 50);


// Sum Using Rest Parameter
function addAll(...numbers) {
 let total = 0;
  for (let number of numbers) {
  total = total + number;
 }
 return total;
}
console.log(addAll(10, 20, 30, 40));

