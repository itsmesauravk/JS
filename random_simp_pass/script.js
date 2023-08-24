const start = document.getElementById("start")
const dispResult = document.getElementById("result")
function password(len){
    let pass = "qwertyuiopasdfghjklzxcvbnm.()@#$%!"
    disp = ''
    i = 0
    while(i<len){
        disp += pass[Math.floor(Math.random()*pass.length)]
        i ++
    }
    dispResult.textContent = disp
}
start.addEventListener("click",()=>{
    let long = document.querySelector("#passlength").value
    password(long)
})


