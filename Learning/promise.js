let p = new Promise((resolve,reject) => {
    let a = 1+3
    if (a == 2){
        resolve("correct")
    }else {
        reject("false")
    }
})

p.then((message) =>{
    console.log("this is then " + message)
}).catch((message) => {
    console.log("this is catch " +message)
})

// message means the value or string we write in resolve or reject inside ()
//in above .then will work when resolve or true function works and
// .catch works when reject or error will occures in the function


const electricity = true

let lightBulb =new Promise((resolve,reject) =>{
    if (electricity) {
        resolve("On") // resolve is for complete or finished   .then is used
    }else {
        reject("Off") // reject is for incomplere   .catch is used
    }
})

lightBulb.then((message) =>{
    console.log("The light is "+ message)
}).catch((message) =>{
    console.log("The light is "+ message)
})


// //let assume there are three way  and the person named "Coder"
// // if coder choses way1 he will reach to temple, if way2 - school and if way3 - river.



const way1 = true
const way2 = false

let chooseWay = () => {
    return new Promise ((resolve,reject) => {
        if (way1){
            resolve({
                message1:"he will reach temple",
                message2:"and ends the road"
            })
        } else if (way2){
            resolve({
                message:"he will reach school"
            })
        } else {
            reject("He will reach River")
        }
    })
}
chooseWay().then((message) =>{                             // the (message) means every thing inside resolve or reject ()
    console.log(message.message1 +' '+message.message2)   // this will shows the value of message 1 and message2 together 
}).catch((message) =>{
    console.log(message)
}) 
// the above given is also corrected 

//OR

let output =() => chooseWay().then((message) =>{       // the (message) means every thing inside resolve or reject ()
        console.log(message.message1 +' '+message.message2)   // this will shows the value of message 1 and message2 together 
        }).catch((message) =>{
        console.log(message)
    })

setTimeout(() =>{
    output()
},5000
)     
// by using this settimout the program will execute after 5 second.




//another type example

const type1 = new Promise((resolve,reject) =>{
    resolve("Work one is done")
})
const type2 = new Promise((resolve,reject) =>{
    resolve("Work two is done")
})
const type3 = new Promise((resolve,reject) =>{
    resolve("Work three is done")
})

Promise.all([
    type1,
    type2,
    type3
]).then((messages) =>{
    console.log(messages)
})
/* here Promise.all runs all the function at same time and display the result
when all the result are ready */

Promise.race([
    type1,
    type2,
    type3
]).then((messages) =>{
    console.log(messages)
})
/* this will run the all and print the function that is complete first in the given case it will print type1's value
because it will execute firse */