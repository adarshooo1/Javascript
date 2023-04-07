const user = {
    firstName: "Adarsh",
    // address : {houseNumber: "12345" }
}

console.log(user?.firstName)
//Output:Adarsh


console.log(user.address)
//Output Undefined

//console.log(user.address.houseNumber)//Suppose we dont have the houseNumber and in the read world we don't know that the user have entered the number, there is a possibility that my be he entered the house number may be he not. So in this case this statement can make arror, Because at previous stage it will be undefined and when to try to search inside the undefined then it will through error.
console.log(user?.address?.houseNumber)// This will prevent to get error , Because in the real life it can be possible the data will be available and may not be, So the this question mark operator will check that is there any value of the Key is present or not then give the answer accordingly.
//Output: Undefiend
//Explaination:It will check that user is present then it will check and say YES, user is present then it will check that users address is present then it will say NO user address is not present.Then it will return undefined.