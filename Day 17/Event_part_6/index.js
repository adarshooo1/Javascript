const mainButton = document.querySelector(".btn-headline");


// When we over the button in browser console will show mouseover message;
mainButton.addEventListener("mouseover", ()=>{
     console.log("mouseover event occur")
})

// When we leave the button in browser console will show mouseleave message;
mainButton.addEventListener("mouseleave", ()=>{
     console.log("mouseleave event occur")
})  