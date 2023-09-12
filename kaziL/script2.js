let card2 = document.querySelector(".card2")
let back = document.getElementById("backbtn")
let data = document.querySelector(".data")

setTimeout(()=>{
    card2.style.display = "flex"
},10000)

back.addEventListener("click",()=>{
    card2.style.display = "none"
})


let county = 10;
function count(){
    if(county>1){
        county-=1
        data.textContent = county
    }else{
        data.textContent = "countdown over"
    }
}
setInterval(()=>{
    count()
},1000)
// card1.textContent = 