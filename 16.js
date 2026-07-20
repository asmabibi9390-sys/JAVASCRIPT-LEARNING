// AND & OR

let firstName = "Asma";
let age = 20;

if (firstName === "Asma" && age >= 18) {
    console.log("Name and age both are correct");
} else {
    console.log("Wrong Information");
}

let hasCNIC = false;
let hasPassport = true;

if (hasCNIC || hasPassport) {
    console.log("Identity Verified");
}