function hello(){
    console.log("Hello World!")
}

hello();

//1.Function Declaration.
//In the case of Function declaration we can call the function without creating a function and if we made a function after function call then it will work.

//Here we called the function before creating this function.
Myname();

function Myname(){
    console.log("Adarsh")
}
//THis will work.

//2. Function Expression canot allow this. Before function declaration we cannot call the function we can call a function after function declaration in case of function expression.

// Example 1:
let game = function(){
    console.log("Cricket");
}
game();//This can only call after declaration in case of function expression.

//Example 2:
let value = "NiceString"
console.log(value)
