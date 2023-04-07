//Sets (It is iterable) which store data. Sets also have its own methods, No index-based access, order is not guranteed , unique items only (no duplicate allowed).


//Array to store 3 different number.
const array = [1, 2, 3]

//Sets to store 3 Arrays.
const aSet = new Set([1, 2, 3, 4])
console.log(aSet)

//We can iterate over the sets
for(let val of aSet){
    console.log(val)
}

//We tried to store one of the set value via indexing, But Indexing is not possible.
let nums = aSet[2];
console.log(nums) //undefined

//How to add number in the sets.
aSet.add(5)//This will add 5;
aSet.add(5)//This is already added thats why it will not be added further.
aSet.add(6)//This will add 6;
aSet.add(7,8,9)//This will add only 7;
console.log(aSet)//output:Set(7) { 1, 2, 3, 4, 5, 6, 7 }
aSet.add("Mom")
console.log(aSet)//output:Set(8) { 1, 2, 3, 4, 5, 6, 7, 'Mom'}
aSet.add([1 , 'a' , "Str" , false])
aSet.add([1 , 'a' , "Str" , false])//We can store 2 different array with same value. 
console.log(aSet)//output:Set(9) { 1, 2, 3, 4, 5, 6, 7, 'Mom', [ 1, 'a', 'Str', false ,[ 1, 'a', 'Str', false ] }


//Example 2:
const aArray =  [1,1,2,3,4,4,7,8,5,6,7,8,9];
//We Create a new Array and we passed it inside a Set.
const bSet = new Set(aArray);
console.log(bSet)//Output:Set(9) { 1, 2, 3, 4, 7, 8, 5, 6, 9 }
console.log(bSet.length)//Output:undefined

//So how to get the length of the Set.
let count = 0;
for(let iterate of bSet){
    count += 1;
    console.log(iterate)
}
console.log(count)


//Delete
bSet.delete() //When we do not passing anything in the parameter then it will do not delete anything and print the set as it was previous.
console.log(bSet) //Set(8) {1, 2, 3, 4, 7, 8, 5, 6, 9 }

bSet.delete(4) //Here we pass 4 inside the parameter then it will s.earch 4 and make it remove from that set
console.log(bSet) //Set(7) {1, 2, 3, 7, 8, 5, 6, 9 } , 4 removed.