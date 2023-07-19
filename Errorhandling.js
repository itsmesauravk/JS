try{
    console.log(saurav)  //since saurav is not defined it will throw error which can be handled by catch   
}
catch{
    console.log("task failed sucessfully")
}

//try catch wont work for asyncronous functions for eg..

try{
    setTimeout(() =>{
        console.log(saurav)
    },100)
}
catch{
    console.log("task failed sucessfully")
}
//above will throw error

try{
    setTimeout(() =>{
        try{
            console.log(saurav)
        }
        catch{
            console.log()
        }
        
    },100)
}
catch{
    console.log("task failed sucessfully")
}