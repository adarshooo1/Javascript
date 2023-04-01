let array1 =["Apple", "Mango", "Maple", "tea"];

//This will print the length of the array.
console.log(array1.length)

//With the help of for loop we print all the item of the array.
for(let i = 0; i < array1.length ; i++){
    console.log(array1[i])
}
//To print in the uppercase
for(let j = 0; j < array1.length ; j++){
    console.log(array1[j].toUpperCase());
}

//To add the array1 item in the array2:
let array2 = [];
for(let k = 0; k < array1.length ; k++){
    //All the items will be pushed to the array2.
    array2.push(array1[k].toUpperCase());
}
console.log(array2)


//make the array with the const.
const array3 = ["Apple", "Strawberry"]
console.log(array3)
array3.push("Pine Apple", "Grapes")//Item inserted
console.log(array3)
let x = array3.pop()//Item removed and stored
console.log(x)//print the removed item.
console.log(array3)
//We can push and pop in the array form the const datatype. but cannot re-assign the values like this :- array3 = ["Mine", "Your"] --> give arror


////////////////////////////////////////////////////////////////
// while-loop

const array4 = ["one", "two", "Three", "Four" , "Five" , "Six"];

let m = 0;
while(m < array4.length){
    console.log(array4[m])
    m++;
}


//To store in a new array with the help of while loop.
const array5 = []
let n = 0;
while(n < array4.length){
    array5.push(array4[n].toUpperCase())
    n++;
}
console.log(array5)

//////////////////////////////////////////////////////////////
//For-each loop
const colors = ["Red","Green", "Yellow", "Black","Purple"]

for(let color of colors){
    console.log(color)
}

//To copy one array item in the other array with the help of for each loop.
const fruits = ["Apple", "Grape" , "Banana", "Orage", "Mango"]
const fruits2 = [];

for(let index of fruits){
    fruits2.push(index.toUpperCase());
}
console.log(fruits2)

