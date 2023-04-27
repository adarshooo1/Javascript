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
        console.log(data[4].id);
    })
    .catch()