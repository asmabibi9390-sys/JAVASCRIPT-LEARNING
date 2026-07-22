// Closure Example 1 (Function Returning Function)

function hello(x) {

    const a = "varA";
    const b = "varB";

    return function () {
        console.log(a, b, x);
    };
}

const ans = hello("Argument");
ans();

