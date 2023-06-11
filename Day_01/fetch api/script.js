let p = fetch("https://reqres.in/api/users", {
    method: "POST",
    headers :{
        'Content-Type':"application/json"
    },
    body :JSON.stringify({
        name:"Defult user"
    })
})
p.then((response) =>{
    return response.json()
}).then((response) =>{
    console.log(response)
}) 
// in the above promise method POST is used to creating a profile.


let q = fetch("https://reqres.in/api/users",{
    method:"GET"
})
.then(response => {
    return response.json()
})
.then(response =>{
    res = console.log(response.data[1])
})

//to show the output of the api
