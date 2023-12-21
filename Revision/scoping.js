// There are 2 type of scope:
// 1: global scope 2: Local scope

// Global Example
console.log("=================Global Scope================");
var globalVariable = "I am global";

function example() {
  console.log(globalVariable); //Accessible
}

example();
console.log(globalVariable); //Accessible

//-----------------------------------------------------
console.log("=================Local Scope================");
// Local Scope
// Variables declared inside a function or block have local scope. They are only accessible within that function or block.
function localExample() {
  var localVariable = "I am local";
  console.log(localVariable);
}

localExample();

// -----------------------------------------------------
console.log("=================Block Scope================");
// Block Scope (let and const)
// The let and const keywords introduce block-scoped variables. Block scope is narrower than function scope and is introduced by curly braces {}.

if (true) {
  let localVariable = "I am in a local Variable  || Block Scope";
  console.log(localVariable);
}

// console.log(localVariable); //Error -not accessible outside the block

//-------------------------------------------------------------
console.log("=================Lexical Scope================");
// Lexical Scope:
// JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position within the code.

function lexicalFunction() {
  var outerVariable = "I am outer Variable || Lexical Scope";

  function innerFunction() {
    console.log(outerVariable);
  }
  innerFunction();
}

lexicalFunction();
console.log("Above this => Lexical Scope");

// --------------------------------------------------------------
console.log("=================Closure================");
// Closures:
// Closures occur when a function is defined inside another function and has access to the outer function's variables.
//  Closures remember and have access to the scope in which they were defined, and they can continue to access those variables even when the outer function has finished executing. This ability allows closures to "close over" and capture the state of their surrounding scope, making them powerful for data encapsulation, maintaining state, and creating private variables.

// Example 1:
function outerFunction() {
  var outerVariable = "I am outer || Examples Closures";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}
// outerFunction();

var closureFunction = outerFunction();
closureFunction();

// Example 2:
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = "10";

  return inner;
}

outer("Hello")();

const inner = outer("Hello");
inner(); //10 Hello

const inner2 = outer();
inner(); //10 undefined

// Example 3 : Data Hiding and Encapsulation
// var counter = 0;
// function incrementCount() {
//   counter++;
// } //Can easily change by other. Because any one can access the counter

// Data Hiding
function counter() {
  var count = 100; //So this thing is not accessible outside the function; //Data hiding / Data Encapsulation;

  return function incrementCounter() {
    count++;
    console.log(count);
  };
}
let num = counter();
num();

// or;

counter()();

//-------------------------------------------------------

console.log("=================Hoisting================");
// Hoisting
// JavaScript hoists variable and function declarations to the top of their containing scope during the compilation phase.

console.log(
  hoistedVar + ": Because trying to access the variable before declare"
); //Undefined : As we can see a variable it accessible to the top of their containing scope during compilation phase
var hoistedVar = "I,m Hoisted";
console.log(hoistedVar); //I'm hoisted

// console.log(hoistedVar2); // ReferenceError : Cannot access 'hoistedVar2' before initialization || Aka : Temporal Dead Zone. Because unable to access before declaration.
let hoistedVar2 = "I'm in the TDZ";
console.log(hoistedVar2);

greet(); //Function is defined below but, can able to access to the top where it defines
function greet() {
  console.log(console.log("Hello-World"));
}
// Hoisting is only for variable and functions;

// ---------------------------------------------------
console.log("=================IIFE================");
// IIFE : Immediately Invoked Function Expression;
// IIFE is a function that is executed immediately after it's created. It helps avoid polluting the global scope.

(function () {
  console.log("I am an LIFE!");
})();

// ----------------------------------------------------
function greet2() {
  console.log("Inside Greet2, 1");
  return function greet3() {
    console.log("Inside Greet3 , 2");
  };
}
greet2()();

// or

function greet4() {
  console.log("Inside greet 4");
}

function greet5() {
  console.log("Inside Greet 5");
  return greet4;
}

greet5()();
