//Assignment 2: When we click any button the make that body color changed to a very random color:

const mianButton = document.querySelector(".container button");
const header = document.querySelector(".container h1");

// This will select and target the body element;
const body = document.body;

// Here we create a function which 
function randomColorGenerator(){
   const red =  Math.floor(Math.random() * 256)
   const green =  Math.floor(Math.random() * 256)
   const blue =  Math.floor(Math.random() * 256)
   const randomColor  = `rgb(${red} , ${green}, ${blue}) `
   return randomColor;
}

// Event listner Function whne we click the button
mianButton.addEventListener('click',()=>{
    const random = randomColorGenerator();
    body.style.background = random;
    header.textContent = random;
})