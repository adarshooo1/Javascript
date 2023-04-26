// Asysncronous Callback;

// Callback  &  Callback Hell, Pyramid of Doom;

const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");

// Way 1:

setTimeout(()=>{
    head1.textContent = "Hello"
    head1.style.color = "red"
},1000);

setTimeout(()=>{
    head2.textContent = "There"
    head2.style.color = "Blue"
},2000);

    //like this do it for all next Element; 

// Way2

setTimeout(()=>{
    head1.textContent = "Hello";
    head1.style.color = "red";
    setTimeout(()=>{
        head2.textContent = "there";
        head2.style.color = "blue";
        setTimeout(()=>{
            head3.textContent = "How";
            head3.style.color = "purple";
            setTimeout(()=>{
                head4.textContent = "are";
                head4.style.color = "pink";
                setTimeout(()=>{
                    head5.textContent = "you.";
                    head5.style.color = "violet";
                    setTimeout(()=>{
                        head6.textContent = "Hope";
                        head6.style.color = "green";
                        setTimeout(()=>{
                            head7.textContent = "Diong Well";
                            head7.style.color = "orange";
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);

//So Here is so many nested callbacks; As known as Callback Hell;

// Example 2: Callback hell 

const h1 = document.querySelector(".heading1")
const h2 = document.querySelector(".heading2")
const h3 = document.querySelector(".heading3")
const h4 = document.querySelector(".heading4")
const h5 = document.querySelector(".heading5")
const h6 = document.querySelector(".heading6")
const h7 = document.querySelector(".heading7")

function changeTextAndColor(element , text , color , time , onSucced , onFalied){
    setTimeout(()=>{
        if(element){
                element.textContent = text;
                element.style.color = color;
                if(onSucced){
                    onSucced();
                }
        }else{
            if(onFalied){
                onFalied();
            }
        }
    },time)
};

//This is also knows as callback hell or Pyramid of Doom
changeTextAndColor(h1 , "hello" , "red" , 1000 , ()=>{
    changeTextAndColor(h2 , "cello" , "blue" , 1000 , ()=>{
        changeTextAndColor(h3 , "gello" , "violet" , 1000 , ()=>{
            changeTextAndColor(h4 , "mello" , "pink" , 1000 , ()=>{
                changeTextAndColor(h5 , "tello" , "orange" , 1000 , ()=>{
                    changeTextAndColor(h6 , "oello" , "brown" , 1000 , ()=>{
                        changeTextAndColor(h7 , "kello" , "yellow" , 1000 , ()=>{

                        }, ()=>{console.log("Element not Found")});
                    }, ()=>{console.log("Element not Found")});
                }, ()=>{console.log("Element not Found")});
            }, ()=>{console.log("Element not Found")});
        }, ()=>{console.log("Element not Found")});
    }, ()=>{console.log("Element not Found")});
}, ()=>{console.log("Element not Found")});



