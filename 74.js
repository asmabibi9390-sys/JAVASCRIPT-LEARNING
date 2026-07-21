// Store Methods in Separate Object
// Methods Object
const userMethods = {
    about: function () {
      return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
      return this.age >= 18;
    }
};
function createUser(firstName, lastName, email, age) {
    const user = {};

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;

    return user;
}
const user1 = createUser("Harshit", "Sharma", "harshit@gmail.com", 22);
const user2 = createUser("Mohit", "Kumar", "mohit@gmail.com", 16);

console.log(user1.about());
console.log(user1.is18());

console.log(user2.about());
console.log(user2.is18());