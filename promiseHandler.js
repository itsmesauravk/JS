let p = new Promise((resolve, reject)=> {
    console.log("started")
    setTimeout(() => {
        console.log("hey afer 3sec")
        resolve("good to see you 1")
    },3000)
})
p.then((value) =>{
    console.log(value)
})
p.then(()=>{
    setTimeout(() =>{
        console.log("second after 4sec")
    },4000)
})