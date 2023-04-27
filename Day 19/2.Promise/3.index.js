// Promise and setTimeout;


function aPromise(){
    return new Promise((resolve , reject)=>{
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve()
            }
            else{
                reject();
            }
        },2000)
    })
}

aPromise()
    .then(()=>{
        console.log("resolve");
    })
    .catch(()=>{
        console.log("rejectetd");
    });