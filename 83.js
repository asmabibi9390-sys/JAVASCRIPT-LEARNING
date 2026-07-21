// super Keyword
// super()
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }

}
class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    run() {
        return `${this.name} runs at ${this.speed} km/h`;
    }

}
const dog1 = new Dog("Tommy", 3, 20);

console.log(dog1.eat());
console.log(dog1.run());