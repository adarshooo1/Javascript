//Boolean & comparision operator

// Booleans
// 1.Ture   & 2.False

let num1 = 3
let num2 = 4
console.log(num1 < num2) //Is num1 is smaller than num2. Hence True.
console.log(num1 <= num2)//It will give true because weather num1 is equal or not equal to num2 ,But num1 is smaller than num2.
console.log(num1 == num2)//It will give false, Because it is making comparision that is it equal to or not equal to the num2 or not.
console.log(num1 = num2)//It will return 4 ,the max value between them.



let num3 = 6
let num4 = 6
console.log(num3 < num4)//Both the value equl to each other, Hence doing comarision gives False because no one is greater or smaller than each other.
console.log(num3 >= num4)//It will give true because weather num1 is equal to num2 ,But num3 is not smaller or greater than num4.
console.log(num3 == num4)//It will give true because they are equal to one another.
console.log(num3 = num4)//Retun the max between them.



let num5 = "7"
let num6 = 7
console.log(num5 == num6)//Here double equal-to only check the value not the datatype.So retun true.
console.log(num5 === num6)//Here triple equal-to will check the datatype as well as value,So return false

let num7 = 10
let num8 = 10
let num9 = 12
let num10 = "10"
let num11 = "13"
console.log(num7 != num8)//This will return false. Because this operator name is [not equl to (!=)] which is false both the values are same and equal to each other. Instead of reference value.
console.log(num7 != num9)//This will return true. Because the values are different
console.log(num7 !== num8)//This will retun false, Because here values and datatype both are equal.
console.log(num7 != num10)//This will return false,Because here is checking the value not the Datatype.
console.log(num7 !== num10)//This will return true, Because here value and datatype both are checked
console.log(num7 !== num11)//Theis will retun true, Explanation just above.

