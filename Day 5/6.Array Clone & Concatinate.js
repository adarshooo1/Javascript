//Cloning:
    //As we know that it is a reference type any change will make change in the other array as well.So we can clone like this ,So Both get stored seperated.
let array1 = ["item1","item2","itme3"]
let array2 = array1.slice(0)//With the help of slice method it will slice the array from index 0 to till its length.
console.log(array1)//#output:- [ 'item1', 'item2', 'itme3' ]
console.log(array2)//#output:- [ 'item1', 'item2', 'itme3' ]

//To add additional item in the array which which copy the item of one array and also add some other element inside the array as well.
newArr1 = array1.splice(0).concat(["itemX" , "itemZ"])
console.log(newArr1)

array1.push("item4")

//Here the original element is also changed but it doesn't effect the cloned array.
console.log(array1)//#outout:- [ 'item1', 'item2', 'itme3', 'item4' ]
console.log(array2)//#output:- [ 'item1', 'item2', 'itme3' ]

//To check that is the array1 is equal to array2 if they are not pointing to the same reference.
console.log(array1 === array2) //#output:- False, Which means they are different.


//Concatination:
    //Here when we concatinate then it will clone and will we seperated and different reference values. 
array3 = ["Max","Tax","Wax"]
array4 = [].concat(array3) 
console.log(array3)
console.log(array4)
array3.push("Hax")

console.log(array3)
console.log(array4)

//To add additional item in the array which which copy the item of one array and also add some other element inside the array as well.
newArr2 = [].concat(array3,["itemA", "ItemB"])
console.log(newArr2)

//New way :- spread operator

array5 = ["Max","Tax","Wax"]
array6 = [...array5];// Like this way we can also concatinate the array which will not reference to the other array.
array5.push("Map")
console.log(array5)
console.log(array6)

//To add additional item in the array which which copy the item of one array and also add some other element inside the array as well.
newArr3 = [...array5,"ItemC","ItemD"]
console.log(newArr3)


/////////////////////////////////////////////////////////
//To make a new array with the help of 2 different array short and simpler way.
aArray = ["Batman", "Superman", "Spiderman"]
bArray = [1 , 0 , undefined , "null" , null, false, "Aman", 2382.3," ",7]
newArray = [...aArray, ...bArray]
console.log(newArray)//here we get a new type of array which has the property of both of the array.
