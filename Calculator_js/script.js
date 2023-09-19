
let displayS = document.querySelector(".displayH")

let key1 = document.querySelector(".key1")
let key2 = document.querySelector(".key2")
let key3 = document.querySelector(".key3")
let key4 = document.querySelector(".key4")
let key5 = document.querySelector(".key5")
let key6 = document.querySelector(".key6")
let key7 = document.querySelector(".key7")
let key8 = document.querySelector(".key8")
let key9 = document.querySelector(".key9")
let key0 = document.querySelector(".key0")
let key00 = document.querySelector(".key00")
let mult = document.querySelector(".mult")
let div = document.querySelector(".div")
let power = document.querySelector(".power")
let add = document.querySelector(".add")
let sub = document.querySelector(".sub")
let erase = document.querySelector(".erase")
let clear = document.querySelector(".clear")
let dot = document.querySelector(".dot")
let equal = document.querySelector(".equal")

let values = ''

key1.addEventListener("click",()=>{
    values += '1'
    displayS.textContent = values
})
key2.addEventListener("click",()=>{
    values += '2'
    displayS.textContent = values
})
key3.addEventListener("click",()=>{
    values += 3
    displayS.textContent = values
})
key4.addEventListener("click",()=>{
    values += 4
    displayS.textContent = values
})
key5.addEventListener("click",()=>{
    values += 5
    displayS.textContent = values
})
key6.addEventListener("click",()=>{
    values += 6
    displayS.textContent = values
})
key7.addEventListener("click",()=>{
    values += 7
    displayS.textContent = values
})
key8.addEventListener("click",()=>{
    values += 8
    displayS.textContent = values
})
key9.addEventListener("click",()=>{
    values += 9
    displayS.textContent = values
})
key0.addEventListener("click",()=>{
    values += 0
    displayS.textContent = values
})
add.addEventListener("click",()=>{
    values += '+'
    displayS.textContent = values
})
sub.addEventListener("click",()=>{
    values += '-'
    displayS.textContent = values
})
mult.addEventListener("click",()=>{
    values += '*'
    displayS.textContent = values
})
div.addEventListener("click",()=>{
    values += '/'
    displayS.textContent = values
})
power.addEventListener("click",()=>{
    values += '**'
    displayS.textContent = values
})
key0.addEventListener("click",()=>{
    values += '0'
    displayS.textContent = values
})
key00.addEventListener("click",()=>{
    values += '00'
    displayS.textContent = values
})
dot.addEventListener("click",()=>{
    values += '.'
    displayS.textContent = values
})
equal.addEventListener("click",()=>{
    let result = eval(values)
    displayS.textContent = result
})
clear.addEventListener("click",()=>{
    values = ''
    displayS.textContent = ' '
})
erase.addEventListener("click",()=>{
    displayS.textContent =  values.slice(0,-1)
})









