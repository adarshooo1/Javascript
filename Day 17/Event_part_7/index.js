// Event Bubbling or Propagation;

//This is Event Bubbling: When we have 4 box suppose , Where Body is the most outer box, Grand Parent in the just inner box of body, parent is the just inner box of Grand Parent , and Child is the most inner box of body;
    // So when we click on the body the is will only call the body but when we click on the Grand parent then Both -> Body and Grand Parent Box will be clicked , and when we click on the child then all the box will be called ->body , grand parent , parent and child all will be called Event bubbling
document.body.addEventListener("click" , ()=>{
        console.log("Bubbling body")
    });
    
grandparent.addEventListener("click" , ()=>{
        console.log("Bubbling Grand Parent")
    });
    
parent.addEventListener("click" , ()=>{
        console.log("Bubbling Parent")
    })
    
child.addEventListener("click" , ()=>{
        console.log("Bubbling Child")
    })
    
// Here the flow of calling is Child -> Parent -> Grand Parent -> Body;
// In simple words :In to Out;
