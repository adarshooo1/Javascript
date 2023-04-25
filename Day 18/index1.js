// Syncronous Programming

console.log("stript Start"); //First this line will execute and till it is executing the next line of code is blocked and cannot start execute till this line of code ends executing;

for(let i = 0 ; i < 100000; i++){ //Now after executing the previous code. It will jump to the current line and start executing this line of code and block the next line of code till this line of code not finish executing;
    console.log("Inside the Loop")
} //Here loop is running and till loop not get finish executing it will block the next line of code;

console.log("Script End") //After this line of code isn't finish executing and code will end;

