// inheritance
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
}
const dog1 = new Dog("Tommy", 3);

console.log(dog1.eat());