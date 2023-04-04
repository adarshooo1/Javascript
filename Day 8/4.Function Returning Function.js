function myfunc(){
    function greet(){
        return 2;
    }
    return greet;
}

const ans = myfunc();
console.log(ans) //output:[Function: greet]
console.log(ans()) //output:2