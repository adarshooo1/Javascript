//Intro To Array: Arrays is a Data Structure which is a type of reference and ordered collection of items. In which we can store the value and there is a specific index of the each number.

//How to create a Array.
//Exmaple 1: Array of Numbers.
let nums = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,12 ,19];
console.log(nums)//To print the all items in the array.
console.log(nums[5])

//Exmaple 2:Array of String
let fruit = ["Apple","Mango","Banana","Chicoo","Grapes"]
console.log(fruit)
console.log(fruit[3])

//Exmaple 3: Mixed item in the Array.
let Mixed = [1, 2, 3,"apple" ,null ,0 , undefined , false , "" , 123.32]
console.log(Mixed)

//Example 4: Change Element inside the array with the help of indexing;
let arr = ["Apple" , "Cat" , "Snake", "Rat" , "Wasp"]
console.log(arr)//[ 'Apple', 'Cat', 'Snake', 'Rat', 'Wasp' ]
console.log(arr[3])//Rat
    //We can change the element like this;
arr[3] = "Crow"
console.log(arr)//[ 'Apple', 'Cat', 'Snake', 'Crow', 'Wasp' ]
console.log(typeof(arr))//Object.
console.log(Array.isArray(arr))//array.isArray will tell us that what object we created is an array or not.

let obj = {};//We have to check that is this a array or what. //Default it is a object literal.
console.log(Array.isArray(obj))//False

//All the reference type are called objcts.


////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array push()  and pop()

let man = ["Ram", "Shayam", "Adarsh"]

//Suppose we want to add a element inside an array in the very last.
man.push("Mohan")
console.log(man)

//Suppose we want to remove a element from the last of the array.
let x = man.pop()
console.log(x)//This pop method is removing and returning the element.

console.log(man)

//So with this we can know this that array is mutable in nature.

//Whereas primitive cannot be chaged that are immutable in nature.

//unshift
man.unshift("Sundar")//This will add object inside at the very first index in the element.
console.log(man)

//shift
let y = man.shift()//This will remove the element from the very first index and return it.
console.log(y)
console.log(man)