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