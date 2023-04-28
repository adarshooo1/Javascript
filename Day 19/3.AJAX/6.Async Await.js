const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){
    const response = await fetch(URL) 

    if(!response.ok){
        throw new Error("Somthing went wrong")
    }

    const data = await response.json();
    return data;
}

getPosts()
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log(error)
    })