//Break Keyword
for(let i = 1 ; i <= 11 ; i++){
    if(i === 10){
        break; //After using break we just proceed to the below line,,, and now it will not run the condition above.
    }
    console.log(i)
}
console.log("Hello There")



//Continue Keyword.
for(let i = 1 ; i <= 11 ; i++){
    if(i === 10){
        continue;//After using Continue the statement will go just inside the loop. it will skip this step of this continue statement only. and 
    }
    console.log(i)
}
console.log("Hello There")
