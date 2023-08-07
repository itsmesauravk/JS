let p1 = new Promise((resolve,reject) =>{
    resolve("the job is done")
})
let p2 = new Promise((resolve,reject) =>{
    a = 2
    b = 3
    if (a+b ==6){
        resolve("yes")
    }else{
        reject("no")
    }
})
let p3 = new Promise((resolve,reject) =>{
    a = 2
    b = 3
    setTimeout(() =>{
        if (a+b ==7){
            resolve("yes after 5sec")
        }else{
            reject("no after 3 sec")
        }
    },3000)
})

Promise.allSettled([
    p1,
    p2,
    p3
]).then((value) =>{
    console.log(value)
}).catch((error) =>{
    console.log(error)
})                ///here if both solve and reject condition has to solve in same time so .allsettled is used
//putput will be in form of arrey
// Promise.race is used to do for the fast solving answer.
//Promise.race is for all resolved and for both Promise.any


