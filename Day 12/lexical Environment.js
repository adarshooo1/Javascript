const lastName = "Adarsh"//Here const lastName is created and initialized in the global execution context.

const printName = function(){
    const firstName = "Singh"
    console.log(firstName)//As we can see that this forst name variable is not present in the function then it will not stop then it will search in the gloabal environment and then it found the variable and complete the excetition.Which is named as Lexical or chaining in the proramm.
    console.log(lastName)//Here it will find the last name variable 
}

printName()//Here, Because of this function above function is able to execute because function can stay in the stack menory but it cannot run till the function is not called;