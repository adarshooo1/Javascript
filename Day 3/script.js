//String Indedxing
let firstName = "Adarsh";
// A D A R S H
// 0 1 2 3 4 5

console.log(firstName[3])//Here we passing a index as we know that at this place this value will be there.
console.log(firstName.length)//This will print the length of the string.
console.log(firstName[firstName.length - 1])//This will help in to get the element at the last index.


let a = "    Adarsh    ";
console.log(a.length)//Here the length is 14
a = a.trim();//Like this we can remove the wide space in the string but still the string is not changed so we have do update the value a = a.trim else we can define a new variable like: let b = a.trim()
console.log(a)//Here we can see that the space in the string is not existing.
console.log(a.length)//As well the length is 6.


let c = "adarsh"
c = c.toUpperCase()
console.log(c)//Adarsh
c = c.toLowerCase()
console.log(c)//adarsh


let d = "Kumkum"
//K U M K U M
//0 1 2 3 4 5
console.log(d.slice(0,3))//KUM --> Because it will print 1 less.
console.log(d.slice(0 , c.length))//Kumkum
console.log(d.slice(0,d.length -1))//kumku

