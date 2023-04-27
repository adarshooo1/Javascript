const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeColorAndText(element , text , color , time){
    return new Promise((resolve , reject)=>{
       setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            resolve();
        }
        else{
            reject("Falied");
        }
       },time)
    })
}

// Here callback hell problem is solved by the promises;

changeColorAndText(heading1 ,"Hello" , "red" , 1000)
.then(()=>changeColorAndText(heading2 , "how" , "purple" , 1000))
.then(()=>changeColorAndText(heading3 , "are" , "green" , 1000))
.then(()=>changeColorAndText(heading4 , "you", "blue" , 1000))
.then(()=>changeColorAndText(heading5 , "Hope" , "cyan" , 1000))
.then(()=>changeColorAndText(heading6 , "Doing" , "gold" , 1000))
.then(()=>changeColorAndText(heading7 , "Well" , "pink" , 1000))
.catch((error)=>{
    alert(error);
})