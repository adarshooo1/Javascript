const user1 = {
    firstName : "Adarsh",
    lastName : "Singh",
    email : "adarshsinghak001@gmail.com",
    age : 22,
    address : "Salarpur, Noida, 201304",
    about(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18(){
        return this.age >= 18;
    }
}

const userAbt1 = user1.about();
console.log(userAbt1) 
const userAbt2 = user1.is18();
console.log(userAbt2) 

//Below we can see that if we have to do for the large range of the data then the task is gonna to be so Hectic.
//So, We can create a function which takes all the values in the arguement and then we can call it. As the data and range of data increased.



//Function (that function create object)
//2.add key value pair
//3.And will return object. 

function createUser(firstName , lastName ,age, email ,address){
    // const user2 = {};//We can create a empty object like this.
    const user2 = Object.create(userMethod) //This is the [[protoype]] method which is doing liking between userMethod and createUser
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

const userMethod = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}


const user3 = createUser("Mahi" , "Singh" , 12 , "mahisingh@gmail.com", "noida , Delhi") 
console.log(user3)
console.log(user3.about());
console.log(user3.is18());

// In the Official EcmaScript This __proto__ is written as this [[Prototype]]
