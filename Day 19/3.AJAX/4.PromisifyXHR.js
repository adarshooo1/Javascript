const URL = "https://jsonplaceholder.typicode.com/posts";



function sendRequest(Method , url){
    return new Promise(function(resolve , reject){
        const XHR = new XMLHttpRequest();
        
        XHR.open(Method ,url);

        XHR.onload = function(){
            if(XHR.status >= 200 && XHR.status < 300){
                resolve(XHR.response);
            }
            else{
                reject(new Error("Somthing went wrong"));
            }
        }

        XHR.onerror = function(){
            reject(new error("Broken Internet Connection"))
        }

        XHR.send();
    })
}


sendRequest("GET" , URL)
    .then( response => {
        const data = JSON.parse(response);
        // console.log(data) 
        return data;
    })
    .then(data =>{
        const id = data[3].id;
        return id;
    })
    .then(id =>{
        const URL2 = `${URL}/${id}`
        // console.log(sendRequest("GET",URL2));
        // Promise {<pending>}
        //     [[Prototype]]
        //     : 
        //     Promise
        //     [[PromiseState]]
        //     : 
        //     "fulfilled"
        //     [[PromiseResult]]
        //     : 
        //     "{\n  \"userId\": 1,\n 
        return sendRequest("GET", URL2 )
    })
    .then(newResponse => {

        console.log(newResponse)
        // {
        //     "userId": 1,
        //     "id": 4,
        //     "title": "eum et est occaecati",
        //     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        //   }

        // console.log(typeof newResponse)  //Output :string

        const jsonFormatNewData = JSON.parse(newResponse);
        console.log(jsonFormatNewData) // Output: {userId: 1, id: 4, title: 'eum et est occaecati', body: 'ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit'}
        console.log(typeof jsonFormatNewData) //Output:object

    })


    .catch(error =>{
        console.log("Error");
    })