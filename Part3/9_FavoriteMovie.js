let movie ="Avatar";
let guess = prompt("Enter your guesses");


while ((guess!=movie)&&(guess!='quit') ) {
 guess=  prompt ("wrong guess try again");
}

if (guess==movie) {
    console.log("Congrats!..you guess the right movies name");
} 
else {
    console.log("you quit the game.");
} 
// or------------------

while ((guess!=movie) ) {
    if(guess!='quit'){
        console.log("you quit the game");
        break;
        
    }
 guess=  prompt ("wrong guess try again");
}

if (guess==movie) {
    console.log("Congrats!..you guess the right movies name");
} 
