// Why functions are called first class citizens in Javascript ?
// 1. Assign function to a variable
// 2. pass function as arguments to another function.
// 3. Return function to another function.

// Basic Function Passing

// Example 1
function greet(name) {
  return `Hello , ${name}`;
}

function greetUser(greetFunction, userName) {
  return greetFunction(userName);
}
// Way 1
const res = greetUser(greet, "Adarsh");
console.log(res);

// Way 2
const greetUserFunction = (userName) => greetUser(greet, userName);
const res2 = greetUserFunction("Adarsh");
console.log(res2);

// Example 2 : callbackFunction;
function processNumber(num, callbackFn) {
  return callbackFn(num);
}

function square(n) {
  return n * n;
}

function double(n) {
  return n * 2;
}

console.log(processNumber(10, square)); //Output : 100
console.log(processNumber(10, double)); //Output : 20

// HigherOrderFunction
function multiplier(factor) {
  return function (number) {
    //Function without name is called anonymous functions.
    return number * factor;
  };
}
// Way 1
const double2 = multiplier(20);
console.log(double2(20));
// Way 2
const triple = multiplier(3);
console.log(triple(4));
// Way 3
console.log(multiplier(8)(8));

// Event Handling;
// const { JSDOM } = require("jsdom");
// const dom = new JSDOM(
//   '<!DOCTYPE html><html><body><button id="MyButton">Click me</button></body></html>'
// );
// const document = dom.window.document;

// function handleClick() {
//   //Trigger Automatically when user make the click evert;
//   console.log("Button Clicked");
// }

// function addClickListener(elementName, callbackFn) {
//   elementName.addEventListener("click", callbackFn);
// }

// const button = document.getElementById("MyButton");
// addClickListener(button, handleClick);

// Arrays Method:
const arr = [1, 2, 3, 4, 5];

function sqEach(number) {
  return number * number;
}

const squareMap = arr.map(sqEach);
console.log(squareMap);

// ===============================================================

// Advance Concepts

// Functions Returning Functions:
function multiplyBy(factor) {
  return function (number) {
    return factor * number;
  };
}

console.log(multiplyBy(10)(2));

// Higher-Order Functions: Functions that take one or more functions as arguments or return a function are called higher-order functions.
function higherOrderFunction(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subs(a, b) {
  return a - b;
}
console.log(higherOrderFunction(add, 12, 12));
console.log(higherOrderFunction(subs, 12, 10));

// Callback Function : Callback functions are functions passed as arguments to another function, often executed after the completion of an asynchronous operation.
function fetchData(callback, n) {
  setTimeout(() => {
    //Async function
    const data = "Hello , Async Data";
    console.log(data);
  }, n * 1000);
}

function processFetchData(Data) {
  return Data;
}

fetchData(processFetchData(10), 10);

// Arrow Functions and Function Expressions: Arrow functions can be used as concise alternatives, especially in functional programming.
const sqr = (g) => g * g;

const greet20 = function (name) {
  return `Hello, ${name}!`;
};

console.log(sqr(4)); // Outputs: 16
console.log(greet20("John")); // Outputs: Hello, John!

// Function Declaration / Function Statement
function func() {
  console.log("Function Declaration or Function Statement");
}

// Function expression:
var d = function () {
  console.log("function expression");
};

// Difference between function expression and function declaration
// Biggest difference is hoisting. A normal function can we called any where in the containing space but a function expression though reference error.

function normalFunction() {
  console.log("normal and able to hoisted");
}

var func2 = function () {
  console.log(
    "After assign func2 as a function expression, It can we called after the value is assigned, If we try to call this function before the declaration then it will though error."
  );
};

// func3(); Not a function error.
// Named function expression.
var func3 = function fnExp() {
  console.log("It is like function expression, but with a name");
  console.log(fnExp); //Here we can call the function itself.
};
func3(); //✅ Now work well,
// But if we try to call  fnExp(), Shows: ReferenceError: fnExp() is not defined

// Function parameter and Function argument
function fnExp2(var1, var2, var3) {
  console.log(
    `//This is called as Function parameter ${var1}, ${var2} , ${var3}`
  );
}
fnExp2(1, 2, 3); // this is called as function argument

// First Class Function: The ability of function to be used as values and can be passed as an argument to another function and can be returned from functions called FCF. aka as first class citizens.
function fk8(value, fn) {
  return fn(value);
}

function add(val) {
  return val + val;
}
console.log(fk8(10, add));
