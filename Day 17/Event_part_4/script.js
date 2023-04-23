//Assignment 1: When we click any button the make that button color changed
const bton = document.querySelectorAll(".my-button button");

bton.forEach(button => {
    button.addEventListener('click' , (e)=>{
        e.currentTarget.style.background = "#000";
        e.currentTarget.style.color = "#fff";
    })
});