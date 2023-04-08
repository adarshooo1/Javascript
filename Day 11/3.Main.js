function createUser(firstName , lastName ,age, email ,address){
    // const user2 = {};//We can create a empty object like this.
    const user2 = Object.create(createUser.prototype)
    user2.firstName = firstName;
    user2.lastName = lastName;
    user2.email = email;
    user2.age = age;
    user2.address = address;
    //After Create __proto__ or [[Prototype]] we don't have need to call,Because maybe sometime can happen that we create a function in the userMethod and we forget to add in the user2,Then we will not be able to call the userMethod but when we pass the Object.create(userMethod) then the user2 still remain empty but user2 has the reference if the value is not present then it will find ihat inside the userMethod. So thats why we commented off the below syntax because Object.create(userMethod) making a chain between the user and userMethod.
    // user2.about = userMethod.about;
    // user2.is18 = userMethod.is18;
    return user2;
}
//We can do like this in the free space which is given by the function instead of creating new function outside.
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}

//We will not use this instead we will use prototype space.
// const userMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;//Return Boolean
//     }
// }

const user3 = createUser("Mahi" , "Singh" , 12 , "mahisingh@gmail.com", "noida , Delhi") 
console.log(user3)
console.log(user3.about())
console.log(user3.is18())