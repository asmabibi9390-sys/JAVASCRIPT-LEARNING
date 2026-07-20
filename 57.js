// Sort Strings
const userNames = ["harshit", "abcd", "mohit", "nitish", "zebra"];

userNames.sort();

console.log(userNames);

// Ascending Order
const numbers = [5, 9, 1200, 400, 3000];
numbers.sort((a, b) => {
    return a - b;
});

console.log(numbers);