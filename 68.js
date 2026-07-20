// this Inside Method
const person = {
 firstName: "Harshit",
 age: 22,
 about: function () {
  console.log(this.firstName, this.age);
 }
};
person.about();

// normal function
const student = {
name: "Ali",
 showName: function () {
   console.log(this.name);
  }
};
student.showName();

// Window Object
function hello() {
 console.log("Hello World");
}
hello();
window.hello();