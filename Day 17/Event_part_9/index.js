// Event Delegation:

const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener("click" , (e)=>{
    console.log(e.target.textContent) //Output : Will give the Pointer List object and inside we can go to the target object which have the clicked target Infomation; || console.log(e.target); Output: <div class="child box"> Child </div> || Console.log(e.textContent); Output : Here the output is same like Event Bubbling where the flow of the output is from In to Out
    // Which means when we click the most inner then it will not disturbe anyone , but when a top or the mid is clicked or pointed then then it will disturbe the all inner contents;
})
//So Actually what is happening here that, When we click any of the child container inside the
//grandparent Box in the browser then in the browser console it will give the Pointer list and
//inside the pointer list when we look for the objects inside the pointer list then we get the
//traget object which will tell that at which container or the element we pointed or clicked;
//So we can see that how using addEventListener at the grandparent element helps in to activate the click event from inner sub contents as well that is called Event Delegation;