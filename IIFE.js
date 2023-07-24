//Advance JS
// Immediately Invoked Function Expression

//normal function of async await

let a = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("I am back Boie")
        },2000
        )
    })
}
let call = async() =>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
}
// call() //this will log out the value of a 3 times in after each 2 second..

// IIFE factor
(async() =>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()   //this async function call itself and no need of external function
//used in async await