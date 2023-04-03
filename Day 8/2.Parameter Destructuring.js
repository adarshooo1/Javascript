// Parameter Destructuring
const Person = {
    name: "Adarsh",
    age : 20,
    gender : "M"
}

//Way 1:
function printDetail(obj){
    console.log(obj.name , obj.age , obj.gender)
}

printDetail(Person)

//Way 2:
function printDetail2({name , age , gender}){
    console.log(name , age , gender)
}
printDetail2(Person)
