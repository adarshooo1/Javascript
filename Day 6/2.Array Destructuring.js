const myarray  = ["value1" ,"Value2"];
console.log(myarray)

//Way 1;
//We are storing variable like this in a variable with indexing;
let var1 = myarray[0];
let var2 = myarray[1];
console.log(var1 , var2)
//output: value1,Value2

//Way 2;
//We are storing the value just indexing the variable inside the array and giving the reference of the a array which has the item.
let [var3 , var4] = myarray;
//above we index the element like myarray[0] will store at var3 , myarray[1] will store at the  var2;
console.log(var3 , var4)
//output: value1,Value2

//To skip the value we can use:
const arr = ["one", "two", "three"]
let [var5 , , var6] = arr
console.log(var5, var6)//here insead of print one and two this will print (one , three) because we skip. with ,, like this.

//lets make a array of remaining array after destructuring:
const fruits = ["Apple", "Grape" , "Banana", "Orage", "Mango"]
let[var8,,var9 , ...myNewArr] = fruits
console.log(var8)//Apple
//Grape skipped.
console.log(var9)//Banana
console.log(myNewArr)//[ 'Orage', 'Mango' ]

//NOTE: if we made some more variable and suppose that array that we have has no value for that variable then the value inside the array will be undefined.
