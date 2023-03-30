//If- else condition

//Example 1:-
let salary = 20001;


if (salary > 20000){
    salary += 5000
    }
else{
    salary == salary
    }

console.log(salary)
  
//Example 2:-
let age = 17

if(age >= 18){
    console.log("You can Drive Car") 
    }
else{
    console.log(`You can Drive after ${18 - age} later.`)
}    

//Example 3:-

let num = 12

if(num %2 === 0){
    console.log("Even")
    }
else{
    console.log("odd")
}

//if else-if else statement;
let prompt = require('prompt-sync')();
let tempInDegree = Number(prompt("What's The temperature Outside? :- "))

if(tempInDegree <= 0){
    console.log("extremely cold outside be at Home with woolen clothes.")
    }   
else if(tempInDegree <= 16){
    console.log("Its is cold outside, But can go outside in Day time only.")
}
else if(tempInDegree <= 25){
    console.log("Nice Weather, Let's go for a trip")
}
else if(tempInDegree <= 35){
    console.log("Its Hot Inside, Drink More water")
}
else if(tempInDegree <= 40 ){
    console.log("Its so Hot, Turn on AC")
}
else{
    console.log("Extrem Hot")
}
