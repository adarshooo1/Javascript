//Object inside array.
//Very Useful in real world applicaations.

const user = [
    {userId : 1 , firstName : "Adarsh",Gender:"Male1"},
    {userId : 2 , firstName : "Kumkum",Gender:"Female1"},
    {userId : 3 , firstName : "Sopnil",Gender:"Male2"},
    {userId : 4 , firstName : "Abhishek",Gender:"Male3"}
]
console.log(user)

//Iterate over the onject inside the array.
for(let use of user){
    console.log(use)
}

//Iterate over the object userId.
for(let use of user){
    console.log(use.userId)
}
//Iterate over the object FirstName.
for(let use of user){
    console.log(use.firstName)
}
//Iterate over the object gender.
for(let use of user){
    console.log(use.Gender)
}
const [user1 , user2 , user3] = user;
console.log(user1 , user2 , user3)


//Nested Destructuring
const [{firstName: userXX ,Gender: userYY}, , {firstName: userAA , Gender: userBB}] = user

console.log(userAA)
console.log(userBB)
console.log(userXX)
console.log(userYY)

