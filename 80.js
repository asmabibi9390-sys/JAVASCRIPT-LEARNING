// Constructor function with new key word
function Student(name, semester) {
    this.name = name;
    this.semester = semester;
}
Student.prototype.info = function () {
  return `${this.name} is in semester ${this.semester}`;
};
const student1 = new Student("Asma", 5);
const student2 = new Student("Ali", 6);

console.log(student1.info());
console.log(student2.info());