//Here We will learn the function Execution Context
let foo = "foo"; //Line: 1
console.log(foo);  //Line:  2


function getFullName(firstName , lastName){  //Line: 3
    console.log(arguments); //[Arguments] { '0': 'Adarsh', '1': 'Singh' } This will tell that what is inside the argument | But we are not using this.
    let myvar = "Var inside the function";
    console.log(myvar);
    const FullName = firstName + " " + lastName;
    return FullName;
}

const personName = getFullName("Adarsh", "Singh"); //Line: 4
console.log(personName)//Line: 5


//Line By line Explanation:

// In the first line let datatype created with the reference variable which is initialized and in the Line:2 will Print the value and Make that exection ends by printing;
//Then in the line 3 there is a const variable assigned with personName the getFullName() function which is in the execution but it cannot we called because the line 4 is having some constriant in his parameter ,So it will check that is there any function or method which is made which takes arguments in the parameter. Then it will Jump to the line:3 which is a function.
//In line:4 or in javascript when a function is called then there it will create new execution context will create which is named as Function Execution Context.
//Then in the function -> local memory creation in the array like object in the function then ->code will execute; then it will set the first argument in the first variable then second argument will store in the another variable.Till this time java script is working in the Global execution context but when it will call the function then it will move to function execution context.
