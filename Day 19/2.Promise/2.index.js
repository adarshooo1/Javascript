// Function returning promise;

function RicePromise(){
    const bucket = ['coffee' , 'chips' , 'vegetable' , 'salt' , 'rice'];
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
            resolve({value:"fried Rice"})
        }
        else{
            reject("couldn't find")
        }
    })
}

RicePromise()
.then((myFriedRice)=>{
    console.log(`Lets eat :`, myFriedRice )
})
.catch((error)=>{
    console.log(error)
})