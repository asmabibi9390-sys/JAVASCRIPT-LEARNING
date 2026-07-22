// Closure Example 3 (Function Can Be Called Only Once)

function myFunction() {

    let counter = 0;

    return function () {

        if (counter < 1) {
            console.log("Hi, You Called Me");
            counter++;
        } else {
            console.log("Already Called");
        }
    }
}
const myFunc = myFunction();

myFunc();
myFunc();
myFunc();