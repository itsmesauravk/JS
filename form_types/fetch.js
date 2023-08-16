fetch('hello.json')
.then((res)=>{
    return res.json()
}).then((mes)=>{
    check(mes)
})

function check(mes){
    console.log(mes)
    let val = {"name":"newName","age":21}
    mes.push(val)
}
