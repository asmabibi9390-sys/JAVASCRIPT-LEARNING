// Object create()
const userMethods = {
  greet: function () {
     return `Hello ${this.name}`;
 }
};
function createUser(name) {
  const user = Object.create(userMethods);
    user.name = name;
    return user;
}
const user1 = createUser("Asma");
console.log(user1.greet());
