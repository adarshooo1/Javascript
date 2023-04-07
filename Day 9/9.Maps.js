//Maps: Maps is an iterable store data in a ordered fashion store key value pair (like object) duplicated keys are not allowed like objects

//Difference Between Maps and Objects.
//Object can only have string or symbol as key.
//In Maps you can use anything as key like array, number, string.


//Example 1:
const person = new Map()

//Add key pair with value:
person.set('First_Name' , "Adarsh")
person.set('Salary' , 12000)
person.set([1,2,3] ,"onetwothree")
console.log(person)

// NOTE:Maps you can use anything as key like array, number, string.
// Example 2:

person.set(1 , "Hundred")

//How to access value key pair:
console.log(person.get(1))
console.log(person.get('Salary'))

//How to access value key pair:
console.log(person.keys());

//How to know the Key Type:
for(let KeyType of person.keys()){
    console.log(KeyType , typeof KeyType)
//Output:
// First_Name string
// Salary string
// 1 number
//[ 1, 2, 3 ] object
}

//Note: In Maps Object we can use for-of loop like other except other objects needs for-in loop to iterate over

// To Print Key value pair in the Map Object.
for(let keyType of person){
    console.log(keyType)
//Output:
// [ 'First_Name', 'Adarsh' ]
// [ 'Salary', 12000 ]
// [ [ 1, 2, 3 ], 'onetwothree' ]
// [ 1, 'Hundred' ]    
    //We are getting key value pair.    
}

//To Check Map Object Type:
for(let keyType of person){
    console.log(Array.isArray(keyType))
//Output: True, Because Inside the Map Object Person, We have Key Value Pair in form of Array.
}

//To Check is the person is the type of array or what.
console.log(Array.isArray(person))
//Output: False , Because it is a type of Object thats why it is returning false.
console.log(typeof person)
//Output:object


//Destructuring:
for(let [key , value] of person){
    console.log(key , value)
}

//Example 3:
//Like this we can store array inside the Map.
const person2 = new Map([["Name", "Adash"],["Age", 21]])

//Example 4:
const object1 = {
    id : 1,
    name : "Adarsh"
}
console.log(object1.id)

const ExtraInfo = new Map();
ExtraInfo.set(object1 ,{age: 21, gender:"Male"})
console.log(object1.id , object1.name) // 1 Adarsh
console.log(ExtraInfo.get(object1).gender , ExtraInfo.get(object1).age) //Male 21