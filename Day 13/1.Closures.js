//Closures

// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// console.log(ans)//This will retun the innerFunction;

// ans()//This will return the innerFunction output;


function printInput(firstName , lastName){
    function printName(){
        console.log(firstName , lastName)
    }
    return printName;
}

const ans2 = printInput("Aman","Singh");
console.log(ans2)//This will retun the innerFunction;

ans2()


//Exmaple 2:

function hello(x){
    const a = "Adarsh"
    const  b= "Singh"
    return function(){
        console.log(a, b, x);
    }
}

const ans3 = hello(NaN)
ans3()


//Task of get square of a number;
function myFunc(num){
    function square(){
        console.log(num * num)
    }
    return square;
}

const square = myFunc(5);
square()

//Task of get square of a number;
function myFunc2(num){
    function cube(){
        console.log(num * num * num)
    }
    return cube;
}

const cube = myFunc2(2);
cube();

//Task of input a Number which is a power and input a number whose power we need to know from a number;
function myFunc3(power){
    return function(number){
        return number ** power;
    }
}

const quadratic = myFunc3(4)
const nums = quadratic(2)
console.log(nums)


//Here in the closures when a function have a function which is returns any value then it will returned with the value which is stored in the valriable, and when next function will be called then it will execute their own function execution statement but here this function have some stored value and when we called this then it will return the ouput.


// How to write this code in short.


myFunc4 = power => nums2 => power**nums2;

const power = myFunc4(2);
const nums2 = power(3);
console.log(nums2)



//Task call a function which is rererning a function but trick is if the function is called more then once then it will send a message or already used earlier.

function funFun (){
    let counter = 0;
    return function(){ //Note here we can only return a function with the name name function.
        if(counter < 1){
            console.log("Hii! You called Me...");
            counter++;
        }
        else{
            console.log("Abb kitna call krega!")
        }
    }
}

const check = funFun();
check();
check()


