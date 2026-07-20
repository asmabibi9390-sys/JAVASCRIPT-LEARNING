//  nested if else
    let winningNumber = 19;
let userGuess = 19;

if (userGuess === winningNumber) {
    console.log("Your guess is right!");
} else {

    if (userGuess < winningNumber) {
        console.log("Too Low!");
    } else {
        console.log("Too High!");
    }

}