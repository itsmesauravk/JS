// block scope
// function scope     ///both are local variable
//global scope   //global varibale



let a = 5 //global variable
function ax(){
 let p = 6  //local variable
 var q = 7  //local variable
 console.log(a,p,q)
}
ax()
// console.log(p) //it will not run > local variavle for ax function
// console.log(q) // it will also not run
console.log(a)  //it will run 