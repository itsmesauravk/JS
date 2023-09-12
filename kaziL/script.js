


//<<<<----------------------------- Promise ---------------------------------------->>>>


// let p = new Promise((resolve,reject)=>{
//     const light = true;
//     if(light){
//         resolve("There is electricity..")
        
//     }else{
//         reject("There is no electricity...")
//     }
// })

// p.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// })
// // 

// let prom = new Promise((resolve,reject)=>{
//     let light = true;
//     if(light){
//         setTimeout(()=>{
//             resolve({
//                 msg1:"Light is on.",
//                 msg2:"There is electricity."
//             },3000)
//         })
//     }else{
//         reject("There is no light in the city.")
        
//     }
// })
// prom.then((message)=>{
//     console.log(message)
// }).catch((err)=>{
//     console.log(err)
// })
//////

// let p = new Promise((resolve,reject)=>{
//     if (2+3==5){
//         setTimeout(()=>{
//         resolve({
//             message1:"yeh true",
//             message2:"ok fine"
//         })
//     },2000)
//     }
//     else{
//         reject("cannot happens that")
//     }
// })

// p.then((msg)=>{
//     console.log(msg)
// }).catch((er)=>{
//     console.log(er)
// })

//file 1,2,3
// let file1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("file one of 4gb downloading...")
//     },2000)
// })
// let file2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("file two of 6gb downloading...")
//     },3000)
// })
// let file3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("file three of 2gb downloading...")
//     },1000)
// })


//show result when all the files are downloaded >> Promise.all()
// Promise.all([
//     file1,file2,file3
// ]).then(msg => console.log(msg))

//show result of that file which download first >> Promise.race()
// Promise.race([
//     file1,file2,file3
// ]).then(msg => console.log(msg))

// show result after they download
// file1.then(msg => console.log(msg))
// file2.then(msg => console.log(msg))
// file3.then(msg => console.log(msg))




//<<<<----------------------------- Async/Await---------------------------------------->>>>

// async function fileDown(){
//     let pokhara = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("I am going to pokhara...")
//         },2000)
//     })

//     let mustang = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("I am going to mustang...")
//         },4000)
//     })

//     let pkr = await pokhara;
//     let mus = await mustang;
//     return [pkr,mus]
// }


// fileDown().then(result => console.log(result[0]))




