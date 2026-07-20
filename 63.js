// Iterables
// String is Iterable
const firstName = "Asmakhan";

for (let char of firstName) {
    console.log(char);
}

// Array is Iterable
const items = ["item1", "item2", "item3"];

for (let item of items) {
    console.log(item);
}

// Non-iterable Object
const student = {
 name: "Asma"
};
for (let value of student) {
    console.log(value);
}
