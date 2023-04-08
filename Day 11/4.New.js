// NEW Keyword
//1.new keyword create empty object = {};
//2.It return the empty object.
//3.It create the link between the prototype space without calling or defining the function path.

function CreateUser(firstName , age){
    this.firstName = firstName;
    this.age = age;
}

CreateUser.prototype.about = function(){
    console.log(this.firstName , this.age)
}

const user = new CreateUser("Mohato" , 21);
console.log(user)
user.about();//It works withouth linking Ex: const user = Object.create(createUser.prototype). Without stablish linking it performs well. 


//Example 2:
function CreateUser(firstName , lastName ,age, email ,address){
    // const user2 = {};//We can create a empty object like this.
    // const user2 = Object.create(createUser.prototype) //Now when we comment it of still we can use this because we are using a new keyword which will automatically establish linking between the function prototype with the object
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    //After Create __proto__ or [[Prototype]] we don't have need to call,Because maybe sometime can happen that we create a function in the userMethod and we forget to add in the user2,Then we will not be able to call the userMethod but when we pass the Object.create(userMethod) then the user2 still remain empty but user2 has the reference if the value is not present then it will find ihat inside the userMethod. So thats why we commented off the below syntax because Object.create(userMethod) making a chain between the user and userMethod.
    // user2.about = userMethod.about;
    // user2.is18 = userMethod.is18;
}
//We can do like this in the free space which is given by the function instead of creating new function outside.
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}

const user3 = new CreateUser("Mahi" , "Singh" , 12 , "mahisingh@gmail.com", "noida , Delhi") 
console.log(user3)
console.log(user3.about())
console.log(user3.is18())

//So like this we can simply do this with the new keyword and this keyword.