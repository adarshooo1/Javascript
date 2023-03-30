//Operators
//1.or   2.and

let age = 14;
let Letter = "Adarsh";

//and  (&&) operator
if(age >= 18 && Letter[0]=== 'A'){//If both of the condition is true then it will execute the if condition.
    console.log("Name starts with letter A and the age is above 18")
}
else{
    console.log("Inside Else")
}

//Or (||) operator
if(age >= 18 || Letter[0]=== 'A'){//If both of the condition is true then it will execute the if condition.
    console.log("Name starts with letter A or the age is above 18")
}
else{
    console.log("False")
}
