// Block Scope with let
{
    let firstName = "Asma";
    console.log(firstName);
}

// Block Scope with const
{
    const city = "Peshawar";
    console.log(city);
}

// Function Scope with var
function myApp() {
 var age = 20;
console.log(age);
}
myApp();

// var is NOT Block Scoped
{
 var language = "JavaScript";
}
console.log(language);

// let vs var
{
  let student = "Ali";
  var teacher = "Ahmed";
}
console.log(teacher);
// console.log(student);

