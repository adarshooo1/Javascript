//Iterables:

// Iterabels are those in which we can iterate:

//Iteration in the String:
//This is also called Array like object which has the length property and we can iterate over them and can index
const str = "Adarsh"
for(let char of str){
    console.log(char)
}

//Iteration in the Array:
const arr = [1,2,3,4,5,6,7,8,9]
console.log(arr)

for(let num of arr){
    console.log(num)
}

//Iteration in the obj:
const obj = {name : "Adarsh", age: 21, class: "Graduation Final Year" , Married : "NO" }
for(let key of obj){
    console.log(key)
}//We cannot iterate ove the objects.