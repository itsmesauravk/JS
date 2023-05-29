/* this setinterval is used to run the contiues loop after the given set interval */
setInterval(() => {
    console.log("im back again")
},1000
)
// this given code will run after each 1 sec = 1000 milisec and give console imback again.


setInterval(() =>{
    let count = 0
    count++
    console.log(count)
    },1000
)
// this above function logs out 1 in each 1000mili seconds
let timer = setInterval(() =>{
    let count = 0
    count++
    console.log(count)
    },1000
)
clearInterval(timer)
//this is used to stop interval