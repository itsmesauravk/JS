
//following two lines will run due to js hosting
console.log(a)  //undefined because value is defined below
name("saurav")  //sucessfully run
function name(x){
    console.log("hello "+ x)
}
var a = 5  //all work only while using var // else (let or const) gives error because cannot initialize value before
console.log(a)  //logs out 5

//function expression cannot be hosted...
// eg --> let name =()=>{} this will not be hosted weather by let not by var