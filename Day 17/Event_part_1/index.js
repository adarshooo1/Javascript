//Click:

const btn = document.querySelector(".btn-headline");


// Add Event Listner:
btn.addEventListener('click' ,() => {
    console.log("YOu clicked me")
});


const btn2 = document.querySelector(".btn-headline");
// This Keyword:

btn2.addEventListener('click', function(){
    console.log("Yoy Hit me!");
    console.log("Value of this");
    console.log(this);//In this case: the value of this is the button itself;<button class="btn btn-headline">Learn More</button> ; When we call a function inside or ouside the addEventListner; In case of arrow function it will return the window object;
})

const btn3 = document.querySelector(".btn-headline");
// This Keyword:

btn3.addEventListener('click', ()=>{
    console.log("Yoy Hit me!");
    console.log("Value of this");
    console.log(this);//In case of arrow function it will return the window object in the console;
})

