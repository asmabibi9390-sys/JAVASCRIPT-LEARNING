// factory function
function createStudent(name, rollNo, department, semester) {
    const student = {};

    student.name = name;
    student.rollNo = rollNo;
    student.department = department;
    student.semester = semester;

    student.introduce = function () {
      return `My name is ${this.name} and I study in ${this.department}`;
    };
    student.isFinalYear = function () {
      return this.semester >= 7;
    };
    return student;
}
const student1 = createStudent(
    "Asma",
    "CS-101",
    "Computer Science",
    5
);s
const student2 = createStudent(
    "Ali",
    "SE-202",
    "Software Engineering",
    8
);
console.log(student1.introduce());
console.log(student2.introduce());

console.log(student1.isFinalYear());
console.log(student2.isFinalYear());