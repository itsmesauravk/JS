//Error object and costum errors

let ages = () =>{
    let age = prompt("enter your age ?: ")
    if (age>20){
        // console.log("too old")
        let err = new Error("opps something went wrong");
        console.log(err)
        console.log(err.name)
        console.log(err.message)
    }else{
        console.log("goodyy")
    }
}
// ages()


///finally in error handling

try {
    console.log(hello)
}catch{
    console.log('hello')
}finally{    //FINALLY always runs.... :)
    console.log("we get answer !!")
}