//Methods: Function inside object.

//Example 1:
const person = {
    firstName : "malware",
    age : 21,
    about :
     function(){
        console.log(`Person name is ${this.firstName} and his age is ${this.age}`)
    }
}

console.log(person.firstName)

person.about()

//Example 2:
function personInfo(){
    console.log(`Person name is ${this.firstName} and his age is ${this.age}`)
}
const person2 = {
    firstName : "Magadheera",
    age : 100,
    about : personInfo
}
person2.about();
//ouput:Person name is Magadheera and his age is 100

//Exaple 3.
function hello(){
    console.log("Hello World!")
}

hello();
hello.call();


