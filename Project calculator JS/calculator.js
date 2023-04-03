num1=0
num2=0
// let addEl=document.getElementById("add-el")
// let subEl=document.getElementById("sub-el")
document.getElementById("b1").textContent= num1
document.getElementById("b2").textContent= num2

let sumEl=document.getElementById("sum-el")
function add1() {
    num1 += 1
    b1.textContent = num1
}
function add5() {
    num1 += 5
    b1.textContent = num1
}
function sub1() {
    num1 -= 1
    b1.textContent = num1
}
function sub5() {
    num1 -= 5
    b1.textContent = num1
}
function add11() {
    num2 += 1
    b2.textContent = num2
}
function add55() {
    num2 += 5
    b2.textContent = num2
}
function sub11() {
    num2 -= 1
    b2.textContent = num2
}
function sub55() {
    num2 -= 5
    b2.textContent = num2
}




function add() {
    total=num1+num2
    sumEl.textContent= "The sum is : " + total
    b1.textContent = 0
    b2.textContent = 0
    num1=0
    num2=0
}

function sub() {
    total1=num1-num2
    sumEl.textContent="The subtraction is : " + total1
    b1.textContent = 0
    b2.textContent = 0
    num1=0
    num2=0

}

function mult() {
    total2=num1*num2
    sumEl.textContent="The multiplication is : " + total2
    b1.textContent = 0
    b2.textContent = 0
    num1=0
    num2=0
    
}

function div() {
    total3=num1/num2
    sumEl.textContent="The division is : " + total3
    b1.textContent = 0
    b2.textContent = 0
    num1=0
    snum2=0

}
// num1=0
// num2=0
// document.getElementById("b1").textContent= num1
// document.getElementById("b2").textContent= num2
