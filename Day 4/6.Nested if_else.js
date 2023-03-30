// //Nested if-else

// //Make a game which will be run with the help of nested if else statement.


// let winningNumber = 200;
// let count = 0;

// let prompt = require('prompt-sync')();
// let userGuess =Number(prompt("Enter a Number :- "))//As a defalut the prompt is taking input in string only, So we have to typecaste the prompt like in this case.

// if(userGuess === winningNumber){
//     console.log(`Your Guess is correct.`)
// }
// else{ //So, Here we nest inside the else-condition.
//     if(userGuess > winningNumber){
//         console.log("Your guess is too high!")
//     }
//     else{
//     console.log("Your guess is to low!") //This will goes into the else statement.
//         }
// }


//Nested-if Using while loop. But the difference is this will keep taking input if the user input is not eqal to the correct number.Additionally we set a count as many times the guess was wroug it will update the count and tell us the scores.

let winningNumber = 200;
let count = 0;

let prompt = require('prompt-sync')();

while (true) {
  let userGuess = Number(prompt("Enter a Number: "));

  if (userGuess === winningNumber) {
    count += 1;
    console.log(`You won this game in ${count} guesses.`);
    break;
  } else if (userGuess > winningNumber) {
    count += 1;
    console.log("Your guess is too high!");
  } else {
    count += 1;
    console.log("Your guess is too low!");
  }
}