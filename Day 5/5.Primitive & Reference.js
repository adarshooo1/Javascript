//Primitive
let a = 6;
let b = a;
console.log(a + "---" + b)
a++;
//After the increment in the primitive datatype if there is any other datatype which is also pointing to the same object but changes with the other primitive cannot effect the other primitive datatype object.
console.log(a + "---" + b)


//Referene type.
let arr1 = ["Item1", "Item2"]
let arr2 = arr1
console.log(arr1 + "---" + arr2)
//After pushing in the reference type object, the original object and any other object which is pointing to the original object then changes will be happen with other element as well.
arr1.push("Item3" , "Item4")
console.log(arr1 + "---" + arr2)

//To check both are reference to the same array or not.
console.log(array1 === array2) //#output:- True, Which means they are pointing to the same array.
