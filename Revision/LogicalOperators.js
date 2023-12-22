// Logical Operators : logical operators are used to perform logical operations on boolean values.

// 1 And (`&&`).
console.log(1 && 1); //1
console.log(3 && 4); //4
console.log(9 && 4); //4
console.log(true && true); //True
console.log(false && false); //False
console.log(false && true); //False
console.log(true && false); //False
// Here output is depend upon 3 things:
// 1: Both Condition should be true or equal to be unified.
// 2: The value which is after && operator answer will depend upon that in terms of number.
// 3: Returns true if both operands are true.

// 2: OR (`||`)
console.log(1 || 1); //1
console.log(3 || 4); //3
console.log(9 || 4); //9
console.log(true || true); //True
console.log(false || false); //False
console.log(false || true); //true
console.log(true || false); //true
// Here output is depend upon 2 things:
// 1: Returns true if at least one of the operands is true.
// 2: The value which is before || operator answer will depend upon that in terms of number. Means the very first condition.

// 3: NOT(`!`)
console.log(!false); //false
console.log(!true); //true

function someFunction() {
  console.log("Short Circuit");
}

// AND Short-Circuit(`&&`) : If the first operand is false, the second operand is not evaluated because the result will be false regardless.
let result = false && someFunction(); // someFunction() is not called
let result2 = true && someFunction(); // someFunction() called

let test = true;
let isTrue = function () {
  console.log("Test is True");
};
let isFalse = function () {
  console.log("Test is false");
};
test && isTrue(); //Test is True, Because initially test is True.
test || isTrue(); //Test is True, So in the or conditional it will not proceed further..

test = false;
if (!test) {
  //So, test is false, and we using !false => which means true. So If(true) and we know if basically check truthy value.So what ever we have in the truthy value we can print or console.
  isFalse();
  console.log("Echo Echo");
}

test = true;
if (!test) {
  //It refers to False, So will process to else statement.
  isFalse();
  console.log("Echo Echo 1");
} else {
  isTrue();
  console.log("Echo Echo 2");
}

if (test) {
  //So now it is true, then it will print if statement.
  isTrue();
  console.log("Echo echo");
} else {
  isFalse();
}

function theSameOldFoo(name) {
  name = name || "Bar";
  console.log("My best friend's name is " + name);
}
theSameOldFoo();
theSameOldFoo("Adarsh");

// OR Short-Circuit (`||`): If the first operand is true, the second operand is not evaluated because the result will be true regardless.
let result3 = true || someFunction(); // someFunction() is not called
let result4 = false || someFunction(); // someFunction() is called

// Conditions:
let num = 10;
if (num > 0) {
  console.log("Positive Integer");
} else if (num < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero");
}

// Ternary Operator (`? :`)
let age = 17.9;
let message = age >= 18 ? "Able to drive" : "Be 18 First";
console.log(message);

if (4 > 5 && 5 > 6) {
  console.log("Condition is Correct");
} else {
  console.log("Condition is false");
}
// Output: Condition is false, Because the first condition is false, will not proceed to next condition.
