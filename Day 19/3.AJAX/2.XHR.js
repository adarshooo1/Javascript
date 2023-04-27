//Error Handleing;

const URL2 = "https://jsonplaceholder.typicode.com/posts";

const xhr2 = new XMLHttpRequest();

xhr2.open("GET" , URL2);

    xhr2.onload = () => {

        if(xhr2.status >= 200 && xhr2.status < 300){
        const data2 = JSON.parse(xhr2.response)
        console.log(data2)
    }

    // If the 
    else{
        console.log("Somthing went wrong")
    }

}

// If Having problem in the newtwork connectivity by user end;
    xhr2.onerror = () =>{
        console.log("CONNECTIVITY OR INTERNET PROBLEM");
    }

xhr2.send();    