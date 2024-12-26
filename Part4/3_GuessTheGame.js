//user enters a max number and then tries to guess a random generated number between 1 to max
let maxinum =prompt("enter the max limit of numbers");
let randomNumber = Math.floor(Math.random()*maxinum)+1;
let userGuess = prompt( `Guess the number` );
console.log("Your guess :", userGuess,"Computer guesses :" ,randomNumber);

// while (randomNumber!=userGuess && userGuess!='quit' ) {

//     userGuess =    prompt( `Guess again  ` );
//     console.log("Your guess :", userGuess,"Computer guesses :" ,randomNumber);
// }

// if (randomNumber==userGuess) {
//     console.log("Your guess :", userGuess,"Computer guesses :" ,randomNumber);
// }
// else if (userGuess=='quit') {
//     console.log(" You quit the game");

// }
//or
while (true) {
    if (userGuess=='quit') {
        console.log(" You quit the game"); 
        break;
    }
    if (randomNumber==userGuess) {
        console.log("Your guess :", userGuess,"Computer guesses :" ,randomNumber);
        break;
    }
   else if (userGuess<randomNumber) {
        userGuess =prompt("Your guess was too small. please try again" );
    }
   else {
        userGuess =prompt("Your guess was too big. please try again" );
    }
}
  
