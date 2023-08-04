let todoFunc = async()=>{

    let objects = {
        method:"POST",
        body:JSON.stringify({
            title:'Saurav',
            body:"learning",
            userId:10,
        }),
        headers:{
            'Content-type':'application/json'
        }
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts',objects)
    let output =await p.json()
    return output
}
let todos = async() =>{
    let r =await todoFunc()
    console.log (r)
}
todos()
