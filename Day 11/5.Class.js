//This is class, In javaScript calsses are fake, As well as we do not have to return or anything it will do it by own.
class CreateUser{
    constructor(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la laa laaa laaa la"
    }
    //Cheking Purpose:
    func(a){
        console.log(a)
    }
}

const user1 = new CreateUser("Madan","Mohan","madanmohan@gmail.com",21,"Noida")

// This will print Keys of the Object.
for(let key in user1){
    console.log(key)
}
//Output:firstName,lastName,email,age,address

console.log(Object.getOwnPropertyNames(user1.__proto__)); //Output:[ 'constructor', 'about', 'is18', 'sing' ] This is also telling constructor because inside the constructor we also have some values.

// This will print Values Stored in the Keys.
for(let key in user1){
    console.log(user1[key]);
}
//Output:Madan, Mohan, madanmohan@gmail.com, 21, Noida;

user1.func(12)//This will return what we call