//Functions

console.log("Happy Birthday to You")

//How to make funcitons:
//This is also called function declaration.
function Greet(){
    console.log("Today is My Birthday ...")
}

Greet();Greet();
Greet();Greet();
Greet();Greet();

//Create a funciton which will sum of two numbers.
function sum(num1, num2){
    return num1 + num2
}

console.log(sum(2 , 2))

//Make a function which will take a number in the argument and tell true of even false when odd.
function IsCheck(num){
    return num % 2 === 0;
}

console.log(IsCheck(3))

//Make a function which will take a string and return its first character.
function character(String){
    return String[0]
}
console.log(character("Maddie"))

//Make a function which will take an array in the argument and the target element, if target found then return the index else return -1.
function findTarget(Array,Target){
    for(let i = 0 ; i <= Array.length ; i++){
        if(  Array[i] === Target){
        return i;
        }
    }
    return -1;
}

//This is know as function expression.
const nums = [1,2,4,5,6,7,8]
const answer = findTarget(nums , 5)
console.log(answer)


//How to creat a default function:

function person(Name = "Adarsh" , Age = "1" , Salary = "1000"){
    console.log(`Person name is ${Name} `),
    console.log(`Person age is ${Age} `),
    console.log(`Person salary is ${Salary} `)
}
//Case 1;

//Defalut Output:
person();
// Person name is Adarsh 
// Person age is 1 
// Person salary is 1000 

//Case 2;

person("Deepanshu", 12 , 20000)
//output:
// Person name is Deepanshu 
// Person age is 12 
// Person salary is 20000 


//Case 3;

const person2 = person("Sopnil", 18 , 4000)
person2 //Here The retun type is void of person2.Because the function person() has the retun type void.
//Output:
// Person name is Sopnil 
// Person age is 18 
// Person salary is 4000 

//Basically Default function means when a function is make then we set some default values inside the parameter ,So in case we run that function without values so they can run as well like in case 1;


