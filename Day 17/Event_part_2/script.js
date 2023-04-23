// For one Button using id:
const firstButton = document.querySelector("#one");//When we click button one only:

firstButton.addEventListener('click' , ()=>{
    console.log("Hello You click Button 1")
})

//For all Button:

const allBtn = document.querySelectorAll("button");

// Using simple loop:
for(let i = 0; i < allBtn.length; i++){
    allBtn[i].addEventListener('click' , function(){
        console.log(allBtn[i].textContent)
    })
}

// Using for of loop.
for(let btn of allBtn){
    btn.addEventListener('click' , function(){
        console.log(btn.textContent)
    })
}

// Using for each loop.
allBtn.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(`You clicked ${button.textContent}`);
  });
});

//We can use => this, text contnet, innerHtml all of these to print the Button Inner Html or what the value button have;
//If we want to print the id of the button which they are associated with then we can use console.log(button.id ,or/ button[i].id ,or/ `${button.id}`) 