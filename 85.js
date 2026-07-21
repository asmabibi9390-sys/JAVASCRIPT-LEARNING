// Static Methods and Properties
class Person {
    static classInfo = "This is Person Class";
    constructor(name) {
        this.name = name;
    }
    static about() {
        return "Static Method";
    }

}
const person1 = new Person("Asma");

console.log(Person.classInfo);

console.log(Person.about());