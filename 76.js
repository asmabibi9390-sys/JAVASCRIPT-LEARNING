// Prototype
function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

console.log(createUser.prototype);