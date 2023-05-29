// let p = new Promise((resolve,reject) => {
//     let a = 1+3
//     if (a == 2){
//         resolve("correct")
//     }else {
//         reject("false")
//     }
// })

// p.then((message) =>{
//     console.log("this is then " + message)
// }).catch((message) => {
//     console.log("this is catch " +message)
// })
// message means the value or string we write in resolve or reject inside ()
//in above .then will work when resolve or true function works and
// .catch works when reject or error will occures in the function


const condN1 = false
const condN2 = false


function ceckingLightBulb() {
    return new Promise((resolve,reject) => {
        if (condN1){
            resolve({
                name:"light on",
                message: "good"
            })
        } else if (condN2){
            resolve({
                name:"light off",
                message: 'not good'
            })
        }else{
            reject("light bulb fused")
        }
    })
}


ceckingLightBulb().then((message) =>{
    console.log("sucess "+message)
}).catch((error)=>{
    console.log("faliur "+error.message)
})