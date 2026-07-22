// Lexical Environment & Scope Chain

const myVar = "value1";

function myApp() {
    function myFunc() {
        console.log(myVar);
    }

    myFunc();
}
myApp();
