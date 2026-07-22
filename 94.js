// Closure Example 2
function myFunction(power) {
    return function(number) {
        return number ** power;
    }

}
const square = myFunction(2);
console.log(square(3));

