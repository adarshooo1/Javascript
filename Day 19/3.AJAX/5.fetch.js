// Fetch
const URL = "https://jsonplaceholder.typicode.com/posts";

// It is a in-built javaScript function
// const whatisthis = fetch(URL);

// console.log(whatisthis)
//Output :
    // Promise {<pending>}
    // [[Prototype]]: Promise
    // [[PromiseState]]: "fulfilled"
    // [[PromiseResult]]: Response

    //As we can see that whatisthis is returning promise then we can use .then() function as fetch is by defalut is using "GET" as a request;
    
    fetch(URL , {
        method: "POST",
        body : JSON.stringify({
            title : "foofoo",
            body : "Club",
            userId : 1.
        }),

        headers :{
            'Content-type' : 'application/json; charset=UTF-8',
        },

        // fetch will 2 things in the parameters:
        // 1.fetch(URL)
        // 2.fetch(URL , {})
    
    })
    .then(Response =>{
        
        // console.log(Response)
        // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}
        // body: (...)bodyUsed: false
        // headers: Headers {}
        // ok
        // : true
        // redirected: false
        // status: 200
        // statusText: ""
        // type: "cors"
        // url: "https://jsonplaceholder.typicode.com/posts"
        // [[Prototype]]: Response

        if(Response.ok){
        return Response.json(); //It will also return the promise; 
        }
        else{
            throw new Error("Somthing went wrong");
        }
        //Output :
            // Promise {<pending>}
            // [[Prototype]]: Promise
            // [[PromiseState]]: "fulfilled"
            // [[PromiseResult]]: Response

    })

    .then(data =>{
        console.log(data);
    })
    .catch( error =>{
        console.log(error)
    })