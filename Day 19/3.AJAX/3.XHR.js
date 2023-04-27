const URL = "https://jsonplaceholder.typicode.com/posts" ;
const XHR = new XMLHttpRequest();

XHR.open("GET",URL);

XHR.onload = () =>{

    if(XHR.status >= 200 && XHR.status < 300){
        const data = JSON.parse(XHR.response)

        // const info = data[2];
        // console.log(info) //Here we will get complete object;

        const id = data[2].id;
        console.log(id) //Here we will get the id;


        const URL2 = `${URL}/${id}`;
        const XHR2 = new XMLHttpRequest();

        XHR2.open("GET" , URL2);

        XHR2.onload = () => {
            if(XHR2.status >= 200 && XHR2.status < 300){
                const data2 = JSON.parse(XHR2.response)
                console.log(data2)
            }
            else{
                console.log("Somthing Went Wrong")
            }
        }

        XHR2.send();
        


    }
    else{
        console.log("Somthing went Wrong");
    }
}

XHR.onerror = () =>{
    console.log("Internet error")
}

XHR.send();    