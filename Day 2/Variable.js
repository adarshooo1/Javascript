// Scoping in variable.

// Var is used before to declare variable and valriable can be changed from anywhere in the program because it is a globally scoped.
//Where as let and const is the scoped only at the block level.
// Example
var a = 12
console.log(a)
{
var a = 19
  console.log(a)
}
a = 21
console.log(a)

//As we can see that var inside the block is changed and redeclare as well as globally thats why we use very less var.

let b = 12
{
let b = 30
  console.log(b)
  //Let can be re-declare inside the block but is (b) is change like this:
  // b = 100;
  // then it will change the outer (b) as well.
}
console.log(b)
//Let cannot be re-declare outside the block and through error.
// let b = 21;

console.log(b)


//constant
const c = "Adarsh"
{
  const c = "Baby"
  console.log(c)
  //Inside the block it will be chnaged but when we re assign the value then it will give error.
  //Example:
  // c = "study this will through inside the block as well
}
 console.log(c)


//To know the type of the object.
let age = 12
console.log(typeof age)//Number

//To convert the numeber into the string
let age2 = 12 + "";
console.log(typeof age2)//String

//To convert the string into the string.
let age3 = +"23"
console.log(typeof age3)

//As we can see the +before the number inside the double quote easilt convert it into the number.
console.log(age3 + age)//Here we are performef the addition operations with the age3 and age.

let age4 = 18;
age4 = String(age4)
console.log(typeof age4)//Easiliy convert this into the string.

let age5 = "100"//typeof String.
age5 = Number(age5);
console.log(typeof age5)

let defined;
console.log(typeof defined)//Undefined, Let is not necessary to initialize after declaration.
defined = "America"
console.log(typeof defined)

// const print;
// console.log(typeof print)//Here constant print is the type of final which means it is necessary to intialze the value after declare the constant.


//null
let pro = null;
console.log(typeof pro)//Type of object (which is a bug, because many has use this in a large database so now if null is changed then there is a big need to change this null keyword so java leave this null as a object instead of return type of null).Later we can declare Number, String, boolean.
const pro2 = null;
console.log(typeof pro2)//Also can declare a const a null. which is actually a typeof object instead of null which is a big.

//BigInt
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991

let Num = BigInt(99898771992547409914342341223) 
console.log(Num)
console.log(typeof Num)//BigInt

let Num2 = BigInt(12)
console.log(Num2)
console.log(typeof Num2)//BigInt

let Num3 = 3423n
console.log(Num3)
console.log(typeof Num3)//BigInt
// As the capacity to store the value inside a variable is this max_safe_integer size but in future size get grows and this get smaller then we can use BigInt

let num4 = 12

// (Not working because bigint can be added with bigint but Number cannot be added with the bigint.)
// // let add = num4 + Num3
// // console.log(add) 

