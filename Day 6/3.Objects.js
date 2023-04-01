//Objcts
//objects are reference type.
//Object are good but not sufficient
//for real world data
//onject store key value pairs
//objects don't have index

//how to create objects
const person = {name:"Harshit", age:24}
console.log(`This is type of ${typeof(person)} and the name is ${person.name} and age is ${person.age}`)

//How to access data from objects.
console.log(person["name"])//We have to pass name in a string because when we create a object then it is parse as a string so , it can only access by string itself else it will give a undefined.
console.log(person["age"])

//How to add key value pair.
//Way 1:
person.gender = "male"
console.log(person.gender)

//Way2:
person["work"] = "Engineer"
console.log(person["work"])

//How to iterate object
//1.for in loop  

for(let key in person){
    console.log(key)
}
 
//2.  object.keys
for(let Key in person){
    console.log(`${Key} : ${person[Key]}`)
}


//print key value pairs of objects.
console.log(Object.keys(person))

//Computed Properties:
const Key1 = "objkey1";
const Key2 = "objkey2";

const value1 = "myvalue1"
const value2 = "myvalue2"

const obj = {
    [Key1] : value1,
    [Key2] : value2
}

console.log(obj)


const obj2  = {}
    obj2[Key1] = value1,
    obj2[Key2] = value2

    console.log(obj2)


//Spread Operator in Objects

const new1 = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3"
}
const new2 = {
    key4 : "value4",
    key5 : "value5",
    key6 : "value6",
    key7 : "value7"
}

const newObj = {...new1,...new2,key100:"value100"}
console.log(newObj)

/////////////////////////////////////////////////////////

const noobie1 = [..."123456789"]
console.log(noobie1)
//[
//     '1', '2', '3',
//     '4', '5', '6',
//     '7', '8', '9'
//   ]
const noobie2  = [..."Adarsh"]
console.log(noobie2)
//[ 'A', 'd', 'a', 'r', 's', 'h' ]