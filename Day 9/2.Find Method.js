const myArray = ["Hello", "Cat", "Dog", "Lion"]

//Length Method:
function isLength3(string){
    return string.length === 3;
}

//Check at the third index of the array is the 3 character word or not.
const isCheck = isLength3(myArray[2]);
console.log(isCheck)

//Find Method:
//This will find the first word that has the three character in it.

//Way 1:
const ans = myArray.find(isLength3);
console.log(ans)

//Way 2:Arrow Function.
const ans2 = myArray.find((string) => string.length === 3)
console.log(ans2)

//Real world Example:
user = [
    {userid : 1, userName: "Adarsh"},
    {userid : 2, userName: "Deepanshu"},
    {userid : 3, userName: "Mayank"},
    {userid : 4, userName: "Payal"},
    {userid : 5, userName: "Kumkum"},
    {userid : 6, userName: "Ransome"},
]

const findUser = user.find((user)=> user.userid === 3);
console.log(find)