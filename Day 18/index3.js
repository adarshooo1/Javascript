//setIntervals:

// console.log("Script Start");

// setInterval(()=>{
//     let num = 0
//     for(let i = 0 ; i < 10000000000 ; i++){
//         num = i;
//     }
//     console.log(num)
//     console.log("Python")

//     console.log(Math.floor(Math.random()* 100));//this will give random number till 1 to 100;
// },1000) //setInterval will call the function again and again after the wait if 1 sec time;

// console.log("Script End")

// Output:
// Script Start
// Script End
// 9999999999
// Python
// 40 #Randomm Number


// #one Sec wait;
// 9999999999
// Python
// 25 #Randomm Number

// #one Sec wait;

// 9999999999
// Python
// 56 #Randomm Number

// #one Sec wait;
// ... ... ... ... and so on;


//////////////////////////////////////////////////////////////////////////////////////
// Index4.html and style4.css part below:

const body = document.body;

// Selection Button;
const stopbtn = document.querySelector("button");


const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    //This will gather all the grb properties init and setInterval will randomly change the number after 500 mili-second;
    const rgb = `rgb(${red},${green},${blue})`

    // Giving background equivalent to the rgb properties;
    body.style.backgroundColor = rgb;

},100);

// Adding a Event Listner when we click
stopbtn.addEventListener("submit" , ()=>{
    clearInterval(intervalId);//Removing interval which is running

    // Show the color of the body in the button when click stop changing! button;
    stopbtn.textContent = body.style.backgroundColor;
})







