//Call
const user1 = {
    firstName :"Adarsh",
    age : 21,
    about : function(hobby , Singer){
        console.log(this.firstName , this.age)
    }
}
user1.about()//Adarsh 21

//How to borrow other function method without having that function.
const user2 = {
    firstName :"Beigle",
    age : 30 
}
//User1 about method which is called for the user 2.
user1.about.call(user2) //Beigle 30

//Apply
function about(hobby , Singer){
    console.log(this.firstName , this.age , hobby , Singer)
}
about.apply(user1 , ["VolleyBall", "Arjit Singh"]);

//Bind
const func = about.bind(user2 , "Cricket" , "Shankar") //This will return the function.
func() 


//Mistae which we don't have to do:
const user3 = {
    firstName :"William",
    age : 25,
    about : function(hobby , Singer){
        console.log(this.firstName , this.age)
    }
}
//If we store the function in the variable then :

//Wrong Way:
let val = user3.about;
val() //undefined undefined, Because when we create a function then we have to call it at the time if we store the value then it will not the way that we make it for that purpose.

//Correct Way:
//Here Bind is returning the function that why we are able to do it.
let val2 = user3.about.bind(user3)
val2();

/////////////////////////////////////////////////////////////////
const user4 = {
    firstName :"Adarsh",
    age : 21,
    about(){
        console.log(this.firstName , this.age)
    }
}

user4.about()


