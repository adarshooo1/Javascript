// We are changing the object in the html DOM. what wver the content is there in the dom it will replaced with the dom.
 const greet = document.getElementById("hello")
 greet.textContent = "Good Morning"
 console.log(greet.textContent)
