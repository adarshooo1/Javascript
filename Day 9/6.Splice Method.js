//Splice Method
    //start , delete , insert

const myArray = ['Item1' , 'Item2' , 'Item3' , 'Item4']

//Delete
myArray.splice(1, 1) //This means start from index 1 and delete only one item.
console.log(myArray) //output:[ 'Item1', 'Item3', 'Item4']

//Insert
myArray.splice(1, 0 , "Item2") //This means start from index 1 , delete none (0) ,and insert "Item2"
console.log(myArray)