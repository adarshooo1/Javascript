console.log(this)
console.log(global)
console.log(firstname)
var firstname = "Adarsh"
console.log(firstname)

console.log(myfunction);
console.log(fullName)

//Java is a single thread language:- Line by line execution
//It has a Lexical scope:- Means where ever we write a code inside the function or in the global, This is called lexical scope.

function myfunction(){
    console.log("This is the function")
}

var firstName = "Dhruv"
var lastName = "Singh";
var fullName = firstName + " " + lastName;
console.log(fullName);