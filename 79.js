// (new Keyword)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return `My name is ${this.name}`;
};

const person1 = new Person("Asma", 20);

console.log(person1.introduce());