// SetTimeout

console.log("script Start"); //1
 
function hello(){
    console.log("hello World")
}

//This is asyncprogramming which will not block the other code to execute;
setTimeout(hello , 1000*4); //3

console.log("script end"); //2

//////////////////////////CONSOLE////////////////////
// Singh\Desktop\github\JavaScript\Day 18\index2.js"
// script Start
// script end
// hello World


console.log("Hello");

//Here what is happening with the set time out this set time out will not block the other code to execute this will handle seperately but what every the time insde the set time out we will use, it will print that code till the global code execution is not finished which means till the end line of the code isn't finish executing;
const fun = setTimeout(() => {
    console.log("Inside setTimeOut")
}, 1000 * 10);

console.log("id = ",fun);

for(let i = 0 ; i < 100 ; i++){
    console.log(i)
}

clearTimeout(fun) //When we use clearTimeout then It means we are discarding this function we dont have use it now and do not Execute;

console.log("End")

// Output:::
// Users\Adarsh Singh\Desktop\github\JavaScript\Day 18\index2.js"
// Hello
// id = Timeout {
//   _idleTimeout: 10000,
//   _idlePrev: [TimersList],
//   _idleNext: [TimersList],
//   _idleStart: 32,
//   _onTimeout: [Function (anonymous)],
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: false,
//   [Symbol(refed)]: true,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 4,
// // // // // // //  [Symbol(triggerId)]: 1  Every setTimeout has a id;
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// 40
// 41
// 42
// 43
// 44
// 45
// 46
// 47
// 48
// 49
// 50
// 51
// 52
// 53
// 54
// 55
// 56
// 57
// 58
// 59
// 60
// 61
// 62
// 63
// 64
// 65
// 66
// 67
// 68
// 69
// 70
// 71
// 72
// 73
// 74
// 75
// 76
// 77
// 78
// 79
// 80
// 81
// 82
// 83
// 84
// 85
// 86
// 87
// 88
// 89
// 90
// 91
// 92
// 93
// 94
// 95
// 96
// 97
// 98
// 99
// End
// Inside setTimeOut  //Without setTimeout;