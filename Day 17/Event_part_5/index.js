const body = document.body;

// When we press and key then in the browser console we will able to see those keys we input;
body.addEventListener("keypress" , (e)=>{
     console.log(e.key)
})