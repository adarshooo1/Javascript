//Cloning:
    //As we know that it is a reference type any change will make change in the other array as well.So we can clone like this ,So Both get stored seperated.
let array1 = ["item1","item2","itme3"]
let array2 = array1.slice(0)//With the help of slice method it will slice the array from index 0 to till its length.
console.log(array1)//#output:- [ 'item1', 'item2', 'itme3' ]
console.log(array2)//#output:- [ 'item1', 'item2', 'itme3' ]

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

//New way :- spread operator

array5 = ["Max","Tax","Wax"]
array6 = [...array5];
array5.push("Map")
console.log(array5)
console.log(array6)

