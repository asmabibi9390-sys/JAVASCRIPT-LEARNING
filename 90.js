// Call Stack

function one() {
    console.log("Inside Function One");
}

function two() {
    one();
    console.log("Inside Function Two");
}

function three() {
    two();
    console.log("Inside Function Three");
}

three();

