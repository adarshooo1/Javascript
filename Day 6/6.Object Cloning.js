//We can clone Object:

const obj = {
    key1 : "Value1",
    key2 : "Value2"
}

// Way 1
const clonedObj = {...obj};
clonedObj.Key3 = "Value3"
console.log(obj)
console.log(clonedObj)

//Way 2
const clonedObj2 = Object.assign({},obj);
obj.newKey3 = "newValue3"
console.log(obj)
console.log(clonedObj2)


//As we know that object is type reference any change to one object is reflected to the other objetc as well, Thats why we do clone like this so we can create 2 different object without making any changes to the other Object.