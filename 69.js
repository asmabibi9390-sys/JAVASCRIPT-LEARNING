// call()
function about(hobby, favMusician) {
    console.log(this.firstName, this.age);
    console.log(hobby, favMusician);
}
const user1 = {
    firstName: "Harshit",
    age: 22
};
const user2 = {
    firstName: "Mohit",
    age: 20
};
about.call(user1, "guitar", "Mozart");
about.call(user2, "cricket", "Arijit");

// apply()
function about(hobby, favMusician) {
 console.log(this.firstName, this.age);
 console.log(hobby, favMusician);
}
const user3 = {
    firstName: "Harshit",
    age: 22
};
about.apply(user3, ["guitar", "Mozart"]);

// bind()
function about(hobby, favMusician) {
 console.log(this.firstName, this.age);
 console.log(hobby, favMusician);
}
const user4 = {
    firstName: "Harshit",
    age: 22
};
const myFunction = about.bind(user4, "guitar", "Mozart");
myFunction();






