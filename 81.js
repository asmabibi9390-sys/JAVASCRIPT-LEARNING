// Class key word
class Student {
    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    intro() {
        return `${this.name} is ${this.age} years old and studies ${this.department}`;
    }
}
const student1 = new Student("Asma", 20, "Computer Science");
console.log(student1.intro());