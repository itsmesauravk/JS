
const btn = document.getElementById("btn")
const result = document.querySelector(".text")
const main = document.querySelector(".main")
const rst = document.getElementById("rst")

const colorA = ["red","blue","green","yellow","peru","orange","pink"]

const changeColor = (value1,value2,value3) =>{
    
    const total =Number(value1.value) + Number(value2.value) + Number(value3.value)
    if (total!=0 && total < 8){
        const display = colorA[total-1]
        result.textContent = `Your color is ${display}`
        main.style.backgroundColor = display 
    }else if(total>7){
        result.textContent = `Your color code is out of range !`
        main.style.backgroundColor = "lavenderblush"
    }else{
        alert("Input cannot be empty")
    }
}  

btn.addEventListener("click",()=>{
    const value1 = document.getElementById("value1")
    const value2 = document.getElementById("value2")
    const value3 = document.getElementById("value3")
    changeColor(value1,value2,value3)
    value1.value = ""
    value2.value = ""
    value3.value = ""
})

const rstfun= ()=>{
    result.textContent = `Input the values..`
    main.style.backgroundColor = "lavenderblush"
}
rst.addEventListener("click",()=>{
    rstfun()
})
