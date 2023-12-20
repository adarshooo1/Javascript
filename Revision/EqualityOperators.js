// Single equals to: (=)
let a = 2;
let arr = [1, 2, 3];
let obj = {
  1: "one",
  firstName: "adarsh",
  lastName: "Singh",
  grades: 99.3,
  married: false,
  haveChild: "no",
  subjects: ["Hindi", "English", "Maths", "Science"],
  assets: {
    mobile: "RealMe X 7 Pro",
    bike: "Splendor",
    money: 200000,
    ownHouse: true,
  },
};
// So basically single (=) is refers to assignment operator,

// +================================================================================+
// Equality Operator

console.log(1 == true); // 1 represents to True.
console.log(0 == false); // 0 represents to False.

console.log("3" == 3); //Loosely Equality

let x = 12;
let b = 12;
console.log(a === b); //False; Because it is checking by value and reference.
console.log(12 === +"12"); //True, Because of coercion. Its explicit typecasting
console.log(12 === "12"); //False;

null == undefined; // true (implicit coercion)
null === undefined; // false (strict equality, no coercion)

// -----------------------------------------------------------------
// Coercion;

var result = "5" + 3; // "53" (string concatenation)
var result = 5 - "3"; // 2 (string '3' is coerced to a number)
var result = 5 + "3"; // 8 (string '3' is coerced to a number)
var result = true + 5; // 6 (true is coerced to 1)

// Explicit Coercion:
var str = "123";
var num = Number(str); // 123 (explicit conversion)

var num = 456;
var str = String(num); // "456" (explicit conversion)
