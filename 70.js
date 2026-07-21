// Some warning
const user1 = {
    firstName: "harshit",
    age: 8,
    about: function () {
        console.log(this.firstName, this.age);
    }
};

// Don't do this mistake
// user1.about();

const myFunc = user1.about.bind();

myFunc();