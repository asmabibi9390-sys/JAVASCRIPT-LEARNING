// Closures
// outerFunction() → Basic closure.

// function outerFunction() {

//     function innerFunction() {
//         console.log("Hello World");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();

// ans();

// printFullName() → Real closure concept

function printFullName(firstName, lastName) {

    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}
const ans = printFullName("Harshit", "Sharma");

ans();
