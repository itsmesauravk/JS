const display = document.querySelector(".display")
const result = document.querySelector(".result")
const show = document.querySelector(".show")

const value1 = document.getElementById("input1")
const value2 = document.getElementById("input2")

const calculations = document.getElementById("calculations")
const adds = document.getElementById("adds")
const subs = document.getElementById("subs")
const muls = document.getElementById("muls")
const divs = document.getElementById("divs")
const reset = document.getElementById("reset")

let count = 0;

show.innerHTML = "+"

adds.addEventListener("click",()=>{
    if(ifError()){
        return;
    }else{
        forall()
        result.textContent = `Addition : ${Number(value1.value) + Number(value2.value)}`
        show.innerHTML = "+"
    }
    
})
subs.addEventListener("click",()=>{
    forall()
    ifError()
    result.textContent = `Subtraction : ${Number(value1.value) - Number(value2.value)}`
    show.innerHTML = "-"
})
muls.addEventListener("click",()=>{
    forall()
    ifError()
    result.textContent = `Multiplication : ${Number(value1.value) * Number(value2.value)}`
    show.innerHTML = "*"
})
divs.addEventListener("click",()=>{
    forall()
    ifError()
    result.textContent = `Division : ${Number(value1.value) / Number(value2.value)}`
    show.innerHTML = "/"
})
reset.addEventListener("click",()=>{
    show.innerHTML = "+"
    value1.value = ""
    value2.value = ""
    result.style.display = "none"
})

function forall(){
    result.style.display = "flex"
    count +=1
    display.textContent = `Total Operations : ${count} `
}
function ifError(){
    if(value1.value==="" || value2.value===""){
        alert("Please enter the value..!")
    }
}