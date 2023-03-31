//For loop.

// Example 1:- Print Number till 1 to 10.
let i;
for(i = 1; i <= 10 ;i++){
   console.log(i)
}

//Example 2:- Print the Multiplication table till 1 to 10 of any number with the help of for loop.
let prompt = require('prompt-sync')();
let Num = Number(prompt("Enter your Number:- "))
console.log(`Multiplication table of Number:- ${Num}`)

for(i = 1; i <= 10 ; i++){
    console.log(`2 X ${i} = ${Num * i}`)
}


//Example 1:-Print number till 1 to 10 with the help of for loop.
let j = 1;

while(j <= 10){
    console.log(j)
    j++;
}

//Exmaple 2:Password Checker with the help of while loop.
let instagramUsername = "__adarsh_ooo1__";
let password = "Adarsh@2002";

let attempts = 4;
let isLoginSuccessful = false;

while(attempts > 0 && !isLoginSuccessful){
    let passcode = prompt("Enter your Instagram password:");

    if(passcode === password){
        console.log("Login Successful!");
        isLoginSuccessful = true;
    } else {
        console.log("Incorrect Password!");
        console.log(`You have ${attempts - 1} attempts left!`);
        attempts--;
    }
}

if(!isLoginSuccessful){
    console.log("Try again later with the correct password.");
}


//Do-While loop.
let k = 10;
do{
    console.log(i)//Weather the condition is true of false it will run the command which is inside the do statement.
    i++;
}
while(k <= 9){
    console.log(i);
    k++;
}



