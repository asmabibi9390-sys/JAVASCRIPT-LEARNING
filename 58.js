// find()
const myArray = ["Hello", "cat", "dog", "lion"];
function isLength3(string) {
 return string.length === 3;
}
const ans = myArray.find(isLength3);
console.log(ans);

// Objects Array
const users = [
    { userId: 1, userName: "Harshit" },
    { userId: 2, userName: "Mohit" },
    { userId: 3, userName: "Nitish" },
    { userId: 4, userName: "Aman" }
];
const myUser = users.find((user) => {
 return user.userId === 3;
});
console.log(myUser);

