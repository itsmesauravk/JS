// normal function
function sum(a,b) {
    return a+b
}
//  arrow function
// every thing after the arrow(=>) is consider as return function
let sum1 = (a,b) => a+b


function isPositive(number) {
    return number >= 0
}

let isPositive1 = number => number >=0


function randomNumber() {
    return Math.random
}

let randomNumber1 = () => Math.random


document.addEventListener("click", function(){
    console.log("click")
})
document.addEventListener("click", () => console.log("click"))